import { useForm } from "react-hook-form";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { LoginRequestBody, LoginResponse } from "@/types/api";

const validationSchema = Yup.object().shape({
  customerNumber: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Müşteri numaranızı / TCKN / YKN giriniz."),
  password: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Şifrenizi giriniz."),
});

const useLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestBody>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const loginMutation = useMutation({
    mutationFn: async (
      data: LoginRequestBody
    ): Promise<AxiosResponse<LoginResponse>> => {
      const response = await axios.post<LoginResponse>("/api/login", data);
      return response;
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      if (data.data.token) {
        Cookies.set("userToken", data.data.token, { expires: 0 });
      }
      if (data.data.user) {
        Cookies.set("userInfo", JSON.stringify(data.data.user), { expires: 0 });
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const onSubmit = (data: LoginRequestBody) => {
    loginMutation.mutate(data);
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isError: loginMutation.isError,
    isSuccess: loginMutation.isSuccess,
    isPending: loginMutation.isPending,
  };
};

export default useLogin;

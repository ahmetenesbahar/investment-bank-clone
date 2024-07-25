import { useForm } from "react-hook-form";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosResponse } from "axios";
import { LoginRequestBody, LoginResponse } from "@/types/api";

const validationSchema = Yup.object().shape({
  customerNumber: Yup.number().required("Müşteri Numarası zorunludur"),
  password: Yup.number().required("Şifre zorunludur"),
});

const useLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestBody>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
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

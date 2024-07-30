import { useForm } from "react-hook-form";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosResponse } from "axios";
import { ForgotPasswordRequestBody, ForgotPasswordResponse } from "@/types/api";

const validationSchema = Yup.object().shape({
  customerNumber: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Müşteri numaranızı / TCKN / YKN giriniz."),
  phoneNumber: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Şifrenizi giriniz."),
});

const useForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordRequestBody>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const loginMutation = useMutation({
    mutationFn: async (
      data: ForgotPasswordRequestBody
    ): Promise<AxiosResponse<ForgotPasswordResponse>> => {
      const response = await axios.post<ForgotPasswordResponse>(
        "/api/login",
        data
      );
      return response;
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const onSubmit = (data: ForgotPasswordRequestBody) => {
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

export default useForgotPassword;

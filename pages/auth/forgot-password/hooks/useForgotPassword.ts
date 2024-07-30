import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosResponse } from "axios";
import { ForgotPasswordRequestBody, ForgotPasswordResponse } from "@/types/api";

const generalValidationSchema = Yup.object().shape({
  customerNumber: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Müşteri numaranızı / TCKN / YKN giriniz."),
  phoneNumber: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Cep telefonu numaranızı giriniz."),
  captcha: Yup.string().required("Doğrulama kodunu giriniz."),
});

const commercialValidationSchema = Yup.object().shape({
  customerNumber: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Kullanıcı kodunuzu / TCKN / YKN giriniz."),
  commercialNumber: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Ticari numaranızı giriniz."),
  phoneNumber: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .required("Şifrenizi giriniz."),
  captcha: Yup.string().required("Doğrulama kodunu giriniz."),
});

const useForgotPassword = (type: string) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordRequestBody>({
    resolver: yupResolver(
      type === "general" ? generalValidationSchema : commercialValidationSchema
    ),
    mode: "onSubmit",
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: async (
      data: ForgotPasswordRequestBody
    ): Promise<AxiosResponse<ForgotPasswordResponse>> => {
      const response = await axios.post<ForgotPasswordResponse>(
        "/api/forgotPassword",
        data
      );
      return response;
    },
    onSuccess: (data) => {
      console.log("Instant PIN successful:", data);
    },
    onError: (error) => {
      console.error("Instant PIN failed:", error);
    },
  });

  const onSubmit = (data: ForgotPasswordRequestBody) => {
    forgotPasswordMutation.mutate(data);
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isError: forgotPasswordMutation.isError,
    isSuccess: forgotPasswordMutation.isSuccess,
    isPending: forgotPasswordMutation.isPending,
  };
};

export default useForgotPassword;

import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    redirect: {
      destination: "/auth/login",
      permanent: false,
    },
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

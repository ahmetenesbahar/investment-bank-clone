import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Link href={"/auth/login"}>123</Link>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});

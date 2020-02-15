import Head from "next/head";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import Breadcrumb from "../Layout/Breadcrumb";

export default ({ children, breadcrumb }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {breadcrumb && <Breadcrumb href={breadcrumb} />}
    {children}
  </>
);

import Head from "next/head";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
export default () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <Layout backLink='/locations'>
      <Card img="planet" />
      <Card img="planet" />
      <Card img="planet" />
      <Card img="planet" />
      <Card img="planet" />
    </Layout>
  </>
);

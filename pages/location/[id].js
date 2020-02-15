import { useRouter } from "next/router";
import Page from "../../components/Page/Page";

export default () => {
  const { query } = useRouter();

  return (
    <Page breadcrumb='/'>
      <h1>{query.id}</h1>
      <h1>{query.id}</h1>
    </Page>
  );
};

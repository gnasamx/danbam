import Layout from "@/components/layout";
import type { NextPageWithAuthAndLayout } from "@/lib/types";

const Index: NextPageWithAuthAndLayout = () => {
  return <p>PlanetScale Design System</p>;
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;

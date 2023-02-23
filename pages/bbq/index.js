
import Banner from "@/components/Banner/Banner";
import HomeBBQitems from "@/components/HomeMain/HomeBBQitems/HomeBBQitems";
import Layout from "@/Layout/Layout";

const index = () => {
  return (
    <Layout>
      <Banner></Banner>
      <HomeBBQitems></HomeBBQitems>
    </Layout>
  );
};

export default index;
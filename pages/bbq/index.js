
import Banner from "@/components/Banner/Banner";
import HomeBBQitems from "@/components/HomeMain/HomeBBQitems/HomeBBQitems";
import Layout from "@/Layout/Layout";
import heroImg from "@/assets/allBBQ.jpg";
const index = () => {
  return (
    <Layout>
      <section className="bg-[#faf7f2] bg-[url('/product_bg_1.png')] py-1">
        <Banner heroImg={heroImg}></Banner>
        <HomeBBQitems></HomeBBQitems>
      </section>
    </Layout>

  );
};

export default index;
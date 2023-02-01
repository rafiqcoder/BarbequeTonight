
import Banner from "@/components/Banner/Banner";
import HomeBBQitems from "@/components/Home/HomeBBQitems/HomeBBQitems";
import Layout from "@/Layout/Layout";
import React from "react";

const index = () => {
    return (
       <Layout>
         <Banner></Banner>
               <HomeBBQitems></HomeBBQitems>
       </Layout>
  );
};

export default index;
import { RiErrorWarningLine, RiShoppingBagFill } from "react-icons/ri";
import DashOverview from "../DashOverview";
import AppChat from "../Dashboard/AppChat";
import AppLimit from "../Dashboard/AppLimit";
import AppUsage from "../Dashboard/AppUsage";
import Feature from "../Dashboard/Feature";

// export interface features  {
//   icon?: string | any,
//   heading: string,
//   title : string,
//   description: string,
//   footerText: string,
// };

const Analytics = () => {
  const data = [
    {
      icon: <RiShoppingBagFill></RiShoppingBagFill>,
      heading: "Jobs",
      title: "Find your dream job",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      footerText: "Search Jobs",
    },
    {
      icon: <RiErrorWarningLine></RiErrorWarningLine>,
      heading: "Help",
      title: "Need help figuring things out?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      footerText: "Help Center",
    },
  ];
  return (
    <div className="mb-10 dark:text-black md:px-10 2xl:px-20">
      <DashOverview></DashOverview>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10 ">
        <AppUsage></AppUsage>
        <AppLimit></AppLimit>
      </div>
      <AppChat className="mt-10"></AppChat>

      <div className="grid lg:grid-cols-2 lg:gap-10 mt-10">
        {data?.map((data, index) => (
          <Feature key={index} {...data}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Analytics;

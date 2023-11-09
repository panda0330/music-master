import { NextPage } from "next";
import { InvestorComponent } from "../components/investor/investor";
import MarketNavComponent from "../components/marketNav/marketNav";
import { withAuth } from "../components/withAuth";

const InvestorPage: NextPage = () => {
  return (
    <>
      <MarketNavComponent />
      <InvestorComponent />
    </>
  );
};

export default withAuth(InvestorPage);

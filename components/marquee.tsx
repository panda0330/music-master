import Marquee from "../components/react-fast-marquee/dist";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";

const MarqueeComponent = () => {
  return (
    <>
      {/* <Marquee pauseOnHover={true} classNameName="cswrapper eth-scroll"> */}

      <ScrollContainer className="container-width-mob md:container-width">
        {/* <div className="overflow-x-scroll"> */}
        <div className="cursor-grab scrolling">
          {" "}
          <span className="font-bold"> EXCHANGE RATES</span>
          <span className="pink">:</span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image
            src="https://stocks.valyoux.io/public/assets/images/valyoux/ethereum_logo_valyou_x_music.svg"
            width="15"
            height="15"
            alt=""
          />
          <p className="font-[500]">
          &nbsp;&nbsp;1 ETHEREUM (ETH) &nbsp;=&nbsp;
          </p>
          <p className="font-[500]">0.02776 BTC</p> &nbsp;=&nbsp; $<p className="font-[500]">1185.89000000 USD</p>{" "}
          &nbsp;&nbsp;
          <p className="text-[#00B8BA] font-[500]"> + 0.25% </p>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image
            src="https://stocks.valyoux.io/public/assets/images/valyoux/bitcoinlogo.svg"
            width="15"
            height="15"
            alt=""
          />
          <p className="font-[500]">
          &nbsp;&nbsp;1 BITCOIN (BTC) &nbsp;=&nbsp; 
          </p>
          $<p className="font-[500]">20504.84000000 USD</p>{" "}
          &nbsp;&nbsp;
          <p className="text-red font-[500]"> - 0.15% </p>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image
            src="https://stocks.valyoux.io/public/assets/images/valyoux/vuxlogo.svg"
            width="15"
            height="15"
            alt=""
          />
          <p className="font-[500]">
          &nbsp;&nbsp;1 Valyou X Dollar (VXD) = &nbsp;&nbsp; $
          </p>
          <p className="font-[500]">1.00090000 USDC</p> &nbsp;&nbsp;
          <p className="text-red font-[500]"> - 0.1% </p>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image
            src="https://stocks.valyoux.io/public/assets/images/valyoux/vuxlogo.svg"
            width="15"
            height="15"
            alt=""
          />
          <p className="font-[500]">
          &nbsp;&nbsp;1 VALYOU X MUSIC (VALYOU X) = &nbsp;&nbsp;
          </p>
          <p className="font-[500]">$0.50 USDC</p> &nbsp;&nbsp;
          <Image src="/assets/upper_icon.png" width={50} height={50}/>
          <p className="text-[#00B8BA] font-[500]"> + 2.5% </p>
          &nbsp;&nbsp;&nbsp;
          {/* </div> */}
        </div>
      </ScrollContainer>

      {/* </Marquee> */}
    </>
  );
};

export default MarqueeComponent;

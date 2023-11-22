import Image from "next/image";
import React from "react";
import { Investments } from "../components/investor/investments";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

const business_funds = () => {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center gap-4 py-4">
          <div className="p-1 text-white bg-black rounded-full">
            <Link href="/wallet">
              <KeyboardBackspaceIcon />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-2">
          <Investments />
          <Investments />
          <Investments />
          <Investments />
          <Investments />
          <Investments />
          <Investments />
        </div>
      </div>
    </>
  );
};

export default business_funds;

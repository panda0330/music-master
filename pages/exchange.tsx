import React, { useState } from "react";
import MarketNavComponent from "../components/marketNav/marketNav";
import { Crypto, Fiat, RadioSelect } from "../components/bank/deposit";
import { Card } from "@mui/material";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Image from "next/image";

const Exchange = () => {
  const [radioType, setRadioType] = useState("crypto");
  const changeRadioType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioType((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <div className="w-full p-2">
        <div className="flex items-center gap-4 py-4">
          <div className="p-1 text-white bg-black rounded-full">
            <Link href="/wallet">
              <KeyboardBackspaceIcon />
            </Link>

    </>
  );
};

export default Exchange;

import { Avatar, Card, CardContent, IconButton } from "@mui/material";
import { GridCheckCircleIcon } from "@mui/x-data-grid";
import Image from "next/image";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Investments } from "../components/investor/investments";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const investment = () => {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center gap-4 py-4">
          <div className="p-1 text-white bg-black rounded-full">
            <Link href="/wallet">
              <KeyboardBackspaceIcon />
            </Link>
          </div>
          <b className="text-2xl"></b>
        </div>
        {/* <div className="flex items-center justify-between w-[100%]">
          <div className="bg-black rounded-full m-1">
            <IconButton style={{ color: "white" }}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </div>
        </div> */}
        {/* <Card className="border">
          <CardContent sx={{ paddingBottom: "16px !important" }}>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  className="border-2 border-black"

        </div>
      </div>
    </>
  );
};

export default investment;

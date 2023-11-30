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

        </div>
      </div>
    </>
  );
};

export default investment;

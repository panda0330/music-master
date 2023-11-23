import Image from "next/image";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";

const chat = () => {
  return <ChatComp />;
};

export default chat;

export const ChatComp = () => {
  return (
    <div className="flex flex-col h-[95vh] lg:h-[90vh] relative">
      <header className="flex items-center gap-3 py-3 shadow-lg top-0 w-full  lg:px-4">
        <div className="lg:hidden">
        <IconButton>
          <Link href="messages">
            <KeyboardBackspaceIcon className="text-[#FF0093]" />
          </Link>
        </IconButton>
        </div>
        <Image
          width={50}
          height={50}
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt=""
          className="rounded-full"
        />
        <b className="text-[#FF0093]">Anderson Vanhron</b>
      </header>
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch pb-16"
      >
        <div className="chat-message">
          <div className="flex items-end">

          </div>
        </div>
      </footer>
    </div>
  );
};

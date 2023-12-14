"use client";
import React from "react";

import "./header.css";
import { Text } from "../Text/Text";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div className="storybook-header font-raleway">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Text
            label="Agenda de Churras"
            fontSize="text-[32px]"
            fontWeight="font-extrabold"
            color="#000000"
          />
        </div>
      </div>
    </header>
  );
};

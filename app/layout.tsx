"use client";

import "./globals.css";
import React from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import { Geist } from "next/font/google";
import { PlayerProvider } from "@/components/PlayerContext";

const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

const StyledBody = styled.body`
  background-color:rgb(56, 56, 56);
`;

export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        <meta charSet="UTF-8"/>
        <link rel="icon" type="image" href="/nhl-shield.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>CS391 | Final Project</title>
      </head>
      <StyledBody>
        <Header />
        <PlayerProvider>{children}</PlayerProvider>
      </StyledBody>
    </html>
  );
}
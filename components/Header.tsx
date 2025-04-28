// Ryan Petrat
"use client";

import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #005bb5;
    border: 2px solid #000000;
    z-index: 100;
`;

const StyledH1 = styled.h1`
    margin: 0;
    padding: 10px;
    color: white;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledH1>NHL Player Stats Webapp</StyledH1>
        </StyledHeader>
    );
}
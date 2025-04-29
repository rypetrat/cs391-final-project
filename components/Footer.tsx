// George Simotas
"use client";

import styled from "styled-components";

const StyledFooter = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    padding: 1rem 0;
    background-color: #005bb5;
    color: white;
    text-align: center;
    font-size: 0.9rem;
    border-top: 2px solid #000000;
    z-index: 100;
`;

export default function Footer() {
    return (
        <StyledFooter>
            NHL Stats App • Built by George, Ryan, Eva, and Brendan
        </StyledFooter>
    );
}
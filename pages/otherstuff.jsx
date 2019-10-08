import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledBackground = styled.article`
  height: 100vh;
  width: 100vw;
  background-color: papayawhip;
`;

const OtherStuff = () => {
  return (
    <StyledBackground>
      You wish something were here. But it's not.
      <Link href="/">
        <a>Go back.</a>
      </Link>
    </StyledBackground>
  );
};

export default OtherStuff;

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const FunButton = styled.a`
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  color: white;
  color: orange;
  font-size: 54px;
  min-width: 200px;
`;

const Hi = () => {
  const something = new Date();
  return (
    <Link href="/otherstuff">
      <FunButton> {something.getDate()} </FunButton>
    </Link>
  );
};

export default Hi;

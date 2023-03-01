import React from "react";
import { useTestGet } from "@my/core";

export function Header() {
  const { data } = useTestGet();
  
  return <div>Header: {data?.title}</div>;
}

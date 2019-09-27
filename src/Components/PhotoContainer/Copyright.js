import React from "react";

export default function Copyright({copyright}) {
  if(!copyright) return null;

  return <p style={{ margin:'20px 0 40px'}}>Copyright: {copyright}</p>;
}
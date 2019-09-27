import React from "react";
import { Segment } from "semantic-ui-react";

export default function Explanation({explanation}) {
  return (
    <Segment raised inverted style = {{
        padding: '5% 3%',
        fontSize: '16px',
        lineHeight: '1.6',
        maxWidth: '768px',
        margin: '0 auto'
      }}
    >{explanation}</Segment>);
}
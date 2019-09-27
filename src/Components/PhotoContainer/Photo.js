import React from "react";
import { Image } from "semantic-ui-react";

export default function Photo(props) {
  return ( //used semantic ui for styling
    <Image
      src={props.url} 
      alt={props.title} 
      size="huge" 
      fluid 
      centered
      label = {{
        as: 'a',
        color: 'red',
        content: `${props.date}`,
        ribbon: true
      }}/>
  );
}
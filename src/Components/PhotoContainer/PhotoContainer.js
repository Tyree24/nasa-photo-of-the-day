import React, { useState, useEffect } from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import axios from "axios";
import Title from "./Title.js";
import Photo from "./Photo.js";
import Explanation from "./Explanation.js";
import Copyright from "./Copyright.js";


export default function PhotoContainer() {

  const [ data, setData ] = useState('');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=QYY3Q8eiihm4BTj2ByTv61dl1BWbPdxLwSflw9wI`)
      .then( axiosData => setData(axiosData.data))
      .catch(err => console.log(err));
  },[]);

  if(!data) return <h3>Loading...</h3>


  //first create the container tags
  // then the header tags, then divider, then title, then photo, then copyright
  // The header tag contains some styling but more importantly the actual header
  return (
    <Container>
      <Header as="h1" style={{fontSize: "36px"}}>Astronomy Picture of the Day</Header>
      <Divider />
      <Title title={data.title} />
      <Divider hidden />
      <Photo url={data.url} title={data.title} date={data.date} />
      <Divider hidden />
      <Explanation explanation={data.explanation} />
      <Copyright copyright={data.copyright} />
      <Divider hidden />
    </Container>
  );
}
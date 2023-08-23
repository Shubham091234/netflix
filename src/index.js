import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";


ReactDOM.render(
  <>
  <h1 className='top'> Some of Best Series on Netflix</h1>
      {Sdata.map((val)=>{
return (
  <Card 
  source = {val.sources}
      sname={val.snames}
      category={val.categorys}
      link={val.links}
  />
  );

      }
      )}


  </>,
  document.getElementById("root")
);
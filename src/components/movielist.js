import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.css';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadMoreReact from "read-more-react";





const Movielist = ({movies}) =>{
  const[searchmov,setsearchmov]=useState('')
  const[searchrating,setsearchrating]=useState('')
    return (
      <>
      <div style={{color:'white',fontSize:'60px',textAlign:'center',}}>Movie App</div>
    <Form inline style={{marginLeft:'10%',marginBottom:'3%',paddingTop:'3%', marginRight:'10%'}}>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>setsearchmov(e.target.value)} />
      <ReactStars  edit={true}isHalf={true} onChange={(value)=>setsearchrating(value*2)}/>
    </Form>
    <div>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
        {movies.filter(el=>el.Title.toUpperCase().includes(searchmov.toUpperCase())&& el.Rating>=searchrating).map((el)=>(
        <div style={{margin:'auto',textAlign:'center',marginTop:'10px'}} >
    <Card style={{width: '18rem'}}>
    <Card.Img variant="top" src={el.Poster} />

      <Card.Body>
        <Card.Title>{el.Title}</Card.Title>
        <Card.Title>{el.Year}</Card.Title>
        <Card.Text>
        <ReadMoreReact
                            text={el.Description}
                            min={80}
                            ideal={100}
                            max={120}
                            readMoreText="Read more"
                           
                        />
          
          
          </Card.Text>
        <div style={{marginLeft:'5rem'}}>
        <ReactStars value={parseInt(el.Rating)/2} edit={false}isHalf={true}/></div>
      </Card.Body>
      <a href={el.link}> <Button> Trailer</Button></a>
      
     

    </Card>

       </div>
 ))}  </div>
    </div>
  </>)} ;
  export default Movielist;

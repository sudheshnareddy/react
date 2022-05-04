import {  Grid } from "@mui/material";
import React, {  useState } from "react";

import { makeStyles } from '@mui/styles';
import CurrentCard from "../Molecules/BookCard";
import CurrentlyReading from "./CurrentlyReading";





const useStyles=makeStyles({
        
    grid:
    {
       marginTop:'25px',
       paddingRight:'464px',
       marginLeft:'100px'
    }

});

interface Props{
  searchTerm:string
}


const GridOfBooks:React.FunctionComponent<Props>=(props)=>
{

    const classes=useStyles();
    const [count,setCount]=useState(0);

    

    return(
        <>

 <Grid container className={classes.grid} >
      <Grid container columnSpacing="140px" rowSpacing="40px">
        {CurrentlyReading.filter((book: { name: string; })=>book.name.toLowerCase().includes(props.searchTerm.toLowerCase())).map((book: { id: number ; src: string; name: string; author: string; duration: string; noOfReads: string; })=> ( <Grid key={book.id} item xs={12} sm={6} md={4}>
          <CurrentCard key={book.id} image={book.src} bookName={book.name} author={book.author} readTime={book.duration}
          reads={book.noOfReads} buttonName="Finished" id={book.id} incCount={()=>setCount(count+1)}
          />
        </Grid>
        ))}        
      </Grid>
      </Grid>

        </>
    );
}

export default GridOfBooks;



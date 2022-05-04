import {  createTheme, StyledEngineProvider, Tab, Tabs, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { makeStyles  } from '@mui/styles';
import GridOfBooks from "../Organisms/BookGrid";
import GridOfFinishedBooks from "../Organisms/FinishedBooks";




const theme = createTheme({
    palette: {
      primary: {
        main: '#22C870'
      }
    }
  });


const useStyles=makeStyles({
  

   tabName:
   {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '23px',
    textTransform:'initial',
    textAlign: 'center',
    marginLeft:'100px'
   }
});

interface Props{
  searchTerm:string
}

const MyTabs:React.FunctionComponent<Props>=(props)=>
{
   const [value,setValue]=useState(0);

   

   const handleChange=(event: React.SyntheticEvent<Element, Event>, newValue: number)=>
   {
        setValue(newValue);
   }
 
  

   const classes=useStyles();


    return(



        <StyledEngineProvider injectFirst>

        <ThemeProvider theme={theme}>

        <Tabs onChange={handleChange} value={value}  style={{marginTop:'150px'}}>
           
            <Tab label="Currently Reading"  color="primary" className={classes.tabName} value={0} sx={{width:'304px'}}/>
            <Tab label="Finished" color="primary" className={classes.tabName} value={1} sx={{width:'304px'}} />


        </Tabs>
        


        </ThemeProvider>

        {value===0 &&  <GridOfBooks  searchTerm={props.searchTerm}/>}

        {value===1 && <GridOfFinishedBooks searchTerm={props.searchTerm}/>}

       

     
        </StyledEngineProvider>






        

    );
}

export default MyTabs;

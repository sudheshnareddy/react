import React from "react";
import { Button, Card, CardContent, CardMedia,    createTheme,    StyledEngineProvider, Typography } from "@mui/material";
import { makeStyles, ThemeProvider } from '@mui/styles';

import { AccessTime } from "@mui/icons-material";
import UserIcon from "../Atoms/UserIcon";
import CurrentlyReading from "../Organisms/CurrentlyReading";
import FinishedReading from "../Organisms/FinishedReading";

const theme=createTheme({

    palette:
    {
        primary:
        {
            main:'#E1ECFC'
        }
    }
});



const useStyles=makeStyles({



       
       
   

        bookName:
        {
            color:"#03314B",
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight: '23px',
            paddingTop:'23px',
            textAlign: 'left'
        
        },
        card:
        {
            background: '#FFFFFF',
            border: '1px solid #E1ECFC',
            boxSizing: 'border-box',
            borderRadius: '8px',
            width: '296px',
            height: '500px'
        },
        author:
        {
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '20px',
            paddingTop:'16px',
            color: '#6D787E',
            width:'95px',
            height:'20px'
        },
        read:
        {
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '18px',
            color: '#6D787E',
            paddingTop:'17px',
            paddingLeft:'5.67px'
        },
        reads:
        {
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '18px',
            textAlign: 'left',
            color: '#6D787E',
            height: '18px',
            width: '64px',
            left: '24px',
            top: '1px',
            borderRadius: 'nullpx',
            paddingLeft:'1px'
            
        },
        time:
        {
            height: '16.666667938232422px',
            width: '16.666667938232422px',
            left: '1.6666669845581055px',
            top: '1.66650390625px',
            borderRadius: '0px',
            marginTop:'17.37px',
            textAlign: 'left'
            
        },
        progress:{
            
            background: '#F1F6F4',
            border: '1px solid #E1ECFC',
            boxSizing: 'border-box',
            borderRadius: '0px 0px 8px 8px',
            top:'21px',
            height:'15px',
            width:'284px',
            left:'0px',
            "& .MuiLinearProgress-colorPrimary": {
                backgroundColor: "#E1ECFC",
            },
            "& .MuiLinearProgress-barColorPrimary": {
                backgroundColor: "#E1ECFC",
            },
        },
        userIcon:{
               
            height: '17.5px',
            width: '13.333332061767578px',
            left: '3.3333282470703125px',
            top: '0.83349609375px',
            borderRadius: '0px',
            paddingLeft:'47.33px',
            marginTop:'17px'
          
        }
    
    });


interface Props
{
    bookName:string,
    author:string,
    readTime:string,
    reads:string,
    image:string,
    buttonName:string,
    children?:any,
    id:number,
    incCount?:any
}
const CurrentCard:React.FunctionComponent<Props>=(props)=>
{
    const classes=useStyles();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,id:number)=>
    {
        if(props.buttonName==='Finished')
        {
            const cbook=CurrentlyReading.filter((book: { id: number ; src: string; name: string; author: string; duration: string; noOfReads: string; })=>book.id===id);
            FinishedReading.push(...cbook);
            const index=CurrentlyReading.findIndex((book: { id: number }) =>book.id===id);
            CurrentlyReading.splice(index,1);
            props.incCount();
           
        }
        else
        {
            const fbook=FinishedReading.filter((book: { id: number; })=>book.id===props.id);
            CurrentlyReading.push(...fbook);
            const index=FinishedReading.findIndex((book: { id: number; })=>book.id===props.id);
            FinishedReading.splice(index,1);
            props.incCount();
           
        }
    }
    return(



        <StyledEngineProvider injectFirst>
        
        <ThemeProvider theme={theme}>
        
        <Card variant="outlined" className={classes.card}>
        <CardMedia component="img" image={props.image} height="292" />
         <CardContent>
             <Typography variant="subtitle1"  className={classes.bookName}>
              {props.bookName}
             </Typography>
             <Typography className={classes.author}>
               {props.author}
             </Typography>
             <AccessTime className={classes.time} />
             <Typography variant="caption" className={classes.read} >
               {props.readTime}
             </Typography>
             <UserIcon className={classes.userIcon} />
             <Typography variant="caption"className={classes.reads} >
                 {props.reads}
             </Typography>
         </CardContent>
         
        
         <Button variant="text" onClick={(event)=>handleClick(event,props.id)} >
        <Typography variant="body1"
         style={{
            height: '20px',
            left: '11.5px',
            top: '14px',
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#0365F2',
            textTransform:'initial',
            justifyContent: 'center'
        }}  
        >{props.buttonName}</Typography>
    </Button>
   


        </Card>


        </ThemeProvider>

       

    
        </StyledEngineProvider>

    );
}

export default CurrentCard;

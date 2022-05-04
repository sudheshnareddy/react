import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React from 'react';

interface Props{
    className?:string
}


const UserIcon:React.FunctionComponent<Props> = (props)=>
{
    return(
        <>
        <PersonOutlineIcon className={props.className} />
        </>

    );

}

export default UserIcon;
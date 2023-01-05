import { Box } from "@mui/system";
import styled from "styled-components";

export const BoxMainTitle = styled(Box)(({theme})=>({
    margin:"auto", 
    maxWidth:"1200px", 
    textAlign:"center"
    // [theme.breakpoints.down("xs")]:{
    //     paddingRight:"20px", 
    //     paddingLeft:"20px",
    // }
}))
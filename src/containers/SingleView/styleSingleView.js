import { Card, CardContent } from "@mui/joy";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

//Section-Preview
export const ContainerSectionPreview = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  maxWidth: "1200px",
  marginTop: "36px",
  marginBottom: "36px",
  paddingTop: "16px",
  paddingBottom: "16px",
  backgroundColor: "#27265B",
  [theme.breakpoints.down('sm')]: {
    marginLeft:"8px",
  },
}));

export const ContainerSectionList = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "nowrap",
  overflow: "auto",
  
  [theme.breakpoints.down('sm')]: {
    margin:"0px",
    maxWidth:"100%",
  },

  "&::-webkit-scrollbar": {
    width: "20px",
    height: "8px",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 5px #f9f9f9",
    borderRadius: "20px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#007AFF",
    borderRadius: "20px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#00b3ff",
  },
}));


export const ContainterSingleView = styled(Box)(({theme})=>({
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "1200px",
    marginTop: "36px",
    marginBottom: "36px",
    paddingTop: "16px",
    paddingBottom: "16px",
    marginLeft:{sm:"8px", md:"auto"},
}))

export const ContainerCard = styled(Card)(({ theme }) => ({
  display: "flex",
  height: "480px",
  padding: "0px",
  marginTop: "30px",
  backgroundColor: "rgba(0,0,0,0.7)",
  overflow: "auto",

}));

export const BoxCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "absolute",
  width: "100%",
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  margin: "24px",
  maxWidth: "200px",
}));

export const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "24px",
  marginBottom: "8px",
  marginRight: "8px",
}));

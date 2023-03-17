import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
//import Card from "@mui/material/Card";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

//Section-Preview
export const ContainerSectionPreview = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  maxWidth: "1200px",
  paddingTop: "36px",
  paddingBottom: "36px",
  backgroundColor: "#27265B",
  [theme.breakpoints.down('sm')]: {
    marginLeft:"8px",
  },
}));

export const ContainerTitleTabs = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  maxHeight: "90px",

  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    marginBottom:"20px"
  },

}));

//Section-Header-Tabs
export const ContainerTabsTitles = styled(Box)(({ theme }) => ({
  height: "30px",
  borderColor: "divider",
}));

//Section-Preview-SectionList-index or cards container
export const ContainerSectionList = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "nowrap",
  overflow: "auto",
  paddingTop:"30px",

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
  
  [theme.breakpoints.down('sm')]: {
    margin:"0px",
    maxWidth:"100%",
    "&::-webkit-scrollbar": {
      display:"none"
    },
  },
}));

//OnePage-Section-Preview-SectionList-index or cards container
export const ContainerSectionListOnePage = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  paddingTop:"30px",

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

//Card
export const ContainerCard = styled(Card)(({ theme }) => ({
  height: "340px",
  width: "180px",
  //m:"10px 4px 10px 10px"
  //marginTop: "30px",
}));

export const ContentCard = styled(CardContent)(({ theme }) => ({
  position:"absolute",
  height:"107px",
  width:"100%",
  bottom:"0",
  backgroundColor: "rgba(0,0,0,0.7)",
}));

export const BoxRaiting = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "4px",
  marginBottom: "4px",
  marginLeft:"4px",
}));

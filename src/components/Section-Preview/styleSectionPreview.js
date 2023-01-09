import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

//Section-Preview
export const ContainerSectionPreview = styled(Box)(({ theme }) => ({
  backgroundColor: "#27265B",
}));

export const ContainerSectionPreview2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  maxWidth: "1200px",
  marginTop: "36px",
  marginBottom: "36px",
  paddingTop: "16px",
  paddingBottom: "16px",
}));

export const ContainerTitleTabs = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  maxHeight: "90px",

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

  "&::-webkit-scrollbar": {
    width: "20px",
    height: "8px",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 5px rgb(255, 251, 251)",
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
  padding: "0px",
  marginTop: "30px",
}));

export const ContentCard = styled(CardContent)(({ theme }) => ({
  position:"absolute",
  width:"100%",
  bottom:"0",
  // marginTop: "230px",
  // minHeight: "90px",
  backgroundColor: "rgba(0,0,0,0.7)",
}));

export const BoxRaiting = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: "4px",
  paddingBottom: "4px",
}));

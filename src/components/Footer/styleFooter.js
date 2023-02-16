import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ContainerFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#202020",
  minHeight: "50px",

  }));

  export const ContainerFooterSections = styled(Box)(({ theme }) => ({
  display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width:"50%",
    height: "100%",
    padding: "8px"
    }));

    export const IconImage = styled(Box)(({ theme }) => ({
        marginLeft:"16px",
        marginRight:"16px"
          }));
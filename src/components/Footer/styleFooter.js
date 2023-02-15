import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const ContainerFooter = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#202020",
  minHeight: "50px",

  }));

  export const ContainerFooterSections = styled(Grid)(({ theme }) => ({
  display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width:"50%",
    height: "100%",
    }));

    export const IconImage = styled(Grid)(({ theme }) => ({
        marginLeft:"16px",
        marginRight:"16px"
          }));
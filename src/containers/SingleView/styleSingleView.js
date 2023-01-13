import { Card, CardContent } from "@mui/joy";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ContainerCard = styled(Card)(({ theme }) => ({
  display: "flex",
  height: "380px",
  padding: "0px",
  marginTop: "30px",
  backgroundColor: "rgba(0,0,0,0.7)",
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

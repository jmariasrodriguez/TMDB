import { Card, CardContent } from "@mui/joy";
import { styled } from "@mui/system";
import Carousel from "react-material-ui-carousel";

//Carousel index
export const CarouselContainer = styled(Carousel)(({ theme }) => ({
  margin: "auto",
  marginBottom: "1.5%",
  height: "370px",
}));

//Carousel Card
export const CarouselCard = styled(Card)(({ theme }) => ({
  height: "340px",
  width: "100%",
  padding: "0px",
}));

export const ContentCarouselCard = styled(CardContent)(({ theme }) => ({
    display:"flex",
  marginTop: "230px",
  minHeight: "105px",
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.7)",

}));

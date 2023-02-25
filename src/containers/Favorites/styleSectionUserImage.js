import { Avatar} from "@mui/material";
import { styled } from "@mui/system";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export const AvatarMainSection = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#595858",
  height: "100px", 
  width: "100px" 
}));

export const AvatarModal = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#595858",
  height: "200px",
  width: "200px", 
  mb: "16px"
}));

export const AddPhotoIcon = styled(AddAPhotoIcon)(({ theme }) => ({
  backgroundColor: "#595858",  
  color: "#f9f9f9",
  width: 22, 
  height: 22, 
  borderRadius: "50%"
}));










import {Badge,Box,Button,IconButton,Modal,Typography,} from "@mui/material";
import React, { useRef, useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { USER_IMAGE } from "../../data/constants";
import { onSetUserImage, setUserImageSuccess } from "../../state/userImage";
import { AddPhotoIcon, AvatarMainSection, AvatarModal } from "./styleSectionUserImage";
import PersonIcon from "@mui/icons-material/Person";


const SectionUserImage = () => {
  const sectionData = {
    [USER_IMAGE]: useSelector((state) => state[USER_IMAGE]),
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fileInput = useRef();

  const onSelectFile = (event) => {
    let imageSelected = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageSelected);

    reader.addEventListener('load', () => {
      localStorage.setItem('userImage', reader.result);
      dispatch(onSetUserImage())
      dispatch(setUserImageSuccess(reader.result))
    })
  };
  
  const onDelete = () => {
    localStorage.setItem("userImage", []);
    dispatch(onSetUserImage());
    dispatch(setUserImageSuccess([]));
  };
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#22214F",
    color: "#f9f9f9",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Box display="flex" flexDirection="row" padding="8px" alignItems="center">
      <IconButton onClick={handleOpen}>
        <Badge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<AddPhotoIcon/>}>
          {sectionData[USER_IMAGE].data.length > 0 ? (
            <AvatarMainSection alt="userImage"  src={sectionData[USER_IMAGE].data}></AvatarMainSection>
          ) : (
            <AvatarMainSection alt="userImage"><PersonIcon sx={{ height: "50px", width: "50px" }}/></AvatarMainSection>
          )}
        </Badge>

        <Modal open={open}  onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
          <Box sx={{ ...style }}>
            <h2>Image profile</h2>
            <p>You can add and image to your profile.</p>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {sectionData[USER_IMAGE].data.length > 0 ? (
                <AvatarModal alt="userImage"  src={sectionData[USER_IMAGE].data}></AvatarModal>
              ) : (
                <AvatarModal alt="userImage"><PersonIcon sx={{height: "100px", width: "100px"}}/></AvatarModal>
              )}
            </Box>

            <Box sx={{display: "flex",flexDirection: "row",justifyContent: "space-around"}}>
              <Button onClick={()=>fileInput.current.click()} type="file" value="Change"> <EditOutlinedIcon/>Change</Button>
              <input ref={fileInput}  type="file"  name="userImage" accept="image/*" onChange={onSelectFile} style={{ display: "none" }}/>  
              <Button onClick={onDelete}><DeleteIcon/>Delete</Button>
            </Box>
          </Box>
        </Modal>
      </IconButton>

      <Typography variant="h3" gutterBottom color={"#f9f9f9"}>User Profile</Typography>
    </Box>
  );
};

export default SectionUserImage;

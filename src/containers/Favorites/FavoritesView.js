import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Badge, Button, IconButton, Modal, Tab, Typography } from "@mui/material";
import {
  ContainerSectionPreview,
  ContainerTabsTitles,
  ContainerTitleTabs,
} from "../../components/Section-Preview/styleSectionPreview";
import TitleSectionPreview from "../../components/Section-Preview/SectionHeader/TitleSectionPreview";
import {
  FAVORITE_TAB_TITLE,
  MY_FAVORITES,
  TABS_FAVORITES,
  USER_IMAGE,
} from "../../data/constants";
import { TabContext, TabList } from "@mui/lab";
import SectionListFavs from "./SectionListFavs";
import { useDispatch, useSelector } from "react-redux";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PersonIcon from '@mui/icons-material/Person';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { onSetUserImage, setUserImageSuccess } from "../../state/userImage";


const FavoritesView = () => {
  const sectionData = {
    [MY_FAVORITES]: useSelector((state) => state[MY_FAVORITES]),
    [USER_IMAGE]: useSelector((state) => state[USER_IMAGE]),
  };
  const dispatch = useDispatch()
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const series = sectionData[MY_FAVORITES].data.filter( (item) => item.first_air_date);
  const movies = sectionData[MY_FAVORITES].data.filter((item) => item.release_date);
  
  useEffect(() => {
    setData(sectionData[MY_FAVORITES].data);
  }, []);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (event.target.innerText === "MOVIES") {
      setData(movies);
    } else if (event.target.innerText === "TV SERIES") {
      setData(series);
    } else {
      setData(sectionData[MY_FAVORITES].data);
    }
  };

  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: "#22214F",
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const fileInput = React.useRef();

  const onSelectFile = (event) => {
    let imageSelected = event.target.files[0]
    let image = URL.createObjectURL(imageSelected)
     let oldData = JSON.parse(localStorage.getItem("userImage"))
      oldData.splice(0,1,image)
    localStorage.setItem("userImage", JSON.stringify(oldData))
    dispatch(onSetUserImage())
    dispatch(setUserImageSuccess(image))

  }

const onDelete = ()=>{
  localStorage.setItem("userImage", "[]")
  dispatch(onSetUserImage())
  dispatch(setUserImageSuccess([]))
}

  return (
      <Box
        display="flex"
        flexDirection="column"
        margin="auto"
        maxWidth="1200px"
        minHeight="700px"
      >
        <Box
          display="flex"
          flexDirection="row"
          margin="8px"
          alignItems="center"
        >


          <IconButton onClick={handleOpen}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <AddAPhotoIcon sx={{backgroundColor:"grey", color:"#f9f9f9", width: 22,
          height: 22,
           borderRadius: '50%'}} />
        }
      >
  {sectionData[USER_IMAGE].data.length > 0? 
                <Avatar alt="Remy Sharp" src={sectionData[USER_IMAGE].data} sx={{ bgcolor: "#595858",height: "100px",width: "100px" }}> </Avatar>
                : <Avatar alt="Remy Sharp" sx={{bgcolor: "#595858",height: "100px",width: "100px", }}><PersonIcon sx={{height: "50px",width: "50px"}}/> </Avatar>
              }
   
      </Badge>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, color:"#f9f9f9" }}>
          <h2  id="parent-modal-title">Image profile</h2>
          <p id="parent-modal-description">
            You can and image to your profile.
          </p>
          <Box sx={{display:"flex", justifyContent:"center"}}>
          {sectionData[USER_IMAGE].data.length > 0? 
                <Avatar alt="Remy Sharp" src={sectionData[USER_IMAGE].data} sx={{ bgcolor: "#595858",height: "200px",width: "200px", mb:"16px"}}> </Avatar>
                : <Avatar alt="Remy Sharp" sx={{bgcolor: "#595858",height: "200px",width: "200px" }}><PersonIcon sx={{height: "50px",width: "50px", mb:"16px"}}/> </Avatar>
              }
          </Box>
          <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
          <Button onClick={()=>fileInput.current.click()} type="file" value="Change" ><EditOutlinedIcon/>Change</Button>
          <input 
        ref={fileInput} 
        type="file" 
        name="userImage"
        accept="image/*"
        onChange={onSelectFile}
        style={{ display: 'none' }} 

      />
          <Button onClick={onDelete}><DeleteIcon/>Delete</Button>
          </Box>
        </Box>
      </Modal>


          </IconButton>


          <Typography variant="h3" gutterBottom color={"#f9f9f9"}>
            User Profile
          </Typography>
        </Box>
        <Box>
          <ContainerSectionPreview>
              <ContainerTitleTabs>
                <TitleSectionPreview
                  previewSectionTitle={FAVORITE_TAB_TITLE.favorites}
                />
                <Box>
                  <TabContext value={value}>
                    <ContainerTabsTitles>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        {TABS_FAVORITES.favorites?.map((tab, index) => {
                          return (
                            <Tab
                              key={index}
                              label={tab.label}
                              value={index}
                              sx={{ color: "#f9f9f9", typography: "body1" }}
                            />
                          );
                        })}
                      </TabList>
                    </ContainerTabsTitles>
                  </TabContext>
                </Box>
              </ContainerTitleTabs>
                
              {sectionData[MY_FAVORITES].data === null? "empty list": <SectionListFavs data={data}/> }
              
          </ContainerSectionPreview>
        </Box>
      </Box>
  );
};

export default FavoritesView;

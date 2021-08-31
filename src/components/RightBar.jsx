import {makeStyles, Container, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
  
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(1),
      position: "sticky",
          top:0,
          [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    }
  }))
const RightBar = () => {

  const classes = useStyles()
  return (
    <Container className={classes.container} >
      <Typography variant="h6" color="initial">Online Friends</Typography>
        <AvatarGroup max={5}>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
              <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
              <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/6.jpg" />
              <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>Gallery</Typography>
        <ImageList rowHeight={100} className={classes.imageList} cols={4}>
              <ImageListItem >
                <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
        </ImageListItem>
        <ImageListItem >
                <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
        </ImageListItem>
        <ImageListItem >
                <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="" />
        </ImageListItem>
        <ImageListItem >
                <img src="https://material-ui.com/static/images/image-list/morning.jpg" alt="" />
        </ImageListItem>
        <ImageListItem >
                <img src="https://material-ui.com/static/images/image-list/morning.jpg" alt="" />
        </ImageListItem>
        <ImageListItem >
                <img src="https://material-ui.com/static/images/image-list/hats.jpg" alt="" />
        </ImageListItem>
        <ImageListItem >
                <img src="https://material-ui.com/static/images/image-list/honey.jpg" alt="" />
        </ImageListItem>
        <ImageListItem >
                <img src="https://material-ui.com/static/images/image-list/honey.jpg" alt="" />
        </ImageListItem>
        
        
        </ImageList>
    </Container>
  );
}

export default RightBar;
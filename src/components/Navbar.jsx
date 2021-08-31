import {AppBar, Toolbar, alpha, Typography, makeStyles, InputBase, Badge, Avatar } from '@material-ui/core' 
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Search from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import { useState } from 'react';
  
const useStyles = makeStyles((theme) => ({
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },

    search: {
        display: "flex",
        alignItems: "center",
        
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            cursor: "Pointer"
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "70%",
        },
    },

    input: {
        color: "white",
        marginLeft:theme.spacing(1)
    },

    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },

    SearchIcon:{
        marginLeft: theme.spacing(1),
        
    },

    icons: {
        alignItems: "center",
        display: (props) =>(props.open ? "none" : "flex")
    },

    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },

    badge:{
        marginRight: theme.spacing(2),
        '&:hover': {
            cursor: "Pointer"
        }
    }
   
  }))
const Navbar = () => {

    const [open, setOpen] = useState(false)
  const classes = useStyles({open })
  return (
    <AppBar position="sticky">
          <Toolbar className={classes.toolbar}>
              <Typography variant="h5" className={classes.logoLg}>
                  Ghazi Abbas
              </Typography>

              <Typography variant="h5" className={classes.logoSm}>
                  Ghazi
              </Typography>
              <div className={classes.search}>
                  <Search />
                  <InputBase placeholder="Search" className={classes.input} />
                  <CancelIcon className={classes.cancel} onClick={() => setOpen(false)} /> 
              </div>
              <div className={classes.icons}>
                  <Search className={classes.searchButton} onClick={()=>setOpen(true)} />
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <MailIcon />
                  </Badge>
                  <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <NotificationsIcon />
                  </Badge>
                  
                  <Avatar alt="Remy Sharp" src="../assets/profile.png" />
              </div>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;
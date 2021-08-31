import { makeStyles, Button, Container, Tooltip, Fab, Modal, TextField, FormLabel, RadioGroup, Radio, FormControlLabel, MenuItem } from '@material-ui/core'
import {Add as AddIcon} from '@material-ui/icons'
import { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
  
  const useStyles = makeStyles((theme) => ({
    container: {
        height: 550,
          width: 500,
          backgroundColor: "white",
          position: "absolute",
        top:0,
        bottom:0,
        left:0,
          right: 0,
        margin: "auto"
      },
      fab: {
          position: 'fixed',
          bottom: 20,
          right: 10,
      },

      form: {
          padding:20
      },
      item: {
          marginBottom:theme.spacing(3)
      }
  }))
const Add = () => {

    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
    return(
        <>
            <Tooltip title="Add" aria-label="add" onClick={()=> setOpen(true)}>
            <Fab color="primar" className={classes.fab}>
            <AddIcon />
            </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                        <TextField id="standard-basic" label="Title" size="small" style={{width:"100%"}} />
                        </div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            placeholder="Tell Your Story"
                            variant="outlined"
                            size="small" style={{width:"100%"}}
                        />
                        
                        <div className={classes.item}>
                            <TextField select label="Visibility" value="Public"> 
                                <MenuItem value ="Public">Public</MenuItem>
                                <MenuItem value ="Private">Private</MenuItem>
                                <MenuItem value ="Hidden">Hidden</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                        <FormLabel component="legend">Who can comment?</FormLabel>
                        <RadioGroup  >
                                <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody"  />
                                <FormControlLabel value="My Friends" control={<Radio size="small" />} label="My Friends"  />
                                <FormControlLabel value="Nobody" control={<Radio size="small" />} label="Nobody" />
                                <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="Custom (Premium Accounts)"  />
                        </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={()=> setOpenAlert(true)}>Create</Button>
                            <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                Post Submitted Successfully
                </Alert>
            </Snackbar>
        </>
    )
}

export default Add;
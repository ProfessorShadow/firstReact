import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import {Home} from '@material-ui/icons'
import Add from './components/Add'
import Feed from './components/Feed'
import LeftBar from './components/LeftBar'
import Navbar from './components/Navbar'
import RightBar from './components/RightBar'



  
  const useStyles = makeStyles((theme) => ({
    right: {
      [theme.breakpoints.down("sm")]: {
       display: "none"
     }
   }
  }))
const App = () => {
  const classes = useStyles()
  return <div>
    <Navbar />
    <Grid container>
      <Grid item sm={2}xs={2}>
        <LeftBar />
      </Grid>
      <Grid item sm={7} xs={10}>
        <Feed />
      </Grid>
      <Grid item sm={3} xs={classes.right}>
        <RightBar />
      </Grid>
    </Grid>
    <Add />
  </div>
}

export default App;

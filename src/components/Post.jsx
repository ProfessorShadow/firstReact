import { makeStyles, Container, Typography, CardMedia, CardActionArea, CardActions, Button } from '@material-ui/core'
import { Card , CardContent  } from '@material-ui/core'

  
  const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop:theme.spacing(1)
      },
      media: {
         height: 250,
      },
      card: {
          marginBottom:theme.spacing(2)
      }
  }))
const Feed = () => {

  const classes = useStyles()
    return <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    title="Card Photo"
                    image="https://images.unsplash.com/photo-1624197120288-65858bc9d8a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=786&q=80"
                    />
                <CardContent>
                <Typography variant="h5">My First Post</Typography>
                <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, esse!</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
  </Card>
}

export default Feed;
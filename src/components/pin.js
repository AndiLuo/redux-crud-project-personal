import "gestalt/dist/gestalt.css";
import React from "react";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

function Pin(props) {
    const pin = props;
    return(
        <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        >
            <Card
            >
               <CardActionArea>
                   <CardMedia
                   style={{height: "200px", width: "200px"}}
                   image={pin.pins.image}
                   title={pin.pins.title}
                   />
                   <CardContent>
                        <Typography>
                            {pin.pins.title}
                        </Typography>

                   </CardContent>

               </CardActionArea>
            </Card>
        </Grid>
            
    );
        
}
export default Pin;

{/* <Image
alt="yes"
src={pin.pins.image}
naturalHeight={50}
naturalWidth={50}
> 
</Image>
<Box position="absolute" padding={2} bottom right>
</Box>
</Box>
<Box>
<Text>Title: {pin.pins.pin.title}</Text>
</Box>
<Box>
<Text>Author: {pin.pins.author}</Text>
</Box>
</Card> */}

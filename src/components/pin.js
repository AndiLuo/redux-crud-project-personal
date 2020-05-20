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


function Pin(props) {
    const pin = props;
    return(
            <Card
            >
               <CardActionArea>
                   <CardMedia
                   style={{height: "200px", width: "200px"}}
                   image={pin.pins.image}
                   title={pin.pins.title}
                   />
                   <CardContent>
                        <Typography gutterBottom variant="h5">
                            {pin.pins.title}
                        </Typography>
                        <Typography>
                            {pin.pins.author}
                        </Typography>


                   </CardContent>

               </CardActionArea>
            </Card>
            
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

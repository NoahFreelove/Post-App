import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

const PostCard = (props) => {
    return(
        <div>
            {props.postData.userName === undefined || props.postData.userName === null ?
                <Typography variant="h6" color={"#ff0000"} component="div">
                    Post Not Found
                </Typography>
                :
                <Card sx={{margin:"15px", minWidth: 275, backgroundColor:"#494949", color:"#ffffff"}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {props.postData.title}
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="#C2C2C2FF">
                            {props.postData.userName}
                        </Typography>
                        <Typography variant="body2">
                            {props.postData.description}
                            <br/>
                        </Typography>
                    </CardContent>
                </Card>
            }
        </div>
    )
}

export default PostCard;

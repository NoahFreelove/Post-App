import {Input, TextField} from "@mui/material";

function CreateCardForm(props)
{
    return (<div>
        <Input style={{backgroundColor:"#333333", color:"#FFFFFF"}} variant={"contained"} placeholder={"Username"} onChange={props.usernameHandler}/>
        <pre/>
        <Input style={{backgroundColor:"#333333", color:"#FFFFFF"}} variant={"contained"} placeholder={"Post Title"} onChange={props.titleHandler}/>
        <pre/>
        <TextField style={{color:"#FFFFFF"}}
            id="filled-multiline-static"
            label="Post Content"
            multiline
            rows={4}
            defaultValue="Description"
            variant={"filled"}
                   onChange={props.descriptionHandler}
        />
    </div>)
}

export default CreateCardForm

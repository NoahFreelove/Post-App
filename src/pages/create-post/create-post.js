import CreateCardForm from "../../components/Create Card Form/CreateCard.component";
import {useState} from "react";
import {Button} from "@mui/material";
import {CreatePostReq} from "../../APIHandler";

function CreatePost()
{
    const [username, setUsername] = useState("")
    const [desc, setDesc] = useState("")
    const [title, setTitle] = useState("")

    const ChangeUsernameHandler = (e) => {
        setUsername(e.target.value);
    }
    const ChangeTitleHandler = (e) => {
        setTitle(e.target.value);
    }
    const ChangeDescriptionHandler = (e) => {
        setDesc(e.target.value);
    }

    function Submit() {
        if (title === "" || desc === "" || username === "")
        {
            return;
        }
        let obj = {title: title, description: desc, userName: username}
        CreatePostReq(obj)
    }

    return(
        <div style={{padding:"40px"}}>
            <CreateCardForm usernameHandler={ChangeUsernameHandler} titleHandler={ChangeTitleHandler} descriptionHandler={ChangeDescriptionHandler}/>
            <Button variant={"contained"} onClick={Submit}>Submit</Button>
        </div>
    )
}
export default CreatePost

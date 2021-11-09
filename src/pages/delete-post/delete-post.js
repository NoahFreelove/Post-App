import SearchBar from "../../components/SearchBar/SearchBar.component";
import {Typography} from "@mui/material";
import PostCard from "../../components/Card/Card.component";
import React, {useState} from "react";
import {DeletePostReq} from "../../APIHandler";

function DeletePost(){
    const [postId, setPostId] = useState("");
    const [deletedData, setDeletedData] = useState();

    function HandleChangePostID(e){
        setPostId(e.target.value)
    }

    function HandleDeletePost(){
        if(postId === "")
        {
            setDeletedData("no");
            return;
        }
        DeletePostReq(postId, setDeletedData)
    }
    return(
        <div>
            <div style={{padding:"40px"}}>
                <SearchBar buttonText={"Delete"}
                           placeholderSearchText={"Search By Post ID"}
                           handleChange={HandleChangePostID}
                           buttonColor={"#FF0000"}
                           onClick={HandleDeletePost}/>
                {deletedData==="yes" ?
                    <Typography color={"#FFFFFF"}>Post was deleted</Typography>: null}
                {deletedData==="no" ?
                    <Typography color={"#FFFFFF"}>Post could not be deleted</Typography>: null
                }
            </div>
        </div>
    )
}

export default DeletePost

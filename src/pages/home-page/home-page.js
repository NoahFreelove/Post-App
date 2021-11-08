import SearchBar from "../../components/SearchBar.component";
import React, {useState} from "react";
import {AppBar, createTheme, Typography} from "@mui/material";
import './home-page.css'

function HomePage(){
    const [postId, setPostId] = useState("");
    const theme = createTheme({
        palette: {
            primary: {
                light: '#fcc9a4',
                main: '#4d4d4d',
                dark: '#88450e',
                contrastText: '#fff',
            },
        },
    });
    function HandleChangePostID(e){
        setPostId(e.target.value)
    }

    async function FetchPosts(){
        const res = await fetch("https://noahfreelove-restapi.herokuapp.com/posts/"+postId);
        console.log(res.json())
    }
    return(
        <div>
            <Typography sx={{fontFamily:"arial", fontSize: 24, color: "#FFFFFF"}}>Post App</Typography>
            <SearchBar buttonText={"Search"}
                           placeholderSearchText={"Search By Post ID"}
                           handleChange={HandleChangePostID}
                           onClick={FetchPosts}/>

        </div>
    )
}
export default HomePage

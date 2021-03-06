import {Button, Input} from "@mui/material";


const SearchBar = (props) =>{
    return(
        <div>
            <Input  placeholder={props.placeholderSearchText} style={{margin: "5px", color:"#FFFFFF", backgroundColor: "#383838"}} onChange={props.handleChange}/>
            <Button style={{backgroundColor: props.buttonColor || "#d58b40"}} variant={"contained"} onClick={props.onClick}>{props.buttonText || "Click Me"}</Button>
        </div>
    )
}
export default SearchBar

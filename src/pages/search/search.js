import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Card from "./card.js";
import MyCard from "./card_.js";

function Search(prop) {
    const queryParameters = new URLSearchParams(window.location.search);
  const location = queryParameters.get("loc");
  // const location = prop.loc;
  return (
    <div>
        {console.log("hello",location)}
        {/* <form style={{marginLeft:"45%", marginTop: "50px", marginBottom: "10px"}}>
        <TextField
        name="search"
      id="search-bar"
      className="text"
      label="Enter a city name"
      variant="filled"
      placeholder="Search..."
      size="small"
    />
    <IconButton  type="submit" aria-label="search" id="button">
      <SearchIcon style={{ fill: "black" }} />
    </IconButton>
    </form> */}
    <center><MyCard loc={location}/></center>
    {/* <center><Card loc={location}/></center> */}

    </div>
    
  );
}

export default Search;
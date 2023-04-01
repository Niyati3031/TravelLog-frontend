import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Card from "./card.js";
import React, { useState } from "react";
import Search from "./search.js";
import './searchMain.css'
import { Autocomplete } from "@mui/material";
import { useNavigate } from "react-router";
import { Stack } from "@mui/system";
import { cities } from "../cities.js";

function SearchM() {
  // const [inputs, setInputs] = useState({
  //   location: "",
  // });
  const navigate = useNavigate();

  const [location, setInputs]= useState("");

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log(location.label);
    return (
      navigate(`/searchM?loc=${location.label}`)
    )
  
  };
  const top100Films = [
    { label: 'TheShawshankRedemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 }];
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br from-lime-300 to-green-500 p-6 sm:py-12">
       <div class="relative rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
         <div class="mx-auto max-w-md">
    
        <form onSubmit={handleSubmit} style={{marginLeft:"35%", marginTop: "5%", marginBottom: "10px"}} class="relative mx-auto w-max">
        {/* <TextField
        name="search"
      id="search-bar"
      className="text"
      label="Enter a city name"
      variant="filled"
      placeholder="Search..."
      size="medium"
      sx={{width: "50%"}}
      onChange={handleChange}
    /> */}
    <Stack direction="row" spacing={2}>
        <Autocomplete
        groupBy={(option) => option.state}
      disablePortal
      id="combo-box-demo"
      options={cities}
      sx={{ width: 300}}
      onChange={(e, newVal)=>{
        setInputs(newVal);
      }}
      renderInput={(params) => <TextField {...params} label="Select the city" required/>}
    />
    <IconButton  type="submit" aria-label="search" id="button">
      <SearchIcon style={{ fill: "green"}}/>
    </IconButton>
    </Stack>
    </form>
    </div>
    </div>
    </div>

//     <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br from-lime-300 to-green-500 p-6 sm:py-12">
//   <div class="relative rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
//     <div class="mx-auto max-w-md">


//       <form onSubmit={handleSubmit} class="relative mx-auto w-max">
//       <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={top100Films}
//       sx={{ width: 300 }}
//       onChange={(e, newVal)=>{
//         setInputs(newVal);
//       }}
//       renderInput={(params) => <TextField {...params} label="City"/>}
//     />
//         {/* <input type="search" onChange={handleChange}
//               class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" /> */}
//         <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//           <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//         </svg>
//       </form>

//     </div>
//   </div>
// </div>
    
  );
}

export default SearchM;
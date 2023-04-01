import { Autocomplete, Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import './add.css';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { addPost } from "../../apihelpers/helpers";
import avatar from "D:/Travel/travel/src/images/travel.png"
import { useNavigate } from "react-router";
import { cities } from "../cities";

const Add = () => {
  const navigate = useNavigate();
  const [mustVisit, setMustVisit] = useState([""]);
  const [notVisit, setNotVisit] = useState([""]);
  const [hotels, setHotels] = useState([""]);
  const [market, setMarket] = useState([""]);
  const [food, setFood] = useState([""]);
  const [things, setThings] = useState([""]);
  const [points, setPoints] = useState([""]);
  const [image, setImage] = useState([""]);

  const handleServiceChangeMust = (e, index) => {
    const { value } = e.target;
    const list = [...mustVisit];
    list[index] = value;
    setMustVisit(list);
  };
  const handleServiceRemoveMust = (index) => {
    const list = [...mustVisit];
    list.splice(index, 1);
    setMustVisit(list);
  };
  const handleServiceAddMust = () => {
    setMustVisit([...mustVisit, ""]);
  };

  const handleServiceChangeNot = (e, index) => {
    const { value } = e.target;
    const list = [...notVisit];
    list[index] = value;
    setNotVisit(list);
  };
  const handleServiceRemoveNot = (index) => {
    const list = [...notVisit];
    list.splice(index, 1);
    setNotVisit(list);
  };
  const handleServiceAddNot = () => {
    setNotVisit([...notVisit, ""]);
  };

  const handleServiceChangeHotel = (e, index) => {
    const { value } = e.target;
    const list = [...hotels];
    list[index] = value;
    setHotels(list);
  };
  const handleServiceRemoveHotel = (index) => {
    const list = [...hotels];
    list.splice(index, 1);
    setHotels(list);
  };
  const handleServiceAddHotel = () => {
    setHotels([...hotels, ""]);
  };

  const handleServiceChangeMarket = (e, index) => {
    const { value } = e.target;
    const list = [...market];
    list[index] = value;
    setMarket(list);
  };
  const handleServiceRemoveMarket = (index) => {
    const list = [...market];
    list.splice(index, 1);
    setMarket(list);
  };
  const handleServiceAddMarket = () => {
    setMarket([...market, ""]);
  };

  const handleServiceChangeFood = (e, index) => {
    const { value } = e.target;
    const list = [...food];
    list[index] = value;
    setFood(list);
  };
  const handleServiceRemoveFood = (index) => {
    const list = [...food];
    list.splice(index, 1);
    setFood(list);
  };
  const handleServiceAddFood = () => {
    setFood([...food, ""]);
  };

  const handleServiceChangeThings = (e, index) => {
    const { value } = e.target;
    const list = [...things];
    list[index] = value;
    setThings(list);
  };
  const handleServiceRemoveThings = (index) => {
    const list = [...things];
    list.splice(index, 1);
    setThings(list);
  };
  const handleServiceAddThings = () => {
    setThings([...things, ""]);
  };

  const handleServiceChangePoints = (e, index) => {
    const { value } = e.target;
    const list = [...points];
    list[index] = value;
    setPoints(list);
  };
  const handleServiceRemovePoints = (index) => {
    const list = [...points];
    list.splice(index, 1);
    setPoints(list);
  };
  const handleServiceAddPoints = () => {
    setPoints([...points, ""]);
  };

  const handleServiceChangeImage = (e, index) => {
    const { value } = e.target;
    const list = [...image];
    list[index] = value;
    setImage(list);
  };
  const handleServiceRemoveImage = (index) => {
    const list = [...image];
    list.splice(index, 1);
    setImage(list);
  };
  const handleServiceAddImage = () => {
    setImage([...image, ""]);
  };

    const [inputs, setInputs] = useState({
        budget: 0,
      });

    const [location, setLoc] =useState("");
    // const [budget, setBudget] = useState("");
      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const onResReceived = (data) =>{
        console.log(data);
        navigate("/profile");
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(location.label, inputs, mustVisit, notVisit,hotels, market,food, things, points, image);
         addPost(location.label, inputs, mustVisit, notVisit,hotels, market,food, things, points, image).then(onResReceived).catch((err)=> console.log(err));
      };

    return(
        <Box className="form_back" display="flex" flexDirection={"column"} width="100%" height="100%">
            <Box display="flex" margin="auto" padding={2} sx={{borderRadius: "25px"}}>
            <Typography fontWeight={'bold'} variant="h4" color="#425F57">My Travelling Experience</Typography>
            <TravelExploreIcon sx={{fontSize: '40px', paddingLeft: 1, color: "#425F57"}}/>
            </Box>
            <form onSubmit={handleSubmit} className="Add">
                <Box padding={3} display="flex" width="80%" margin="auto" marginTop={2} flexDirection={'column'}>
                    <FormLabel sx={{color: 'black'}}>Location</FormLabel>
                    <Autocomplete
                    groupBy={(option) => option.state}
                      disablePortal
                      disableCloseOnSelect
                      id="combo-box-demo"
                      options={cities}
                      sx={{margin:"normal"}}
                      // onChange={(e, newVal)=>{
                      //   setInputs(newVal);
                      // }}
                      onChange={(e, newVal)=>{
                        setLoc(newVal);
                      }}
                      // value={inputs.location} 
                      renderInput={(params) => <TextField {...params} required/>}
                    />
                    {/* <TextField 
                    onChange={handleChange}
                    name="location" 
                    value={inputs.location} 
                    variant="standard" 
                    margin="normal"/> */}
                    <FormLabel sx={{color: 'black'}}>Budget</FormLabel>
                    <TextField 
                    onChange={handleChange}
                    name="budget" 
                    value={inputs.budget} 
                    variant="outlined" 
                    margin="normal"/>
                    <FormLabel sx={{color: 'black'}}>ImageUrl</FormLabel>
                    {image.map((singleService, index) => (
                      <div key={index} className="services">
                        <div className="first-division">
                          <input
                          name="service"
                          type="text"
                          id="service"
                          value={singleService}
                          onChange={(e) => handleServiceChangeImage(e, index)}
                          required
                          />
                          {image.length -1 === index && (
                            <button
                            type="button"
                            onClick={handleServiceAddImage}
                            className="add-btn"
                            >
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                        <div className="second-division">
                          {image.length !== 1 && (
                            <button
                            type="button"
                            onClick={() => handleServiceRemoveImage(index)}
                            className="remove-btn"
                            >
                              <span>Remove</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ) )}
                    <FormLabel sx={{color: 'black'}}>Must Visit Places</FormLabel>
                    {mustVisit.map((singleService, index) => (
                      <div key={index} className="services">
                        <div className="first-division">
                          <input
                          name="service"
                          type="text"
                          id="service"
                          value={singleService}
                          onChange={(e) => handleServiceChangeMust(e, index)}
                          required
                          />
                          {mustVisit.length -1 === index && (
                            <button
                            type="button"
                            onClick={handleServiceAddMust}
                            className="add-btn"
                            >
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                        <div className="second-division">
                          {mustVisit.length !== 1 && (
                            <button
                            type="button"
                            onClick={() => handleServiceRemoveMust(index)}
                            className="remove-btn"
                            >
                              <span>Remove</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ) )}
                    <FormLabel sx={{color: 'black'}}>Not to visit places</FormLabel>
                    {notVisit.map((singleService, index) => (
                      <div key={index} className="services">
                        <div className="first-division">
                          <input
                          name="service"
                          type="text"
                          id="service"
                          value={singleService}
                          onChange={(e) => handleServiceChangeNot(e, index)}
                          required
                          />
                          {notVisit.length -1 === index && (
                            <button
                            type="button"
                            onClick={handleServiceAddNot}
                            className="add-btn"
                            >
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                        <div className="second-division">
                          {notVisit.length !== 1 && (
                            <button
                            type="button"
                            onClick={() => handleServiceRemoveNot(index)}
                            className="remove-btn"
                            >
                              <span>Remove</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ) )}
                    <FormLabel sx={{color: 'black'}}>Best Hotels to stay in</FormLabel>
                    {hotels.map((singleService, index) => (
                      <div key={index} className="services">
                        <div className="first-division">
                          <input
                          name="service"
                          type="text"
                          id="service"
                          value={singleService}
                          onChange={(e) => handleServiceChangeHotel(e, index)}
                          required
                          />
                          {hotels.length -1 === index && (
                            <button
                            type="button"
                            onClick={handleServiceAddHotel}
                            className="add-btn"
                            >
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                        <div className="second-division">
                          {hotels.length !== 1 && (
                            <button
                            type="button"
                            onClick={() => handleServiceRemoveHotel(index)}
                            className="remove-btn"
                            >
                              <span>Remove</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ) )}
                    <FormLabel sx={{color: 'black'}}>Best marketplace available</FormLabel>
                    {market.map((singleService, index) => (
                      <div key={index} className="services">
                        <div className="first-division">
                          <input
                          name="service"
                          type="text"
                          id="service"
                          value={singleService}
                          onChange={(e) => handleServiceChangeMarket(e, index)}
                          required
                          />
                          {market.length -1 === index && (
                            <button
                            type="button"
                            onClick={handleServiceAddMarket}
                            className="add-btn"
                            >
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                        <div className="second-division">
                          {market.length !== 1 && (
                            <button
                            type="button"
                            onClick={() => handleServiceRemoveMarket(index)}
                            className="remove-btn"
                            >
                              <span>Remove</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ) )}
                    <FormLabel sx={{color: 'black'}}>Best food items to try</FormLabel>
                    {food.map((singleService, index) => (
                      <div key={index} className="services">
                        <div className="first-division">
                          <input
                          name="service"
                          type="text"
                          id="service"
                          value={singleService}
                          onChange={(e) => handleServiceChangeFood(e, index)}
                          required
                          />
                          {food.length -1 === index && (
                            <button
                            type="button"
                            onClick={handleServiceAddFood}
                            className="add-btn"
                            >
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                        <div className="second-division">
                          {food.length !== 1 && (
                            <button
                            type="button"
                            onClick={() => handleServiceRemoveFood(index)}
                            className="remove-btn"
                            >
                              <span>Remove</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ) )}
                    <FormLabel sx={{color: 'black'}}>Things which are recemmonded to buy</FormLabel>
                    {things.map((singleService, index) => (
                      <div key={index} className="services">
                        <div className="first-division">
                          <input
                          name="service"
                          type="text"
                          id="service"
                          value={singleService}
                          onChange={(e) => handleServiceChangeThings(e, index)}
                          required
                          />
                          {things.length -1 === index && (
                            <button
                            type="button"
                            onClick={handleServiceAddThings}
                            className="add-btn"
                            >
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                        <div className="second-division">
                          {things.length !== 1 && (
                            <button
                            type="button"
                            onClick={() => handleServiceRemoveThings(index)}
                            className="remove-btn"
                            >
                              <span>Remove</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ) )}
                    <FormLabel sx={{color: 'black'}}>Points to remember while visiting the place</FormLabel>
                    {points.map((singleService, index) => (
                      <div key={index} className="services">
                        <div className="first-division">
                          <input
                          name="service"
                          type="text"
                          id="service"
                          value={singleService}
                          onChange={(e) => handleServiceChangePoints(e, index)}
                          required
                          />
                          {points.length -1 === index && (
                            <button
                            type="button"
                            onClick={handleServiceAddPoints}
                            className="add-btn"
                            >
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                        <div className="second-division">
                          {points.length !== 1 && (
                            <button
                            type="button"
                            onClick={() => handleServiceRemovePoints(index)}
                            className="remove-btn"
                            >
                              <span>Remove</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ) )}
                    <Button type="submit" style={{backgroundColor: '#CFFF8D'}} sx={{width: "50%",margin: "auto",mt:2,  borderRadius: 7, color: "black"}} variant="contained">Post</Button>
                </Box>
            </form>
        </Box>
    )
}

export default Add;
import React, { useEffect, useState } from "react";
import { Button, FormLabel, TextField, Typography, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { getPostDetails, postUpdate } from "../../apihelpers/helpers";
import avatar from "D:/Travel/travel/src/images/travel.png"

const DiaryUpdate = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState();
    const id = useParams().id;
    const [mustVisit, setMustVisit] = useState([""]);
    const [notVisit, setNotVisit] = useState([""]);
    const [hotels, setHotels] = useState([""]);
    const [market, setMarket] = useState([""]);
    const [food, setFood] = useState([""]);
    const [things, setThings] = useState([""]);
    const [points, setPoints] = useState([""]);
    const [image, setImage] = useState([""]);

    const [inputs, setInputs] = useState({
        location: "",
        budget: 0,
      });
    console.log(id);
    useEffect(() => {
        getPostDetails(id)
        .then(data => {
            setPost(data.post);

            setInputs({location: data.post.location,
            budget: data.post.budget});
            setMustVisit(data.post.mustVisit);
            setNotVisit(data.post.avoid);
            setHotels(data.post.hotels);
            setMarket(data.post.market);
            setFood(data.post.food);
            setThings(data.post.things);
            setPoints(data.post.point);
            setImage(data.post.image);
        })
        .catch(err => console.log(err));
      return () => {
      }
    }, [id])


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


      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, mustVisit, notVisit,hotels, market,food, things, points, image);
        postUpdate(inputs, mustVisit, notVisit,hotels, market,food, things, points, image, id)
        .then((data) => {
          console.log(data);
          navigate('/profile');
        })
        .catch(err => console.log(err));
      };

    
    return(
        <Box display="flex" flexDirection={"column"} width="100%" height="100%">
            <Box display="flex" margin="auto" padding={2}>
            <Typography fontWeight={'bold'} variant="h4">Add your travel diary</Typography>
            <TravelExploreIcon sx={{fontSize: '40px', paddingLeft: 1, color: "lightCoral"}}/>
            </Box>
            {post && (<form onSubmit={handleSubmit}>
                <Box padding={3} display="flex" width="80%" margin="auto" flexDirection={'column'}>
                    <FormLabel>Location</FormLabel>
                    <TextField 
                    onChange={handleChange}
                    name="location" 
                    value={inputs.location} 
                    variant="standard" 
                    margin="normal"/>
                    <FormLabel>Budget</FormLabel>
                    <TextField 
                    onChange={handleChange}
                    name="budget" 
                    value={inputs.budget} 
                    variant="standard" 
                    margin="normal"/>
                    <FormLabel>ImageUrl</FormLabel>
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
                    <FormLabel>Must Visit Places</FormLabel>
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
                    <FormLabel>Not to visit places</FormLabel>
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
                    <FormLabel>Best Hotels to stay in</FormLabel>
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
                    <FormLabel>Best marketplace available</FormLabel>
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
                    <FormLabel>Best food items to try</FormLabel>
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
                    <FormLabel>Things which are recemmonded to buy</FormLabel>
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
                    <FormLabel>Points to remember while visiting the place</FormLabel>
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
                    <Button type="submit" color="warning" sx={{width: "50%",margin: "auto",mt:2,  borderRadius: 7}} variant="contained">Post</Button>
                </Box>
            </form>)}
        </Box>
    )
}
export default DiaryUpdate;
import axios from "axios";
import MustVisit from "../pages/search/tabs/mustVisit/mustVisit";

export const getAllPosts = async(loc) => {
    const res = await axios.get(`/posts/${loc}/`);
    if(res.status !== 200){
        return console.log("some error occured");
    }
    console.log("success")
    const data = res.data;
    console.log(data);
    return data;
}

export const getAllPost = async() => {
    const res = await axios.get(`/posts/`);
    if(res.status !== 200){
        return console.log("some error occured");
    }
    console.log("success")
    const data = res.data;
    console.log(data);
    return data;
}

export const sentLoginRequest = async(data) =>{
    const res = await axios.post("/users/login/", {
        email: data.email,
        password: data.password
    }).catch(err => console.log(err));

    if(res.status!==200 && res.status !==201){
        return console.log("unable to authenticate");
    }

    const resData = await res.data;
    return resData;

}

export const sentRegisterRequest = async(data) =>{
    const res = await axios.post("/users/signup/", {
        name: data.name ? data.name : "",
        email: data.email,
        password: data.password
    }).catch(err => console.log(err));

    if(res.status!==200 && res.status !==201){
        return console.log("unable to authenticate");
    }

    const resData = await res.data;
    return resData;
}

// function convertToBase64(file){
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       if (file) {
//         fileReader.readAsDataURL(file);
//       }
//       fileReader.onload = () => {
//         resolve(fileReader.result)
//       }
//       fileReader.onerror = (error) => {
//         reject(error)
//       }
//     })
//   }

export const addPost = async(location, data, mustVisit, notVisit,hotels, market,food, things, points, image) => {
    // for(let i =0; i< image.length; i++){
    //     const base64 = convertToBase64(image[i]);
    //     image[i]=base64;
    // }
    const res = await axios.post("/posts/", {
        image: image,
        location: location,
        budget: data.budget,
        mustVisit: mustVisit,
        avoid: notVisit,
        hotels:hotels,
        market:market,
        things:things,
        food:food,
        point:points,
        user: localStorage.getItem("userId"),
    }).catch((err) => console.log(err));

    if(res.status !== 201){
        return console.log("error occured");
    }

    const resData = res.data;
    return resData;
}

export const getPostDetails = async(id, userid) => {
    const res = await axios.get(`/posts/useId/${id}`);
    if(res.status !== 200){
        return console.log("some error occured");
    }
    console.log("success")
    const data = res.data;
    console.log(data);
    return data;
}

export const postUpdate = async(location, data, mustVisit, notVisit,hotels, market,food, things, points, image, id) => {
    const res = await axios.put(`/posts/${id}`,{
        image: image,
        location: location,
        budget: data.budget,
        mustVisit: mustVisit,
        avoid: notVisit,
        hotels:hotels,
        market:market,
        things:things,
        food:food,
        point:points,
    }).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}

export const postDelete = async(id) =>{
    const res = await axios.delete(`/posts/${id}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to delete");
    }

    const resData = await res.data;
    return resData;
}

export const getUserDetail = async() =>{
    const id = localStorage.getItem("userId");
    const res = await axios.get(`/users/${id}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("no user found");
    }

    const resData = await res.data;
    console.log(resData);
    return resData;
} 

export const getUserDetails = async(id) => {
    const res = await axios.get(`/users/${id}`).catch(err => console.log(err));
    if(res.status !== 200){
        return console.log("no user found");
    }

    const resData = await res.data;
    console.log(resData);
    return resData;
}

export const likeImage = async(id,userId) =>{
    const res = await axios.put(`/posts/likeimage/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
export const dislikeImage = async(id,userId) =>{
    const res = await axios.put(`/posts/dislikeimage/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}

export const likeVisit = async(id,userId) =>{
    const res = await axios.put(`/posts/likemustVisit/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
export const dislikeVist = async(id,userId) =>{
    const res = await axios.put(`/posts/dislikemustVisit/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}

export const likeAvoid = async(id,userId) =>{
    const res = await axios.put(`/posts/likeavoid/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
export const dislikeAvoid = async(id,userId) =>{
    const res = await axios.put(`/posts/dislikeavoid/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}

export const likeHotel = async(id,userId) =>{
    const res = await axios.put(`/posts/likehotels/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
export const dislikeHotel = async(id,userId) =>{
    const res = await axios.put(`/posts/dislikehotels/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}

export const likeMarket = async(id,userId) =>{
    const res = await axios.put(`/posts/likemarket/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
export const dislikeMarket = async(id,userId) =>{
    const res = await axios.put(`/posts/dislikemarket/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
export const likeFood = async(id,userId) =>{
    const res = await axios.put(`/posts/likefood/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
export const dislikeFood = async(id,userId) =>{
    const res = await axios.put(`/posts/dislikefood/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}

export const likeThing = async(id,userId) =>{
    const res = await axios.put(`/posts/likethings/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
export const dislikeThing = async(id,userId) =>{
    const res = await axios.put(`/posts/dislikethings/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}

export const likePoint = async(id,userId) =>{
    const res = await axios.put(`/posts/likepoint/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
export const dislikePoint = async(id,userId) =>{
    const res = await axios.put(`/posts/dislikepoint/${id}/${userId}`).catch(err => console.log(err));

    if(res.status !== 200){
        return console.log("unable to update");
    }

    const resData = res.data;
    return resData;
}
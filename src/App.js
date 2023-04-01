import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/login/login.js';
import Register from './pages/register/register.js';
import HomePage from './pages/homepage/homepage.js';
import Header from './header/Header.js';
import './App.css';
import Home from './pages/loginHomepage/loginHomepage.js';
import Search from './pages/search/searchMain.js';
import Diaries from './pages/search/Diaries.js';
import SearchM from './pages/search/search.js';
import Food from './pages/search/tabs/food/food.js';
import Hotel from './pages/search/tabs/hotels/hotel.js';
import Images from './pages/search/tabs/images/images.js';
import Market from './pages/search/tabs/market/market.js';
import NotVisit from './pages/search/tabs/notVisit/notVisit.js';
import Things from './pages/search/tabs/things/things.js';
import Point from './pages/search/tabs/point/point.js';
import MustVisit from './pages/search/tabs/mustVisit/mustVisit.js';
import { useDispatch, useSelector } from 'react-redux';
import Add from './pages/add/add.js';
import Profile from './pages/profile/Profile.js';
import DiaryUpdate from './pages/myPosts/DiaryUpdate.js';
import MyPosts from './pages/myPosts/myPosts.js';
import { useEffect } from 'react';
import { authActions } from './store/index.js';
import { Chat } from './chat/Chat.js';


function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispatch(authActions.login());
    }
  },[localStorage]);
  return (
    <div>
      <header>
        <Header/>
      </header>
      <section>
          <Routes>
              <Route exact path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            { isLoggedIn && <>
              <Route path='/home' element={<Home/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
            <Route path='/searchM' element={<SearchM/>}></Route>
            <Route path='/blog' element={<Diaries/>}></Route>
            <Route path='/food' element={<Food/>}></Route>
            <Route path='/hotel' element={<Hotel/>}></Route>
            <Route path='/image' element={<Images/>}></Route>
            <Route path='/mustVisit' element={<MustVisit/>}></Route>
            <Route path='/market' element={<Market/>}></Route>
            <Route path='/avoid' element={<NotVisit/>}></Route>
            <Route path='/thing' element={<Things/>}></Route>
            <Route path='/point' element={<Point/>}></Route>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/myPosts' element={<MyPosts/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/posts/useId/:id' element={<DiaryUpdate/>}></Route> 
            {/* <Route path='/chat' element={<Chat/>}></Route> */}
            </>}
          </Routes>
      </section>
      
    </div>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import AboutUs from './components/AboutUs/AboutUs';
import Posts from './components/Posts/Posts';
import Single from './components/Single/Single';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Navigate to="/"/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:postId" element={<Single/>} />
        </Routes>
    );
};

export default App;
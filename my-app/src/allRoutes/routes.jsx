import { Routes, Route } from "react-router-dom";
import Demo from "./demo"

import About  from "./about";
import Features from "./features" ;
import  Price from "./pricing" ;
import Faq from "./faq" ;
import Blog from "./blog" ;
import  SignUp from "./signUp" ;
import Login from "./login";
import Lang from "./lang";
function AllRoutes(){
    return (
        <>
        <div>
            <Routes>
               
                <Route path="/demo" element={<Demo/>}/>
                <Route path="/features" element={<Features/>}/>
                <Route path="/price" element={<Price/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/lang" element={<Lang/>}/>
            </Routes>
        </div>
        </>
    )
}
export default AllRoutes ;
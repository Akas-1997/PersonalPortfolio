import React from "react";
import {useNavigate} from 'react-router-dom';
import './styles.scss';
const  Home=()=>{
    const navigate=useNavigate();
    const handleNavigateToContactMePage=()=>{
       navigate("/contact");
    };

    return (
        <div>
         <section id="home" className="home">
            <div className="home_text_wrapper">
                <h1>
                    Hello, I'm Akash
                    <br/>
                    Full Stack Developer
                </h1>

            </div>
            <div className="home_contact-me">
                <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            </div>

         </section>
        </div>
    )
}
export default Home;
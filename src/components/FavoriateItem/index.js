import "./index.css"
import {FaUserCircle } from "react-icons/fa"
import { BsFillStarFill } from "react-icons/bs"
import { BiMessage } from "react-icons/bi"
import {FiPhoneCall} from "react-icons/fi"

const FavoriateItem = props => {
    const { name, status, location } = props.data 
    // console.log(tags);
    
    return (
        <li className="favoriate-contact-card">
            <div className="profile">
                <FaUserCircle className="profile-icon" size={"40px"} color="grey" />
                <div className="profile-info">
                    <h1 className="profile-name"> {name} </h1>
                    {/* {tags.map((e, index) => <p className="profile-tag" key={index}> {e} </p>)} */}
                </div>
                <BsFillStarFill className="star-icon" color="yellow" size={ "25px" }/>
            </div>
            <hr className="line" />
            <p className="profile-status"> {status} </p>
            <p className="profile-location"> {location}</p>
            <div className="contact-info-icons">
                <div className="contact-item-info">
                    <BiMessage size={"20px"} color="grey"/>
                    <p className="profile-text-info"> Send Message </p>
                </div>
                <div className="contact-item-info">
                    <FiPhoneCall size={"20px"} color="grey"/>
                    <p className="profile-text-info"> Call </p>
                </div>
            </div>
        </li>
    )
}

export default FavoriateItem
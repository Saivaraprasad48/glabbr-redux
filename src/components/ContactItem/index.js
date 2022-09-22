import "./index.css"
import { BiMessage } from "react-icons/bi"
import { FiPhoneCall } from "react-icons/fi"
import { AiOutlineStar } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"
import { BsFillStarFill } from "react-icons/bs"

const bgColors = ["cornflowerblue","darkblue","darksalmon","dodgerblue","gold","grey","mediumpurple","olive"]
const randomIndex = Math.ceil(Math.random() * bgColors.length)
const initialColor = bgColors[randomIndex]

const ContactItem = (props) => {
    const { data, triggerFav, triggerDel} = props 
    const { id, name, status, location, isFavoriate } = data
    const initial = name[0].toUpperCase()
    const FavIcon = isFavoriate ? <BsFillStarFill color="yellow" size={ "25px" }/> : <AiOutlineStar size={ "25px" } />
    

    const FavClicked = () => {
        triggerFav(id)
    }
    const DelClicked = () => {
        triggerDel(id)
    }

    return (
        <li className="contact-card">
            <div className={`initial-card ${initialColor}`}>
                <h1 className="initial-text"> {initial} </h1>
            </div>
            <div className="contact-item-info-container">
            <p className="contact-item-name"> {name} </p>
            <p className="contact-item-status"> {status} </p>
            <p className="contact-item-location"> {location} </p>
            </div>
            <div className="contact-item-icons-container">
                <div className="action-icons">
                    <BiMessage size={ "25px" } />
                    <FiPhoneCall size={ "22px" } />
                </div>  
                <div className="favoriate-icon" onClick={FavClicked}>
                    { FavIcon }
                </div>  
                <div className="delete-icon" onClick={ DelClicked }>
                    <AiOutlineDelete size={ "25px" } />
                </div>
            </div> 
        </li>
    )
}


  export default ContactItem;
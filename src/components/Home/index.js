import React from 'react'
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import ContactItem from "../ContactItem/index"
import Pagination from "../Pagination/index"
import { BiSearchAlt2 } from "react-icons/bi"
import { IoFilterSharp } from "react-icons/io5"
import FavoriateItem from "../FavoriateItem/index"
import { v4 } from "uuid"


function Home() {
    const data = useSelector(state => state)
    const dispatch = useDispatch()
    const contacts = data.Contacts
    const { postPerPage, currentPage, searchValue, isFormOpen } = data 
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const searchedContacts = contacts.filter((each) => each.name.toLowerCase().includes(searchValue.toLowerCase()))
    const currentPosts = searchedContacts.slice(firstPostIndex, lastPostIndex)
    const FavData = contacts.filter((e) => (e.isFavoriate === true))
    const FavCount = FavData.length 
    const ContactLength = contacts.length
    const NoFavCount = 0 >= FavCount 
    const classStyle = NoFavCount ? "center-fav" : ""
    const NoContactCount = 0 >= currentPosts.length
    
    const triggerredPagination = (page) => {
        dispatch({ type:"CURRENT_PAGE", payload: page })
    }
    
    const getAddBtn = () => {
        dispatch({type:"FORMOPEN"})
    }

    const triggerFavoriate = (id) => {
        const contacts = data.Contacts
        const favList = contacts.map((e) => { 
            if (e.id === id) {
                return {...e, isFavoriate: !e.isFavoriate}
            } else {
                return e
            }
        })
        dispatch({type: "FAV", payload: favList})
    }

    const getCloseForm = () => {
        dispatch({type:"FORMCLOSE"})
    }

    const nameChange = e => {
        dispatch({type:"NAMECHANGE", payload:e.target.value})
    }

    const statusChange = e => {
        dispatch({type:"STATUSCHANGE", payload:e.target.value})    
    }

    const locationChange = e => {
        dispatch({type:"LOCATIONCHANGE", payload:e.target.value})
    }


    const errorMsgTrigger = () => {
        dispatch({type:"ERROR"})
    }
    
    const errorMsgClose = () => {
        dispatch({type:"ERRORCLOSE"})
    }

    const formsuccessMsg = () => {
        dispatch({type:"FORMSUCCESS"})
    }

    const searchValueTrigger = (e) => {
        dispatch({ type: "SEARCH", payload:e.target.value })
    }

    const addNewContact = () => {
        const { name, status, location } = data
        const newContact = {
            id: v4(),
            name: name,
            status: status,
            location: location,
            isFavoriate: false
        }
        dispatch({
            type: "ADDCONTACT", payload: newContact
        }
        )
    }

    const submitted = e => { 
        const { name, status, location } = data
        e.preventDefault()
        if (name !== "" && status !== "" && location !== "") {
            addNewContact()
            errorMsgClose()
            formsuccessMsg()
        } else {
            errorMsgTrigger()
        }
    }

    const triggerDelete = (id) => {
        const contacts = data.Contacts
        const filteredContacts = contacts.filter((e) => e.id !== id)
        dispatch({
            type:"FILTER", payload: filteredContacts
        })
     }

    const getForm = () => {
        const { errorMsg, name, status, location, formsuccess } = data
        return (
            <form className="form" onSubmit={submitted}>
                <div className="form-card">
                    <h1> Enter Details </h1>
                    <label htmlFor="name" className="label"> Name </label>
                    <input type="text" className="input" onChange={nameChange} id="name" value={name}  placeholder="Enter your name" /><br/>
                    <label htmlFor="action" className="label"> Active or Inactive </label>
                    <input type="text" id="action" className="input" onChange={statusChange} value={ status}  placeholder="Active or Inactive" /><br/>
                    <label htmlFor="location" className="label"> Location </label>
                    <input type="text" className="input" onChange={locationChange} value={ location} placeholder="Location"  /><br/>
                    {errorMsg && <p className="error"> Please Enter Details </p>}
                    { formsuccess && <p className='sucess'> Submitted Successfully </p>}
                    <button type="submit"  className="submit-btn"> Submit </button>    
                    <button className="cancel-btn" onClick={getCloseForm}> Cancel </button>
                </div>
            </form>
        )
    }
    
    
    return (
        <div className="bg-container">
        <header className="header">
            <div className="header-info">
               <h1 className="header-text"> DSP Pharmacy - Contacts </h1>
            </div>
            <div className="header-actions">
                <button className="btn-add" onClick={getAddBtn}> Add Contact </button>
                <div className="filter-container">
                    <IoFilterSharp />
                </div>
                <div className="search-container">
                    <BiSearchAlt2 className="search-icon" />
                    <input className="search-input" onChange={searchValueTrigger} value={searchValue}  type="search" placeholder="Search"/>
                </div>
              
            </div>
        </header>
        {isFormOpen && getForm()}
        <main className="content">
            <div className="favoriates-container">
                <h1 className="favoriate-text"> Favoriates - {FavCount}  </h1>
                <ul className={`favoriates-cards-container ${classStyle}`}>
                        {NoFavCount ? <p className="no-fav-count"> No Favoriates Available </p> : FavData.map((e) =>  <FavoriateItem key={e.id} data={e} />)}
                </ul>
            </div>
            <div className="contacts-container">
                    <h1 className="contacts-text"> Contacts Lists - { ContactLength}  </h1>
                <div className="contact-info-container">
                    <p className="contact-info-text"> Name </p>
                    <p className="contact-info-text"> Status </p>
                    <p className="contact-info-text"> Loaction </p>
                    <p className="contact-info-text"> Actions </p>
                    <p className="contact-info-text"> Favoriate </p>
                    <p className="contact-info-text"> Delete </p>
                </div>
                    <ul className="contact-details">
                        { NoContactCount ? <p className='no-con-count'> No Contacts Available </p> : currentPosts.map((eachItem) => <ContactItem key={eachItem.id} triggerFav={triggerFavoriate} triggerDel={triggerDelete } data={eachItem}  />)}
                    </ul>    
                    <Pagination count={contacts.length} setGo={ triggerredPagination } currentPage={currentPage} postPerPage={postPerPage} />    
            </div>
            
        </main>
    </div>
  )
}

export default Home

import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './styles/Navbar.module.css'

const Navbar = (props) => {
    const {userImage} = props
    // const search = <FontAwesomeIcon className={classes.filter} icon={faSearch} />
   
  return (
    <div className={classes.container}>
        <div className={classes.user_search}>
            <img className={classes.profile__pic} src={userImage} alt="" />   
            <input className={classes.input} type="text" placeholder='Search' />
            <FontAwesomeIcon className={classes.filter} icon={faPlus} />
        </div>
        <div className={classes.nav_links}>
            <Link className={classes.link} to='#'>New</Link>
            <Link className={classes.link} to='#'>Home</Link>
            <Link className={classes.link} to='#'>Popular</Link>
            <Link className={classes.link} to='#'>Random</Link>
        </div>
    </div>
  );
};

export default Navbar;

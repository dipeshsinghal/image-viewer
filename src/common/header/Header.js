import React, { Component } from 'react';
import './Header.css';  
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

class Header extends Component {
   render() {
       return (
           <div className="header">
               <div className="title">Image Viewer</div>
                <div id="search-field">
                    <div className="searchIcon" >
                        <SearchIcon />
                    </div>
                    <Input className="searchInput" disableUnderline={true}  placeholder="Search..."/>
                </div>
            </div>
       )
   }
}

export default Header;
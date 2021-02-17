import React from 'react';
import '../../styles/Header.css';

import GDriveLogo from '../../media/logo.png';
import ExpandMoreIcons from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcons from '@material-ui/icons/Settings';

const index = ({userPhoto}) => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={GDriveLogo} alt="Google Drive"/>
                <span>Drive</span>
            </div>
            <div className='header__searchContainer'>
                <div className='header__searchBar'>
                    <SearchIcon/>
                        <input type='text' placeholder='Pesquise no Drive'/>
                    <ExpandMoreIcons/>
                </div>
            </div>
            <div className='header__icons'>
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcons />
                </span>
                    <AppsIcon />
                <img src={userPhoto} alt="Usar sua foto"/>
            </div>      
        </div>
    )
}

export default index;
import React from 'react';
import AddIcon from '@material-ui/icons/Add';

import '../../styles/SideIcons.css';

function index() {
    return (
        <div className='sideIcons'>
            <div className="sideIcons__top">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" alt="Calendario Google" />
                <img src="https://w7.pngwing.com/pngs/278/649/png-transparent-google-keep-icon-symbol-brand-yellow-keep-rectangle-orange-android.png" alt="Google Kep" />
                <img src="https://play-lh.googleusercontent.com/62OzNxLonba70XxMFP3X3dsdNS9lvG2xf5TqfhYDaw9iFn5as9gVSU23ExfCLoZXkMWA"  alt="Google Taks"/>
            </div>
            <hr/>
            <div className="sideIcons__plusIcon">
                <AddIcon />
            </div>
        </div>
    )
}

export default index
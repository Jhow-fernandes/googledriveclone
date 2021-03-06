import React from 'react';
import NewFile from './NewFile';
import SidebarItem from './SidebarItem';
import '../../styles/Sidebar.css';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorangeIcon from '@material-ui/icons/Storage';

function index() {
    return (
        <div className='sideBar'>
            <NewFile/>
            {/**new file */}

            <div className="sidebar__itemsContainer">
                <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'Meu Drive'} />
                <SidebarItem arrow icon={(<ImportantDevicesIcon />)} label={'Drives compartilhados'}/>
                <SidebarItem icon={(<PeopleAltIcon/>)} label={'Compartilhads comigo'}/>
                <SidebarItem icon={(<QueryBuilderIcon/>)} label={'Recentes'}/>
                <SidebarItem icon={(<StarBorderIcon/>)} label={'Com estrela'}/>
                <SidebarItem icon={(<DeleteOutlineIcon/>)} label={'Lixeira'}/>
                <hr/>


                < SidebarItem icon={(<StorangeIcon />)} label={'Armazenamento'}/>
                
            </div>
            
        </div>
    )
}

export default index

import {useState} from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import FilesView from './components/filesView/FilesView';
import SideIcons from './components/sideIcons/index';
import GDriveLogo from './media/logo.png';
import {auth, provider} from './firebase';

function App() {
  const [user, setUser] = useState();

  const handleLogin=() =>{
    if(!user) {
      auth.signInWithPopup(provider).then((result) =>{
        setUser(result.user)
      });
    }
  };

  return (
    <div className="App">

      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
              <div className="app__main">
                <Sidebar/>
                <FilesView />
                <SideIcons/>
              </div>
          </>
        ) : (
          <div className='app__login'>
            <img src={GDriveLogo} alt="Google Drive" />
            <button onClick={handleLogin}>Login Conta Google</button>
          </div>
        )
      }
      
    {/*NOT AUTH: LOG IN*/}
    </div>
  );
}

export default App;


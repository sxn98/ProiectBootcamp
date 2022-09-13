import './App.css';
import "./css/NavBar.css"
import "./css/Items.css"
import {Route, Routes,useResolvedPath,useMatch} from "react-router-dom";
import Profile from "./routes/Profile";
import WishLists from './routes/WishLists';
import Groups from './routes/Groups';
import Login from './routes/Login';
import SignIn from './routes/SignIn';
import WithNav from './components/WithNav';
import WithoutNav from './components/WithoutNav';
import UsersGroup from './routes/UsersGroup';
import Items from './routes/Items'
import Notifications from './routes/Notifications';

function App() {

  return (
    <>

    <div className="App">

    <Routes>

      <Route element={<WithoutNav/>}>
        <Route path="/" element={< Login />}/>
      </Route>

      <Route element={<WithoutNav/>}>
        <Route path="/SignIn" element={< SignIn />}/>
      </Route>

      <Route element={<WithNav/>}>
        <Route path="/Profile" element={< Profile />}/>
      </Route>

      <Route element={<WithNav/>}>
        <Route path="/Groups" element={< Groups />}/>
      </Route>

      <Route element={<WithNav/>}>
        <Route path="/WishLists" element={< WishLists />}/>
      </Route>

      <Route element={<WithNav/>}>
        <Route path="/Groups/:grup" element={< UsersGroup />}/>
      </Route>

      <Route element={<WithNav/>}>
        <Route path="/Items" element={< Items />}/>
      </Route>

      <Route element={<WithNav/>}>
        <Route path="/Notifications" element={< Notifications />}/>
      </Route>

    </Routes>
    </div>
    </>
  );
}

export default App;

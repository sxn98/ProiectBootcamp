import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./routes/Profile";
import WishLists from './routes/WishLists';
import Groups from './routes/Groups';
import Login from './routes/Login';
import SignIn from './routes/SignIn';



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={< Login />}/>
        <Route path="/SignIn" element={< SignIn />}/>
        <Route path="/Profile" element={< Profile />}/>
        <Route path="/Groups" element={< Groups />}/>
        <Route path="/WishLists" element={< WishLists />}/>
     </Routes>
    </div>
  );
}

export default App;

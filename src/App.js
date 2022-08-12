import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./routes/Profile";
import WishLists from './routes/WishLists';
import Groups from './routes/Groups';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={< Profile />}/>
        <Route path="/Groups" element={< Groups />}/>
        <Route path="/WishLists" element={< WishLists />}/>
     </Routes>
    </div>
  );
}

export default App;

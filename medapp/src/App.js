import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import Home from "./component/Home";
import NearBy from "./component/NearBy";
import Notification from "./component/Notification";
import DocProfile from "./component/DocProfile";
import Reports from "./component/Reports";
import Search from "./component/Search";
import UserProfile from "./component/UserProfile";

function App() {
  return (
    <><BrowserRouter>
    
      <Routes>
                <Route index path='/' element={< Home />}/>
                <Route  path='/nearby' element={< NearBy />}/>
                <Route  path='/msg' element={< Notification />}/>
                <Route  path='/doc' element={< DocProfile />}/>
                <Route  path='/rep' element={< Reports />}/>
                <Route  path='/search' element={< Search />}/>
                <Route  path='/my' element={< UserProfile />}/>
                </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

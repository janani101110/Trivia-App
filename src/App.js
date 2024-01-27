
import './App.css';
import {Navbar} from './Component/Navbar/Navbar';
import {Search} from './Component/Search/Search';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Resources} from './Pages/Resources/Resources';
import {Sensors} from './Pages/Resources/Sensors';
import {Projects} from './Pages/Projects';
import {Blogs} from './Pages/Blogs';
import {Shopping} from './Pages/Shopping';
import {Forum} from './Pages/Forum';
import {AboutUs} from './Pages/AboutUs';
import {LogIn} from './Pages/LogIn';
import {SignUp} from './Pages/SignUp';
import {Footer} from './Component/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Search/>
      <Routes>
          <Route path='/home'element={<Home/>}/>
          <Route path='/resources'element={<Resources/>}/>
            <Route path='/sensors' element={<Sensors/>}/>
          <Route path='/projects'element={<Projects/>}/>
          <Route path='/blogs'element={<Blogs/>}/>
          <Route path='/shopping'element={<Shopping/>}/>
          <Route path='/forum'element={<Forum/>}/>
          <Route path='/aboutus'element={<AboutUs/>}/>
          <Route path='/signup'element={<SignUp/>}/>
          <Route path='/login'element={<LogIn/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
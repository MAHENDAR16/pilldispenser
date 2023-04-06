import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainFirst from './FirstPage/MainFirst';
import MainInfo from './PillInfo/MainInfo';
import MainAdd from './AddPill/MainAdd';
import Login from './LoginLogout/Login';
import Team from './FirstPage/Team';
import Register from './LoginLogout/Register.js'
function App() {
  const router = createBrowserRouter([
    {path : '/', element:<MainFirst/>},
    {path:'/pill-info', element:<MainInfo/>},
    {path :'/addpill', element : <MainAdd/>},
    {path : '/team', element:<Team/>},
    {path : '/register', element:<Register/>},
    {path : '/login', element:<Login/>},
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

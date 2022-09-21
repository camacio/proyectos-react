import { createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import LoginPage from "./pages/LoginPage";
import NewAccountPage from "./pages/NewAccountPage";
import ProyectsPage from "./pages/ProyectsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "new-account",
    element: <NewAccountPage/>
  },
  {
    path: "proyects",
    element: <ProyectsPage/>
  },
])

function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App;

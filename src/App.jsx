import Layout from "./pages/layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import Listpage from "./pages/Listpage/Listpage";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
function App() {
  const router=createBrowserRouter([
   {
    path:"/",
      element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/list",
        element:<Listpage/>
      }
    ]
   },
   {
    path:"/list",
    element:<Listpage />,
   },
  ]);
  return (

       <RouterProvider router={router}/>
      // <>
      // <div className="layout">
      //  <Navbar/>
      //  <Homepage />
      //  </div>
      
      // </>

          
  );
}

export default App

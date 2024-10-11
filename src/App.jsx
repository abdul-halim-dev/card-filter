 


 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aside from './aside/Aside'
import Home from './pages/home/Home'
import Postcard from './pages/postcard/Postcard'
import Category from './pages/category/Category'
import Singlepage from './pages/singlepage/Singlepage'
import Pagenot from './pages/pagenot/Pagenot'
 
const lost = createBrowserRouter([

{
  path:"/",
  element:<Aside/>,
  children:[

{
  path:"/",
  element:<Home/>
},

{
  path:"/postcard",
  element:<Postcard/>
},

{
  path:"/category/:id",
  element:<Category/>
},

{
  path:"/singlepage/:id",
  element:<Singlepage/>
},

{
  path:"*",
  element:<Pagenot/>
},



  ]
}

])

 const App = () => {
   return (
     <RouterProvider router={lost}/>
   )
 }
 
 export default App
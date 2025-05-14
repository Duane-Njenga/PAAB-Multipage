import Assets from "./src/Pages/AssetClasses";
import Description from "./src/Pages/Description";
import Intro from "./src/Pages/Introduction";
import App from "./src/App";
import ErrorPage from "./src/Pages/ErrorPage";

const routes = [
    {
        path:"/",
        element: <App />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<Intro/>
            },
            {
                path:"/CompanyDescription",
                element:<Description />
            },
            {
                path:"/AssetClasses",
                element:<Assets />
            },
        ]


    },
    
]

export default routes
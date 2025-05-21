import Intro from "./src/Pages/Home1";
import App from "./src/App";
import ErrorPage from "./src/Pages/ErrorPage";
import FAQs from "./src/Pages/FAQs";

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
                path:"/FAQs",
                element:<FAQs />
            },
        ]


    },
    
]

export default routes
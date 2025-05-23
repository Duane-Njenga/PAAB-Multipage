import Intro from "./src/Pages/Home1";
import App from "./src/App";
import ErrorPage from "./src/Pages/ErrorPage";
import FAQs from "./src/Pages/FAQs";
import HomePage from "./src/Pages/HomePage";
import SpecialFundPage from "./src/Pages/SpecialFund";
import UnitTrustFundPage from "./src/Pages/UnitTrustFund";
import Register from "./src/Pages/Register";
import LogIn from "./src/Pages/LogIn";

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
            {
                path: "/services/investments",
                element: <HomePage />
            },
            {
                path: "/services/investments/special-fund",
                element:<SpecialFundPage /> 
            },
            {
                path: "/services/investments/unit-trust-fund",
                element:<UnitTrustFundPage />
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<LogIn/>
            },
        ]


    },
    
]

export default routes
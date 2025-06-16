import Homepage from "./src/Pages/HomePage";
import App from "./src/App";
import ErrorPage from "./src/Pages/ErrorPage";
import FAQs from "./src/Pages/FAQs";
import InvestmentHomePage from "./src/Pages/InvestmentHomePage";
import SpecialFundPage from "./src/Pages/SpecialFund";
import UnitTrustFundPage from "./src/Pages/UnitTrustFund";
import Register from "./src/Pages/Register";
import LogIn from "./src/Pages/LogIn";
import AboutPage from "./src/Pages/AboutPage";
import HomePage from "./src/Pages/HomePage";

const routes = [
    {
        path:"/",
        element: <App />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<HomePage />
            },
            {
                path:"/FAQs",
                element:<FAQs />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/services/investments",
                element: <InvestmentHomePage />
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
import TeamSection from "../components /TeamSection";
import TestimonialSection from "../components /Testimonials";

function Home2(){
    return(
        <>
            <div className="pl-2.5" id="team">
                <h1
                className="text-2xl underline"
                >Meet The Team</h1>
                <h3
                className="italic text-purple-900"
                >"Trusted stewards of wealth, strategy, and kingdom finance."
                </h3>
                <p>
                    At PAAB Capital, our team blends spiritual insight with professional expertise —
                    guiding individuals, businesses, and institutions through the divine blueprint of wealth transfer. We are more than a company; we are custodians of financial destiny.
                </p>
                <h2
                className="text-center text-2xl underline"
                >Leadership</h2>
                <TeamSection />
            </div>
            <div id = "blog">
                <p>Stay updated with cutting-edge financial strategies, prophetic insights, research, and thought leadership from the PAAB Capital team. Whether you're a seasoned investor,
                    a budding entrepreneur, or a kingdom steward, this is your portal to informed decisions and divine alignment.
                </p>
                <h3
                className="underline text-lg font-bold"
                >Blog/Insights Categories: 
                </h3>
                <ul className="list-disc list-inside">
                    <li>Market Outlook & Analysis </li>
                    <li> Prophetic Insights on Kingdom Wealth </li>
                    <li> Investment Strategies for the New Economy </li>
                    <li>Financial Literacy & Kingdom Economics </li>
                    <li>Client Stories & Case Studies </li>
                    <li>Building Legacy & Wealth Transfer Models </li>
                </ul>
            </div>
            <div>
                <h1
                className="text-2xl font-bold text-gray-800 mb-6 text-center pt-2"
                >What Our Clients Are Saying
                </h1>
                <h3
                className="italic text-purple-900 text-center"
                >Lives are being transformed — not just portfolios. 
                </h3>
                <TestimonialSection />
            </div>
        </>
    )
}

export default Home2;
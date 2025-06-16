import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/Testimonials";

function AboutPage(){
    return(
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-4xl underline font-bold text-gray-800 mb-8">
                        About PAAB Capital
                    </h2>
                    
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg leading-relaxed text-gray-700">
                            PAAB Capital is a distinguished wealth management and financial advisory firm, established to guide clients through the divine portals of wealth transfer.
                            Rooted in trust, legacy, and spiritual intelligence, we deliver tailored investment, advisory, and capital solutions that go beyond profit into purpose, impact, and generational prosperity.
                        </p>
                        
                        <p className="text-lg leading-relaxed text-gray-700 mt-4">
                            <strong>Formed in December 2022</strong>, PAAB Capital was birthed through divine insight that the mountain and kingdom of wealth and finance must be occupied by the Church.
                            Our mandate is clear: to build structures that align with heaven's economy, equipping kingdom-minded individuals and institutions to take territory in the financial world.
                        </p>
                        
                        <p className="text-lg leading-relaxed text-gray-700 mt-4">
                            <strong>At PAAB Capital, we don't just manage money — we unlock destiny.</strong> As the financial powerhouse under <strong>PAAB Inc</strong>, we offer a unique blend of <strong>investments, savings, advisory,
                            partnerships, and wealth management,</strong> tailored to transform both individual lives and institutions.
                            With a unique blend of modern financial expertise, timeless principles, and prophetic clarity, we empower our clients to steward wealth with wisdom and boldness in a shifting
                            global economy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Goals */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-6 justify-center">
                        <div className="max-w-sm bg-white rounded-2xl shadow-md shadow-gray-500 p-6">
                            <h2 className="text-xl font-semibold text-purple-800 mb-2">
                                Vision Statement 
                            </h2>
                            <p className="text-gray-700">
                                To be a globally recognized financial powerhouse that unlocks the portals of wealth transfer providing innovative savings, investment, and risk management solutions
                                that drive financial empowerment, economic stability, and generational wealth creation across multiple markets, while positioning the Church to govern the mountain of
                                finance with divine authority.
                            </p>
                        </div>

                        <div className="max-w-sm bg-white rounded-2xl shadow-md shadow-gray-500 p-6">
                            <h2 className="text-xl font-semibold text-purple-800 mb-2">
                                Mission Statement 
                            </h2>
                            <p className="text-gray-700">
                                To revolutionize the financial sector through kingdom-aligned, strategic investment opportunities, structured savings plans, risk management solutions,
                                and high-impact partnerships empowering individuals, families, businesses, and institutions to achieve financial independence, legacy, and spiritual transformation in the marketplace.
                            </p>
                        </div>

                        <div className="max-w-sm bg-white rounded-2xl shadow-md shadow-gray-500 p-6">
                            <h2 className="text-xl font-semibold text-purple-800 mb-2">
                                Goal Statement
                            </h2>
                            <p className="text-gray-700">
                                To establish PAAB Capital as a leading global financial institution, providing comprehensive financial services that are adaptive, transparent, spiritually intelligent,
                                and built for long-term sustainability and generational impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl underline font-bold text-center mb-8 text-gray-800">Core Values</h1>

                    <div className="flex flex-wrap gap-6 justify-center">
                        {[
                            "Kingdom Stewardship",
                            "Trust & Integrity",
                            "Excellence",
                            "Innovation",
                            "Legacy & Impact",
                            "Partnership",
                            "Prophetic Intelligence"
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="w-64 hover:scale-105 transition-transform duration-200 bg-gray-50 rounded-2xl shadow-md shadow-gray-500 p-6 text-center"
                            >
                                <h2 className="text-xl font-semibold text-purple-800 hover:text-purple-600">{value}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 underline text-gray-800">Core Services Overview</h1>

                    <div className="bg-white rounded-2xl shadow-md p-8">
                        <ol className="list-decimal list-inside text-gray-800 text-lg space-y-3">
                            <li>PAAB Capital Investments</li>
                            <li>PAAB Capital Risk Advisory</li>
                            <li>PAAB Capital Savings & Deposits</li>
                            <li>PAAB Capital Partnerships</li>
                            <li>PAAB Capital Wealth Management</li>
                            <li>PAAB Capital Advisory Services</li>
                            <li>PAAB Capital Training & Financial Education</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-12 px-6" id="team">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl underline font-bold text-gray-800 mb-4">
                        Meet The Team
                    </h1>
                    <h3 className="italic text-purple-900 text-xl mb-4">
                        "Trusted stewards of wealth, strategy, and kingdom finance."
                    </h3>
                    <p className="text-lg text-gray-700 mb-8 max-w-4xl">
                        At PAAB Capital, our team blends spiritual insight with professional expertise —
                        guiding individuals, businesses, and institutions through the divine blueprint of wealth transfer. 
                        We are more than a company; we are custodians of financial destiny.
                    </p>
                    <h2 className="text-center text-2xl underline font-semibold text-gray-800 mb-8">
                        Leadership
                    </h2>
                    <TeamSection />
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-12 px-6" id="blog">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 underline text-gray-800">Insights & Resources</h1>
                    
                    <div className="bg-white rounded-2xl shadow-md p-8">
                        <p className="text-lg text-gray-700 mb-6">
                            Stay updated with cutting-edge financial strategies, prophetic insights, research, and thought leadership from the PAAB Capital team. 
                            Whether you're a seasoned investor, a budding entrepreneur, or a kingdom steward, this is your portal to informed decisions and divine alignment.
                        </p>
                        
                        <h3 className="underline text-xl font-bold mb-4 text-gray-800">
                            Blog/Insights Categories: 
                        </h3>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>Market Outlook & Analysis</li>
                            <li>Prophetic Insights on Kingdom Wealth</li>
                            <li>Investment Strategies for the New Economy</li>
                            <li>Financial Literacy & Kingdom Economics</li>
                            <li>Client Stories & Case Studies</li>
                            <li>Building Legacy & Wealth Transfer Models</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            
        </div>
    )
}

export default AboutPage;
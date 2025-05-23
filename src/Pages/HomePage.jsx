function HomePage() {
  return (
    <div className="pl-3">
        <section id="Introduction" className="pt-4">
          <header
            className="text-2xl text-center font-bold underline"
          >
            <h1>Welcome to PAAB Capital Investments</h1>
            <h1>
              Invest with Vision. Grow with Purpose.
            </h1>
          </header>
           
          

          <p className="pt-4">
          At PAAB Capital, we don’t just manage money, we unlock destinies.
          Our Investments Through expertly structured Unit Trust Funds and a
          transformational Special Fund are designed to empower individuals, institutions,
          and Kingdom-minded investors to grow their wealth while walking in divine purpose from generation to generation
          </p>

          <div className="p-6">
            <h1 className="text-2xl underline font-bold text-center mb-6">What We Offer</h1>
            <h2 className="text-2xl underline font-bold text-center mb-6">1.Unit Trust Funds </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {[
                  { fund: "Money Market Fund", definition: "Stability & liquidity" },
                  { fund: "Fixed Income Fund", definition: "Secure long-term returns" },
                  { fund: "Equity Fund", definition: "Growth through stocks" },
                  { fund: "Balanced Fund", definition: "Best of both worlds" }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-purple-800 mb-2">{item.fund}</h4>
                    <p className="text-gray-600">{item.definition}</p>
                  </div>
                ))}
            </div>
              
            
          </div>
          <div className="p-6">
            <h2 className="text-2xl underline font-bold text-center mb-6">2. Special Fund </h2>
            <h3 className="font-bold"
            >The kingdom wealth Growth Fund -</h3>
            <p className="italic"
            >“Purpose-driven investing for generational impact.”</p>
            <p
            >Our flagship special fund is designed for discerning investors looking to align their wealth with divine destiny and long-term impact.
            This is for investors who are looking to impact nations and economies.
            </p>
              
            
          </div>
          <div>
          <ul className="list-disc list-inside">
            <li>Faith-aligned investment strategies </li>
            <li>Regulated and transparent structure</li>
            <li>Professional fund management</li>
            <li>Returns with Kingdom impact</li>
            <li>Options for every investor (starter to HNWI)</li>
          </ul>
          <p className="italic"
            >“We’re not just creating wealth — we’re transferring it to the right hands.” </p>
          </div>      
          <div>
          <h2 className="text-2xl underline font-bold text-center mb-6">Who We Are</h2>
          <p
          >PAAB Capital Investments is the core investment arm of PAAB Capital.
            We provide trusted, innovative, and strategic financial products to help our clients to preserve wealth,
            earn consistent returns, and access market opportunities with ease. Our products are grounded in financial wisdom, regulatory compliance, and Kingdom principles.
            PAAB Capital Investments was established in <b>December 2022</b>  after a divine insight that the <b>Mountain of Finance and Wealth</b>  was to be occupied by the Church. 
            We are a Kingdom-driven investment company under PAAB Inc., with a bold vision to empower individuals, businesses, and institutions to walk in financial dominion. 
          </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-6 mb-6">
            <div className="max-w-sm bg-white rounded-2xl shadow-md shadow-gray-500 p-6">
              <h2 class="text-xl font-semibold text-purple-800 mb-2"
              >Vision Statement 
              </h2>

              <p className="text-gray-700"
              >To be a globally recognized financial powerhouse that unlocks the portals of wealth transfer providing innovative savings, investment, and risk management solutions
                that drive financial empowerment, economic stability, and generational wealth creation across multiple markets, while positioning the Church to govern the mountain of
                finance with divine authority.
              </p>
            </div>

            <div className="max-w-sm bg-white rounded-2xl shadow-md shadow-gray-500 p-6">
              <h2 className="text-xl font-semibold text-purple-800 mb-2"
              >Mission Statement 
              </h2>
              <p className="text-gray-700"
              >To revolutionize the financial sector through kingdom-aligned, strategic investment opportunities, structured savings plans, risk management solutions,
               and high-impact partnerships empowering individuals, families, businesses, and institutions to achieve financial independence, legacy, and spiritual transformation in the marketplace.
              </p>
            </div>

            <div className="max-w-sm bg-white rounded-2xl shadow-md shadow-gray-500 p-6">
              <h2 className="text-xl font-semibold text-purple-800 mb-2"
              >Goal Statement
              </h2>
              <p className="text-gray-700"
              >To establish PAAB Capital as a leading global financial institution, providing comprehensive financial services that are adaptive, transparent, spiritually intelligent,
               and built for long-term sustainability and generational impact.
              </p>
            </div>
          </div>
          
          

        </section>
    </div>
 )
}

export default HomePage;
import Home2 from "./Home2" 
function Intro(){
    return (
      <div className="pl-3">
        <section id="Introduction" className="pt-4">
          <header
            className="text-2xl text-center font-bold"
          >
            <h1>Welcome to PAAB Capital</h1>
            <h1>
              Unlock the Portals of Wealth Transfer
            </h1>
          </header>
          <div className="w-full bg-gray-200 rounded-2xl">
          <ul
            className="list-disc list-inside mb-2 text-lg ml-2 "
          >     
            <li>Begin your Wealth Journey</li>
            <li>Explore Our Services</li>
            </ul> 
          </div >
          <div className="mb-6 mt-4">
            <h2
              className ="text-center text-2xl underline font-bold"
            >About PAAB Capital</h2>
            

            <p className="pt-4">
            PAAB Capital is a distinguished wealth management and financial advisory firm, established to guide clients through the divine portals of wealth transfer.
            Rooted in trust, legacy, and spiritual intelligence, we deliver tailored investment, advisory, and capital solutions that go beyond profit into purpose, impact, and generational prosperity.
            <b>Formed in December 2022</b>, PAAB Capital was birthed through divine insight that the mountain and kingdom of wealth and finance must be occupied by the Church.
            Our mandate is clear: to build structures that align with heaven's economy, equipping kingdom-minded individuals and institutions to take territory in the financial world.
            <b>At PAAB Capital, we don’t just manage money — we unlock destiny.</b> As the financial powerhouse under <b>PAAB Inc</b>, we offer a unique blend of<b> investments, savings, advisory,
            partnerships, and wealth management,</b> tailored to transform both individual lives and institutions.
            With a unique blend of modern financial expertise, timeless principles, and prophetic clarity, we empower our clients to steward wealth with wisdom and boldness in a shifting
            global economy. 
            </p>
          </div>
          <div
            className="flex flex-wrap gap-6">
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
          <div className="p-6">
            <h1 className="text-2xl underline font-bold text-center mb-6">Core Values</h1>

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
                  className="w-64 hover:scale-105 bg-white rounded-2xl shadow-md shadow-gray-500 p-6 text-center"
                >
                  <h2 className="text-xl font-semibold text-purple-800 hover:text-purple-600">{value}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-6 underline">Core Services Overview</h1>

            <ol className="list-decimal list-inside text-gray-800 text-lg max-w-xl">
              <li>PAAB Capital Investments</li>
              <li>PAAB Capital Risk Advisory</li>
              <li>PAAB Capital Savings & Deposits</li>
              <li>PAAB Capital Partnerships</li>
              <li>PAAB Capital Wealth Management</li>
              <li>PAAB Capital Advisory Services</li>
              <li>PAAB Capital Training & Financial Education</li>
            </ol>
          </div>


        </section>
        <Home2 />
      </div>
    );
}

export default Intro;
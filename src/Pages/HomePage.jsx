import TestimonialSection from "../components/Testimonials";

function HomePage(){
    return (
      <div className="pl-3 pb-6 mb-4">
        <section id="Introduction" className="pt-4">
          <header
            className="text-2xl text-center font-bold"
          >
            <h1>Welcome to PAAB Capital</h1>
            <h1>
              Unlock the Portals of Wealth Transfer
            </h1>
          </header>
          <div className="w-full bg-gray-200 rounded-2xl bg-cover bg-center bg-no-repeat h-100 flex items-end" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}}>
            <div className="rounded-2xl p-6 w-full bg-black/60">
              <ul className="list-disc list-inside mb-2 text-lg ml-2 text-purple-100 space-y-6">     
                <li className="mb-4">
                  <span className="font-semibold">Begin your Wealth Journey</span>
                  <p className="mt-2 ml-4 text-base leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, veniam quisquam nihil officiis eius, quas assumenda voluptatibus harum autem repellendus praesentium modi distinctio nobis quae, provident sit alias possimus! Omnis.</p>
                </li>
                <li className="mb-4">
                  <span className="font-semibold">Explore Our Services</span>
                  <p className="mt-2 ml-4 text-base leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint porro perferendis cum quaerat dignissimos molestiae eaque, repellendus facilis, magnam consequuntur fugiat quos suscipit consequatur eius alias ullam quae architecto!</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        What Our Clients Are Saying
                    </h1>
                    <h3 className="italic text-purple-900 text-center text-xl mb-8">
                        Lives are being transformed — not just portfolios. 
                    </h3>
                    <TestimonialSection />
                </div>
            </section>
      </div>
    );
}

export default HomePage;
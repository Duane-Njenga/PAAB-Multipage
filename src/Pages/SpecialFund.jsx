import React, { useState } from 'react';
import TeamSection from '../components /TeamSection';

function SpecialFundPage() {
  const [activeTab, setActiveTab] = useState('about');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const assetClasses = [
    "Global Forex Trading",
    "Precious Metals", 
    "Commodities",
    "Global Stocks and ETFs",
    "Government Securities",
    "NSE Securities",
    "Government Papers"
  ];

  const steps = [
    "Contact us through the contact us",
    "Complete the application form", 
    "Submit your KYC documents",
    "Fund your account (KES or USD)",
    "Track performance through statements"
  ];

  const whyChooseUs = [
    { title: "Kingdom Aligned", description: "We steward capital with divine insight." },
    { title: "High-Yield Focus", description: "Designed for returns beyond conventional funds." },
    { title: "Integrity First", description: "Ethical, transparent, and legacy-driven." },
    { title: "Expert Management", description: "A professional, global, and Kingdom-minded team." },
    { title: "Exclusive", description: "This fund is not open to the public, but curated for visionary investors." }
  ];

  const faqs = [
    { question: "What is the minimum investment amount?", answer: "The minimum investment is KES 500,000 or USD 4,000." },
    { question: "Can I invest in multiple funds?", answer: "Yes, you can diversify across our various fund offerings." },
    { question: "How often can I withdraw?", answer: "Withdrawals are subject to a 6-month lock-in period." },
    { question: "Is my investment safe?", answer: "We employ rigorous risk management and regulatory compliance." },
    { question: "How are returns paid out?", answer: "Returns are distributed according to fund performance and investor agreements." }
  ];

  const testimonials = [
    { name: "Jane M., Nairobi", text: "I've seen consistent returns and professionalism in everything PAAB Capital does. It's refreshing to work with a team that understands Kingdom values." },
    { name: "David O., Kisumu", text: "The Balanced Fund has been a great addition to my long-term plan. Transparent and effective." }
  ];

  return (
    <div className="">
      <section className="text-white py-10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              PAAB Capital Special Fund
            </h1>
            <p className="text-lg font-semibold mb-8 text-gray-800">
              "Positioned for Wealth Transfer. Aligned with Destiny."
            </p>
          </div>

          <div className=" rounded-3xl p-8 mb-8 backdrop-blur-sm">
            <h2 className="text-3xl underline font-bold mb-6 text-center text-gray-800">
              Your Portal to Extraordinary Wealth
            </h2>
            <p className="text-lg text-gray-800 mb-8 text-center max-w-4xl mx-auto">
              Welcome to the <strong>PAAB Capital Special Fund</strong> — a rare opportunity for discerning investors ready to engage with <strong>emerging markets, private placements, and alternative assets</strong>. This fund is <strong>prophetically aligned with the Portal of Wealth Transfer</strong> — crafted to unlock unique returns and <strong>dominion-focused growth</strong>.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-purple-800 bg-opacity-50 rounded-2xl p-6">
                <div className="text-3xl mb-2">💰</div>
                <p className="text-lg font-semibold">Start with as little as</p>
                <p className="text-xl font-bold text-yellow-300">KES 500,000 or USD 4,000</p>
              </div>
              <div className="text-center bg-purple-800 bg-opacity-50 rounded-2xl p-6">
                <div className="text-3xl mb-2">📈</div>
                <p className="text-lg font-semibold">Targeting up to</p>
                <p className="text-xl font-bold text-yellow-300">30% p.a (net of fees)</p>
              </div>
              <div className="text-center bg-purple-800 bg-opacity-50 rounded-2xl p-6">
                <div className="text-3xl mb-2">💼</div>
                <p className="text-lg font-semibold">Where vision meets value</p>
                <p className="text-xl font-bold text-yellow-300">Faith meets finance</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="bg-white py-2 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {['about', 'details', 'what we offer', 'get started', 'why-us', 'team', 'testimonials', 'faqs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                }`}
              >
                {tab.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {activeTab === 'about' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
              <div className="bg-purple-50 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-purple-800 mb-6 text-center">
                  A Kingdom-Minded, Opportunity-Driven Investment Fund
                </h3>
                <div className="prose max-w-4xl mx-auto text-lg text-gray-700">
                  <p className="mb-6">
                    Founded in <strong>December 2022</strong> under the leadership of PAAB Capital, this fund is more than financial — it's <strong>a movement for Kingdom wealth positioning</strong>.
                  </p>
                  <p>
                    With <strong>access to both local and global markets</strong>, we diversify investor portfolios while maintaining a <strong>strategic and spiritual foundation</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Key Fund Details</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: "Base Currency", value: "KES & USD" },
                  { label: "Minimum Investment", value: "KES 500,000 / USD 4,000" },
                  { label: "Top-up Minimum", value: "KES 50,000 / USD 400" },
                  { label: "Target Return", value: "30% per annum (net of fees)" },
                  { label: "Lock-in Period", value: "6 months" },
                  { label: "Management Fee", value: "6% p.a." },
                  { label: "Withholding Tax", value: "As per applicable law" }
                ].map((detail, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-600">
                    <h3 className="font-semibold text-purple-800 mb-2">{detail.label}</h3>
                    <p className="text-gray-700 font-medium">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'what we offer' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">What We Offer</h2>
              
              <div className=" rounded-3xl p-8 mb-8">
                <h3 className="text-3xl font-bold text-purple-800 mb-6 text-center">
                  Tailored Access to Global Wealth Instruments
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Private access to impact-driven, non-traditional investments",
                    "Diversified portfolio exposure to alternative assets",
                    "Expert management and quarterly performance reports", 
                    "Tailored investor support and strategic advisory"
                  ].map((offering, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-purple-600 font-bold text-xl">•</span>
                      <span className="text-gray-700 text-lg">{offering}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Asset Classes</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {assetClasses.map((asset, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
                      <span className="text-gray-700 font-medium">{asset}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'get started' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">How to Get Started</h2>
              <div className="max-w-4xl mx-auto">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center mb-6 bg-white rounded-2xl shadow-lg p-6">
                    <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700">{step}</p>
                  </div>
                ))}
                
              </div>
            </div>
          )}

          {activeTab === 'why-us' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Who We Are</h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
                  We are a team of <strong>financial strategists, analysts, and advisors</strong> — skilled in navigating both traditional and alternative markets. We combine <strong>market intelligence</strong> with <strong>prophetic foresight</strong>, ensuring that every investment decision aligns with <strong>Kingdom purpose and financial strength</strong>.
                </p>
                </div>
                <TeamSection />          
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Testimonials</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-4xl text-purple-600 mb-4">"</div>
                    <p className="text-gray-700 text-lg mb-6 italic">{testimonial.text}</p>
                    <p className="font-semibold text-purple-800">– {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">FAQs</h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full text-left p-6 hover:bg-purple-50 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                        <span className="text-2xl text-purple-600">
                          {expandedFaq === index ? '−' : '+'}
                        </span>
                      </div>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default SpecialFundPage;
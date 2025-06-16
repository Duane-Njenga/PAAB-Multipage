import { useState } from 'react';
import TeamSection from '../components/TeamSection';

function SpecialFundPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const assetClasses = [
    "Global Forex Trading", "Precious Metals", "Commodities", "Global Stocks and ETFs",
    "Government Securities", "NSE Securities", "Government Papers"
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
    <div>
      {/* Hero Section */}
      <section className="text-white py-10 relative overflow-hidden bg-gray-400/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">PAAB Capital Special Fund</h1>
            <p className="text-lg font-semibold text-gray-800">"Positioned for Wealth Transfer. Aligned with Destiny."</p>
          </div>
          <div className="rounded-3xl p-8 mb-8 backdrop-blur-sm">
            <h2 className="text-3xl underline font-bold text-center text-gray-800 mb-6">
              Your Portal to Extraordinary Wealth
            </h2>
            <p className="text-lg text-gray-800 text-center max-w-4xl mx-auto">
              Welcome to the <strong>PAAB Capital Special Fund</strong> — a rare opportunity for discerning investors ready to engage with <strong>emerging markets, private placements, and alternative assets</strong>. This fund is <strong>prophetically aligned with the Portal of Wealth Transfer</strong> — crafted to unlock unique returns and <strong>dominion-focused growth</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">About Us</h2>
          <div className="bg-purple-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-purple-800 text-center mb-6">
              A Kingdom-Minded, Opportunity-Driven Investment Fund
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
              Founded in <strong>December 2022</strong> under the leadership of PAAB Capital, this fund is more than financial — it's <strong>a movement for Kingdom wealth positioning</strong>.
              <br /><br />
              With <strong>access to both local and global markets</strong>, we diversify investor portfolios while maintaining a <strong>strategic and spiritual foundation</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Fund Details */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">Key Fund Details</h2>
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
      </section>

      {/* What We Offer */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Private access to impact-driven, non-traditional investments",
              "Diversified portfolio exposure to alternative assets",
              "Expert management and quarterly performance reports", 
              "Tailored investor support and strategic advisory"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Asset Classes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {assetClasses.map((asset, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-md text-center">
                  <span className="text-gray-700 font-medium">{asset}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">How to Get Started</h2>
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                {idx + 1}
              </div>
              <p className="text-lg text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">FAQs</h2>
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full text-left p-6 hover:bg-purple-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <span className="text-2xl text-purple-600">{expandedFaq === idx ? '−' : '+'}</span>
                </div>
              </button>
              {expandedFaq === idx && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SpecialFundPage;

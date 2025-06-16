import { useState } from 'react';

function UnitTrustFundPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const steps = [
    "Choose a fund that suits your goals",
    "Contact us through the contact us",
    "Complete the application form",
    "Submit your KYC documents",
    "Fund your account (KES or USD)",
    "Track performance through statements"
  ];

  const fundCategories = [
    {
      name: "Money Market Fund (KES / USD)",
      description: "Low-risk, short-term securities. Ideal for capital preservation and liquidity. Quarterly interest payouts and flexible withdrawals."
    },
    {
      name: "Fixed Income Fund (KES / USD)",
      description: "Bonds and interest-bearing instruments. Stable returns with moderate risk. Suitable for medium-term growth."
    },
    {
      name: "Equity Fund",
      description: "Listed stocks and growth equities. Higher risk, higher potential returns. Suitable for long-term investors."
    },
    {
      name: "Balanced Fund",
      description: "Mix of equities, bonds, and money markets. Medium-risk, diversified strategy."
    }
  ];

  const faqs = [
    { question: "What is the minimum investment amount?", answer: "KES 135,000 or USD 1,000." },
    { question: "Can I invest in multiple funds?", answer: "Yes, you can diversify across our funds." },
    { question: "How often can I withdraw?", answer: "Flexible withdrawals are available, depending on fund type." },
    { question: "Is my investment safe?", answer: "Yes, we are a licensed institution with a diversified, risk-managed approach." },
    { question: "How are returns paid out?", answer: "Returns are paid quarterly, based on performance and fund terms." }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Build Wealth Securely with the PAAB Capital Unit Trust Fund
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            A stable, diversified investment solution for new and experienced investors.
            Start with as little as <strong>KES 135,000 or USD 1,000</strong> and grow your wealth up to <strong>13% p.a</strong>.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* About Section */}
          <section className="space-y-6">
            <h2 className="text-4xl font-bold text-center text-gray-800">About the Fund</h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
              The PAAB Capital Unit Trust Fund is a regulated investment vehicle offering capital preservation, accessibility, and long-term growth.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ["Base Currency", "KES & USD"],
                ["Minimum Investment", "KES 135,000 / USD 1,000"],
                ["Top-up Minimum", "KES 13,500 / USD 100"],
                ["Target Return", "8-13% p.a."],
                ["Management Fee", "2.5% on interest earned"],
                ["Tax", "15% Withholding Tax"],
                ["Years in Operation", "5 years"]
              ].map(([label, value], index) => (
                <div key={index} className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-purple-800">{label}</h3>
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fund Categories */}
          <section className="space-y-6">
            <h2 className="text-4xl font-bold text-center text-gray-800">Fund Categories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {fundCategories.map((fund, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6 border">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">{fund.name}</h3>
                  <p className="text-gray-700">{fund.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Get Started */}
          <section className="space-y-6">
            <h2 className="text-4xl font-bold text-center text-gray-800">How to Get Started</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow">
                  <div className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-gray-800">FAQs</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left p-6 hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className={`text-lg font-semibold text-gray-800 ${expandedFaq === index ? "text-purple-600" : ""}`}>
                        {faq.question}
                      </h3>
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
          </section>
        </div>
      </div>
    </div>
  );
}

export default UnitTrustFundPage;

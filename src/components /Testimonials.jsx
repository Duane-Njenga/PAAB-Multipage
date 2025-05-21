const testimonials = [
  {
    name: "Grace M.",
    title: "Business Owner",
    quote:
      "Working with PAAB Capital has not only grown my investments — it has restored my confidence in divine financial alignment. They are not just managers of money, but ministers of destiny.",
  },
  {
    name: "Michael K.",
    title: "CEO & Entrepreneur",
    quote:
      "From the first consultation, I knew PAAB Capital was different. Their insight and strategy gave my company new momentum — both financially and spiritually.",
  },
  {
    name: "Angela N.",
    title: "Young Investor & Kingdom Builder",
    quote:
      "Their mentorship and training changed my view of money. I now see wealth as a tool for purpose, and I’m walking in greater freedom because of it.",
  },
  {
    name: "Joseph O.",
    title: "Institutional Partner",
    quote:
      "I came looking for financial solutions, but I found a pathway to purpose. PAAB Capital is a divine gateway to real transformation.",
  },
];

const TestimonialCard = ({ quote, name, title }) => (
  <div className="w-full bg-white rounded-xl shadow-xs p-6 my-4 hover:shadow-md shadow-purple-900">
    <p className="text-lg text-gray-700 italic mb-4">“{quote}”</p>
    <p className="text-right text-sm font-semibold text-indigo-700">
      — {name}, <span className="font-normal text-gray-600">{title}</span>
    </p>
  </div>
);

export default function TestimonialSection() {
    return (
        <section className="w-full px-4 md:px-16 py-8 bg-gray-50 ">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                />
            ))}
        </section>
    );
    
};

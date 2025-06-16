function Footer() {
  return (
    <footer id ="Footer"
      className="bg-yellow-300 text-gray-900 py-10 px-6 md:px-16">
      <div className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Newsletter Signup</h2>
        <p className="mb-4 text-sm">
          Stay Updated. Grow Wiser. <br />
          Join our community and receive the latest insights, market research, and Kingdom-driven financial strategies.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder=" Email Address"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          />
          <div className="flex items-start space-x-2">
            <input type="checkbox" id="consent" className="mt-1" />
            <label htmlFor="consent" className="text-sm">
              I agree to receive updates from PAAB Capital
            </label>
          </div>
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 cursor-pointer transition"
          >
            Subscribe
          </button>
          <p className="text-xs text-gray-700 pt-2">🔐 Your data is safe with us. No spam.</p>
        </form>
      </div>

      {/* Contact Info & Socials */}
      <div className="flex flex-col md:flex-row justify-between gap-10 border-t border-yellow-300 pt-8">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-2">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>We’re here to walk with you through the Portals of Wealth Transfer.</p>
          <p className="mt-2 font-medium">PAAB Capital Headquarters</p>
          <p>PAAB Capital (K) Limited</p>
          <p className="mt-2 font-semibold">📞 +254782176503</p>
          <h3 className="underline font-bold">Address:</h3>
          <p>New Hope House</p>
          <p>Along Ole Sangale Rd. Opp Strathmore Gate D, Madaraka</p>
          <p>Nairobi, Kenya</p>
          <p className="mt-2 font-semibold">📞 +254782176503</p>
          <p>
            <a
              href="https://www.google.com/maps/place/New+Hope+House,+Ole+Sangale+Rd,+Nairobi,+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 underline hover:text-indigo-900"
            >
              📍 View on Google Maps
            </a>
          </p>
        </div>

        
        <div className="md:w-1/2 space-y-3">
          <h3 className="text-xl font-semibold">Connect With Us Online</h3>
          <p>Let’s Stay Connected</p>
          <div className="flex flex-wrap gap-4 text-lg">
            <a href="#" className="hover:underline">🌐 Website</a>
            <a href="#" className="hover:underline">📘 Facebook</a>
            <a href="#" className="hover:underline">🟣 Instagram</a>
            <a href="#" className="hover:underline">🐦 X</a>
            <a href="#" className="hover:underline">▶️ YouTube</a>
          </div>
          <p className="text-sm pt-2">
            💬 Follow us for market insights, financial tips, and Kingdom wealth strategies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
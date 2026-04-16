const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side - Info */}
        <div className="bg-orange-500 text-white p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-6 text-lg">
            We'd love to hear from you! Whether you have a question about menu,
            orders, or anything else — our team is ready to help.
          </p>

          <div className="space-y-4">
            <p>📍 Location: Your City, India</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>📧 Email: support@foodie.com</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
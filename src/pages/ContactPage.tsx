export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Address</h3>
                <p className="text-gray-600">No. 413/10, Main Street, Kovil Kulam,<br />Palamunai, Arayampathi,<br />Batticaloa, Sri Lanka</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-gray-600">+94 65 2051 144</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600">Ultra.aluminium2019@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Satureday- Thursday: 9:00 AM - 7:00 PM<br />
                  
                  Friday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
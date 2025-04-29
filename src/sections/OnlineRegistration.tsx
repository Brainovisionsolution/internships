import React from 'react';

const OnlineRegistration: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Online Registration</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">
                  Ready to start your journey? Register now for our online internship program!
                </p>
                <p className="text-gray-600 mb-6">
                  Complete payment of ₹25,000 to secure your spot in the upcoming batch
                </p>
              </div>
              
              <div className="grid gap-6">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  Register Now
                </button>
              </div>

              <div className="text-sm text-gray-600 mt-6">
                <p className="mb-2">* Registration fee is non-refundable</p>
                <p>* Limited seats available, first come first serve basis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineRegistration;

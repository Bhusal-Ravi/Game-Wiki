import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <p className="text-xl mb-6">
            Have questions or feedback? We'd love to hear from you!
          </p>
          
          <div className="inline-flex items-center justify-center px-8 py-4 bg-white/20 rounded-lg text-xl font-medium">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            ravibh2003@gmail.com
          </div>
          
          <p className="mt-6 text-lg">
            We typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

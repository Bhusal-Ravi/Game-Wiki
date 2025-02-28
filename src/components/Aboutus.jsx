import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-rose-500 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Our Game Wiki</h1>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-4">
            Welcome to our Game Wiki - your ultimate destination for gaming guides, 
            walkthroughs, and community-driven content.
          </p>
          <p className="text-lg mb-4">
            Founded in 2023, we're dedicated to creating comprehensive resources 
            for gamers of all skill levels. Our wiki covers a wide range of games 
            including RPGs, FPS, Strategy, and more.
          </p>
          <p className="text-lg">
            Our passionate team of gamers works tirelessly to ensure our content 
            is accurate, helpful, and up-to-date. Join our community today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

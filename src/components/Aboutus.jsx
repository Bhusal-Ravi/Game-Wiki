import React from 'react';

const AboutUsPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Editor",
      bio: "Passionate gamer since the NES era. Created this wiki to build the ultimate resource for game enthusiasts.",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Samantha Chen",
      role: "Content Director",
      bio: "Gaming journalist with 8+ years of experience. Specializes in RPGs and strategy games.",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Marcus Williams",
      role: "Community Manager",
      bio: "Former esports competitor who now helps maintain our thriving community of contributors.",
      avatar: "/api/placeholder/100/100"
    }
  ];

  // Game categories we cover
  const gameCategories = [
    "RPGs", "FPS", "Strategy", "Adventure", "Simulation", 
    "Indie", "MMOs", "Fighting", "Sports", "Puzzle"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-purple-400">About Our Game Wiki</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Your ultimate destination for comprehensive gaming guides, walkthroughs, character builds, 
          lore exploration, and community-driven content.
        </p>
      </div>

      {/* Our Mission */}
      <div className="max-w-6xl mx-auto mb-20 bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 bg-purple-900 rounded-full flex items-center justify-center">
              <img src="/api/placeholder/200/200" alt="Gaming illustration" className="rounded-full" />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              Founded in 2020, our wiki began as a small passion project and has grown into one of the web's most 
              comprehensive gaming resources. We believe that games are more than just entertainment – they're 
              art forms with deep stories, complex mechanics, and vibrant communities.
            </p>
            <p className="text-lg mb-4">
              Our goal is to document every aspect of the games we love, creating a knowledge repository 
              that helps players of all skill levels enjoy their gaming experiences to the fullest.
            </p>
            <p className="text-lg">
              With thousands of articles and a dedicated community of contributors, we're building 
              the ultimate game wiki – one page at a time.
            </p>
          </div>
        </div>
      </div>

      {/* What We Cover */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-10 text-purple-400 text-center">Games We Cover</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {gameCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800 text-purple-300 px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-800 hover:text-white transition-all"
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Our Features */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-10 text-purple-400 text-center">What Makes Us Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-purple-700 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Detailed Guides</h3>
            <p>Step-by-step walkthroughs, boss strategies, puzzle solutions, and comprehensive how-to guides for every game.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-purple-700 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Community-Driven</h3>
            <p>Our content is created and maintained by gamers for gamers, with an active community that keeps everything up-to-date.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="w-16 h-16 bg-purple-700 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Deep Lore</h3>
            <p>We dive into the stories, characters, and worlds of games, uncovering hidden connections and explaining complex narratives.</p>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-10 text-purple-400 text-center">Meet Our Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-40 bg-purple-800 flex items-center justify-center">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="h-24 w-24 rounded-full border-4 border-gray-800"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">Join Our Community</h2>
        <p className="text-lg mb-8">
          Love gaming as much as we do? We're always looking for passionate gamers to contribute to our wiki. 
          Whether you're a writer, fact-checker, or just enthusiastic about your favorite games, there's a place for you here.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
          Become a Contributor
        </button>
      </div>
    </div>
  );
};

export default AboutUsPage;

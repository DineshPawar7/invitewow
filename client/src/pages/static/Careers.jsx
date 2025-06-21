import React from 'react';

const Careers = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-[#ff5733] text-center">Join Our Team</h1>
      <p className="text-gray-700 text-lg text-center mb-10">
        Be part of a growing startup that’s redefining how people celebrate. At InviteWow, we’re building a culture of innovation, ownership, and celebration.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border p-5 rounded shadow-md">
          <h3 className="text-xl font-semibold text-[#f2a900]">Frontend Developer</h3>
          <p className="text-gray-600">React, Tailwind, UI/UX, animations</p>
          <button className="mt-4 bg-[#ff5733] text-white px-4 py-2 rounded hover:bg-[#e04e2f]">
            Apply Now
          </button>
        </div>
        <div className="border p-5 rounded shadow-md">
          <h3 className="text-xl font-semibold text-[#f2a900]">Marketing Intern</h3>
          <p className="text-gray-600">Instagram, SEO, Ads, Community</p>
          <button className="mt-4 bg-[#ff5733] text-white px-4 py-2 rounded hover:bg-[#e04e2f]">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;

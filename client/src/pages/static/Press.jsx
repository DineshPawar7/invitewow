import React from 'react';

const Press = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-[#ff5733] mb-6">Press & Media</h1>
      <p className="text-lg text-gray-700 mb-8">
        InviteWow has been featured in national and global media for revolutionizing digital invitations.
      </p>
      <div className="flex flex-col items-center gap-4">
        <div className="border p-4 w-full md:w-2/3 rounded">
          <h3 className="text-xl font-semibold text-[#f2a900]">The Times of India</h3>
          <p className="text-gray-600">"InviteWow simplifies celebrations with beautifully designed e-invites."</p>
        </div>
        <div className="border p-4 w-full md:w-2/3 rounded">
          <h3 className="text-xl font-semibold text-[#f2a900]">YourStory</h3>
          <p className="text-gray-600">"A startup giving traditional invites a tech upgrade."</p>
        </div>
      </div>
    </section>
  );
};

export default Press;

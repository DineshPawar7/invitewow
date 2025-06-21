import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Design Stunning Wedding Invites",
    description: "Get creative with your wedding card – ideas, trends, and design hacks!",
    date: "June 15, 2025",
  },
  {
    id: 2,
    title: "Why Digital Invites Are the Future",
    description: "Eco-friendly, fast, and stylish – here's why going digital makes sense.",
    date: "May 30, 2025",
  },
];

const Blog = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#ff5733]">Our Blog</h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border p-5 rounded shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#f2a900]">{post.title}</h3>
            <p className="text-gray-600">{post.description}</p>
            <p className="text-sm text-gray-400 mt-2">{post.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

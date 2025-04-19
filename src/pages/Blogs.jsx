import React from "react";

const blogData = [
  {
    id: 1,
    title: "Why First Aid is Important in Every Home",
    summary:
      "Learn why having a first aid kit and knowledge about first aid procedures is crucial for every household.",
    author: "Dr. Riya Sharma",
    date: "April 12, 2025",
  },
  {
    id: 2,
    title: "How to Use a Digital Thermometer Correctly",
    summary:
      "A step-by-step guide on how to use digital thermometers for accurate temperature measurement.",
    author: "Dr. Aman Verma",
    date: "March 29, 2025",
  },
  {
    id: 3,
    title: "Choosing the Right Face Mask for Your Needs",
    summary:
      "Explore the different types of masks and how to choose the right one for daily use, travel, or medical needs.",
    author: "Dr. Neha Kapoor",
    date: "March 15, 2025",
  },
];

const Blogs = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-10 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10 underline decoration-green-300">
        Latest Health Blogs
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.summary}</p>
            <div className="text-sm text-gray-500">
              <p>By {blog.author}</p>
              <p>{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

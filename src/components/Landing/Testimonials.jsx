import React from "react";

// Testimonial data with image paths.
// Make sure these images exist in your public folder, e.g., 'public/images/'.
const testimonials = [
  {
    text: `“Devera helped me join a dev group within a day. We built a full-stack app together and it boosted my confidence massively.”`,
    name: "Aarav Singh",
    tag: "Student, BITS Pilani",
    image: "src/assets/pfp.webp",
  },
  {
    text: `“Loved the simplicity! I joined a ML team from IIT-Roorkee and worked on a research project — all thanks to Devera.”`,
    name: "Priyansh Mehta",
    tag: "AI Enthusiast",
    image: "src/assets/pfp.webp",
  },
  {
    text: `“I always wanted to build real-world projects. Devera gave me the chance to team up and build something awesome.”`,
    name: "Rahul Verma",
    tag: "3rd Year CSE, VIT",
    image: "src/assets/pfp.webp",
  },
];

/**
 * A responsive component to display student testimonials.
 * Uses Tailwind CSS for styling and dynamic mapping of data.
 */
export default function TestimonialSection() {
  return (
    <section className="min-h-screen w-full bg-[#0f172a] px-6 md:px-20 py-24 flex flex-col items-center justify-center text-white font-inter">
      {/* Testimonial Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          What Students <span className="text-sky-400">Say</span>
        </h2>
        <p className="text-gray-400 text-lg">
          From idea to execution — hear their journey.
        </p>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#1e293b] text-white rounded-2xl shadow-lg px-6 pt-12 pb-6 w-full hover:shadow-xl transition-all"
          >
            {/* Image Container for Profile Picture */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-[#0f172a] shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={`Profile of ${item.name}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-base leading-relaxed mb-6 italic text-gray-300 pt-4">
              {item.text}
            </p>

            {/* Name & Tag */}
            <div className="border-t border-gray-700 pt-4">
              <span className="block text-sky-400 font-semibold text-lg">
                {item.name}
              </span>
              <span className="text-gray-400 text-sm">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

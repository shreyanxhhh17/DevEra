import React from "react";
import step1 from "../../assets/create-acc.svg";
import step2 from "../../assets/join.svg";
import step3 from "../../assets/work.svg";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description: "Quickly register and access your personalized Devera dashboard.",
    image: step1,
  },
  {
    number: "02",
    title: "Join Groups",
    description: "Browse or filter dev teams based on your skills or interest.",
    image: step2,
  },
  {
    number: "03",
    title: "Work Together",
    description: "Collaborate on real-world projects, track XP and grow faster.",
    image: step3,
  },
];

export default function StepSection() {
  return (
    <section  id="how-it-works" className="bg-primary text-white px-6 md:px-20 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          How <span className="text-brandBlue">Devera</span> Works
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your journey from joining to building, simplified.
        </p>
      </div>

      {/* Horizontal Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-6 items-stretch ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 bg-[#1e293b] rounded-2xl p-6 shadow-md duration-300 text-center hover:scale-105 transition-transform"
          >
            {/* Step Number */}
            <div className="text-gray-200 text-2xl font-bold mb-4">
              {step.number}
            </div>

            {/* Image */}
            <div className="mb-6 h-40 flex items-center justify-center">
              <img
                src={step.image}
                alt={step.title}
                className="h-full object-contain"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

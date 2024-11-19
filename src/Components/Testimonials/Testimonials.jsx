import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayesha Begum",
      feedback:
        "The donations I received kept my family warm this winter. I'm forever grateful to the kind donors.",
      location: "Dhaka, Bangladesh",
    },
    {
      name: "Mohammad Karim",
      feedback:
        "A wonderful initiative! It feels great to see how many lives this platform is touching.",
      location: "Sylhet, Bangladesh",
    },
    {
      name: "Rahima Khatun",
      feedback:
        "I was able to donate with ease. This platform is doing an incredible job in connecting people.",
      location: "Chittagong, Bangladesh",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto mx-container px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg p-6 text-center"
            >
              <p className="italic text-gray-600 mb-4">
                "{testimonial.feedback}"
              </p>
              <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


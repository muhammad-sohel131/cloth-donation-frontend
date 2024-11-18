import React from "react";

const Volunteer = () => {
  const volunteers = [
    {
      name: "Farhan Ahmed",
      role: "Team Leader",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQF8giVrMcnNfA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516555825889?e=2147483647&v=beta&t=iUilSMshRKj_PzZCmNP9ewq-fmO7PtwhjTz1ypnCemE",
      description:
        "Farhan has been leading the team to ensure donations are distributed effectively.",
    },
    {
      name: "Samira Rahman",
      role: "Volunteer Coordinator",
      image: "https://media.licdn.com/dms/image/v2/C5103AQH10YgYDdTtag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1566949976479?e=2147483647&v=beta&t=RdgAIvKxqQcVwNQ3i2dJNCg0sKWdUFrup-osyG8IZ0g",
      description:
        "Samira works tirelessly to manage volunteer operations and logistics.",
    },
    {
      name: "Tariq Hossain",
      role: "Logistics Manager",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFb4j-6C75SWA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723807952015?e=2147483647&v=beta&t=r3PbdlYkXUUeOqe_e0wWwiVOuirmQZ1CH8ItbjkeKWQ",
      description:
        "Tariq ensures that donations reach the right hands efficiently.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 mx-container lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Volunteer Spotlight
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img
                src={volunteer.image}
                alt={volunteer.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="font-bold text-gray-800">{volunteer.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{volunteer.role}</p>
              <p className="text-gray-600">{volunteer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;

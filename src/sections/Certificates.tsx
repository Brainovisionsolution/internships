import React from 'react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Internship Completion Certificate",
      description: "Official AICTE & APSCHE approved certificate awarded upon successful completion of the internship program.",
      image: "https://brainovision.in/assets/img/certification1.jpg",
    },
    {
      title: "Training Completion Certificate",
      description: "Certificate recognizing completion of specialized AI training modules and theoretical components.",
      image: "https://brainovision.in/assets/img/certification2.jpg",
    },
    {
      title: "Letter of Recommendation (LOR)",
      description: "Personalized recommendation letter highlighting your skills, projects, and achievements during the program.",
      image: "https://brainovision.in/assets/img/certification3.jpg",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certification Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
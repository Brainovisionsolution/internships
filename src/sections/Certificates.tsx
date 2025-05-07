import React from 'react';

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

const Certificates: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Program Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-[800px] flex flex-col">
              <img 
                src={certificate.image} 
                alt={certificate.title}
                className="w-full h-[650px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                <p className="text-gray-600">{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

import React from 'react';

const OfferLetterPreview = () => (
  <div className="bg-white p-6 border-l-4 border-indigo-600 border-r border-t border-b border-gray-200 h-full flex flex-col font-sans text-xs shadow-inner">
    <div className="flex justify-between items-start mb-6">
      <img src="/logos/bovyellow.png" alt="Brainovision" className="h-8 md:h-10 object-contain" />
      <div className="text-right text-[10px] text-gray-500">
        <p>Date: {new Date().toLocaleDateString()}</p>
        <p>Ref: BOV/INT/2026/001</p>
      </div>
    </div>
    <div className="text-center font-bold text-base md:text-lg mb-6 text-gray-800 border-b pb-3 tracking-wide">
      INTERNSHIP OFFER LETTER
    </div>
    <div className="flex-grow text-gray-700 space-y-4 leading-relaxed text-[11px] md:text-xs">
      <p>Dear <strong className="text-black">Student Name</strong>,</p>
      <p>We are thrilled to formally offer you an internship position as an <strong className="text-indigo-700">"AI & Full Stack Intern"</strong> at Brain O Vision Solutions India Pvt. Ltd.</p>
      <p>During this internship, you will have the unique opportunity to work on industry-level capstone projects integrating Large Language Models (LLMs), Generative AI, and modern web architectures. You will be reporting directly to our senior project mentors.</p>
      <p>This is a completely hands-on technical program rigorously designed to bridge the gap between academic learning and industry readiness, strictly following the directives of AICTE & APSCHE.</p>
      <p>We eagerly look forward to welcoming you to the team!</p>
      <div className="pt-8 mt-auto">
        <p className="mb-4">Sincerely,</p>
        <div className="w-20 h-px bg-gray-400 mb-1"></div>
        <p className="font-bold text-gray-800">HR Department</p>
        <p className="text-[10px] text-gray-500">Brain O Vision Solutions India Pvt. Ltd.</p>
      </div>
    </div>
  </div>
);

const InternshipCertificatePreview = () => (
  <div className="bg-white p-2 border-[8px] border-double border-indigo-100 h-full relative overflow-hidden flex flex-col font-serif">
    {/* Watermark Background */}
    <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
      <img src="/logos/bovyellow.png" alt="watermark" className="w-64" />
    </div>
    
    <div className="flex justify-between items-center mb-2 relative z-10 px-4 pt-4">
      <img src="/logos/bovyellow.png" alt="Brainovision" className="h-10 md:h-12 object-contain" />
      <img src="/logos/aicte.png" alt="AICTE" className="h-12 md:h-14 object-contain" />
    </div>
    <div className="text-center relative z-10 flex-grow flex flex-col justify-center px-6">
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2 tracking-wide">CERTIFICATE</h1>
      <h2 className="text-xs md:text-sm font-semibold tracking-widest text-indigo-400 mb-8 uppercase">Of Internship Completion</h2>
      
      <p className="text-xs text-gray-500 mb-3 italic">This is proudly presented to</p>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-200 pb-1 self-center px-8">Student Name</h3>
      
      <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed max-w-sm mx-auto mb-8">
        for successfully completing the 8-weeks intensive <strong className="text-gray-800">"Generative AI & Full Stack Development"</strong> industry internship program at Brain O Vision Solutions India Pvt. Ltd., aligned perfectly with AICTE & APSCHE mandates.
      </p>
      
      <div className="flex justify-between items-end mt-auto pb-4">
        <div className="text-center">
          <div className="w-24 h-px bg-gray-500 mb-1"></div>
          <p className="text-[10px] font-bold text-gray-800">Program Director</p>
        </div>
        
        <div className="w-14 h-14 rounded-full border-4 border-yellow-400 flex items-center justify-center bg-yellow-50 shadow-inner rotate-12">
          <span className="text-[8px] font-bold text-yellow-600 tracking-tighter">OFFICIAL<br/>SEAL</span>
        </div>
        
        <div className="text-center">
          <div className="w-24 h-px bg-gray-500 mb-1"></div>
          <p className="text-[10px] font-bold text-gray-800">CEO, Brain O Vision</p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectCertificatePreview = () => (
  <div className="bg-white p-3 border-[10px] border-emerald-50 h-full relative overflow-hidden flex flex-col font-sans">
    <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-br-full -z-0 opacity-50"></div>
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-100 rounded-tl-full -z-0 opacity-50"></div>
    
    <div className="flex justify-between items-center mb-6 px-4 pt-4 relative z-10">
      <img src="/logos/bovyellow.png" alt="Brainovision" className="h-8 md:h-10 object-contain" />
      <img src="/logos/aicte.png" alt="AICTE" className="h-10 md:h-12 object-contain filter grayscale opacity-80" />
    </div>
    
    <div className="text-center relative z-10 flex-grow flex flex-col justify-center px-4">
      <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-widest uppercase self-center shadow-sm">
        Project Excellence Award
      </div>
      
      <h1 className="text-lg md:text-xl font-extrabold text-gray-800 mb-6 tracking-tight">PROJECT COMPLETION</h1>
      <p className="text-xs text-gray-500 mb-2 font-medium">This document formally verifies that</p>
      
      <h3 className="text-lg font-bold text-emerald-700 mb-4 bg-emerald-50 py-2 rounded-lg">Student Name</h3>
      
      <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed mb-8 px-2">
        has successfully architected and deployed an industrial-grade <br/><strong className="text-gray-800 text-sm block mt-2 mb-2">"Domain-Specific RAG Chatbot System"</strong><br/> as their major capstone project during the 2026 Full Stack & AI Internship program.
      </p>
      
      <div className="flex justify-between items-end mt-auto pb-4 px-2">
        <div className="text-center">
          <div className="w-20 h-px bg-gray-400 mb-1"></div>
          <p className="text-[10px] font-bold text-gray-700">Technical Mentor</p>
        </div>
        <div className="flex flex-col items-center">
           <img src="/logos/bovyellow.png" alt="Brainovision signature" className="h-6 opacity-30 mb-1" />
           <p className="text-[8px] text-gray-400">Verified By</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-px bg-gray-400 mb-1"></div>
          <p className="text-[10px] font-bold text-gray-700">Project Manager</p>
        </div>
      </div>
    </div>
  </div>
);

const certificates = [
  {
    title: "Sample Offer Letter",
    description: "Official internship offer letter provided to all selected students with detailed role descriptions.",
    component: <OfferLetterPreview />,
  },
  {
    title: "Internship Completion Certificate",
    description: "Official AICTE & APSCHE approved certificate awarded upon successful completion of the internship program.",
    component: <InternshipCertificatePreview />,
  },
  {
    title: "Project Completion Certificate",
    description: "Specialized certification verifying the completion of your major industry-grade capstone project.",
    component: <ProjectCertificatePreview />,
  }
];

const Certificates: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Program Certifications & Letters</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get officially recognized by industry leaders. Here is a preview of the official documents you will receive during and after completion of the program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-gray-100 rounded-t-2xl p-4 shadow-sm border border-gray-200 border-b-0 h-[450px] overflow-hidden group">
                <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-[1.02]">
                  {cert.component}
                </div>
              </div>
              <div className="bg-white p-6 rounded-b-2xl shadow-md border border-gray-100 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

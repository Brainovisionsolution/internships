import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

interface WhyJoinUsProps {
  isOnline?: boolean;
  isHybrid?: boolean;
}

const WhyJoinUs: React.FC<WhyJoinUsProps> = ({ isOnline = false, isHybrid = false }) => {
  const features = [
    { 
      name: 'Program Focus', 
      intensive: 'Generative AI, LLMs, RAG Pipelines, Transformers, Agentic AI, Responsible AI', 
      others: 'Basic AI/ML concepts or outdated curriculum without GenAI focus' 
    },
    { 
      name: 'Certification', 
      intensive: 'AICTE & APSCHE Approved + Brainovision Pvt. Ltd (ISO Certified, MSME Registered)', 
      others: 'Often not ISO certified or government registered' 
    },
    { 
      name: 'Curriculum', 
      intensive: '12 modules covering Transformers, SLM fine-tuning (LoRA/QLoRA), Prompt Engineering, RAG, LLM Evaluation (BLEU/ROUGE/BERTScore)', 
      others: 'Generic curriculum with outdated content and no GenAI coverage' 
    },
    { 
      name: 'Projects', 
      intensive: 'Build RAG Chatbots, Fine-tune SLMs, Create AI Agents, Real-time Streaming Apps, Content Generation Pipelines', 
      others: 'Basic mini-projects with no production relevance' 
    },
    { 
      name: 'Tools Mastered', 
      intensive: 'LangChain, HuggingFace, FAISS, PyTorch, Gemini API, GitHub Copilot, Antigravity, LoRA/QLoRA', 
      others: 'Limited to basic libraries only' 
    },
    { 
      name: 'Real-world Environment', 
      intensive: 'Complete focus on industry readiness with projects that mirror corporate environments', 
      others: 'Academic-focused learning with no corporate bridge' 
    },
    { 
      name: 'Mentor Team', 
      intensive: 'Mentored by AI industry experts and alumni from IITs, IIITs, and NITs', 
      others: 'Inexperienced or generic trainers' 
    }, 
    { 
      name: 'Program Fees', 
      intensive: '₹7,499 (Madhapur) or ₹8,499 (Kondapur) with ₹999 upfront (included in total fee)', 
      others: 'Often charge ₹15,000-₹50,000 without justified value' 
    },
    { 
      name: 'Learning Format', 
      intensive: isHybrid ? '50-60h Offline + 30-40h Online over 8 weeks | Live sessions + Hands-on labs' : '90 hours over 8 weeks | 1.5 hours/day | Live sessions + Hands-on labs', 
      others: 'Inconsistent schedule with minimal practical exposure' 
    }, 
    { 
      name: 'Official Partnerships', 
      intensive: 'In association with AICTE, Government of Andhra Pradesh, and NASSCOM', 
      others: 'Usually no official affiliations' 
    }, 
    { 
      name: 'Learning Resources', 
      intensive: 'LMS access for 1 year, regular assessments, and AI Interview Preparation Portal', 
      others: 'Limited or no post-session access, lacks assessment structure' 
    }, 
    { 
      name: 'Certification Value', 
      intensive: 'Government-approved certificates with Letter of Recommendation (LoR)', 
      others: 'Private certifications with limited industry recognition' 
    },
    { 
      name: 'Placement Assistance', 
      intensive: 'Internship completion leads to job opportunities from MNCs and AI startups', 
      others: 'No or vague placement guidance' 
    },
    { 
      name: 'Batch Size', 
      intensive: 'Limited to 35 seats per batch for personalized attention', 
      others: 'Large batches of 50-100 students with no individual focus' 
    }
  ];

  const onlineFeatures = [
    { 
      name: 'Program Focus', 
      intensive: '7 cutting-edge tech tracks (AI/ML, Java, MERN, Cloud, IoT, Cyber Security, Gen AI)', 
      others: 'Limited options or outdated curriculum' 
    },
    { 
      name: 'Certification', 
      intensive: 'AICTE & APSCHE Approved + Brainovision Pvt. Ltd (ISO Certified, MSME Registered)', 
      others: 'Often not ISO certified or government registered' 
    },
    { 
      name: 'Curriculum', 
      intensive: 'Industry-aligned modules focusing on practical full-stack and specialized skills', 
      others: 'Generic curriculum with outdated content' 
    },
    { 
      name: 'Projects', 
      intensive: 'Build real-world production-level applications in your chosen track', 
      others: 'Basic mini-projects with no production relevance' 
    },
    { 
      name: 'Mentor Team', 
      intensive: 'Mentored by industry experts and experienced professionals', 
      others: 'Inexperienced or generic trainers' 
    }, 
    { 
      name: 'Program Fees', 
      intensive: '₹1,500 (discounted from ₹14,999) for any technology track', 
      others: 'Often charge ₹15,000-₹50,000 without justified value' 
    },
    { 
      name: 'Learning Format', 
      intensive: 'Daily 1.5 Hour live sessions covering 2 Months', 
      others: 'Inconsistent schedule with minimal practical exposure' 
    }, 
    { 
      name: 'Official Partnerships', 
      intensive: 'In association with AICTE, Government of Andhra Pradesh, and NASSCOM', 
      others: 'Usually no official affiliations' 
    }, 
    { 
      name: 'Learning Resources', 
      intensive: 'LMS access, recorded sessions, regular assessments, and materials', 
      others: 'Limited or no post-session access' 
    }
  ];

  const displayFeatures = isOnline ? onlineFeatures : features;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide bg-purple-50 px-3 py-1 rounded-full border border-purple-100">Competitive Advantage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isOnline ? 'Why Choose Our Online Programs?' : 'Why Choose AIGA Over Other Programs?'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isOnline ? 'See how our virtual internship programs stand out from the rest.' : 'See how our intensive program compares to typical alternatives in the market.'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="min-w-[768px]">
            <div className="grid grid-cols-12 gap-4">
              {/* Header */}
              <div className="col-span-4"></div>
              <div className="col-span-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg p-4 text-center">
                  <h3 className="text-lg md:text-xl font-bold">{isOnline ? 'Online Virtual Programs' : 'AIGA - AI for Generation & Automation'}</h3>
                  <p className="text-xs mt-1 opacity-90">Brainovision Program</p>
                </div>
              </div>
              <div className="col-span-4">
                <div className="bg-gray-200 rounded-t-lg p-4 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-700">{isOnline ? 'Other Institute Programs' : 'Other AI Programs'}</h3>
                  <p className="text-xs mt-1 text-gray-600">Typical Institute Curriculum</p>
                </div>
              </div>

              {/* Features */}
              {displayFeatures.map((feature, index) => (
                <React.Fragment key={index}>
                  <div className={`col-span-4 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}>
                    <span className="font-semibold text-gray-900">{feature.name}</span>
                  </div>
                  <div className={`col-span-4 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200 text-center`}>
                    {feature.intensive && (
                      <span className="text-gray-700 text-sm leading-relaxed block">{feature.intensive}</span>
                    )}
                    {feature.hasCheck && (
                      <div className="flex justify-center">
                        <Check className="text-green-500" size={24} />
                      </div>
                    )}
                  </div>
                  <div className={`col-span-4 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200 text-center`}>
                    {feature.others && (
                      <span className="text-gray-500 text-sm block">{feature.others}</span>
                    )}
                    {feature.hasX && (
                      <div className="flex justify-center">
                        <X className="text-red-500" size={24} />
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="max-w-4xl mx-auto mt-10 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
            <p className="text-sm text-gray-700">
              <span className="font-bold text-purple-600">Note:</span> Our AIGA program is specifically designed for B.Tech students 
              aiming for industry roles in Generative AI and Automation. The curriculum is updated every 6 months to stay current 
              with industry trends. Limited to 35 seats per batch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
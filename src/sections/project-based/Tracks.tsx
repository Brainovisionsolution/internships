import { Target, Heart, GraduationCap, Droplets, Sun, Building2, Leaf, Cloud, Microscope, Sprout, Cpu, Brain, Bot, Github, Sparkles, Shield, BarChart3, Code2 } from 'lucide-react';

const sdgTracks = [
  { 
    icon: GraduationCap, 
    name: 'Quality Education', 
    sdgNumber: 'SDG 4',
    description: 'EdTech, adaptive learning, career guidance platforms',
    tags: ['AI Learning', 'Chatbots', 'Career Guidance'],
    color: 'text-red-600', 
    bg: 'bg-red-50',
    projects: ['AI Adaptive Learning Platform', 'Career Guidance Chatbot']
  },
  { 
    icon: Heart, 
    name: 'Good Health & Well-being', 
    sdgNumber: 'SDG 3',
    description: 'Healthcare tech, disease detection, mental health solutions',
    tags: ['HealthTech', 'AI Diagnosis', 'Chatbots'],
    color: 'text-rose-600', 
    bg: 'bg-rose-50',
    projects: ['AI Health Screening Chatbot', 'NCD Prevention Platform']
  },
  { 
    icon: Droplets, 
    name: 'Clean Water & Sanitation', 
    sdgNumber: 'SDG 6',
    description: 'Water quality monitoring, sanitation management systems',
    tags: ['IoT', 'Monitoring', 'Quality Control'],
    color: 'text-blue-600', 
    bg: 'bg-blue-50',
    projects: ['Water Quality Monitoring System', 'Sanitation Tracker']
  },
  { 
    icon: Sun, 
    name: 'Affordable & Clean Energy', 
    sdgNumber: 'SDG 7',
    description: 'Renewable energy solutions, energy efficiency platforms',
    tags: ['Renewable Energy', 'Efficiency', 'Solar Tech'],
    color: 'text-amber-600', 
    bg: 'bg-amber-50',
    projects: ['Solar Energy Optimizer', 'Energy Consumption Tracker']
  },
  { 
    icon: Building2, 
    name: 'Industry & Innovation', 
    sdgNumber: 'SDG 9',
    description: 'Industrial automation, smart manufacturing, innovation platforms',
    tags: ['Automation', 'Industry 4.0', 'Innovation'],
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50',
    projects: ['Smart Factory Dashboard', 'Innovation Management System']
  },
  { 
    icon: Leaf, 
    name: 'Climate Action', 
    sdgNumber: 'SDG 13',
    description: 'Climate monitoring, disaster preparedness, carbon tracking',
    tags: ['Climate Tech', 'Disaster Alerts', 'Carbon Footprint'],
    color: 'text-green-600', 
    bg: 'bg-green-50',
    projects: ['Extreme Weather Advisor', 'Carbon Tracker']
  },
  { 
    icon: Sprout, 
    name: 'Smart Agriculture', 
    sdgNumber: 'SDG 2',
    description: 'Crop monitoring, disease detection, precision farming',
    tags: ['AgriTech', 'Crop AI', 'Precision Farming'],
    color: 'text-lime-600', 
    bg: 'bg-lime-50',
    projects: ['Crop Disease Detection', 'Agricultural Advisory Platform']
  },
  { 
    icon: Microscope, 
    name: 'Healthcare Technologies', 
    sdgNumber: 'SDG 3',
    description: 'Medical devices, telemedicine, health monitoring systems',
    tags: ['MedTech', 'Telemedicine', 'Remote Monitoring'],
    color: 'text-teal-600', 
    bg: 'bg-teal-50',
    projects: ['Remote Health Monitor', 'Telemedicine Platform']
  },
  { 
    icon: Building2, 
    name: 'Sustainable Cities', 
    sdgNumber: 'SDG 11',
    description: 'Smart city solutions, waste management, urban planning',
    tags: ['Smart City', 'Waste Management', 'Urban Tech'],
    color: 'text-cyan-600', 
    bg: 'bg-cyan-50',
    projects: ['Smart Waste Segregation', 'City Dashboard']
  },
  { 
    icon: Cloud, 
    name: 'Digital Transformation', 
    sdgNumber: 'Cross-Cutting',
    description: 'Digital solutions for social impact and governance',
    tags: ['Cloud', 'Digital India', 'GovTech'],
    color: 'text-purple-600', 
    bg: 'bg-purple-50',
    projects: ['Digital Governance Platform', 'Social Impact App']
  },
];

const emergingTech = [
  { icon: Cpu, name: 'Artificial Intelligence', tools: ['ML', 'NLP', 'Computer Vision'], color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Bot, name: 'Generative AI', tools: ['Prompt Engineering', 'LLMs', 'Antigravity'], color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Github, name: 'AI Development Tools', tools: ['GitHub Copilot', 'Codex', 'Google AI Studio'], color: 'text-gray-600', bg: 'bg-gray-50' },
  { icon: Sparkles, name: 'Emerging Tech', tools: ['IoT', 'Cloud', 'Blockchain'], color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

export default function Tracks() {
  return (
    <section id="tracks" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 mb-4">
            <Target className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">UN Sustainable Development Goals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            SDG-Aligned{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
              Project Domains
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Choose from 10+ SDG-focused project domains addressing real-world challenges in education, 
            healthcare, climate, agriculture, and sustainable development.
          </p>
        </div>

        {/* SDG Project Domains Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-16">
          {sdgTracks.map(({ icon: Icon, name, sdgNumber, description, tags, color, bg, projects }) => (
            <div
              key={name}
              className="group bg-white rounded-xl md:rounded-2xl border border-gray-100 p-4 md:p-5 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 md:w-12 md:h-12 ${bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${color}`} />
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {sdgNumber}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{name}</h3>
              <p className="text-gray-500 text-xs mb-3 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-2 mt-1">
                <p className="text-[10px] text-gray-400 font-medium">Sample Projects:</p>
                <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">{projects.join(' • ')}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why SDG Projects Matter - New from proposal */}
        <div className="mb-12 md:mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" />
                Why SDG-Based Projects Matter?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                The United Nations estimates that achieving SDGs will require investments of over 
                <span className="font-semibold text-gray-800"> USD 5-7 trillion annually</span>, creating significant 
                opportunities for innovation and technology-driven solutions.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Over <span className="font-semibold">70% of global organizations</span> are integrating sustainability 
                and ESG objectives into their business strategies — creating high demand for professionals with 
                SDG-aligned project experience.
              </p>
            </div>
            <div className="flex-1 bg-white/60 rounded-xl p-4 md:p-5">
              <p className="font-semibold text-gray-800 text-sm mb-2">Career Advantages:</p>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Demonstrates real-world problem-solving skills
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Showcases emerging technology expertise
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Strengthens resumes & portfolio for top employers
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Preferred for higher education applications
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies & Tools Section - Updated from proposal */}
        <div className="mb-10 md:mb-12">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-1.5 mb-4">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Emerging Technologies</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Technologies & Tools Covered
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Master the latest tools and frameworks used by industry leaders
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {emergingTech.map(({ icon: Icon, name, tools, color, bg }) => (
              <div
                key={name}
                className="group bg-white rounded-xl md:rounded-2xl border border-gray-100 p-4 md:p-5 hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 ${bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${color}`} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base mb-2">{name}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map(tool => (
                    <span key={tool} className="bg-gray-100 text-gray-500 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Projects Showcase - New from proposal */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-600" />
            Sample Projects You'll Build
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              'AI-Powered Agricultural Advisory & Crop Disease Detection Platform',
              'AI Health Screening & NCD Prevention Chatbot',
              'AI Extreme Weather & Disaster Preparedness Advisor',
              'Smart Waste Segregation & Circular Economy Tracker',
              'AI Adaptive Learning & Career Guidance Platform',
              'Renewable Energy Optimization System',
              'Smart Water Quality Monitoring Dashboard',
              'Digital Healthcare Access Platform',
            ].map(project => (
              <div key={project} className="flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-xs md:text-sm">{project}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            🚀 50+ more project ideas available across 10+ SDG domains
          </p>
          <a
            href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-md"
          >
            Register Now — ₹999 Only
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Add ArrowRight import if not already present
import { ArrowRight } from 'lucide-react';
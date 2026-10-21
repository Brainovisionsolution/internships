import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Download, Video, Bot, Sparkles, Cpu, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Module {
  title: string;
  description: string;
  topics: string[];
  duration: string;
  tools: string[];
}

const Curriculum: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<'aifilm' | 'robotics'>('aifilm');
  const [openModule, setOpenModule] = useState<number | null>(0);

  const aiFilmModules: Module[] = [
    {
      title: "Module 1: AI Prompting, Concept Art & Worldbuilding",
      duration: "Day 1 (Morning)",
      description: "Master cinema prompt engineering, creating photorealistic characters, lighting styles, camera lens simulations, and maintaining consistent character faces.",
      topics: [
        "Prompt structure for cinematic realism",
        "Midjourney v6 & FLUX character face-locking",
        "Cinematic framing (Close-up, Wide, Dutch angle, Drone)",
        "Style referencing and multi-prompt compositions"
      ],
      tools: ["Midjourney", "FLUX", "Magnific AI"]
    },
    {
      title: "Module 2: AI Screenwriting & Dynamic Storyboarding",
      duration: "Day 1 (Afternoon)",
      description: "Generate structured film screenplays, three-act drama pacing, dialog scripting, and visual shot-by-shot storyboard generation.",
      topics: [
        "Scriptwriting using ChatGPT & Claude for cinema",
        "Beat sheets, dialog punch-up & scene pacing",
        "Automated shot-list generation",
        "Visual storyboard alignment with soundtrack cues"
      ],
      tools: ["Claude 3.5 Sonnet", "ChatGPT Plus", "StoryToolkit AI"]
    },
    {
      title: "Module 3: Generative AI Video & Camera Motion Dynamics",
      duration: "Day 2 (Morning)",
      description: "Transform still storyboard frames into breathtaking cinematic motion with camera zooms, pans, tracking shots, and slow motion.",
      topics: [
        "Runway Gen-3 Alpha text-to-video and image-to-video",
        "Controlling camera motion vectors (Pan, Tilt, Zoom, Roll)",
        "Pika Labs & Luma Dream Machine cinematic physics",
        "Motion brush & selective element animation"
      ],
      tools: ["Runway Gen-3", "Luma Dream Machine", "Pika Labs"]
    },
    {
      title: "Module 4: AI Audio, Voice Cloning & Soundscapes",
      duration: "Day 2 (Mid-Day)",
      description: "Synthesize lifelike voice acting, multi-lingual dubbing, emotional speech delivery, and orchestral cinematic music scores.",
      topics: [
        "ElevenLabs realistic voice cloning & emotional inflection",
        "Automatic lip-sync generation with character video",
        "Suno AI & Udio cinematic score and sound effect generation",
        "Spatial audio mastering and noise cleanup"
      ],
      tools: ["ElevenLabs", "Suno AI", "SyncLabs"]
    },
    {
      title: "Module 5: Final Post-Production, AI Editing & Film Screening",
      duration: "Day 2 (Evening)",
      description: "Assemble clips in Premiere Pro / DaVinci Resolve, apply AI color grading, upscaling to 4K, and premiere your short film on the big screen.",
      topics: [
        "Timeline assembly and AI cut transitions",
        "Topaz Video AI upscaling to 4K resolution",
        "Sound effects layering & dialogue mixing",
        "Final film premiere, critique & certificate distribution"
      ],
      tools: ["Premiere Pro", "Topaz Video AI", "DaVinci Resolve"]
    }
  ];

  const roboticsModules: Module[] = [
    {
      title: "Session 1: Embedded Systems Architecture & Microcontroller Setup",
      duration: "09:30 AM – 11:00 AM",
      description: "Introduction to robotics hardware, microcontroller architecture, GPIO pinouts, and setting up the embedded development environment.",
      topics: [
        "Embedded computing vs general programming",
        "Microcontroller pin configuration & power distribution",
        "Flashing firmware & debugging over serial monitor",
        "Breadboard prototyping & circuit safety rules"
      ],
      tools: ["Arduino IDE", "Microcontroller Board", "Serial Monitor"]
    },
    {
      title: "Session 2: Robot Chassis Mechanical Assembly & Motor Control",
      duration: "11:15 AM – 01:00 PM",
      description: "Hands-on assembly of the 2WD robot chassis, mounting dual gear motors, wiring the L298N motor driver, and writing speed & direction control code.",
      topics: [
        "Chassis assembly & motor bracket mounting",
        "H-Bridge motor driver circuitry & PWM speed control",
        "Writing locomotion algorithms (Forward, Reverse, Pivot, Spin)",
        "Differential drive steering mechanics"
      ],
      tools: ["L298N Motor Driver", "Dual BO Motors", "Chassis Hardware"]
    },
    {
      title: "Session 3: Ultrasonic Sensor Integration & Obstacle Avoidance",
      duration: "02:00 PM – 03:45 PM",
      description: "Connect the HC-SR04 sonar sensor, calculate time-of-flight distance in centimeters, and implement autonomous obstacle avoidance logic.",
      topics: [
        "Ultrasonic trigger & echo signal timing equations",
        "Calibrating obstacle threshold distances (safe vs danger zones)",
        "State machine programming for autonomous avoidance decisions",
        "Testing wall-detection and maze escape behaviors"
      ],
      tools: ["HC-SR04 Ultrasonic Sensor", "Autonomous Logic", "Embedded C"]
    },
    {
      title: "Session 4: Smartphone Bluetooth Wireless Control & Telemetry",
      duration: "04:00 PM – 05:00 PM",
      description: "Pair the HC-05 Bluetooth module with an Android/iOS smartphone app to manually pilot the robot wirelessly with joystick & buttons.",
      topics: [
        "UART serial communication between phone and microcontroller",
        "Configuring Bluetooth baud rates and pairing commands",
        "Developing real-time directional remote control",
        "Preparing the bot for the live arena obstacle race"
      ],
      tools: ["HC-05 Bluetooth Module", "Robotics Controller App"]
    },
    {
      title: "Session 5: Live Arena Competition, Project Review & Certification",
      duration: "05:00 PM – 05:30 PM",
      description: "Compete against fellow workshop attendees on the obstacle race track, receive project review feedback, and receive official certificates.",
      topics: [
        "Obstacle arena time trial challenge",
        "Hardware optimization tips & take-home packaging",
        "Career pathways in Robotics & Embedded AI",
        "AICTE & APSCHE approved certificate presentation"
      ],
      tools: ["Arena Track", "AICTE & APSCHE Certificate"]
    }
  ];

  const currentModules = activeTrack === 'aifilm' ? aiFilmModules : roboticsModules;

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-wider bg-purple-50 border border-purple-100 px-3.5 py-1 rounded-full">
              Workshop Syllabus
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Practical Workshop Curriculum
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            100% project-driven curriculum designed for complete mastery within 1 to 2 days of intensive hands-on lab practice.
          </p>

          {/* Track Switcher */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-100 p-1.5 rounded-2xl inline-flex space-x-2">
              <button
                onClick={() => {
                  setActiveTrack('aifilm');
                  setOpenModule(0);
                }}
                className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTrack === 'aifilm'
                    ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <Video size={18} className="mr-2" />
                AI Film Making (2 Days)
              </button>
              <button
                onClick={() => {
                  setActiveTrack('robotics');
                  setOpenModule(0);
                }}
                className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTrack === 'robotics'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <Bot size={18} className="mr-2" />
                Robotics Workshop (1 Day)
              </button>
            </div>
          </div>
        </div>

        {/* Modules Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {currentModules.map((module, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-100 last:border-b-0 transition-colors duration-300 ${
                  openModule === index ? 'bg-purple-50/20' : 'hover:bg-gray-50'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenModule(openModule === index ? null : index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      openModule === index 
                        ? activeTrack === 'aifilm' ? 'bg-rose-600 text-white shadow-md' : 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {activeTrack === 'aifilm' ? <Film size={18} /> : <Bot size={18} />}
                    </div>
                    <div>
                      <h3 className={`font-bold text-base md:text-lg transition-colors duration-300 ${
                        openModule === index 
                          ? activeTrack === 'aifilm' ? 'text-rose-700' : 'text-blue-700'
                          : 'text-gray-900'
                      }`}>
                        {module.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium">{module.duration}</p>
                    </div>
                  </div>
                  <div className={`text-gray-400 transition-transform duration-300 ${
                    openModule === index ? 'rotate-180 text-purple-600' : ''
                  }`}>
                    <ChevronDown size={22} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openModule === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 pl-16 md:pl-20">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{module.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-xs text-gray-900 uppercase tracking-wider mb-2">Hands-on Topics:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-start text-xs md:text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 shrink-0"></span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
                      <span className="text-[11px] font-bold text-gray-500 uppercase">Tools & Tech:</span>
                      {module.tools.map((tool, toolIdx) => (
                        <span
                          key={toolIdx}
                          className="bg-purple-50 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-md border border-purple-100"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeTrack === 'robotics' && (
            <div className="mt-6 text-center">
              <Link
                to="/robotics"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-bold text-sm bg-indigo-50 px-5 py-2.5 rounded-xl border border-indigo-100 transition-colors"
              >
                <Bot size={16} className="mr-2" />
                Want more robotics details? Visit Dedicated Robotics Page →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;

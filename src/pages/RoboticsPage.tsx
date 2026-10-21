import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { 
  Bot, 
  Cpu, 
  Zap, 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ChevronRight, 
  Download, 
  Sparkles, 
  Layers, 
  Radio, 
  Compass, 
  Phone, 
  MapPin, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RoboticsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const batchDates = [
    { date: "1st Nov 2026", seats: "30 Seats Left", status: "Filling Fast" },
    { date: "15th Nov 2026", seats: "30 Seats Left", status: "Open" },
    { date: "1st Dec 2026", seats: "30 Seats Left", status: "Open" },
    { date: "15th Dec 2026", seats: "30 Seats Left", status: "Open" }
  ];

  const hardwareKitItems = [
    {
      title: "Microcontroller Board",
      desc: "High-performance programmable development board for embedded control",
      icon: <Cpu className="text-blue-500" size={24} />
    },
    {
      title: "L298N Motor Driver",
      desc: "Dual H-Bridge motor driver module to regulate high-torque DC motors",
      icon: <Zap className="text-yellow-500" size={24} />
    },
    {
      title: "Ultrasonic Distance Sensor",
      desc: "HC-SR04 sonar sensor for real-time obstacle detection and distance tracking",
      icon: <Radio className="text-purple-500" size={24} />
    },
    {
      title: "Dual BO Motors & Wheels",
      desc: "Geared DC motors with heavy-grip rubber tires and front caster wheel",
      icon: <Compass className="text-green-500" size={24} />
    },
    {
      title: "Robotic Chassis Kit",
      desc: "Durable multi-layer acrylic chassis frame with pre-drilled mounts",
      icon: <Layers className="text-red-500" size={24} />
    },
    {
      title: "Bluetooth Wireless Module",
      desc: "HC-05 module for smartphone app control and real-time telemetry",
      icon: <Bot className="text-cyan-500" size={24} />
    }
  ];

  const agenda = [
    {
      time: "09:30 AM – 11:00 AM",
      title: "Session 1: Embedded Systems & Microcontroller Fundamentals",
      desc: "Understand microcontroller architecture, IDE setup, flashing firmware, digital & analog I/O pins, and basic actuator control."
    },
    {
      time: "11:15 AM – 01:00 PM",
      title: "Session 2: Mechanical Assembly & Motor Driver Interfacing",
      desc: "Hands-on assembly of the 2WD robot chassis, mounting motors, wiring the L298N driver, and coding forward, reverse, and pivot turns."
    },
    {
      time: "01:00 PM – 02:00 PM",
      title: "Networking Lunch & Interactive Tech Talk",
      desc: "Lunch provided at venue. Interact with senior robotics engineers and learn about robotics career opportunities."
    },
    {
      time: "02:00 PM – 03:45 PM",
      title: "Session 3: Autonomous Sensor Logic & Obstacle Avoidance",
      desc: "Interface the ultrasonic sensor, calibrate distance thresholds, and program autonomous obstacle avoidance navigation algorithms."
    },
    {
      time: "04:00 PM – 05:00 PM",
      title: "Session 4: Bluetooth Control & Live Arena Competition",
      desc: "Pair smartphone Bluetooth app to maneuver the robot wirelessly. Participate in the thrilling Obstacle Track Arena challenge!"
    },
    {
      time: "05:00 PM – 05:30 PM",
      title: "Session 5: Project Review, Winner Felicitations & Certification",
      desc: "Review projects, announce competition champions, and distribute AICTE & APSCHE approved workshop certificates."
    }
  ];

  const faqs = [
    {
      q: "Do I get to take the robot home after the workshop?",
      a: "Yes! The complete hardware kit (chassis, microcontroller, motors, sensors, and cables) is provided to you for hands-on assembly during the workshop and is yours to take home."
    },
    {
      q: "Do I need prior coding or electronics knowledge?",
      a: "No prior experience is required! Our mentors will guide you step-by-step from breadboard basics to writing embedded C code from scratch."
    },
    {
      q: "What is the workshop fee and schedule?",
      a: "The workshop fee is ₹5,000/- only (original fee ₹10,000, 50% discount). Batches start on November 1st, with a new batch running every 15 days."
    },
    {
      q: "Will I receive a recognized certificate?",
      a: "Yes! Every participant receives an official, industry-recognized Certificate of Completion approved by AICTE & APSCHE in collaboration with Brainovision."
    },
    {
      q: "Where is the workshop venue located?",
      a: "The workshop takes place at our modern state-of-the-art lab in HITEC City / Madhapur, Hyderabad."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-950 via-indigo-950 to-purple-950 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(#6366f1 1.5px, transparent 0)',
              backgroundSize: '36px 36px',
            }}
          ></div>
        </div>

        {/* Glow orbs */}
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-25"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-25"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center bg-indigo-500/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-indigo-400/30">
                <Bot size={16} className="text-cyan-300 mr-2 animate-bounce" />
                <span className="text-xs md:text-sm font-semibold text-cyan-200">
                  1-Day Hands-on Hardware Workshop • Hyderabad
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                AUTONOMOUS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
                  ROBOTICS WORKSHOP
                </span>
              </h1>

              <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl leading-relaxed">
                Build, code, and race your own autonomous obstacle-avoiding and smartphone-controlled robot in <strong>just 1 Day</strong>. 100% hands-on hardware kit included — assemble and take it home!
              </p>

              {/* Badges / Highlights */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium flex items-center">
                  <Clock size={15} className="mr-2 text-cyan-300" />
                  1 Full Day (09:30 AM – 05:30 PM)
                </span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium flex items-center">
                  <Cpu size={15} className="mr-2 text-yellow-300" />
                  Hardware Kit Included
                </span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium flex items-center">
                  <Award size={15} className="mr-2 text-purple-300" />
                  AICTE & APSCHE Approved
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://rzp.io/rzp/8KPMtnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 flex items-center justify-center shadow-xl shadow-indigo-900/50 transform hover:-translate-y-0.5 text-base"
                >
                  <Zap size={20} className="mr-2" />
                  Enroll for ₹5,000 Only
                </a>
                <a
                  href="#agenda"
                  className="bg-transparent hover:bg-white/10 border border-indigo-300/40 text-white font-semibold rounded-xl px-7 py-4 transition-all duration-300 flex items-center justify-center text-base"
                >
                  View 1-Day Agenda
                  <ChevronRight size={18} className="ml-1.5" />
                </a>
              </div>

              {/* Accreditations */}
              <div className="mt-10 flex flex-wrap gap-6 items-center pt-6 border-t border-indigo-900/60">
                <div className="flex items-center">
                  <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center">
                    <img src="/logos/aicte.png" alt="AICTE" className="h-7 w-auto" />
                  </div>
                  <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center -ml-2">
                    <img src="/logos/apsche.png" alt="APSCHE" className="h-7 w-auto" />
                  </div>
                  <span className="ml-3 text-indigo-200 text-sm font-medium">Govt Recognized Certification</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-300 text-lg font-bold">★★★★★</span>
                  <span className="ml-2 text-purple-200 text-sm">Rated 4.9/5 by 3,400+ attendees</span>
                </div>
              </div>
            </div>

            {/* Right Card - Pricing & Booking Preview */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-50 blur-xl"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-7 md:p-8 text-white shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-extrabold px-3 py-1 rounded-full">
                      50% SPECIAL DISCOUNT
                    </span>
                    <span className="text-cyan-300 text-xs font-semibold">Limited to 30 Seats</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">1-Day Robotics Bootcamp</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Hands-on Hardware Assembly • Sensor Coding • Arena Racing • Take-home Robot
                  </p>

                  <div className="p-4 bg-gray-800/80 rounded-2xl border border-gray-700/60 mb-6">
                    <div className="text-xs text-gray-400 mb-1">Registration Fee</div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold text-white">₹5,000</span>
                      <span className="text-lg text-gray-400 line-through ml-3">₹10,000</span>
                      <span className="text-green-400 text-xs font-bold ml-3">SAVE ₹5,000</span>
                    </div>
                    <div className="text-xs text-indigo-300 mt-2">
                      Includes complete physical hardware kit + lunch + certificate
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-200">
                      <Calendar size={16} className="text-cyan-400 mr-2.5 shrink-0" />
                      <span>Next Batch: <strong>1st Nov 2026</strong> (Every 15 Days)</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <Clock size={16} className="text-cyan-400 mr-2.5 shrink-0" />
                      <span>Timing: <strong>09:30 AM – 05:30 PM</strong></span>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <MapPin size={16} className="text-cyan-400 mr-2.5 shrink-0" />
                      <span>Venue: <strong>Madhapur Lab, Hyderabad</strong></span>
                    </div>
                  </div>

                  <a
                    href="https://rzp.io/rzp/8KPMtnd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3.5 rounded-xl text-center flex items-center justify-center shadow-lg transition-all"
                  >
                    <Zap size={18} className="mr-2" />
                    Book Seat Now @ ₹5,000
                  </a>

                  <p className="text-center text-xs text-gray-400 mt-3">
                    Instant confirmation • 100% money-worthy practical training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Kit Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-blue-100">
              <Cpu size={14} className="mr-1.5" />
              What You Receive & Work On
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Complete Hardware Kit Included
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Every student gets their own individual robotics hardware components kit to build, solder/wire, program, and take home after the workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hardwareKitItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="font-bold text-gray-900 text-base md:text-lg">Take-Home Robot Guarantee</div>
              <div className="text-sm text-gray-600">You take the robot you built back with you to showcase to your college & peers!</div>
            </div>
            <a
              href="https://rzp.io/rzp/8KPMtnd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm shrink-0 shadow-md"
            >
              Reserve Kit & Seat
            </a>
          </div>
        </div>
      </section>

      {/* 1-Day Agenda Timeline */}
      <section id="agenda" className="py-16 md:py-24 bg-gray-50 border-y border-gray-200/70">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-purple-50 text-purple-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-purple-100">
              <Clock size={14} className="mr-1.5" />
              Hour-By-Hour Roadmap
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              1-Day Intensive Workshop Agenda
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Structured to take you from total zero to a functioning autonomous robot in just 8 packed, exciting hours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {agenda.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col md:flex-row gap-5 items-start md:items-center hover:border-indigo-300 transition-colors"
              >
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-2.5 text-indigo-700 font-bold text-sm shrink-0">
                  {item.time}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Dates & Venue */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Upcoming Batch Dates (Starting Nov 1st)
            </h2>
            <p className="text-gray-600">
              New batch begins every 15 days. Batch size is strictly limited to 30 students to provide personal hardware assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {batchDates.map((b, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-5 border border-gray-200 text-center shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center mx-auto mb-3">
                  {idx + 1}
                </div>
                <div className="text-lg font-extrabold text-gray-900 mb-1">{b.date}</div>
                <div className="text-xs text-green-700 font-semibold mb-2">{b.seats}</div>
                <span className="inline-block bg-indigo-50 text-indigo-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-indigo-100">
                  {b.status}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 text-white rounded-3xl p-8 text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Venue Location</h3>
            <p className="text-gray-300 text-sm max-w-lg mx-auto mb-6">
              Brainovision Technology Lab, 2nd Floor, SS Chambers, Ayyappa Society, HITEC City, Madhapur, Hyderabad, Telangana - 500081
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-indigo-200">
              <span>✓ AC Lab Facilities</span>
              <span>•</span>
              <span>✓ High-Speed WiFi & Power Stations</span>
              <span>•</span>
              <span>✓ Dedicated Testing Track</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center bg-purple-50 text-purple-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-purple-100">
              <HelpCircle size={14} className="mr-1.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Got Questions on Robotics?</h2>
            <p className="text-gray-600">Everything you need to know about the 1-Day Hands-on Robotics Workshop.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-gray-900 focus:outline-none"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA Card */}
          <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-10 text-white text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
              Ready to Build Your First Robot in 1 Day?
            </h3>
            <p className="text-indigo-100 text-sm md:text-base max-w-xl mx-auto mb-6">
              Launch discount active! Pay only ₹5,000 (was ₹10,000) for the complete 1-day experience and take-home hardware kit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://rzp.io/rzp/8KPMtnd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-900 hover:bg-gray-100 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                Book Your Seat @ ₹5,000
              </a>
              <Link
                to="/"
                className="bg-indigo-700/60 hover:bg-indigo-700 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                ← Back to All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RoboticsPage;

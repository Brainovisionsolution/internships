import React, { useState } from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BatchTimingProps {
  isOnline: boolean;
}

const BatchTimings: React.FC<BatchTimingProps> = ({ isOnline }) => {
  const [selectedTiming, setSelectedTiming] = useState<string | null>(null);
  
  const onlineTimings = [
    { 
      time: "06:30 AM - 07:45 AM",
      technologies: ["Java Full Stack"],
      fee: "₹999",
      syllabus: "https://brainovision.in/ai-internship-java-fullstack-syllabus"
    },
    { 
      time: "06:30 AM - 07:45 AM",
      technologies: ["Digital Marketing"],
      fee: "₹1,999",
      syllabus: "https://brainovision.in/ai-internship-digital-marketing-syllabus"
    },
    { 
      time: "09:00 AM - 10:30 AM",
      technologies: ["MERN Stack"],
      fee: "₹1,999",
      syllabus: "https://brainovision.in/ai-internship-mern-syllabus"
    },
    { 
      time: "11:00 AM - 12:30 PM",
      technologies: ["Generative AI"],
      fee: "₹1,999",
      syllabus: "https://brainovision.in/ai-internship-gen-ai-syllabus"
    },
    { 
      time: "02:30 PM - 04:00 PM",
      technologies: ["MERN Stack"],
      fee: "₹1,999",
      syllabus: "https://brainovision.in/ai-internship-mern-syllabus"
    },
    { 
      time: "06:30 PM - 08:00 PM",
      technologies: ["ServiceNow (L1)"],
      fee: "₹2,999",
      syllabus: "https://brainovision.in/ai-internship-servicenow-syllabus"
    }
  ];
};

export default BatchTimings;

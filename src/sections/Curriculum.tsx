import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface Module {
  title: string;
  description: string;
  topics: string[];
  weeks: string;
}

const Curriculum: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  

  };

};

export default Curriculum;

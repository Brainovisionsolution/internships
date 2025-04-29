import React, { useState } from 'react';
import { Calendar, Check } from 'lucide-react';

interface BatchDatesProps {
  isOnline: boolean;
}

const BatchDates: React.FC<BatchDatesProps> = ({ isOnline }) => {
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);
  

};

export default BatchDates;

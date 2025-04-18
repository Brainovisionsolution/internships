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
  
  const modules: Module[] = [
    {
      title: "AI & Data Science Foundations",
      description: "Build strong fundamentals in AI concepts and data handling",
      topics: [
        "Introduction to AI & Machine Learning",
        "Python Programming for AI",
        "Data Types and Structures",
        "Data Collection and Preprocessing",
        "Exploratory Data Analysis"
      ],
      weeks: "Week 1"
    },
    {
      title: "Data Handling & Pandas",
      description: "Master data manipulation and analysis with Pandas",
      topics: [
        "Pandas DataFrames and Series",
        "Data Cleaning and Transformation",
        "Data Visualization with Matplotlib and Seaborn",
        "Statistical Analysis",
        "Feature Engineering"
      ],
      weeks: "Week 2"
    },
    {
      title: "Mathematics for AI",
      description: "Learn essential mathematical concepts for AI algorithms",
      topics: [
        "Linear Algebra for Machine Learning",
        "Calculus and Optimization",
        "Probability and Statistics",
        "Dimensionality Reduction",
        "Principal Component Analysis"
      ],
      weeks: "Week 3"
    },
    {
      title: "Machine Learning Essentials",
      description: "Master core machine learning algorithms and techniques",
      topics: [
        "Supervised vs Unsupervised Learning",
        "Regression Algorithms",
        "Classification Algorithms",
        "Clustering and Dimensionality Reduction",
        "Model Evaluation and Validation"
      ],
      weeks: "Week 4"
    },
    {
      title: "Neural Networks & Deep Learning",
      description: "Build and train deep neural networks for complex tasks",
      topics: [
        "Neural Network Architecture",
        "Activation Functions",
        "Backpropagation",
        "Deep Learning Frameworks (TensorFlow/PyTorch)",
        "Convolutional Neural Networks (CNNs)"
      ],
      weeks: "Week 5"
    },
    {
      title: "Natural Language Processing & Transformers",
      description: "Work with text data and state-of-the-art NLP models",
      topics: [
        "Text Preprocessing and Tokenization",
        "Word Embeddings",
        "Transformer Architecture",
        "BERT and GPT Models",
        "Text Classification and Generation"
      ],
      weeks: "Week 6"
    },
    {
      title: "Model Deployment Techniques",
      description: "Learn to deploy AI models to production environments",
      topics: [
        "Model Serialization",
        "RESTful API Development",
        "Containerization with Docker",
        "Cloud Deployment (AWS/Azure/GCP)",
        "Monitoring and Maintenance"
      ],
      weeks: "Week 7"
    },
    {
      title: "Capstone Project",
      description: "Apply your skills to build a complete AI solution",
      topics: [
        "Project Planning and Requirement Analysis",
        "Dataset Selection and Preparation",
        "Model Development and Training",
        "Evaluation and Optimization",
        "Final Presentation and Documentation"
      ],
      weeks: "Week 8"
    }
  ];

  const toggleModule = (index: number) => {
    if (activeModule === index) {
      setActiveModule(null);
    } else {
      setActiveModule(index);
    }
  };

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <BookOpen size={24} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            8-Week Curriculum Overview
          </h2>
          <p className="text-lg text-gray-700">
            Our comprehensive AI curriculum is designed to take you from basics to advanced concepts,
            with hands-on projects and practical applications throughout.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                className="w-full flex justify-between items-center p-6 focus:outline-none text-left"
                onClick={() => toggleModule(index)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-600 font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                    <p className="text-gray-600 mt-1">{module.description}</p>
                  </div>
                </div>
                <div className="flex items-center ml-4">
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mr-4">
                    {module.weeks}
                  </span>
                  {activeModule === index ? (
                    <ChevronUp className="text-gray-500" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </div>
              </button>
              {activeModule === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-md font-medium text-gray-900 mb-3">Topics Covered:</h4>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center">
                          <div className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto p-6 md:p-8 bg-indigo-50 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 flex-grow">
              <h3 className="text-2xl font-bold text-indigo-800 mb-3">Beginner-Friendly Program</h3>
              <p className="text-gray-700">
                No prior coding knowledge required! Our structured curriculum starts from the basics 
                and gradually builds up to advanced concepts, making it perfect for beginners and 
                intermediate learners alike.
              </p>
            </div>
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&h=300&w=450" 
              alt="Students learning" 
              className="rounded-xl w-full md:w-80 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
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
      title: "Week 1: Foundations of AI & Python Basics",
      description: "Understanding AI fundamentals and learning Python programming basics.",
      topics: [
        "What is AI? Applications, Branches, Goals",
        "AI Techniques, Problem Solving Overview",
        "Python Basics: Variables, Data types, Input/Output",
        "Python Control Flow: If-else, Loops",
        "Python Functions & Data Structures",
        "Git & GitHub Basics"
      ],
      weeks: "Week 1"
    },
    {
      title: "Week 2: Search & Problem Spaces",
      description: "Exploring AI search techniques and problem spaces.",
      topics: [
        "Problem Spaces, State Space Search",
        "Production Systems & 8 Puzzle",
        "Control Strategies: DFS, BFS",
        "Heuristic Search: Hill Climbing, A*",
        "Water Jug Problem",
        "Tic-Tac-Toe using AI logic"
      ],
      weeks: "Week 2"
    },
    {
      title: "Week 3: Knowledge Representation",
      description: "Learning about logical reasoning and expert systems.",
      topics: [
        "Semantic Nets, Frames, Predicate Logic",
        "Inference: Forward & Backward Chaining",
        "Rule-based Systems, Symbolic Reasoning",
        "Uncertainty & Non-monotonic Reasoning",
        "Expert System Components",
        "Case Study: ELIZA Logic"
      ],
      weeks: "Week 3"
    },
    {
      title: "Week 4: Core ML Concepts",
      description: "Introduction to Machine Learning (ML) and core algorithms.",
      topics: [
        "What is ML? Types: Supervised/Unsupervised",
        "Linear Regression & Cost Function",
        "Classification: KNN, Decision Trees",
        "Evaluation: Accuracy, Precision, Recall",
        "Data Preprocessing with Pandas",
        "Build End-to-End ML Project"
      ],
      weeks: "Week 4"
    },
    {
      title: "Week 5: Advanced ML Techniques",
      description: "Diving into advanced machine learning techniques.",
      topics: [
        "Feature Selection & Engineering",
        "Random Forest, SVM",
        "Clustering: K-Means, PCA",
        "Cross Validation, GridSearchCV",
        "Real-World ML Use Cases",
        "Kaggle Mini-Comp"
      ],
      weeks: "Week 5"
    },
    {
      title: "Week 6: Neural Networks (Deep Learning)",
      description: "Learn to build and evaluate neural networks.",
      topics: [
        "What is a Neural Network? Perceptron & ANN",
        "Activation Functions, Optimizers",
        "Build First ANN with Keras",
        "Model Evaluation, Loss Functions",
        "Overfitting, Dropout, Regularization",
        "Project: Digit Recognition App"
      ],
      weeks: "Week 6"
    },
    {
      title: "Week 7: Computer Vision + NLP",
      description: "Hands-on experience with CNNs for image classification and NLP techniques.",
      topics: [
        "CNN Basics + Image Classification",
        "Transfer Learning (MobileNet, VGG)",
        "NLP: Tokenization, Stopwords, Lemmatization",
        "Sentiment Analysis",
        "Build a Rule-based Chatbot",
        "DL-powered Chatbot (optional)"
      ],
      weeks: "Week 7"
    },
    {
      title: "Week 8: Deployment, Portfolio & Capstone",
      description: "Deploy models, build portfolios, and present the capstone project.",
      topics: [
        "Streamlit for AI Apps",
        "Deploy Models (Render/HuggingFace)",
        "Resume + LinkedIn Optimization",
        "Final Capstone Build (Part 1)",
        "Final Capstone Build (Part 2)",
        "Project Presentations + Certificates"
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

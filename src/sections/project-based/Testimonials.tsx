import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Web Development Intern',
    college: 'JNTU Hyderabad',
    photo: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    text: 'The internship experience at BrainVision was transformative. The hands-on projects and mentor guidance helped me land my first job at a top IT company within weeks of completing the program.',
    rating: 5,
  },
  {
    name: 'Arjun Reddy',
    role: 'Machine Learning Intern',
    college: 'Osmania University',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    text: 'Exceptional learning experience! The curriculum is well-structured and industry-relevant. The AICTE certificate gave my resume the edge it needed. Highly recommend to all engineering students.',
    rating: 5,
  },
  {
    name: 'Anjali Patel',
    role: 'UI/UX Design Intern',
    college: 'SRM University',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    text: 'From day one, the mentors pushed me to think like a professional designer. The projects were challenging and realistic. I built a portfolio that impressed my interviewers!',
    rating: 5,
  },
  {
    name: 'Karthik Naidu',
    role: 'Data Science Intern',
    college: 'VIT Vellore',
    photo: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    text: 'Best decision of my academic career. The data science track was comprehensive, and the project I built is now part of my portfolio. Got placed in a top analytics firm!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Success Stories</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Interns Say</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Join 80,000+ alumni who launched their careers through our internship programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-8 w-8 h-8 text-blue-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role} · {t.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '80,000+', label: 'Happy Interns' },
            { value: '98%', label: 'Completion Rate' },
            { value: '4.8/5', label: 'Average Rating' },
            { value: '500+', label: 'Hiring Partners' },
          ].map(s => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <p className="text-3xl font-extrabold text-blue-700 mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react'
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'HR Director, Tech Solutions Inc.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'NKO Limited transformed our hiring process. We reduced our time-to-hire by 60% while improving candidate quality.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager, Global Retail Co.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Their call center team handles 500+ customer interactions daily for us with consistently high satisfaction scores.',
    rating: 5,
  },
  {
    name: 'Adebayo Okafor',
    role: 'CEO, FinTech Startup',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote: 'The payroll management system is flawless. We\'ve expanded our team 3x without adding HR overhead.',
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear what our clients say about working with NKO Limited.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <div className="flex items-center gap-x-4">
                <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
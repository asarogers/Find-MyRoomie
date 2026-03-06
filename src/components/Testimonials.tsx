import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    location: "Chicago, IL",
    quote: "Roomster wanted $30/month just to read messages. I joined here for free, drew my neighborhood on the map, and had 4 people reach out within a week. This is what it should have always been.",
    rating: 5,
  },
  {
    name: "Jake L.",
    location: "Denver, CO",
    quote: "I used Facebook groups and Craigslist for months — half the posts were fake. The verification here is night and day. I actually felt safe meeting someone from this app.",
    rating: 5,
  },
  {
    name: "Maya P.",
    location: "Seattle, WA",
    quote: "The zone map is the feature I didn't know I needed. I work in South Lake Union so I drew a 10-min commute circle and only saw roommates in my actual area. Genius.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What beta testers are saying
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from real people who ditched Roomster and found something better
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-teal-500 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location} · Early beta tester
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
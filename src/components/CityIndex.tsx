'use client';

import React from 'react';
import Link from 'next/link';
import cities from './_data/cities.json';

// src/app/roommates/CityIndex.tsx
export default function CityIndex() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
      {cities.map(({ slug, name }) => (
        <li key={slug}>
          <Link
            href={`/roommates/${slug}`}
            className="
              block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition
              border border-gray-200 hover:border-transparent
              group"
          >
            <h3 className="text-xl font-semibold group-hover:text-blue-600 mb-2">
              {name}
            </h3>
            <p className="text-gray-500 text-sm">
              Find roommates in <span className="font-medium">{name.split(',')[0]}</span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

'use client';

import React, { useState } from 'react';

const mockData = [
  { id: 1, name: 'Sunset Apartments', score: 4.5, rank: 1 },
  { id: 2, name: 'Bayview Residences', score: 4.2, rank: 2 },
  { id: 3, name: 'Ocean Breeze', score: 4.0, rank: 3 },
];

export default function RankingsPage() {
  const [nomination, setNomination] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for nomination form submission logic
    console.log('Nomination:', nomination, 'Email:', email);
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Apartment Complex Leaderboard</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Rank</th>
            <th className="border border-gray-300 p-2">Complex Name</th>
            <th className="border border-gray-300 p-2">Score</th>
            <th className="border border-gray-300 p-2">Badge</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((complex) => (
            <tr key={complex.id}>
              <td className="border border-gray-300 p-2 text-center">{complex.rank}</td>
              <td className="border border-gray-300 p-2">{complex.name}</td>
              <td className="border border-gray-300 p-2 text-center">{complex.score}</td>
              <td className="border border-gray-300 p-2 text-center">
                <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                  Founding Rater
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Nominate Your Complex</h2>
        {submitted ? (
          <p className="text-green-600 font-semibold">Thank you for your nomination!</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md">
            <label className="block mb-2 font-medium" htmlFor="nomination">
              Apartment Complex Name
            </label>
            <input
              type="text"
              id="nomination"
              value={nomination}
              onChange={(e) => setNomination(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 mb-4 rounded"
            />

            <label className="block mb-2 font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 mb-4 rounded"
            />

            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Submit Nomination
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

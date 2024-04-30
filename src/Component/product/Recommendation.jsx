import React, { useState, useEffect } from 'react';

function Recommendation() {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/recommendation')
      .then(res => res.json())
      .then(data => {
        setTherapists(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="px-32 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {therapists.map((therapist, index) => (
        <div key={index} className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{therapist.name}</div>
            <p className="text-gray-700 text-base">
              <strong>Specialization:</strong> {therapist.specialization.join(', ')}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Location:</strong> {therapist.location}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Gender:</strong> {therapist.gender}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Contact:</strong> {therapist.contact}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Recommendation;

import React from 'react';

type Award = {
  title: string;
  description: string;
};

const AwardsSection: React.FC = () => {
  const awards: Award[] = [
    {
      title: '2nd Place Winner of UI/UX Design Competition at Informatics Championship X-Project 2024',
      description: 'Awarded at the annual event organized by Himpunan Mahasiswa Teknik Informatika, Sistem Informasi, dan Pendidikan Teknologi Informasi Universitas Negeri Surabaya.',
    },
    {
      title: '1st Place Winner of UX Today at IT Today Competition 2024',
      description: 'Awarded at the annual event organized by Himpunan Mahasiswa Ilmu Komputer Institut Pertanian Bogor.',
    },
    {
      title: 'Best Innovation in UX Today at IT Today Competition 2024',
      description: 'Awarded at the annual event organized by Himpunan Mahasiswa Ilmu Komputer Institut Pertanian Bogor.',
    },
    {
      title: 'Rising Star Of The Year 2023',
      description: 'Awarded at the annual event organized by the Faculty of Computer Science, Universitas Jember.',
    },
    {
      title: '1st Outstanding Student in School Level Science Program',
      description: 'Awarded during the graduation ceremony at SMA Negeri 1 Kencong.',
    },
  ];

  return (
    <section id="awards" className="py-20 bg-gray-900">
      <div className="text-center mb-10 animate-fadeIn">
        <h2 className="text-4xl font-bold">Award</h2>
        <p className="text-primary">My achievements!</p>
      </div>
      <div className="container mx-auto px-5 md:px-10 max-w-screen-xl space-y-5">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-8 hover:scale-105 transition-transform duration-300 animate-slideUp"
          >
            <h3 className="text-2xl font-semibold">{award.title}</h3>
            <p className="text-gray-400">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
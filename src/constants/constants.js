export const projects = [
  {
    title: 'Pouch Cell Battery Design for Electric Vehicles',
    description:
      'Developed an advanced pouch cell battery system optimised for electric vehicles, featuring high-energy-density, lightweight design, and modular scalability. Integrated NMC cathodes and SiOx anodes to achieve 18.6Ah per cell, along with innovative thermal management strategies to enhance safety and performance.',
    image: 'Webs/images/5.jpg ',
    tags: ['Battery Design', 'EV', 'Thermal Management'],
    techSpecification: {
      cellChemistry: 'NMC + Graphite + SiOx',
      dischargeCapacity: '18.6 Ah',
      nominalVoltage: '3.7V',
      cycleLife: '1000+ cycles',
      operatingTemperature: '-20°C to 60°C',
      weight: '600g per cell',
    },
    challenges:
      'Addressed thermal runaway risks, structural integration complexities, and optimised energy efficiency through rigorous simulations, improved insulation, and iterative design improvements.',
    id: 0,
  },
  {
    title: '21700 Cylindrical Cell Battery Design',
    description:
      'Designed a high-performance 21700 cylindrical cell battery system, ensuring an optimal balance between energy density, safety, and durability. The system is scalable and suitable for energy storage, portable power, and industrial applications, featuring a nominal capacity of 5.0Ah per cell.',
    image: '/images/5.jpg',
    tags: ['Battery Design', 'Energy Storage', 'Safety'],
    techSpecification: {
      cellChemistry: 'NMC + Graphite',
      dischargeCapacity: '5000 mAh',
      nominalVoltage: '3.7V',
      cycleLife: '700+ cycles',
      operatingTemperature: '-10°C to 60°C',
      weight: '70g per cell',
    },
    challenges:
      'Overcame thermal stability issues by implementing advanced cooling techniques, including phase change materials (PCMs) and specialized cooling fins. Improved mechanical durability through enhanced casing design.',
    id: 1,
  },
];
export const TimeLineData = {
  education: [
    {
      subject: 'Bachelor of Engineering',
      degree: 'in Automotive Engineering',
      institution: 'Velammal Engineering College',
      place: 'India',
    },
    {
      subject: 'Master of Science',
      degree: 'in Automotive Engineering',
      institution: 'University of Hertfordshire',
      place: 'United Kingdom',
    },
  ],

  timeline: [
    {
      year: '2024-Present',
      role: 'Senior Mechanical Engineer',
      company: 'UK Battery Industrialization Centre',
      place: 'United Kingdom',
    },
    {
      company: 'UH Racing',
      role: 'Design Engineer',
      place: 'United Kingdom',
      year: '2022-2024',
    },
    {
      company: 'Basil Energetics',
      role: 'Design and Development Engineer',
      place: 'India',
      year: '2021-2022',
    },
    {
      company: 'Hyundai Motors',
      role: 'R&D Engineer',
      place: 'India',
      year: '2020-2021',
    },
  ],
};

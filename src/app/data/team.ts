export interface TeamMember {
  name: string;
  role: string;
  experience: number; // years of experience
  photo: string; // image filename or URL
}

export const TEAM: TeamMember[] = [
  {
    name: 'Mikko Virtanen',
    role: 'Lead Mechanic',
    experience: 15,
    photo: 'mechanic-men3.jpg',
  },
  {
    name: 'Jari Korhonen',
    role: 'Transmission Specialist',
    experience: 10,
    photo: 'mechanic-men2.jpg',
  },
  {
    name: 'Sanna Laine',
    role: 'Diagnostics Expert',
    experience: 8,
    photo: 'mechanic-woman.jpg',
  },
  {
    name: 'Antti Nieminen',
    role: 'Bodywork Technician',
    experience: 12,
    photo: 'mechanic-men4.jpg',
  },
];

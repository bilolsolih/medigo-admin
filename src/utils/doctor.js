const roles = [
  "Heart Specialist",
  "Dentist",
  "Neurologist",
  "Therapist",
  "Pediatrician"
];

export const doctors = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Dr. Doctor ${i + 1}`,
  role: roles[i % roles.length],
  phone: `+998 91 ${Math.floor(1000000 + Math.random() * 9000000)}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 10}`
}));

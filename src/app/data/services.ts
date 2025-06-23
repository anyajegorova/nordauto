export interface Service {
  title: string;
  image: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    title: 'Engine Diagnostics',
    image: '/auto-fix.jpg',
    description: 'Comprehensive engine diagnostics to identify and resolve performance issues quickly and efficiently.'
  },
  {
    title: 'Brake Repair',
    image: '/car-fix.jpg',
    description: 'Professional brake inspection and repair services to ensure your safety on the road.'
  },
  {
    title: 'Oil Change',
    image: '/oil-change.jpg',
    description: 'Regular oil changes using high-quality oils to keep your engine running smoothly.'
  },
  {
    title: 'Car Wash',
    image: '/car-wash.jpg',
    description: 'Thorough exterior and interior car wash services to keep your vehicle looking its best.'
  }
];
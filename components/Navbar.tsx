import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <li><Link href="/">Startsite</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

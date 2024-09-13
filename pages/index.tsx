import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="content-container">
        {/* Hero Section */}
        <div style={{backgroundColor: 'black', color: 'white', width: '100%', padding: '3rem 0'}}>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-6">
              <span className="block">Professional</span>
              <span className="block text-secondary-light">Cleaning Services</span>
            </h1>
            <p className="mt-3 text-xl max-w-2xl mx-auto mb-8">
              We provide top-quality cleaning solutions for your home and office. Experience the difference with our expert cleaning team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
                Get Started
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary-dark hover:bg-secondary">
                Our Services
              </Link>
            </div>
            <div className="mt-10 max-w-lg mx-auto">
              <Image
                src="/Hero Section Background.png"
                alt="Cleaning Service"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="w-full py-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Residential Cleaning', 'Commercial Cleaning', 'Specialized Cleaning'].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-2">{service}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-500 p-4 text-white">
          This should be a red box with white text and some padding.
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

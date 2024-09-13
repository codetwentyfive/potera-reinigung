import React from 'react';
import Layout from '../components/Layout';

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <div className="content-container">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>Commercial Cleaning</li>
          <li>Office Cleaning</li>
          <li>Industrial Cleaning</li>
          <li>Special Event Cleaning</li>
        </ul>
      </div>
    </Layout>
  );
};

export default ServicesPage;
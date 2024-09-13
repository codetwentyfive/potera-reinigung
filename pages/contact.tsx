import React from 'react';
import Layout from '../components/Layout';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="mx-auto w-1/2 content-container">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
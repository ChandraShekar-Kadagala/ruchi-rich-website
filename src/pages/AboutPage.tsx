import React from 'react';
import { contactConfig } from '../config/contact';

const AboutPage = () => {
  return (
    <div className="py-16 bg-brand-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-charcoal">About Ramraj Oil Industries</h1>
          <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-lg prose-emerald mx-auto text-brand-charcoal/80">
          <p className="lead text-xl text-brand-charcoal font-medium">
            At Ramraj Oil Industries, our mission is to deliver authentic, high-quality culinary ingredients that form the soul of traditional cooking.
          </p>
          
          <h2 className="text-2xl font-serif font-bold text-brand-forest mt-12 mb-4">The Ruchi Rich Philosophy</h2>
          <p>
            Under our flagship brand, <strong>RUCHI RICH</strong>, we bring you a premium range of spices that carry our core promise: <em>Fresh & Active</em>. 
            We believe that every pinch of spice should elevate your dish with unmistakable aroma, vibrant color, and pure flavor.
          </p>

          <h2 className="text-2xl font-serif font-bold text-brand-forest mt-12 mb-4">Our Quality Commitment</h2>
          <p>
            We take pride in our meticulous sourcing and processing methods. Our spices are ground carefully to ensure they retain their natural essential oils, 
            which are responsible for their distinct flavor profiles and health benefits.
          </p>
          <ul>
            <li>No artificial colors</li>
            <li>Carefully selected raw ingredients</li>
            <li>Processed in hygienic facilities</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-brand-forest mt-12 mb-4">Manufacturing Excellence</h2>
          <p>
            Our operations are based in Andhra Pradesh, where traditional knowledge meets modern quality standards.
          </p>
          <div className="bg-white p-6 rounded-lg border border-brand-charcoal/10 shadow-sm mt-6">
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">Our Facility</h3>
            <p className="m-0 text-brand-charcoal/70">
              {contactConfig.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

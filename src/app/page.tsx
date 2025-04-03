import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0056b3] to-[#003366] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Product Promises. Delivered.
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              You Think it. We Build it.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* The Symbol Difference */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">The Symbol Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Partner by Design</h3>
              <p className="text-gray-600">
                Our US-based delivery managers work closely with your team to ensure your product is delivered on time, on budget, and with the quality you expect.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Product Driven Engagement</h3>
              <p className="text-gray-600">
                Our teams can rapidly scale up and down, adjusting resources and skills to optimize product deliverables throughout the development lifecycle.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">People You Can Count On</h3>
              <p className="text-gray-600">
                We have the breadth and depth to deliver the right skills, scale, and speed, while bringing hard-to-find expertise when needed.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Proven Success</h3>
              <p className="text-gray-600">
                We have a track record of delivering products that secure competitive advantage, generate revenues, and increase operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle text-center">
            Comprehensive technology solutions tailored to your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Custom Software Development</h3>
              <p className="text-gray-600 mb-4">
                Tailored solutions designed to meet your specific business requirements
              </p>
              <Link href="/services" className="text-[#0056b3] hover:text-[#003366] font-medium">
                Learn More →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Scalable and secure cloud infrastructure for your business
              </p>
              <Link href="/services" className="text-[#0056b3] hover:text-[#003366] font-medium">
                Learn More →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Modernize your business processes with cutting-edge technology
              </p>
              <Link href="/services" className="text-[#0056b3] hover:text-[#003366] font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Industries We Serve</h2>
          <p className="section-subtitle text-center">
            Specialized solutions for diverse industry needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Innovative solutions for healthcare providers and organizations
              </p>
              <Link href="/industries" className="text-[#0056b3] hover:text-[#003366] font-medium">
                Learn More →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Secure and efficient technology solutions for financial institutions
              </p>
              <Link href="/industries" className="text-[#0056b3] hover:text-[#003366] font-medium">
                Learn More →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Digital transformation solutions for manufacturing operations
              </p>
              <Link href="/industries" className="text-[#0056b3] hover:text-[#003366] font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals
          </p>
          <Link href="/contact" className="btn-secondary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
} 
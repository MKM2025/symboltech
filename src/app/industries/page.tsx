import React from "react";
import Link from "next/link";

export default function Industries() {
  const industries = [
    {
      title: "Healthcare",
      description: "While you build trust and credibility as a Digital Health company, we will back you up with reliability and agility on the technical side, reducing time to market and associated risks. We will help you transform your product roadmap into a HIPAA compliant, interoperable and secure state-of-the-art solution without draining your budget yet preserving quality.",
      link: "/industries/healthcare",
    },
    {
      title: "Life Sciences",
      description: "We have the engineering talent that has helped dozens of Life Sciences companies solve their most complex technology puzzles, and are trusted by companies to achieve their complex technical objectives and meet their development milestones.",
      link: "/industries/life-sciences",
    },
    {
      title: "Real Estate",
      description: "We help real estate companies transform their operations with innovative technology solutions, from property management systems to customer engagement platforms.",
      link: "/industries/real-estate",
    },
    {
      title: "Marketing and Advertising",
      description: "Our solutions help marketing and advertising agencies streamline their operations, enhance client collaboration, and deliver better results through data-driven insights.",
      link: "/industries/marketing",
    },
    {
      title: "Retail and eCommerce",
      description: "We empower retail and eCommerce businesses with cutting-edge technology solutions that enhance customer experience, optimize operations, and drive growth.",
      link: "/industries/retail",
    },
    {
      title: "Finance and Banking",
      description: "We provide secure, scalable, and innovative solutions for financial institutions, helping them stay ahead in the digital transformation race.",
      link: "/industries/finance",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl">
              Deep industry expertise to solve your unique business challenges
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4">{industry.title}</h2>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <Link
                  href={industry.link}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business thrive with our industry-specific solutions.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
} 
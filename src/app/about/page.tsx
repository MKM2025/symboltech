import React from "react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
    {
      title: "Partnership",
      description: "We build long-term relationships with our clients, working together to achieve their goals.",
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About Symbol Technologies</h1>
            <p className="text-xl">
              Empowering businesses through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Symbol Technologies has grown from a small startup to a leading technology solutions provider. Our journey has been marked by innovation, dedication to excellence, and a commitment to helping our clients succeed in the digital age.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we serve clients across various industries, from healthcare and finance to retail and manufacturing. Our team of experienced professionals brings together expertise in software development, cloud computing, data analytics, and more to deliver comprehensive solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                title: "CEO & Founder",
                description: "Visionary leader with 20+ years of experience in technology and business strategy.",
              },
              {
                name: "Sarah Johnson",
                title: "CTO",
                description: "Technology expert specializing in software architecture and innovation.",
              },
              {
                name: "Michael Chen",
                title: "COO",
                description: "Operations leader focused on delivering exceptional client experiences.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.title}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team. Check out our current openings.
          </p>
          <Link
            href="/careers"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            View Careers
          </Link>
        </div>
      </section>
    </div>
  );
} 
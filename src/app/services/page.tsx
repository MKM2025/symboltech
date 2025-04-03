import React from "react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Kanda is a premier full-service Custom Software Development, Cloud Engineering, QA and DevOps company, specializing in the development of time-sensitive and innovative solutions. To every project, Kanda brings a combination of domain expertise, exceptional engineering talent, rigorous Agile development processes, commitment to protection of client's IP and accountability of a US company with over two decades of impeccable reputation.",
      link: "/services/custom-software",
    },
    {
      title: "Mobile Application Development",
      description: "We are pushing the boundaries of what's possible on mobile by creating transformative mobile experiences that solve business challenges for clients ranging from large enterprises to innovative startups and creative entrepreneurs. With in-depth knowledge of native iOS, Android and cross-platform application development, we make sure that your idea is transformed into a beautifully designed, user-friendly and engaging mobile solution of a superior quality.",
      link: "/services/mobile-development",
    },
    {
      title: "UX & UI Design",
      description: "We blend skill and expertise to produce elegant, functional and user-focused interfaces. We let the purpose of the particular web or mobile application drive its design and user experience to deliver high user acceptance and engagement rates of your product.",
      link: "/services/ux-ui-design",
    },
    {
      title: "Digital Transformation",
      description: "Kanda's Digital Transformation Practice draws on our decades-long experience in converting legacy systems into cutting-edge architectural environments. We're experts in breaking down internal silos, moving and improving applications in the cloud, accelerating custom software development processes, and orchestrating a data-driven approach to digital services delivery.",
      link: "/services/digital-transformation",
    },
    {
      title: "Cloud Engineering",
      description: "Whether you are already in the Cloud, considering Cloud Migration or looking to develop a Cloud-Native application, Kanda will back you up with our in-depth cloud engineering expertise and over 30+ years of experience modernizing legacy solutions and developing innovative applications for companies ranging from startups to large enterprises.",
      link: "/services/cloud-engineering",
    },
    {
      title: "DevOps Services",
      description: "Achieve greater business agility and a faster time to market by eliminating bottlenecks in software development with Kanda's DevOps Services. Continuous Delivery makes staying ahead of the competition and impressing your customers with products they really want a breeze.",
      link: "/services/devops",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
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
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions.
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
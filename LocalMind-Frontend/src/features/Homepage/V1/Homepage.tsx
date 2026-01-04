import React from 'react'
import FeaturesSection from './FeaturesSection'
import WorkflowSection from './WorkflowSection'
import ValuePropositionSection from './ValuePropositionSection'
import TestimonialsSection from './TestimonialsSection'
import PricingSection from './PricingSection'
import CTASection from './CTASection'
import Footer from './Footer'

const Homepage: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-40 -right-40 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-1/2 left-1/2 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text border border-purple-600 border-opacity-30">
                ✨ Open-Source AI Chat Platform
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              The Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                AI Conversations
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect to multiple AI providers, build intelligent chat applications, and collaborate in real-time. All
              with production-grade features and enterprise security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg">
                View Documentation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400">10K+</div>
                <p className="text-gray-400 text-sm mt-2">Active Users</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400">50+</div>
                <p className="text-gray-400 text-sm mt-2">AI Models</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400">99.9%</div>
                <p className="text-gray-400 text-sm mt-2">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All sections */}
      <FeaturesSection />
      <WorkflowSection />
      <ValuePropositionSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Homepage

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

const features: FeatureItem[] = [
  {
    icon: '🤖',
    title: 'Multi-Model AI Support',
    description: 'Connect to multiple AI providers including Ollama, Groq, OpenAI, Anthropic, and Google models for maximum flexibility.',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: '🗣️',
    title: 'Real-time Chat',
    description: 'Experience seamless real-time conversations with WebSocket support, typing indicators, and instant message delivery.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: '📚',
    title: 'Training Datasets',
    description: 'Upload and manage training data from CSV, JSON, Markdown, and Text formats with automatic vector embeddings.',
    gradient: 'from-pink-500 to-red-600',
  },
  {
    icon: '🔍',
    title: 'Vector Search',
    description: 'Semantic search with vector embeddings powered by Google Generative AI for intelligent document retrieval.',
    gradient: 'from-red-500 to-orange-600',
  },
  {
    icon: '⚡',
    title: 'Fast & Responsive',
    description: 'Optimized performance with MongoDB indexing, caching strategies, and efficient API endpoints.',
    gradient: 'from-orange-500 to-yellow-600',
  },
  {
    icon: '🔐',
    title: 'Secure & Private',
    description: 'Enterprise-grade security with authentication, authorization, and secure API key management.',
    gradient: 'from-yellow-500 to-green-600',
  },
]

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'top 30%',
          scrub: 0.5,
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 0.5,
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
      })

      // Hover animation setup
      cardsRef.current.forEach((card) => {
        if (!card) return

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            duration: 0.3,
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            duration: 0.3,
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            LocalMind combines AI capabilities with real-time collaboration for the ultimate AI experience
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100`}
            >
              <div className={`text-5xl mb-4`}>{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <div className={`h-1 w-12 bg-gradient-to-r ${feature.gradient} mt-6 rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

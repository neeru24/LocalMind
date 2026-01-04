import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ValueItem {
  title: string
  value: string
  description: string
  color: string
}

const values: ValueItem[] = [
  {
    title: 'Deploy Time',
    value: '5 Minutes',
    description: 'Get your AI chat up and running in under 5 minutes with zero configuration',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Model Support',
    value: '5+',
    description: 'Support for local and cloud-based AI models including Ollama, Groq, OpenAI',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data Security',
    value: '100%',
    description: 'Complete data privacy with local processing options and secure API management',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Performance',
    value: '<100ms',
    description: 'Optimized response times with efficient database queries and caching',
    color: 'from-orange-500 to-red-500',
  },
]

const ValuePropositionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'top 30%',
          scrub: 0.5,
        },
        opacity: 0,
        x: -50,
        duration: 1,
      })

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'top 30%',
          scrub: 0.5,
        },
        opacity: 0,
        x: 50,
        duration: 1,
      })

      cardsRef.current.forEach((card, index) => {
        if (!card) return
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div ref={titleRef}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Choose LocalMind?</h2>
            <p className="text-lg text-gray-300 mb-8">
              LocalMind gives you complete control over your AI infrastructure with the flexibility to choose your
              preferred models and deployment strategy.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>Multi-provider support for maximum flexibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>Enterprise-grade security and data privacy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>Real-time collaboration with WebSocket support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>Vector embeddings for semantic search</span>
              </li>
            </ul>

            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Right side - Stats cards */}
          <div ref={contentRef} className="grid grid-cols-2 gap-6">
            {values.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className={`bg-gradient-to-br ${item.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <div className="font-semibold text-sm mb-2">{item.title}</div>
                <p className="text-sm text-gray-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuePropositionSection

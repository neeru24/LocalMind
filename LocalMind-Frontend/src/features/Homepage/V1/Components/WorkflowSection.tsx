import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface WorkflowStep {
  number: string
  title: string
  description: string
  icon: string
}

const steps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Connect Your AI',
    description: 'Choose from local Ollama or cloud providers like Groq, OpenAI, and Anthropic',
    icon: '🔗',
  },
  {
    number: '02',
    title: 'Import Training Data',
    description: 'Upload your datasets in CSV, JSON, Markdown or Text format',
    icon: '📥',
  },
  {
    number: '03',
    title: 'Build Vectors',
    description: 'Automatic vector embedding generation for semantic search capabilities',
    icon: '🔢',
  },
  {
    number: '04',
    title: 'Start Chatting',
    description: 'Real-time conversations with context-aware AI responses',
    icon: '💬',
  },
]

const WorkflowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement[]>([])
  const connectorRef = useRef<SVGSVGElement>(null)

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

      // Steps animation
      gsap.from(stepsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 10%',
          scrub: 0.5,
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
      })

      // Connector line animation
      if (connectorRef.current) {
        gsap.from(connectorRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'center center',
            scrub: 0.5,
          },
          strokeDashoffset: 1000,
          duration: 1,
        })
      }

      // Step number animation
      stepsRef.current.forEach((step, index) => {
        if (!step) return
        const numberEl = step.querySelector('.step-number')

        step.addEventListener('mouseenter', () => {
          gsap.to(numberEl, {
            scale: 1.1,
            duration: 0.3,
          })
          gsap.to(step.querySelector('.step-content'), {
            x: 10,
            duration: 0.3,
          })
        })

        step.addEventListener('mouseleave', () => {
          gsap.to(numberEl, {
            scale: 1,
            duration: 0.3,
          })
          gsap.to(step.querySelector('.step-content'), {
            x: 0,
            duration: 0.3,
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Simple Workflow</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in just 4 steps with our intuitive setup process
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <svg
            ref={connectorRef}
            className="absolute left-8 top-0 w-1 h-full hidden lg:block"
            style={{
              stroke: 'url(#gradient)',
              strokeDasharray: '1000',
              strokeWidth: '3',
            }}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <line x1="0" y1="0" x2="0" y2="100%" />
          </svg>

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el
                }}
                className="flex gap-8 relative group"
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center hidden lg:flex">
                  <div className="step-number w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="step-content flex-1 pt-2">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection

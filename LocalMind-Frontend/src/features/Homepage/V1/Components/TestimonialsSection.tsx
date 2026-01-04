import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechStartup Inc',
    content:
      'LocalMind transformed how we integrate AI into our products. The multi-provider support gives us unmatched flexibility and the real-time chat features are phenomenal.',
    avatar: '👨‍💼',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Engineer',
    company: 'DataCorp',
    content:
      'The vector embedding and semantic search capabilities are impressive. We integrated it in just one week and it immediately improved our customer support efficiency.',
    avatar: '👨‍🔬',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    role: 'Product Manager',
    company: 'CloudSolutions',
    content:
      'The security and privacy features give us peace of mind. LocalMind is the perfect solution for enterprises that need AI without compromising data security.',
    avatar: '👩‍💼',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Founder',
    company: 'AIStartup Hub',
    content:
      'Excellent documentation and responsive support team. LocalMind is production-ready and we recommend it to all our portfolio companies.',
    avatar: '👨‍💻',
    rating: 5,
  },
]

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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
        y: 50,
        duration: 1,
      })

      // Cards animation with stagger
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: 'left 80%',
          end: 'left 20%',
          scrub: 0.5,
        },
        opacity: 0,
        x: 100,
        stagger: 0.1,
        duration: 0.8,
      })

      // Hover effects
      cardsRef.current.forEach((card) => {
        if (!card) return

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            duration: 0.3,
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            duration: 0.3,
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400 text-lg' : 'text-gray-300 text-lg'}>
          ★
        </span>
      ))}
    </div>
  )

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our users and partners have to say about LocalMind
          </p>
        </div>

        <div ref={scrollContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm mb-6 line-clamp-5">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join hundreds of companies already using LocalMind</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlight: boolean
  buttonText: string
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'Forever',
    description: 'Perfect for getting started with LocalMind',
    features: [
      'Up to 3 AI models',
      '10 chat rooms',
      'Basic vector search',
      'Community support',
      '1GB storage',
      'Local deployment only',
    ],
    highlight: false,
    buttonText: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$29',
    period: '/month',
    description: 'For professionals and growing teams',
    features: [
      'Unlimited AI models',
      'Unlimited chat rooms',
      'Advanced vector search',
      'Priority email support',
      '100GB storage',
      'Cloud and local deployment',
      'Custom AI training',
      'Analytics dashboard',
    ],
    highlight: true,
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Pricing',
    description: 'For large-scale deployments',
    features: [
      'Everything in Professional',
      '24/7 dedicated support',
      'Unlimited storage',
      'Custom integrations',
      'White-label options',
      'SLA guarantees',
      'Advanced security',
      'On-premises deployment',
    ],
    highlight: false,
    buttonText: 'Contact Sales',
  },
]

const PricingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

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

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardHover = (index: number, isEnter: boolean) => {
    const card = cardsRef.current[index]
    if (!card) return

    if (isEnter && plans[index].highlight) {
      gsap.to(card, {
        y: -10,
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
        duration: 0.3,
      })
    } else {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
      })
    }
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. Always flexible to scale.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Annual <span className="text-xs text-green-600 ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
              className={`rounded-lg p-8 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200 shadow-lg text-gray-900'
              }`}
            >
              {/* Highlight badge */}
              {plan.highlight && (
                <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <div className="text-5xl font-bold mb-2">{plan.price}</div>
                <div className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>{plan.period}</div>
                <p className={`mt-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>{plan.description}</p>
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-all hover:shadow-lg ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                }`}
              >
                {plan.buttonText}
              </button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <span className={`text-xl ${plan.highlight ? 'text-yellow-400' : 'text-green-500'}`}>✓</span>
                    <span className={`text-sm ${plan.highlight ? 'text-blue-50' : 'text-gray-700'}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          <p className="text-gray-600 mb-8">All plans include 30-day free trial. No credit card required.</p>
          <button className="px-8 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-all">
            View All FAQs
          </button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

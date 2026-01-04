import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLButtonElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'top 20%',
          scrub: 0.5,
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })

      buttonsRef.current.forEach((button, index) => {
        if (!button) return

        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
          })
        })

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div ref={contentRef}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Transform Your AI Experience?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of developers and enterprises using LocalMind to build intelligent applications with ease.
            Get started today with our free plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              ref={(el) => {
                if (el) buttonsRef.current[0] = el
              }}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Started Free
            </button>
            <button
              ref={(el) => {
                if (el) buttonsRef.current[1] = el
              }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule Demo
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-white text-sm mb-6">Trusted by leading companies and developers worldwide</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-white text-opacity-80 font-semibold">🏢 Enterprise Ready</div>
              <div className="text-white text-opacity-80 font-semibold">🔒 Security Certified</div>
              <div className="text-white text-opacity-80 font-semibold">⭐ 4.9/5 Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

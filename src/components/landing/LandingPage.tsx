import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './sections'
import { useSpeech } from '@/hooks/use-speech'
import Icon from '@/components/ui/icon'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechEnabled, setSpeechEnabled] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const { speak, stop } = useSpeech()

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    if (!speechEnabled) return

    const section = sections[activeSection]
    const text = section?.speech ?? `${section?.title ?? ''} ${section?.content ?? ''}`

    if (!text.trim()) return

    setIsSpeaking(true)
    speak(text)

    const checkSpeaking = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        setIsSpeaking(false)
        clearInterval(checkSpeaking)
      }
    }, 300)

    return () => clearInterval(checkSpeaking)
  }, [activeSection, speechEnabled, speak])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const toggleSpeech = () => {
    if (speechEnabled) {
      stop()
      setIsSpeaking(false)
      setSpeechEnabled(false)
    } else {
      setSpeechEnabled(true)
    }
  }

  return (
    <Layout>
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`w-3 h-3 rounded-full my-2 transition-all ${
              index === activeSection ? 'bg-[#7C3AED] scale-150 shadow-[0_0_8px_#7C3AED]' : 'bg-gray-700'
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>

      <motion.button
        onClick={toggleSpeech}
        className="fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all"
        style={{ background: speechEnabled ? '#7C3AED' : 'rgba(255,255,255,0.08)', border: '1px solid #7C3AED' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={speechEnabled ? 'Отключить озвучку' : 'Включить озвучку'}
      >
        {isSpeaking && speechEnabled ? (
          <motion.div
            className="flex gap-0.5 items-end h-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-1 bg-white rounded-full"
                animate={{ height: ['8px', '18px', '8px'] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </motion.div>
        ) : (
          <Icon name={speechEnabled ? 'Volume2' : 'VolumeX'} size={20} className="text-white" />
        )}
      </motion.button>

      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-30"
        style={{ scaleX, background: 'linear-gradient(90deg, #7C3AED, #a855f7)' }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
          />
        ))}
      </div>
    </Layout>
  )
}

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, image, imagePosition = 'right', cards, isActive, showButton, buttonText }: SectionProps) {
  const hasImage = !!image
  const isBackground = imagePosition === 'background'

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center overflow-hidden">
      {hasImage && isBackground && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <img src={image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </motion.div>
      )}

      <div className={`relative z-10 flex items-center h-full ${hasImage && !isBackground ? 'gap-0' : ''}`}>
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 flex-1">
          {subtitle && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.p
              className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}

          {cards && (
            <motion.div
              className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 border border-[#7C3AED]/30 rounded-xl p-4 backdrop-blur-sm hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/60 transition-all cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="text-white font-semibold text-sm md:text-base">{card.title}</div>
                  <div className="text-neutral-400 text-xs md:text-sm mt-1">{card.description}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-[#7C3AED] bg-transparent border-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors text-lg px-8 py-4"
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>

        {hasImage && !isBackground && (
          <motion.div
            className="hidden lg:block w-[45%] h-full flex-shrink-0"
            initial={{ opacity: 0, x: 60 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={image} alt="" className="w-full h-full object-cover" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 30%)' }} />
          </motion.div>
        )}
      </div>
    </section>
  )
}

import { useCallback, useEffect, useRef } from 'react'

export function useSpeech() {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
  }, [])

  const speak = useCallback((text: string) => {
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ru-RU'
    utterance.rate = 0.92
    utterance.pitch = 1.05
    utterance.volume = 1

    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices()
      const ruVoice = voices.find(v => v.lang.startsWith('ru')) ?? null
      if (ruVoice) utterance.voice = ruVoice
      window.speechSynthesis.speak(utterance)
    }

    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      setVoice()
    } else {
      window.speechSynthesis.onvoiceschanged = setVoice
    }

    utteranceRef.current = utterance
  }, [])

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  return { speak, stop }
}

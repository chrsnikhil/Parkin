"use client"

import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  typingSpeed = 100, // Default typing speed
  deletingSpeed = 50, // Default deleting speed
  pauseDuration = 1000, // Default pause duration between words
}: {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex]

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        if (currentText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      }
    }

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration])

  return <span className={className}>{currentText}</span>
}

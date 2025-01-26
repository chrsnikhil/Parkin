"use client"

import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: string[]
  className?: string
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = 100
    const deleteSpeed = 50
    const pauseBetweenWords = 1000

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
          setTimeout(() => setIsDeleting(true), pauseBetweenWords)
        }
      }
    }

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, words])

  return <span className={className}>{currentText}</span>
}


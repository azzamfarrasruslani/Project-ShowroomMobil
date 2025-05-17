"use client"
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { motion } from "motion/react"

function LoadingDots() {
  const dotVariants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      animate="jump"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="flex justify-center items-center gap-2.5"
    >
      <motion.div className="w-4 h-4 rounded-full bg-yellow-500 will-change-transform" variants={dotVariants} />
      <motion.div className="w-4 h-4 rounded-full bg-yellow-500  will-change-transform" variants={dotVariants} />
      <motion.div className="w-4 h-4 rounded-full bg-yellow-500  will-change-transform" variants={dotVariants} />
    </motion.div>
  )
}

function LoadingSpinner() {
  return (
    <div className="w-12 h-12 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mb-4"></div>
  )
}

export default function Loading() {
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    // Setelah 3 detik, ganti loading dots ke spinner
    const timer = setTimeout(() => {
      setShowSpinner(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {showSpinner ? <LoadingSpinner /> : <LoadingDots />}
      <p className="text-gray-900 text-lg">Loading...</p>
    </div>
  )
}

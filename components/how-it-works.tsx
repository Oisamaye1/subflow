"use client"
import { ArrowRight } from "lucide-react"
import { Settings, Wallet } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"



export default function HowItWorks() {
  const [walletStatus, setWalletStatus] = useState<"not-connected" | "connecting" | "connected">("not-connected")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Check if window.ethereum is available
  const isWalletAvailable = typeof window !== "undefined" && typeof window.ethereum !== "undefined"

  const connectWallet = async () => {
    if (!isWalletAvailable) {
      setErrorMessage("Please install a Web3 wallet like MetaMask")
      return
    }

    try {
      setWalletStatus("connecting")
      // Request account access
      await window.ethereum
      setWalletStatus("connected")
      setErrorMessage(null)
    } catch (error) {
      setWalletStatus("not-connected")
      setErrorMessage("Failed to connect wallet. Please try again.")
      console.error("Wallet connection error:", error)
    }
  }

  const steps = [
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Connect Wallet",
      description: "Link your MetaMask, Coinbase Wallet, or any Web3 wallet.",
      color: "from-blue-500/0 to-blue-600/0",
      iconColor: "text-blue-500",
      borderColor: "group-hover:border-blue-500",
      shadowColor: "group-hover:shadow-blue-500/20",
      action: connectWallet,
      status: walletStatus,
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Set Up Subscriptions",
      description: "Choose a token (USDC, ETH), amount, and interval (monthly/yearly).",
      color: "from-purple-500/0 to-purple-600/0",
      iconColor: "text-purple-500",
      borderColor: "group-hover:border-purple-500",
      shadowColor: "group-hover:shadow-purple-500/20",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <path d="M12 2v20M2 12h20M12 2l4 4M12 2l-4 4M12 22l4-4M12 22l-4-4M2 12l4 4M2 12l4-4M22 12l-4 4M22 12l-4-4" />
        </svg>
      ),
      title: "Start Earning",
      description: "Receive payments instantly with zero gas fees.",
      color: "from-green-500/0 to-green-600/0",
      iconColor: "text-green-500",
      borderColor: "group-hover:border-green-500",
      shadowColor: "group-hover:shadow-green-500/20",
    },
  ]

  return (
    <MaxWidthWrapper>
        <section className="relative w-full mt-24" id="How-it-works">
      <div className=" ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="bg-gradient-to-r from-[#99E39E] to-emerald-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl  text-center">
          How It Works
          </h2>
          <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Start accepting crypto payments in three simple steps
          </p>
          {errorMessage && <div className="mt-4 rounded-lg bg-red-500/10 p-4 text-sm text-red-500">{errorMessage}</div>}
        </div>
        <div className="relative mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.2,
                }}
                className="group relative h-full"
              >
                <div
                  className={`absolute -inset-px rounded-xl bg-gradient-to-r ${step.color} blur-xl transition-all duration-500 group-hover:blur-2xl`}
                />
                <div
                  className={`relative flex h-full flex-col items-center rounded-xl border border-gray-800 bg-[#ffffff0e] p-6 text-center transition-all duration-500 ${step.borderColor} ${step.shadowColor} group-hover:shadow-2xl`}
                  onClick={step.action}
                  style={{ cursor: step.action ? "pointer" : "default" }}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className={`relative mb-4 rounded-full bg-gray-800 p-3 ${step.iconColor}`}
                  >
                    {step.icon}
                    {step.status && (
                      <div
                        className={`absolute -right-1 -top-1 h-3 w-3 rounded-full ${
                          step.status === "connected"
                            ? "bg-green-500"
                            : step.status === "connecting"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        }`}
                      />
                    )}
                  </motion.div>
                  <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                  {step.status && (
                    <span
                      className={`mt-4 text-xs ${
                        step.status === "connected"
                          ? "text-green-500"
                          : step.status === "connecting"
                            ? "text-yellow-500"
                            : "text-gray-500"
                      }`}
                    >
                      {step.status === "connected"
                        ? "Connected"
                        : step.status === "connecting"
                          ? "Connecting..."
                          : "Not Connected"}
                    </span>
                  )}
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 md:block">
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-8 w-8 text-gray-600" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background Grid Effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </section>
    </MaxWidthWrapper>
    
  )
}


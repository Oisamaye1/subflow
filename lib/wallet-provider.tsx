// "use client"

// import { createContext, useContext, useEffect, useState } from "react"

// type WalletContextType = {
//   isConnected: boolean
//   connect: () => Promise<void>
//   address: string | null
//   error: string | null
// }

// const WalletContext = createContext<WalletContextType>({
//   isConnected: false,
//   connect: async () => {},
//   address: null,
//   error: null,
// })

// export function WalletProvider({ children }: { children: React.ReactNode }) {
//   const [isConnected, setIsConnected] = useState(false)
//   const [address, setAddress] = useState<string | null>(null)
//   const [error, setError] = useState<string | null>(null)

//   const connect = async () => {
//     try {
//       if (typeof window.ethereum !== "undefined") {
//         const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
//         if (accounts.length > 0) {
//           setAddress(accounts[0])
//           setIsConnected(true)
//           setError(null)
//         }
//       } else {
//         setError("Please install a Web3 wallet")
//       }
//     } catch (err) {
//       setError("Failed to connect wallet")
//       console.error(err)
//     }
//   }

//   useEffect(() => {
//     // Check if wallet is already connected
//     if (typeof window.ethereum !== "undefined") {
//       window.ethereum
//         .request({ method: "eth_accounts" })
//         .then((accounts) => {
//           if (accounts.length > 0) {
//             setAddress(accounts[0])
//             setIsConnected(true)
//           }
//         })
//         .catch(console.error)
//     }
//   }, [])

//   return <WalletContext.Provider value={{ isConnected, connect, address, error }}>{children}</WalletContext.Provider>
// }

// export const useWallet = () => useContext(WalletContext)


import React from "react"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black text-center text-gray-400 font-light tracking-widest py-2 lg:py-2 text-xs lg:text-sm">
      © {new Date().getFullYear()}, DANOBIS SANDOVAL TATTOO
    </footer>
  )
}

export default Footer

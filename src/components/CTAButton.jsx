import { motion } from 'framer-motion'

export default function CTAButton({ size = 'lg', className = '', children }) {
  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4.5 text-lg',
    xl: 'px-12 py-5 text-xl',
  }

  return (
    <motion.a
      href="#preco"
      whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(217, 4, 41, 0.3)' }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center justify-center gap-2
        bg-brand hover:bg-brand-dark text-white font-semibold
        rounded-xl cursor-pointer
        transition-colors duration-300
        ${sizes[size]}
        ${className}
      `}
    >
      {children || 'GARANTIR MINHA VAGA'}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.a>
  )
}

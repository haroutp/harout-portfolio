'use client'

import { motion } from 'framer-motion'
import { Monitor, Terminal } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/providers/theme-provider'

export function Navigation() {
  const { theme, setTheme } = useTheme()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              HP
            </span>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'professional' ? 'terminal' : 'professional')}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'professional' ? (
              <>
                <Monitor className="w-4 h-4" />
                <span className="text-sm">Professional</span>
              </>
            ) : (
              <>
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Terminal</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
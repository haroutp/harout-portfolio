'use client'

import Link from 'next/link'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Shield,
  Heart,
  ExternalLink,
  Code
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Skills', href: '/skills' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    certifications: [
      { name: 'CompTIA Security+', href: '#', external: true },
      { name: 'IBM Cybersecurity', href: '#', external: true },
      { name: 'AZ-500 (In Progress)', href: '#', external: false },
      { name: 'OSCP (Planned)', href: '#', external: false },
    ],
    resources: [
      { name: 'Resume', href: '/resume.pdf', external: true },
      { name: 'GitHub', href: 'https://github.com/haroutparseghian', external: true },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/haroutparseghian', external: true },
      { name: 'Security Blog', href: '/blog', external: false },
    ],
  }

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/haroutparseghian', 
      icon: Github 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/haroutparseghian', 
      icon: Linkedin 
    },
    { 
      name: 'Email', 
      href: 'mailto:harout@example.com', 
      icon: Mail 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/haroutparseghian', 
      icon: Twitter 
    },
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                HP
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Cloud Security Expert specializing in Azure security, identity management, and enterprise security architecture.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Certifications
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.certifications.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors inline-flex items-center gap-1"
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                    {item.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors inline-flex items-center gap-1"
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                    {item.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Security Statement */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4 text-green-500" />
              <span>This site follows security best practices</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">CSP Headers</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">HTTPS Only</span>
            </div>

            {/* Built With */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using</span>
              <Code className="w-4 h-4 text-green-500" />
              <span>Next.js & TypeScript</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Harout Parseghian. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            From Yerevan to the World 🌍
          </p>
        </div>
      </div>
    </footer>
  )
}
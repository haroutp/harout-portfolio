'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Code, 
  TrendingUp, 
  Globe, 
  Award,
  BookOpen,
  Coffee,
  Zap,
  Target,
  Users
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  const timeline = [
    {
      year: '2020-2023',
      title: 'QA Automation Engineer',
      description: 'Mastered test automation, caught critical bugs, saved companies millions',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2024',
      title: 'The Pivot',
      description: 'Realized my QA skills were perfect foundation for security',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2025',
      title: 'Security Transformation',
      description: 'CompTIA Security+, IBM Cybersecurity, Azure Security implementation',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: 'Now',
      title: 'Cloud Security Expert',
      description: 'Building enterprise security solutions, pursuing AZ-500 & OSCP',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every line of code, every configuration, every decision'
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'Security that enables, not hinders, productivity'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Learning something new every single day'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Understanding threats from worldwide vantage point'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              <Shield className="w-12 h-12 text-green-500" />
              {/* Replace with: <Image src="/harout.jpg" alt="Harout Parseghian" width={128} height={128} className="rounded-full" /> */}
            </div>
          </div>

          <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
            From QA Automation to Cloud Security Expert
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming organizations' security posture through strategic implementation 
            of cloud-native security solutions and automation.
          </p>
        </motion.div>

        {/* The Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My path to cybersecurity wasn't traditional, but that's exactly what makes me valuable. 
              With years of experience as a QA Automation Engineer, I developed an attacker's mindset 
              - constantly looking for what could break, what could fail, what others might miss.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In 2024, I realized that my skills in finding vulnerabilities, automating complex processes, 
              and thinking systematically were perfectly aligned with cybersecurity. What started as 
              curiosity quickly became passion, and that passion transformed into expertise.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Today, I bring a unique perspective to security: the thoroughness of QA, the efficiency 
              of automation, and the strategic thinking of a security architect. From Yerevan, Armenia, 
              I work with global organizations to implement enterprise-grade security solutions that 
              don't just protect - they enable business growth.
            </p>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Evolution</h2>
          
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <span className="text-sm text-gray-500">{item.year}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What Drives Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <Icon className="w-8 h-8 text-green-500 mb-3" />
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Current Focus */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Current Focus</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Preparing for AZ-500 (Azure Security Engineer)</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>Building production-ready security solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Pursuing OSCP certification for offensive security</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>Contributing to open-source security tools</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Fun Facts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Beyond Security</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <Coffee className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Coffee Enthusiast</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Debugging code and brewing coffee with equal precision
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <Globe className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Global Perspective</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Working from Yerevan with clients worldwide
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <Zap className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Continuous Learner</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                6x faster learning through hands-on implementation
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Let's Build Something Secure Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you need to secure your cloud infrastructure, implement zero-trust architecture, 
            or build a security-first culture, I bring the expertise and passion to make it happen.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 border-2 border-green-500 text-green-500 dark:text-green-400 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-green-950 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
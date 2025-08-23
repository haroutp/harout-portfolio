'use client'

import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Github, 
  Globe, 
  FileText, 
  Calendar, 
  CheckCircle, 
  TrendingUp,
  Code,
  Shield,
  Zap,
  Target
} from 'lucide-react'
import Link from 'next/link'
import type { Project } from '@/lib/data/projects'
import { projects } from '@/lib/data/projects'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const categoryColors = {
    cloud: 'from-blue-500 to-cyan-500',
    security: 'from-red-500 to-pink-500',
    development: 'from-green-500 to-emerald-500',
    automation: 'from-purple-500 to-indigo-500'
  }

  const categoryIcons = {
    cloud: Shield,
    security: Shield,
    development: Code,
    automation: Zap
  }

  const CategoryIcon = categoryIcons[project.category]

  return (
    <div className="min-h-screen py-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <Link 
          href="/projects"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} opacity-10`} />
        
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <CategoryIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                {project.category}
              </span>
              {project.featured && (
                <span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full">
                  Featured Project
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {project.subtitle}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
              </div>
              
              {/* Links */}
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.docsUrl && (
                  <Link
                    href={project.docsUrl}
                    className="inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Documentation</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </motion.section>

            {/* The Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Challenge</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </motion.section>

            {/* The Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Solution</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.section>

            {/* Impact & Results */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Impact & Results</h2>
              </div>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Metrics */}
            {project.metrics && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Key Metrics</h3>
                <div className="space-y-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">{metric.value}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 shadow-lg text-white"
            >
              <h3 className="text-lg font-bold mb-2">Interested in this project?</h3>
              <p className="text-sm mb-4 opacity-90">
                Let's discuss how I can bring similar solutions to your organization.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group bg-white dark:bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition-all"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-500 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {p.subtitle}
                  </p>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
'use client'

import { motion } from 'framer-motion'
import { Github, Globe, FileText, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import type { Project } from '@/lib/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryColors = {
    cloud: 'from-blue-500 to-cyan-500',
    security: 'from-red-500 to-pink-500',
    development: 'from-green-500 to-emerald-500',
    automation: 'from-purple-500 to-indigo-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
            <Star className="w-3 h-3" />
            Featured
          </span>
        </div>
      )}

      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${categoryColors[project.category]}`} />

      <div className="p-6">
        {/* Title & Subtitle */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {project.metrics.slice(0, 4).map((metric, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-2">
                <p className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-500">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="View live demo"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
            {project.docsUrl && (
              <Link
                href={project.docsUrl}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="View documentation"
              >
                <FileText className="w-5 h-5" />
              </Link>
            )}
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors group"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
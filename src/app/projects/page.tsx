'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/lib/data/projects'
import { motion } from 'framer-motion'

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'cloud', label: 'Cloud Security' },
  { value: 'security', label: 'Security Operations' },
  { value: 'development', label: 'Development' },
  { value: 'automation', label: 'Automation' }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Projects & Implementations
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Real-world security solutions and enterprise implementations
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-70">
                ({category.value === 'all' ? projects.length : projects.filter(p => p.category === category.value).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-green-500">{projects.length}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-500">15K+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Users Protected</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-500">$500K+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Value Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-500">100%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
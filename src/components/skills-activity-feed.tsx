'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Code, FileText, FlaskConical, Trophy } from 'lucide-react'
import { getRecentActivities, type ActivityType } from '@/lib/data/skills'
import { format } from 'date-fns'

const activityIcons: Record<ActivityType, any> = {
  certification: Award,
  project: Code,
  ctf: Trophy,
  course: BookOpen,
  lab: FlaskConical,
  blog: FileText,
}

const categoryColors = {
  cloud: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  network: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  appsec: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  devsecops: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  identity: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  governance: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
}

export function SkillsActivityFeed() {
  const recentActivities = getRecentActivities(5)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Recent Achievements
      </h3>
      
      <div className="space-y-3">
        {recentActivities.map((activity, index) => {
          const Icon = activityIcons[activity.type]
          
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <Icon className="w-5 h-5 text-green-500" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 dark:text-gray-100 truncate">
                  {activity.name}
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {activity.description}
                </p>
                
                <div className="flex items-center gap-2 mt-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${categoryColors[activity.category]}`}>
                    {activity.category}
                  </span>
                  
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    +{activity.points} points
                  </span>
                  
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {format(new Date(activity.date), 'MMM d, yyyy')}
                  </span>
                </div>
                
                {activity.evidence && (
                  <a
                  
                    href={activity.evidence}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-green-600 dark:text-green-400 hover:underline mt-2"
                  >
                    View evidence →
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
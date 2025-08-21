import { SkillsRadar } from '@/components/skills-radar'
import { SkillsActivityFeed } from '@/components/skills-activity-feed'
import { getTotalPoints, activities } from '@/lib/data/skills'

export default function SkillsPage() {
  const totalPoints = getTotalPoints()
  const totalActivities = activities.length

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Dynamic Skills Tracker
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Continuously evolving expertise in cybersecurity
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Points Earned</p>
            <p className="text-3xl font-bold text-green-500">{totalPoints}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Activities Completed</p>
            <p className="text-3xl font-bold text-blue-500">{totalActivities}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Focus</p>
            <p className="text-3xl font-bold text-purple-500">AZ-500</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Radar Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Skills Radar
            </h2>
            <SkillsRadar />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
              Visual representation of expertise across security domains
            </p>
          </div>

          {/* Activity Feed */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <SkillsActivityFeed />
          </div>
        </div>

        {/* Add Activity Prompt */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This radar updates automatically as I complete new certifications, projects, and learning activities.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Latest update: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}
'use client'

// Removed useEffect and useRef since we're not using them
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { calculateCategoryScores } from '@/lib/data/skills'
import { motion } from 'framer-motion'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export function SkillsRadar() {
  const scores = calculateCategoryScores()
  
  const data = {
    labels: [
      'Cloud Security',
      'Network Security',
      'Application Security',
      'DevSecOps',
      'Identity & Access',
      'Governance & Compliance'
    ],
    datasets: [
      {
        label: 'Current Skills',
        data: [
          scores.cloud,
          scores.network,
          scores.appsec,
          scores.devsecops,
          scores.identity,
          scores.governance
        ],
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(16, 185, 129, 1)',
      },
    ],
  }

  const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.parsed.r}%`
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => `${value}%`,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <Radar data={data} options={options} />
    </motion.div>
  )
}
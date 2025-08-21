export type SkillCategory = 'cloud' | 'network' | 'appsec' | 'devsecops' | 'identity' | 'governance'

export type ActivityType = 'certification' | 'project' | 'ctf' | 'course' | 'lab' | 'blog'

export interface SkillActivity {
  id: string
  type: ActivityType
  name: string
  category: SkillCategory
  points: number
  date: string
  evidence?: string
  description?: string
}

// Your actual completed activities
export const activities: SkillActivity[] = [
  // Certifications
  {
    id: 'cert-security-plus',
    type: 'certification',
    name: 'CompTIA Security+',
    category: 'governance',
    points: 30,
    date: '2025-04-01',
    evidence: 'https://www.credly.com/badges/your-security-plus',
    description: 'Foundational cybersecurity certification'
  },
  {
    id: 'cert-ibm-cybersecurity',
    type: 'certification',
    name: 'IBM Cybersecurity Professional Certificate',
    category: 'governance',
    points: 25,
    date: '2025-03-15',
    description: 'Completed with perfect score (44/44) on final assessment'
  },
  
  // Projects
  {
    id: 'project-securecorp-azure',
    type: 'project',
    name: 'SecureCorpAzure Implementation',
    category: 'cloud',
    points: 35,
    date: '2025-08-12',
    evidence: 'https://github.com/haroutparseghian/securecorp-azure',
    description: 'Enterprise Azure security with 6 CA policies, PIM, and AI threat detection'
  },
  {
    id: 'project-soc-in-box',
    type: 'project',
    name: 'SOC-in-a-Box',
    category: 'devsecops',
    points: 30,
    date: '2025-08-15',
    description: 'Microsoft Sentinel SIEM with automated incident response'
  },
  {
    id: 'project-network-scanner',
    type: 'project',
    name: 'Network Security Scanner',
    category: 'network',
    points: 20,
    date: '2025-07-20',
    evidence: 'https://github.com/haroutp/cybersecurity-development-environment/blob/main/network-tools/simple_network_scanner.py',
    description: 'Custom Python port scanner with socket programming'
  },
  
  // Labs and Learning
  {
    id: 'lab-az500-identity',
    type: 'lab',
    name: 'AZ-500 Identity & Access Labs',
    category: 'identity',
    points: 25,
    date: '2025-08-18',
    description: 'Completed all Domain 1 hands-on scenarios'
  },
  {
    id: 'lab-az500-network',
    type: 'lab',
    name: 'AZ-500 Network Security Labs',
    category: 'network',
    points: 20,
    date: '2025-08-19',
    description: 'NSG rules, Azure Firewall, VNet security'
  },
  
  // Courses
  {
    id: 'course-python-security',
    type: 'course',
    name: 'Python for Cybersecurity',
    category: 'appsec',
    points: 15,
    date: '2025-07-01',
    description: 'Scapy, cryptography, network automation'
  }
]

// Calculate points per category
export function calculateCategoryScores(): Record<SkillCategory, number> {
  const maxPointsPerCategory = 100
  const scores: Record<string, number> = {
    cloud: 0,
    network: 0,
    appsec: 0,
    devsecops: 0,
    identity: 0,
    governance: 0
  }
  
  activities.forEach(activity => {
    scores[activity.category] = Math.min(
      scores[activity.category] + activity.points,
      maxPointsPerCategory
    )
  })
  
  return scores as Record<SkillCategory, number>
}

// Get recent activities
export function getRecentActivities(limit: number = 5): SkillActivity[] {
  return [...activities]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

// Get total points
export function getTotalPoints(): number {
  return activities.reduce((sum, activity) => sum + activity.points, 0)
}
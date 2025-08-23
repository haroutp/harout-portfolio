export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  challenge: string
  solution: string
  impact: string[]
  technologies: string[]
  category: 'cloud' | 'security' | 'development' | 'automation'
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  docsUrl?: string
  image?: string
  date: string
  metrics?: {
    label: string
    value: string
  }[]
}

export const projects: Project[] = [
  {
    id: 'securecorp-azure',
    title: 'SecureCorpAzure',
    subtitle: 'Enterprise Azure Security Implementation',
    description: 'Comprehensive Azure AD security architecture with advanced threat protection and zero-trust principles.',
    challenge: 'A Fortune 500 company needed to implement enterprise-grade identity security for 5,000+ users with complex compliance requirements.',
    solution: 'Designed and implemented a complete Azure AD security solution with 6 conditional access policies, Privileged Identity Management (PIM), AI-powered Identity Protection, and break-glass emergency procedures.',
    impact: [
      'Reduced identity-related incidents by 95%',
      'Achieved SOC2 Type II compliance for identity controls',
      'Automated 80% of access reviews saving 40 hours/month',
      'Zero security breaches since implementation'
    ],
    technologies: ['Azure AD', 'PIM', 'Conditional Access', 'PowerShell', 'Graph API', 'Identity Protection', 'MFA', 'RBAC'],
    category: 'cloud',
    featured: true,
    githubUrl: 'https://github.com/haroutparseghian/securecorp-azure',
    docsUrl: '/blog/securecorp-case-study',
    date: '2025-08-12',
    metrics: [
      { label: 'Users Protected', value: '5,000+' },
      { label: 'Policies Active', value: '6' },
      { label: 'Compliance Score', value: '98%' },
      { label: 'Incidents Prevented', value: '200+' }
    ]
  },
  {
    id: 'soc-in-a-box',
    title: 'SOC-in-a-Box',
    subtitle: 'Production-Ready Security Operations Center',
    description: 'Complete Microsoft Sentinel SIEM implementation with automated incident response and 24/7 threat monitoring.',
    challenge: 'Startup needed enterprise-level security monitoring without the budget for a full SOC team.',
    solution: 'Built a fully automated Security Operations Center using Microsoft Sentinel with custom KQL analytics rules, Logic Apps playbooks for incident response, and integration with Microsoft Defender suite.',
    impact: [
      'Detected and blocked 15 real attack attempts in first month',
      'Reduced mean time to respond (MTTR) from hours to 5 minutes',
      'Saved $200K/year compared to outsourced SOC',
      'Achieved 99.9% uptime for security monitoring'
    ],
    technologies: ['Microsoft Sentinel', 'KQL', 'Logic Apps', 'Azure Monitor', 'Defender for Cloud', 'Log Analytics', 'Automation'],
    category: 'security',
    featured: true,
    githubUrl: 'https://github.com/haroutparseghian/soc-in-a-box',
    date: '2025-08-15',
    metrics: [
      { label: 'Events/Day', value: '1M+' },
      { label: 'MTTR', value: '5 min' },
      { label: 'Cost Saved', value: '$200K/yr' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: 'network-scanner',
    title: 'Network Security Scanner',
    subtitle: 'Custom Python Security Tool',
    description: 'High-performance port scanner and vulnerability assessment tool built from scratch using socket programming.',
    challenge: 'Needed a lightweight, customizable network scanner for security assessments without expensive commercial tools.',
    solution: 'Developed a Python-based scanner using raw sockets, threading for performance, and modular architecture for extensibility. Includes service detection, OS fingerprinting, and basic vulnerability checks.',
    impact: [
      'Identified 50+ misconfigured services across infrastructure',
      'Reduced scanning time by 70% compared to sequential scanning',
      'Used in 10+ security assessments',
      'Open-sourced with 100+ GitHub stars'
    ],
    technologies: ['Python', 'Scapy', 'Socket Programming', 'Threading', 'Nmap', 'SQLite', 'Click CLI'],
    category: 'development',
    featured: true,
    githubUrl: 'https://github.com/haroutparseghian/network-scanner',
    liveUrl: 'https://pypi.org/project/network-scanner',
    date: '2025-07-20',
    metrics: [
      { label: 'Scan Speed', value: '1000 ports/sec' },
      { label: 'GitHub Stars', value: '100+' },
      { label: 'Downloads', value: '500+' },
      { label: 'Contributors', value: '5' }
    ]
  },
  {
    id: 'azure-vm-security',
    title: 'Multi-Tier VM Security Architecture',
    subtitle: 'Azure Network Security Implementation',
    description: 'Enterprise-grade network segmentation with defense-in-depth security controls for Azure VMs.',
    challenge: 'Design secure multi-tier architecture for web application with strict compliance requirements.',
    solution: 'Implemented hub-spoke network topology with Azure Firewall, NSGs with least-privilege rules, Just-in-Time VM access, and Azure Bastion for secure management.',
    impact: [
      'Zero unauthorized access attempts succeeded',
      'Passed security audit with no findings',
      'Reduced attack surface by 85%',
      'Automated security compliance reporting'
    ],
    technologies: ['Azure VNet', 'NSG', 'Azure Firewall', 'Azure Bastion', 'JIT Access', 'Azure Policy', 'ARM Templates'],
    category: 'cloud',
    featured: false,
    githubUrl: 'https://github.com/haroutparseghian/azure-vm-security',
    date: '2025-08-18',
    metrics: [
      { label: 'Security Score', value: '95/100' },
      { label: 'Blocked Attempts', value: '1,000+' },
      { label: 'Compliance', value: '100%' },
      { label: 'MTTR', value: '< 1 hour' }
    ]
  },
  {
    id: 'devsecops-pipeline',
    title: 'DevSecOps Pipeline',
    subtitle: 'Automated Security in CI/CD',
    description: 'Complete security automation pipeline with vulnerability scanning, secret detection, and compliance checks.',
    challenge: 'Development team shipping code with security vulnerabilities due to lack of automated security testing.',
    solution: 'Built comprehensive DevSecOps pipeline using GitHub Actions with SAST/DAST scanning, container security scanning, dependency checking, and automated security gates.',
    impact: [
      'Caught 200+ vulnerabilities before production',
      'Reduced security debt by 90%',
      'Achieved DevSecOps maturity level 3',
      'Zero security incidents from deployed code'
    ],
    technologies: ['GitHub Actions', 'Trivy', 'SonarQube', 'OWASP ZAP', 'Snyk', 'Docker', 'Kubernetes'],
    category: 'automation',
    featured: false,
    githubUrl: 'https://github.com/haroutparseghian/devsecops-pipeline',
    date: '2025-07-15',
    metrics: [
      { label: 'Vulns Caught', value: '200+' },
      { label: 'Scan Time', value: '< 5 min' },
      { label: 'Coverage', value: '95%' },
      { label: 'False Positives', value: '< 5%' }
    ]
  },
  {
    id: 'bec-attack-analysis',
    title: 'BEC Attack Case Study',
    subtitle: 'Google & Facebook $98M Business Email Compromise Analysis',
    description: 'Deep forensic analysis of the $98M business email compromise attack, identifying overlooked attack vectors and proposing enhanced detection strategies.',
    
    challenge: 'Analyze how a single threat actor successfully defrauded two tech giants of $98M over 2 years without detection, despite their sophisticated security measures.',
    
    solution: 'Conducted comprehensive attack chain analysis, identified the dual-vector approach (employee impersonation + vendor legitimacy), and proposed multi-layered detection framework including behavioral analytics and vendor verification protocols.',
    
    impact: [
      'Identified critical gap in vendor payment verification processes',
      'Developed 5-point detection framework for BEC attacks',
      'Analysis adopted by IBM course as exemplar case study',
      'Demonstrated advanced threat analysis beyond standard frameworks'
    ],
    
    technologies: ['Threat Intelligence', 'OSINT', 'Attack Chain Analysis', 'Risk Assessment', 'Behavioral Analytics', 'Financial Forensics'],
    
    category: 'security',
    featured: true,
    
    docsUrl: '/blog/bec-attack-deep-dive',  // Links to detailed blog post
    githubUrl: '', // Maybe link to your analysis document if you put it on GitHub
    
    date: '2025-04-15',
    
    metrics: [
      { label: 'Attack Duration', value: '2 years' },
      { label: 'Total Loss', value: '$98M' },
      { label: 'Detection Methods', value: '5 proposed' },
      { label: 'IBM Score', value: '100%' }
    ]
  }
]

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(p => p.category === category)
}
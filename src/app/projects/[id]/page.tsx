import { notFound } from 'next/navigation'
import { getProjectById, projects } from '@/lib/data/projects'
import { ProjectDetail } from '@/components/project-detail'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}

// Generate static params for all projects (for better performance)
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Harout Parseghian`,
    description: project.description,
  }
}
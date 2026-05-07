import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'venueflow.ai',
    description: 'AI-powered stadium management platform for organizing events and operations.',
    featured: true,
    status: 'Live',
    image: '/projects/venueflow.png',
    tech: ['AI Workflows', 'Event Operations', 'Cloud Deployment'],
    liveUrl: 'https://venueflow-ai-514374581163.asia-south1.run.app/',
    githubUrl: 'https://github.com/harshitmohantas131-png/prompt-wars-virtual-1',
  },
  {
    id: 2,
    title: 'votewise.ai',
    description: 'AI-powered election awareness and civic education platform designed to empower voters.',
    featured: true,
    status: 'Hackathon Project',
    image: '/projects/votewise.png',
    tech: ['Educational Tech', 'AI Integration', 'Civic Awareness'],
    liveUrl: 'https://votewise-ai-514374581163.asia-south1.run.app/',
    githubUrl: 'https://github.com/harshitmohantas131-png/votewise-ai',
  },
  {
    id: 3,
    title: 'Blogify',
    description: 'Full-stack minimalist blogging platform featuring secure authentication and robust CRUD functionality.',
    featured: false,
    status: 'Completed',
    image: '/projects/blogify.png',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'BeatHub',
    description: 'Modern music streaming platform featuring a highly interactive glassmorphism UI and robust backend integration.',
    featured: false,
    status: 'In Progress',
    image: '/projects/beathub.png',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden" style={{ background: 'var(--clr-white)' }}>
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-50 z-0">
        <div className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full" style={{ background: 'rgba(249,115,22,0.03)', filter: 'blur(100px)' }} />
        <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full" style={{ background: 'rgba(251,191,36,0.03)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle subtitle="Selected Work" title="Featured Projects" align="left" />

        <div className="mt-16 space-y-24 md:space-y-32">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

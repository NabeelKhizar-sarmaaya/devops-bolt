import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform Infrastructure',
      description: 'Designed and implemented a complete cloud infrastructure for a high-traffic e-commerce platform handling 1M+ daily users. Built auto-scaling Kubernetes clusters, implemented blue-green deployments, and reduced infrastructure costs by 45%.',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'Prometheus'],
      outcomes: [
        '99.99% uptime achieved',
        '45% cost reduction',
        '70% faster deployments'
      ],
      github: 'https://github.com',
      demo: '#'
    },
    {
      title: 'Multi-Region Disaster Recovery System',
      description: 'Architected and deployed a multi-region disaster recovery solution for a financial services company. Implemented automated failover, data replication, and backup strategies across AWS regions.',
      technologies: ['AWS', 'Terraform', 'Route53', 'RDS', 'S3', 'CloudFormation'],
      outcomes: [
        'RTO reduced to < 5 minutes',
        'Zero data loss (RPO = 0)',
        'Automated failover testing'
      ],
      github: 'https://github.com',
      demo: '#'
    },
    {
      title: 'CI/CD Pipeline Modernization',
      description: 'Migrated legacy deployment processes to modern CI/CD pipelines for a SaaS company with 50+ microservices. Implemented GitOps practices, automated testing, and progressive delivery.',
      technologies: ['GitLab CI', 'ArgoCD', 'Docker', 'Helm', 'SonarQube', 'Nexus'],
      outcomes: [
        'Deploy time: 2 hours → 15 minutes',
        'Deployment frequency increased 10x',
        'Defect rate reduced by 60%'
      ],
      github: 'https://github.com',
      demo: '#'
    },
    {
      title: 'Infrastructure as Code Framework',
      description: 'Created a reusable IaC framework using Terraform modules for rapid infrastructure provisioning. Standardized infrastructure deployment across 20+ projects with best practices built-in.',
      technologies: ['Terraform', 'AWS', 'Ansible', 'Python', 'GitLab', 'Vault'],
      outcomes: [
        'New environment setup: days → hours',
        'Infrastructure consistency across projects',
        'Reduced configuration drift'
      ],
      github: 'https://github.com',
      demo: '#'
    },
    {
      title: 'Observability Platform',
      description: 'Implemented a comprehensive observability solution with distributed tracing, centralized logging, and real-time monitoring for a microservices architecture supporting 100+ services.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Fluentd', 'Alertmanager'],
      outcomes: [
        'MTTD reduced by 80%',
        'MTTR reduced by 65%',
        'Complete system visibility'
      ],
      github: 'https://github.com',
      demo: '#'
    },
    {
      title: 'Security & Compliance Automation',
      description: 'Built automated security scanning and compliance validation into CI/CD pipelines. Implemented policy-as-code, vulnerability scanning, and automated remediation for infrastructure and applications.',
      technologies: ['Trivy', 'Falco', 'OPA', 'Snyk', 'AWS Security Hub', 'Terraform'],
      outcomes: [
        'Security vulnerabilities reduced by 75%',
        'Automated compliance reporting',
        'Shift-left security culture'
      ],
      github: 'https://github.com',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world infrastructure projects that delivered measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Outcomes</h4>
                  <div className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-400 text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <a
                    href={project.github}
                    className="inline-flex items-center text-gray-400 hover:text-gray-200 font-medium text-sm transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center text-gray-400 hover:text-gray-200 font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

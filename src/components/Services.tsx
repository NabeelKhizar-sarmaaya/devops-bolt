import { GitBranch, Cloud, Boxes, Gauge, Shield, Wrench } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Development',
      description: 'Design and implement automated continuous integration and deployment pipelines using Jenkins, GitLab CI, GitHub Actions, and CircleCI. Streamline your development workflow with automated testing, building, and deployment processes.',
      features: ['Automated Testing', 'Multi-Environment Deployments', 'Rollback Strategies']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Architect and manage scalable cloud infrastructure across AWS, Azure, and Google Cloud Platform. Optimize resources, implement best practices, and ensure high availability for your applications.',
      features: ['Multi-Cloud Solutions', 'Cost Optimization', 'High Availability Design']
    },
    {
      icon: Boxes,
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications using Docker and Kubernetes. Implement microservices architecture with automated scaling, service discovery, and load balancing.',
      features: ['Kubernetes Clusters', 'Docker Containerization', 'Service Mesh Implementation']
    },
    {
      icon: Wrench,
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning and management using Terraform, Ansible, and CloudFormation. Version control your infrastructure and enable repeatable, reliable deployments.',
      features: ['Terraform Modules', 'Configuration Management', 'Infrastructure Versioning']
    },
    {
      icon: Gauge,
      title: 'Monitoring & Performance',
      description: 'Implement comprehensive monitoring, logging, and alerting solutions using Prometheus, Grafana, ELK Stack, and CloudWatch. Gain deep insights into system performance and health.',
      features: ['Real-time Monitoring', 'Custom Dashboards', 'Alert Management']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implement DevSecOps practices, security scanning, and compliance automation. Integrate security into your CI/CD pipeline and ensure your infrastructure meets industry standards.',
      features: ['Security Scanning', 'Compliance Automation', 'Access Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive DevOps solutions to accelerate your development workflow and optimize infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

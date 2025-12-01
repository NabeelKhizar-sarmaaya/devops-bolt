import { Award, CheckCircle2 } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      category: 'Cloud Platforms',
      skills: [
        { name: 'Amazon Web Services (AWS)', level: 'Expert' },
        { name: 'Microsoft Azure', level: 'Advanced' },
        { name: 'Google Cloud Platform', level: 'Advanced' },
        { name: 'DigitalOcean', level: 'Intermediate' }
      ]
    },
    {
      category: 'Container & Orchestration',
      skills: [
        { name: 'Kubernetes', level: 'Expert' },
        { name: 'Docker', level: 'Expert' },
        { name: 'Helm', level: 'Advanced' },
        { name: 'Docker Compose', level: 'Expert' }
      ]
    },
    {
      category: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', level: 'Expert' },
        { name: 'Ansible', level: 'Advanced' },
        { name: 'CloudFormation', level: 'Advanced' },
        { name: 'Pulumi', level: 'Intermediate' }
      ]
    },
    {
      category: 'CI/CD Tools',
      skills: [
        { name: 'Jenkins', level: 'Expert' },
        { name: 'GitLab CI/CD', level: 'Expert' },
        { name: 'GitHub Actions', level: 'Advanced' },
        { name: 'CircleCI', level: 'Advanced' },
        { name: 'ArgoCD', level: 'Advanced' }
      ]
    },
    {
      category: 'Monitoring & Logging',
      skills: [
        { name: 'Prometheus', level: 'Expert' },
        { name: 'Grafana', level: 'Expert' },
        { name: 'ELK Stack', level: 'Advanced' },
        { name: 'Datadog', level: 'Advanced' },
        { name: 'CloudWatch', level: 'Expert' }
      ]
    },
    {
      category: 'Programming & Scripting',
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'Bash/Shell Scripting', level: 'Expert' },
        { name: 'Go', level: 'Intermediate' },
        { name: 'YAML/JSON', level: 'Expert' }
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      year: '2023'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      year: '2022'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      year: '2022'
    },
    {
      name: 'AWS Certified DevOps Engineer - Professional',
      issuer: 'Amazon Web Services',
      year: '2021'
    },
    {
      name: 'Azure DevOps Engineer Expert',
      issuer: 'Microsoft',
      year: '2021'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-green-400 bg-green-900 border-green-700';
      case 'Advanced':
        return 'text-blue-400 bg-blue-900 border-blue-700';
      case 'Intermediate':
        return 'text-orange-400 bg-orange-900 border-orange-700';
      default:
        return 'text-gray-400 bg-gray-800 border-gray-700';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical expertise backed by industry-recognized certifications
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-700"
              >
                <h4 className="text-lg font-bold text-white mb-4 pb-2 border-b border-gray-700">
                  {category.category}
                </h4>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <CheckCircle2 className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded border ml-2 ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-700 hover:border-gray-600 group"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                    <Award className="h-6 w-6 text-gray-400 group-hover:text-gray-300 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2 leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-500">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import { Code2, Briefcase, Award, TrendingUp } from 'lucide-react';

function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Technical Expertise',
      description: 'Deep knowledge of cloud platforms, containerization, and infrastructure as code'
    },
    {
      icon: Briefcase,
      title: 'Industry Experience',
      description: 'Worked with startups to enterprise companies, delivering scalable solutions'
    },
    {
      icon: Award,
      title: 'Certified Professional',
      description: 'Multiple certifications including AWS, Kubernetes, and Docker'
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Reduced deployment times by 60% and infrastructure costs by 40%'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate DevOps Engineer with over 5 years of experience in designing, implementing, and maintaining
              cloud infrastructure and CI/CD pipelines. My mission is to bridge the gap between development and operations,
              enabling teams to deliver high-quality software faster and more reliably.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Throughout my career, I've specialized in automating deployment processes, optimizing cloud costs, and building
              resilient infrastructure that scales. I believe in the power of automation, continuous improvement, and
              infrastructure as code to transform how organizations deliver value.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My expertise spans across major cloud platforms (AWS, Azure, GCP), container orchestration with Kubernetes,
              infrastructure automation with Terraform and Ansible, and building robust CI/CD pipelines with Jenkins,
              GitLab CI, and GitHub Actions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Core Technologies</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">AWS / Cloud Platforms</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-blue-500 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Kubernetes / Docker</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-blue-500 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Terraform / IaC</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-blue-500 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">CI/CD Tools</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-blue-500 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Monitoring & Logging</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-blue-500 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

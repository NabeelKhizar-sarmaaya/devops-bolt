import { ArrowRight, Server, Cloud, Workflow } from 'lucide-react';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              DevOps Engineer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Robust
              <span className="text-blue-600"> Infrastructure</span> for Modern Applications
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Specializing in CI/CD pipelines, cloud infrastructure automation, and scalable deployment solutions.
              Transforming complex infrastructure challenges into streamlined, reliable systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border border-gray-200"
              >
                View Projects
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600 text-sm">AWS, Azure, GCP architecture and optimization</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 mt-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CI/CD Pipelines</h3>
              <p className="text-gray-600 text-sm">Automated testing and deployment workflows</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Container Orchestration</h3>
              <p className="text-gray-600 text-sm">Kubernetes and Docker deployments</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-white mt-8">
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-blue-100">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import experiances from "../data/experiences.json";

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-brbg-black min-h-screen -mb-30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Experience
        </h1>
        <div className="space-y-6 flex flex-col">
          {experiances.details.map((exp, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/60 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {exp.company}
                  </h2>
                  <p className="text-blue-400 text-lg font-semibold mt-1">
                    {exp.role}
                  </p>
                </div>
                <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.responsibilies.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="text-gray-200 leading-relaxed flex items-start"
                  >
                    <span className="text-blue-400 mr-3 mt-1 flex-shrink-0">
                      ▹
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

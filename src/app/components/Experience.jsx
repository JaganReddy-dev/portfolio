import experiences from "../data/experiences.json"

const Experience = () => {
  return (
    <section id="experience" className="relative py-12 md:py-20  px-4 -mt-5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-semibold text-indigo-500 text-start uppercase tracking-widest">
          Experience
        </h1>
        <h2 className="text-4xl font-bold text-white leading-tight mb-10">
          Places I&apos;ve <span className="text-indigo-400">Worked At</span>
        </h2>

        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800 hidden md:block" />

          {experiences.details.map((exp, index) => (
            <div key={index} className="relative md:pl-16 group">
              {/* Timeline dot */}
              <div
                className="
                hidden md:block absolute left-2 top-6 w-4 h-4 rounded-full
                bg-blue-500 border-4 border-black
                group-hover:scale-110 transition-transform
              "
              />

              <div
                className="
                  rounded-2xl bg-gray-900/60 border border-gray-800
                  p-6 md:p-8
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-gray-700
                "
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {exp.company}
                    </h2>
                    <p className="text-blue-400 font-medium mt-1">{exp.role}</p>
                  </div>

                  <span className="text-sm text-gray-400">{exp.duration}</span>
                </div>

                {/* Responsibilities */}
                <ul className="mt-4 space-y-3">
                  {exp.responsibilies.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-300 leading-relaxed"
                    >
                      <span className="mr-3 mt-1 text-blue-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

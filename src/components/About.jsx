export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="reveal text-accent text-sm font-medium tracking-widest uppercase mb-3">
          About me
        </p>
        <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
          Building things that matter
        </h2>

        <div className="reveal reveal-delay-2 flex items-center gap-6 mb-8">
          <img
            src="https://github.com/DavidBertsan.png"
            alt="David Bertomeu"
            className="w-20 h-20 rounded-full border-2 border-accent/30 flex-shrink-0"
          />
          <p className="text-gray-500 text-sm">
            David Bertomeu Sánchez · Spain
          </p>
        </div>

        <div className="reveal reveal-delay-3 space-y-4 text-gray-400 text-lg leading-relaxed">
          <p>
            I'm a 2nd-year Multiplatform Application Development (DAM) student based in Spain,
            building a solid foundation in software development — with a focus on clean architecture,
            attention to detail, and learning fast.
          </p>
          <p>
            Before tech, I worked in the service sector. That background gave me something
            formal education doesn't always cover: responsibility, adaptability, and the ability
            to perform under pressure. I bring those habits into every line of code I write.
          </p>
          <p>
            I'm looking to join a team where I can{' '}
            <span className="text-white font-medium">contribute from day one</span> and keep
            growing as a junior developer. Strong preference for places where good engineering
            practices actually matter.
          </p>
        </div>
      </div>
    </section>
  )
}

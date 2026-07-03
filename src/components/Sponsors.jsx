const tiers = [
  {
    label: "Premium Technology Partner",
    cols: "grid-cols-1",
    wrapClass: "max-w-[400px] mx-auto py-8 px-10",
    imgClass: "w-full h-auto object-contain",
    box: false,
    sponsors: [
      { src: "/partnership-logos/agent-kernal.png", name: "Agent Kernal" },
    ],
  },
    {
    label: "Official Education Partner",
    cols: "grid-cols-1",
    wrapClass: "max-w-[400px] mx-auto py-8 px-10",
    imgClass: "w-full h-auto object-contain",
    box: false,
    sponsors: [
      { src: "/partnership-logos/cima.jpeg", name: "CIMA" },
    ],
  },
  {
    label: "Knowledge & Innovation Partner",
    cols: "grid-cols-1",
    wrapClass: "max-w-[400px] mx-auto py-8 px-10",
    imgClass: "w-full h-auto object-contain",
    box: false,
    sponsors: [
      { src: "/partnership-logos/slasscom.png", name: "Slasscom" },
    ],
  },
  {
    label: "Industry Ecosystem Partner",
    cols: "grid-cols-1",
    imgClass: "max-w-full h-auto object-contain",
    box: true,
    sponsors: [
      { src: "/partnership-logos/trace-expert-city.png", name: "TRACE Expert City" },
    ],
  },
  {
    label: "Digital Engagement Partner",
    cols: "grid-cols-1",
    imgClass: "max-w-full h-auto object-contain",
    box: true,
    sponsors: [
      { src: "/partnership-logos/ahaslides.png", name: "Ahaslides" },
    ],
  },
  {
    label: "Official PR Partner",
    cols: "grid-cols-1",
    imgClass: "max-w-full h-auto object-contain",
    box: true,
    sponsors: [
      { src: "/partnership-logos/pr-wire.png", name: "PRwire" },
    ],
  },
   {
    label: "Official Digital Photography Partner",
    cols: "grid-cols-1",
    imgClass: "max-w-full h-auto object-contain",
    box: true,
    sponsors: [
      { src: "/partnership-logos/nysm.jpg", name: "NowYouSeeMe" },
    ],
  },
  {
    label: "Official School Networking Partner",
    cols: "grid-cols-1",
    imgClass: "max-w-full h-auto object-contain",
    box: true,
    sponsors: [
      { src: "/partnership-logos/royal-college-cs.png", name: "The Royal College Computer Society" },
    ],
  },
  {
    label: "Digital Media Partners",
    cols: "grid-cols-3",
    imgClass: "max-w-full h-auto object-contain",
    box: true,
    sponsors: [
      { src: "/partnership-logos/hacksl.png",    name: "Hack SL" },
      { src: "/partnership-logos/good-pr.png",   name: "Good PR" },
      { src: "/partnership-logos/uni-today.png", name: "UNI Today" },
    ],
  },
];

export default function Sponsors() {
  return (
    <section className="py-32 relative" id="partners">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="mb-4 flex flex-col items-center text-center">
          <h2
            className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Our <span className="text-blue-500">Partners</span>
          </h2>
          <p
            className="text-slate-500 text-sm uppercase tracking-widest mt-3 font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Idealize 2026
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-blue-600 to-blue-300 mt-5" />
        </div>

        <div className="space-y-12 mt-12">
          {tiers.map((tier) => (
            <div key={tier.label}>
              <div className="flex items-center gap-4 mb-7">
                <span
                  className="text-sm font-black uppercase tracking-[0.2em] text-slate-200 whitespace-nowrap"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {tier.label}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-500 to-transparent" />
              </div>

              <div className={`grid ${tier.cols} gap-6 items-center justify-items-center`}>
                {tier.sponsors.map(({ src, name }) => (
                  tier.box ? (
                    <div
                      key={name}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow duration-300 w-full max-w-[250px]"
                    >
                      <img className={tier.imgClass} src={src} alt={name} />
                    </div>
                  ) : (
                    <div
                      key={name}
                      className={`flex items-center justify-center ${tier.wrapClass}`}
                    >
                      <img className={tier.imgClass} src={src} alt={name} />
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center border-t border-slate-800 pt-10">
          <p
            className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            These organizations proudly support Idealize 2026
          </p>
        </div>

      </div>
    </section>
  );
}
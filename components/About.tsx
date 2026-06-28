import Link from "next/dist/client/link";

export default function AboutSection() {
  const features = [
    {
      icon: "📸",
      title: "Event Photography",
      description:
        "Capturing authentic moments and emotions that make every celebration unforgettable.",
    },
    {
      icon: "🎥",
      title: "Cinematic Videography",
      description:
        "Creating cinematic films that let you relive your special moments forever.",
    },
    {
      icon: "✨",
      title: "Creative Storytelling",
      description:
        "Turning ordinary moments into extraordinary visual stories through our lens.",
    },
    {
      icon: "❤️",
      title: "Candid Memories",
      description:
        "Preserving genuine smiles, laughter, and emotions in their purest form.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-100 lg:text-5xl">
              We Capture Stories Beyond the Lens
            </h2>

            <p className="mt-6 mb-8 text-lg leading-8 text-gray-400">
              At <span className="font-semibold">Plot Pixel</span>, we believe
              every celebration deserves to be remembered beautifully. From
              weddings and engagements to birthdays and corporate events, we
              capture genuine emotions and transform them into timeless visual
              stories.
            </p>

            <Link
                    href="https://www.instagram.com/plot.pixel_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-red-600 px-8 py-3 font-medium text-white transition hover:scale-105">
              Follow Us
            </Link>
          </div>

          {/* Right Features */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-red-400 p-6 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="mt-4 text-xl font-semibold text-gray-100">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
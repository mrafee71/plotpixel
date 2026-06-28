import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Capturing every smile, emotion, and unforgettable moment of your big day.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Event Coverage",
      description:
        "Professional photography and videography for birthdays, engagements, and special events.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Cinematic Videography",
      description:
        "Beautifully crafted films that let you relive your memories again and again.",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Bringing Your Moments to Life
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            From intimate celebrations to grand occasions, we combine
            creativity, storytelling, and technical excellence to preserve
            memories that last forever.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl bg-zinc-900"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={288}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <button className="mt-6 font-medium text-white transition hover:text-gray-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
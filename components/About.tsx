// components/About.tsx
import Image from "next/image";

const currently = [
  { label: "Building", value: "Onstorr" },
  { label: "Learning", value: "System design" },
  { label: "Exploring", value: "AI + automation" },
  { label: "Improving", value: "Testing + architecture" },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        max-w-7xl
        mx-auto
        px-5 sm:px-6
        py-20 sm:py-24 lg:py-28
      "
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[0.8fr_1.2fr]
          gap-12
          sm:gap-16
          lg:gap-24
          items-center
        "
      >
        {/* Photo */}
        <div className="relative w-full max-w-70 sm:max-w-sm mx-auto lg:mx-0">
          <div
            className="
              relative aspect-4/5
              overflow-hidden
              rounded-4xl
              bg-white/60
              shadow-sm
              -rotate-2
              dark:bg-[#293527]
            "
          >
            <Image
              src="/hero-photo.jpg"
              alt="Chiamaka Aniago"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 380px"
            />
          </div>

          {/* Handwritten note */}
          <p
            className="
              absolute
              -bottom-6
              right-0
              sm:-bottom-7
              sm:-right-5
              font-hand
              text-xs
              sm:text-sm
              text-ink/70
              rotate-6
              dark:text-cream/70
            "
          >
            coffee
            <br />
            code
            <br />
            progress &lt;3
          </p>

          {/* Decorative circle */}
          <div
            className="
              absolute
              -top-5
              -left-5
              w-16
              h-16
              rounded-full
              border
              border-ink/20
              -z-10
              dark:border-cream/20
            "
          />
        </div>

        {/* Content */}
        <div>
          <p
            className="
              font-sans
              text-xs
              tracking-[0.25em]
              text-ink/50
              mb-5
              dark:text-cream/50
            "
          >
            03. ABOUT ME
          </p>

          <h2
            className="
              font-serif
              text-5xl
              md:text-6xl
              leading-[0.95]
              mb-8
              text-ink
              dark:text-cream
            "
          >
            Behind
            <br />
            the <span className="italic">build.</span>
          </h2>

          <div className="space-y-5 max-w-2xl">
            <p
              className="
                font-sans
                text-lg
                leading-relaxed
                text-ink/80
                dark:text-cream/80
              "
            >
              I&apos;m Chiamaka, a frontend developer who likes figuring out how
              things work.
            </p>

            <p
              className="
                font-sans
                text-ink/65
                leading-relaxed
                dark:text-cream/65
              "
            >
              My background in physiotherapy taught me to think about people
              first — what they need, where friction gets in the way, and how
              small details can change an experience. I brought that mindset
              into software.
            </p>

            <p
              className="
                font-sans
                text-ink/65
                leading-relaxed
                dark:text-cream/65
              "
            >
              These days, I&apos;m exploring the space between{" "}
              <span className="text-ink font-medium dark:text-cream">
                frontend development, product thinking, AI, and systems.
              </span>{" "}
              I&apos;m learning by building — from healthcare products like
              PhysioTrack and PhysioPal to business tools like Onstorr.
            </p>

            <p
              className="
                font-sans
                text-ink/65
                leading-relaxed
                dark:text-cream/65
              "
            >
              I&apos;m still learning, experimenting, breaking things, and
              figuring out better ways to build them.
              <br />
              <span className="font-medium text-ink dark:text-cream">
                That&apos;s kind of the point.
              </span>
            </p>
          </div>

          {/* Currently */}
          <div
            className="
              mt-10
              pt-7
              border-t
              border-ink/10
              dark:border-cream/10
            "
          >
            <p
              className="
                font-sans
                text-xs
                tracking-widest
                text-ink/40
                mb-5
                dark:text-cream/40
              "
            >
              CURRENTLY
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {currently.map((item) => (
                <div key={item.label}>
                  <p
                    className="
                      font-hand
                      text-sm
                      text-ink/50
                      mb-1
                      dark:text-cream/50
                    "
                  >
                    {item.label}
                  </p>

                  <p className="font-sans text-sm text-ink dark:text-cream">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
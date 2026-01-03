import { projects } from "@/data/projects";

export default function Hero() {
    const featured = projects.find((p) => p.featured);

    if (!featured) return null;

    return (
        <section className="relative h-[90vh] w-full overflow-hidden">
            {/* Background - cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e17] via-[#0d1322] to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_40%)]" />

            {/* Subtle pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Content - anchored bottom-left like Prime */}
            <div className="relative z-10 h-full flex items-end px-6 sm:px-8 lg:px-12 pb-20 sm:pb-24 max-w-6xl mx-auto">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <span className="inline-flex items-center text-sm uppercase tracking-widest text-[var(--color-accent)]">
                        <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mr-2 animate-pulse" />
                        Featured Project
                    </span>

                    {/* Title */}
                    <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-text-primary)]">
                        {featured.title}
                    </h1>

                    {/* Description */}
                    <p className="mt-5 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                        {featured.description}
                    </p>

                    {/* Tech stack pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {featured.techStack.slice(0, 5).map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-[var(--color-text-secondary)] font-mono"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-medium rounded-lg transition-colors min-h-[48px] flex items-center"
                        >
                            View Projects
                        </a>
                        <span className="px-6 py-3 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-lg flex items-center gap-2 min-h-[48px]">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                            {featured.status || "In Development"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}

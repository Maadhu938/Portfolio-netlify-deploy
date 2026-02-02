import { skills } from "@/data/projects";

export default function SkillsSection() {
    const categories = [...new Set(skills.map((s) => s.category))];

    return (
        <section id="skills" className="py-16 sm:py-20 bg-[var(--color-bg-secondary)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-fluid-3xl font-bold text-[var(--color-text-primary)] mb-3 sm:mb-4">
                    Technical Skills
                </h2>
                <p className="text-fluid-base text-[var(--color-text-secondary)] mb-8 sm:mb-12 max-w-2xl">
                    Technologies and tools used across my real projects.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {categories.map((category) => (
                        <div key={category}>
                            <h3 className="text-xs sm:text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-3 sm:mb-4">
                                {category}
                            </h3>
                            <div className="space-y-2 sm:space-y-3">
                                {skills
                                    .filter((s) => s.category === category)
                                    .map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-3 p-3 bg-[var(--color-bg-tertiary)] rounded-lg border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)]/30 active:bg-[var(--color-bg-secondary)] transition-colors min-h-[48px]"
                                        >
                                            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full flex-shrink-0" />
                                            <span className="text-sm sm:text-base text-[var(--color-text-primary)] font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default function AboutSection() {
    return (
        <section id="about" className="py-16 sm:py-20 bg-[var(--color-bg-secondary)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="max-w-2xl">
                    <h2 className="text-fluid-3xl font-bold text-[var(--color-text-primary)] mb-4 sm:mb-6">
                        About
                    </h2>

                    <div className="space-y-4 sm:space-y-5 text-[var(--color-text-secondary)] leading-relaxed">
                        <p className="text-fluid-base">
                            Full-stack developer building web and mobile applications.
                            I focus on practical tools that solve real problems.
                        </p>

                        <p className="text-fluid-base">
                            <strong className="text-[var(--color-text-primary)]">
                                MyNotebook
                            </strong>{" "}
                            is my primary project. It combines notes, AI chat, and document uploads
                            with strict user data isolation. Built with React, Capacitor, Flask, and PostgreSQL.
                        </p>

                        <p className="text-fluid-base">
                            I build to ship. Every project here is functional code, not concepts.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12">
                        <div className="text-center p-3 sm:p-4 bg-[var(--color-bg-tertiary)] rounded-xl border border-[var(--color-border-subtle)]">
                            <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)] mb-0.5 sm:mb-1">
                                5+
                            </div>
                            <div className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                                Projects
                            </div>
                        </div>
                        <div className="text-center p-3 sm:p-4 bg-[var(--color-bg-tertiary)] rounded-xl border border-[var(--color-border-subtle)]">
                            <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)] mb-0.5 sm:mb-1">
                                3+
                            </div>
                            <div className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                                AI/ML Apps
                            </div>
                        </div>
                        <div className="text-center p-3 sm:p-4 bg-[var(--color-bg-tertiary)] rounded-xl border border-[var(--color-border-subtle)]">
                            <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)] mb-0.5 sm:mb-1">
                                Full
                            </div>
                            <div className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                                Stack
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


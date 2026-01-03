export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-[var(--color-bg-secondary)]">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                        About
                    </h2>

                    <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed">
                        <p>
                            Full-stack developer building web and mobile applications.
                            I focus on practical tools that solve real problems.
                        </p>

                        <p>
                            <strong className="text-[var(--color-text-primary)]">
                                MyNotebook
                            </strong>{" "}
                            is my primary project. It combines notes, AI chat, and document uploads
                            with strict user data isolation. Built with React, Capacitor, Flask, and PostgreSQL.
                        </p>

                        <p>
                            I build to ship. Every project here is functional code, not concepts.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-12">
                        <div className="text-center p-4 bg-[var(--color-bg-tertiary)] rounded-xl border border-[var(--color-border-subtle)]">
                            <div className="text-3xl font-bold text-[var(--color-accent)] mb-1">
                                5+
                            </div>
                            <div className="text-sm text-[var(--color-text-muted)]">
                                Projects
                            </div>
                        </div>
                        <div className="text-center p-4 bg-[var(--color-bg-tertiary)] rounded-xl border border-[var(--color-border-subtle)]">
                            <div className="text-3xl font-bold text-[var(--color-accent)] mb-1">
                                3+
                            </div>
                            <div className="text-sm text-[var(--color-text-muted)]">
                                AI/ML Apps
                            </div>
                        </div>
                        <div className="text-center p-4 bg-[var(--color-bg-tertiary)] rounded-xl border border-[var(--color-border-subtle)]">
                            <div className="text-3xl font-bold text-[var(--color-accent)] mb-1">
                                Full
                            </div>
                            <div className="text-sm text-[var(--color-text-muted)]">
                                Stack
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

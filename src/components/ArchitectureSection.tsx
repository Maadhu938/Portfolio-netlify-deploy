export default function ArchitectureSection() {
    const concepts = [
        {
            title: "Frontend",
            description:
                "React application packaged for mobile using Capacitor. Clean component structure with Tailwind CSS for styling.",
        },
        {
            title: "Backend",
            description:
                "Flask server handling REST API requests. RAG pipeline processes document uploads and generates contextual responses.",
        },
        {
            title: "Data Isolation",
            description:
                "All database queries filter by authenticated user ID. Users can only access their own notes, documents, and chat history.",
        },
        {
            title: "Authentication",
            description:
                "Supabase handles user auth with JWT tokens. Backend validates tokens before processing any request.",
        },
    ];

    return (
        <section id="architecture" className="py-16 sm:py-20 bg-[var(--color-bg-primary)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                <h2 className="text-fluid-3xl font-bold text-[var(--color-text-primary)] mb-3 sm:mb-4">
                    System Architecture
                </h2>
                <p className="text-fluid-base text-[var(--color-text-secondary)] mb-8 sm:mb-12 max-w-xl">
                    How MyNotebook is built. Real architecture, no buzzwords.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {concepts.map((concept, index) => (
                        <div
                            key={concept.title}
                            className="p-4 sm:p-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)]/30 active:bg-[var(--color-bg-tertiary)] transition-colors"
                        >
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-accent-muted)] rounded-lg flex items-center justify-center">
                                    <span className="text-[var(--color-accent)] font-mono text-sm font-bold">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-base sm:text-lg font-semibold text-[var(--color-text-primary)] mb-1.5 sm:mb-2">
                                        {concept.title}
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                        {concept.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Architecture diagram */}
                <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border-subtle)]">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--color-text-primary)] mb-4 sm:mb-6 text-center">
                        Stack Overview
                    </h3>
                    <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-center md:gap-8">
                        <div className="text-center p-3 sm:p-4 bg-[var(--color-bg-tertiary)] rounded-lg border border-[var(--color-border-subtle)] w-full max-w-[180px] sm:min-w-[140px]">
                            <div className="text-[var(--color-accent)] font-mono text-xs mb-1">
                                Frontend
                            </div>
                            <div className="text-sm sm:text-base text-[var(--color-text-primary)] font-medium">
                                React + Capacitor
                            </div>
                        </div>

                        <div className="text-[var(--color-text-muted)] rotate-90 md:rotate-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>

                        <div className="text-center p-3 sm:p-4 bg-[var(--color-bg-tertiary)] rounded-lg border border-[var(--color-border-subtle)] w-full max-w-[180px] sm:min-w-[140px]">
                            <div className="text-[var(--color-accent)] font-mono text-xs mb-1">
                                Backend
                            </div>
                            <div className="text-sm sm:text-base text-[var(--color-text-primary)] font-medium">
                                Flask + RAG
                            </div>
                        </div>

                        <div className="text-[var(--color-text-muted)] rotate-90 md:rotate-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>

                        <div className="text-center p-3 sm:p-4 bg-[var(--color-bg-tertiary)] rounded-lg border border-[var(--color-border-subtle)] w-full max-w-[180px] sm:min-w-[140px]">
                            <div className="text-[var(--color-accent)] font-mono text-xs mb-1">
                                Database
                            </div>
                            <div className="text-sm sm:text-base text-[var(--color-text-primary)] font-medium">
                                PostgreSQL
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


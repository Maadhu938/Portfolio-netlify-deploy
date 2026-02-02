export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Maadhu Avati",
        url: "https://maadhuavati.in",
        jobTitle: "Full-Stack Developer",
        description:
            "Full-stack developer building web and mobile applications with React, Capacitor, Flask, and PostgreSQL.",
        sameAs: [
            "https://github.com/Maadhu938",
            "https://www.linkedin.com/in/maadhu-avati-525435279",
            "https://instagram.com/maadhu_839",
        ],
        knowsAbout: [
            "React",
            "JavaScript",
            "TypeScript",
            "Python",
            "Flask",
            "PostgreSQL",
            "Capacitor",
            "RAG",
            "Full-Stack Development",
        ],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Maadhu Avati - Full-Stack Developer Portfolio",
        url: "https://maadhuavati.in",
        description:
            "Portfolio of Maadhu Avati, a full-stack developer building web and mobile applications.",
        author: {
            "@type": "Person",
            name: "Maadhu Avati",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}

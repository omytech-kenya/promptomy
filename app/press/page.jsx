import Link from "next/link";
import Image from "next/image";

// Sample press releases data
const pressReleases = [
    {
        id: 1,
        title: "PROMPTOMY Raises $50M Series A to Democratize AI Prompt Engineering",
        date: "2024-03-20",
        excerpt: "Leading AI prompt marketplace secures funding from top-tier VCs to expand platform and accelerate global adoption of prompt engineering best practices.",
        category: "Funding",
        featured: true
    },
    {
        id: 2,
        title: "PROMPTOMY Launches Advanced AI Prompt Generator with GPT-4 Integration",
        date: "2024-03-15",
        excerpt: "New tool helps users create optimized prompts 10x faster with AI-powered suggestions and real-time testing capabilities.",
        category: "Product"
    },
    {
        id: 3,
        title: "PROMPTOMY Marketplace Surpasses 100,000 Active Users Milestone",
        date: "2024-03-10",
        excerpt: "Platform growth accelerates as businesses and creators embrace AI prompt engineering for productivity and innovation.",
        category: "Milestone"
    },
    {
        id: 4,
        title: "PROMPTOMY Partners with Leading Universities for AI Education Initiative",
        date: "2024-03-05",
        excerpt: "Collaboration with Stanford, MIT, and Carnegie Mellon to develop curriculum for next-generation AI prompt engineers.",
        category: "Partnership"
    },
    {
        id: 5,
        title: "PROMPTOMY CEO Sarah Chen Named to Forbes 30 Under 30 AI List",
        date: "2024-02-28",
        excerpt: "Recognition highlights leadership in making AI more accessible and democratizing prompt engineering expertise.",
        category: "Award"
    }
];

// Sample media coverage
const mediaCoverage = [
    {
        id: 1,
        publication: "TechCrunch",
        title: "How PROMPTOMY is Building the GitHub for AI Prompts",
        date: "2024-03-18",
        author: "Sarah Perez",
        url: "#",
        logo: "/promptomy1.png"
    },
    {
        id: 2,
        publication: "The Verge",
        title: "The Rise of Prompt Engineering: Inside PROMPTOMY's Marketplace",
        date: "2024-03-12",
        author: "James Vincent",
        url: "#",
        logo: "/promptomy1.png"
    },
    {
        id: 3,
        publication: "Wired",
        title: "Why Everyone Needs to Learn Prompt Engineering",
        date: "2024-03-08",
        author: "Will Knight",
        url: "#",
        logo: "/promptomy1.png"
    },
    {
        id: 4,
        publication: "Forbes",
        title: "The $2 Billion Prompt Engineering Market PROMPTOMY is Capturing",
        date: "2024-03-01",
        author: "Alex Konrad",
        url: "#",
        logo: "/promptomy1.png"
    },
    {
        id: 5,
        publication: "VentureBeat",
        title: "PROMPTOMY's AI-First Approach to Prompt Optimization",
        date: "2024-02-25",
        author: "Kyle Wiggers",
        url: "#",
        logo: "/promptomy1.png"
    },
    {
        id: 6,
        publication: "MIT Technology Review",
        title: "The Science Behind Effective AI Prompts",
        date: "2024-02-20",
        author: "Karen Hao",
        url: "#",
        logo: "/promptomy1.png"
    }
];

// Company facts and figures
const companyFacts = [
    { label: "Founded", value: "2023" },
    { label: "Headquarters", value: "San Francisco, CA" },
    { label: "Employees", value: "50+" },
    { label: "Active Users", value: "100,000+" },
    { label: "Prompts Created", value: "1M+" },
    { label: "Creator Earnings", value: "$5M+" },
    { label: "Countries", value: "25+" },
    { label: "Funding Raised", value: "$55M" }
];

// Leadership team
const leadership = [
    {
        name: "Sarah Chen",
        title: "CEO & Co-Founder",
        bio: "Former AI researcher at OpenAI and Google. PhD in Computer Science from Stanford.",
        image: "/promptomy1.png"
    },
    {
        name: "Marcus Rodriguez",
        title: "CTO & Co-Founder",
        bio: "Ex-Principal Engineer at Meta. Led AI infrastructure teams for 8+ years.",
        image: "/promptomy1.png"
    },
    {
        name: "Dr. Emily Watson",
        title: "Head of AI Research",
        bio: "Former research scientist at DeepMind. Expert in natural language processing.",
        image: "/promptomy1.png"
    }
];

export default function PressPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Press &
                            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                                Media
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Latest news, press releases, and media resources about PROMPTOMY's mission to democratize AI prompt engineering.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <a
                                href="#press-kit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                            >
                                Download Press Kit
                            </a>
                            <a
                                href="mailto:press@promptomy.com"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                Media Inquiries
                            </a>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Featured Press Release */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
                        {pressReleases.filter(release => release.featured).map((release) => (
                            <div key={release.id} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium">
                                        {release.category}
                                    </span>
                                    <span className="text-slate-400">{new Date(release.date).toLocaleDateString()}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {release.title}
                                </h3>
                                <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                                    {release.excerpt}
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        href={`/press/${release.id}`}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                                    >
                                        Read Full Release
                                    </Link>
                                    <button className="border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                                        Share
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Press Releases Grid */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12">Press Releases</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pressReleases.filter(release => !release.featured).map((release) => (
                            <Link key={release.id} href={`/press/${release.id}`}>
                                <article className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group cursor-pointer h-full">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                                            {release.category}
                                        </span>
                                        <span className="text-slate-400 text-sm">{new Date(release.date).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                        {release.title}
                                    </h3>
                                    <p className="text-slate-300 mb-4 leading-relaxed">
                                        {release.excerpt}
                                    </p>
                                    <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors text-sm">
                                        Read More →
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Coverage */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12">Media Coverage</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {mediaCoverage.map((article) => (
                            <a
                                key={article.id}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group cursor-pointer"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                                        <Image
                                            src={article.logo}
                                            alt={article.publication}
                                            width={32}
                                            height={32}
                                            className="rounded"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">{article.publication}</div>
                                        <div className="text-slate-400 text-sm">{new Date(article.date).toLocaleDateString()}</div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-400 text-sm">By {article.author}</p>
                                <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors text-sm mt-3">
                                    Read Article →
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Facts */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Company at a Glance</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {companyFacts.map((fact, index) => (
                            <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-center">
                                <div className="text-3xl font-bold text-indigo-400 mb-2">{fact.value}</div>
                                <div className="text-slate-300">{fact.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Leadership Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {leadership.map((leader, index) => (
                            <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">
                                        {leader.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                                <p className="text-indigo-400 font-medium mb-4">{leader.title}</p>
                                <p className="text-slate-300 text-sm leading-relaxed">{leader.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Press Kit */}
            <section id="press-kit" className="py-16 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Press Kit & Resources</h2>
                        <p className="text-xl text-slate-300">
                            Everything you need to cover PROMPTOMY accurately and effectively.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Brand Assets</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                                    <span className="text-slate-300">Logo Package (PNG, SVG)</span>
                                    <button className="text-indigo-400 hover:text-indigo-300 font-medium">Download</button>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                                    <span className="text-slate-300">Brand Guidelines</span>
                                    <button className="text-indigo-400 hover:text-indigo-300 font-medium">Download</button>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                                    <span className="text-slate-300">Product Screenshots</span>
                                    <button className="text-indigo-400 hover:text-indigo-300 font-medium">Download</button>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-slate-300">Executive Headshots</span>
                                    <button className="text-indigo-400 hover:text-indigo-300 font-medium">Download</button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Media Contact</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-slate-400 text-sm">Press Inquiries</div>
                                    <a href="mailto:press@promptomy.com" className="text-indigo-400 hover:text-indigo-300">
                                        press@promptomy.com
                                    </a>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm">Partnership Inquiries</div>
                                    <a href="mailto:partnerships@promptomy.com" className="text-indigo-400 hover:text-indigo-300">
                                        partnerships@promptomy.com
                                    </a>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm">General Inquiries</div>
                                    <a href="mailto:hello@promptomy.com" className="text-indigo-400 hover:text-indigo-300">
                                        hello@promptomy.com
                                    </a>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm">Phone</div>
                                    <span className="text-white">+1 (555) 123-4567</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Cover Our Story?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            We're always happy to share insights about AI, prompt engineering, and the future of human-AI collaboration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:press@promptomy.com"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
                            >
                                Contact Press Team
                            </a>
                            <Link
                                href="/blog"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 inline-block"
                            >
                                Read Our Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
import Link from "next/link";
import Image from "next/image";

// Partner categories and data
const partnerCategories = [
    {
        id: "technology",
        title: "Technology Partners",
        description: "Leading AI and technology companies powering the PROMPTOMY ecosystem",
        partners: [
            {
                name: "OpenAI",
                logo: "/promptomy1.png",
                description: "Deep integration with GPT models and API access for advanced prompt testing",
                type: "AI Platform",
                featured: true
            },
            {
                name: "Anthropic",
                logo: "/promptomy1.png",
                description: "Claude integration for diverse AI model testing and optimization",
                type: "AI Platform",
                featured: true
            },
            {
                name: "Google Cloud",
                logo: "/promptomy1.png",
                description: "Cloud infrastructure and AI services powering our global platform",
                type: "Cloud Provider",
                featured: false
            },
            {
                name: "Microsoft Azure",
                logo: "/promptomy1.png",
                description: "Enterprise AI solutions and Azure OpenAI Service integration",
                type: "Cloud Provider",
                featured: false
            },
            {
                name: "Hugging Face",
                logo: "/promptomy1.png",
                description: "Open-source model integration and community collaboration",
                type: "AI Platform",
                featured: false
            },
            {
                name: "Cohere",
                logo: "/promptomy1.png",
                description: "Enterprise-focused language models and API integration",
                type: "AI Platform",
                featured: false
            }
        ]
    },
    {
        id: "education",
        title: "Education Partners",
        description: "Universities and institutions advancing AI education and research",
        partners: [
            {
                name: "Stanford University",
                logo: "/promptomy1.png",
                description: "AI research collaboration and curriculum development for prompt engineering",
                type: "Research University",
                featured: true
            },
            {
                name: "MIT",
                logo: "/promptomy1.png",
                description: "Computer Science department partnership for AI safety and ethics research",
                type: "Research University",
                featured: true
            },
            {
                name: "Carnegie Mellon",
                logo: "/promptomy1.png",
                description: "Machine Learning department collaboration on prompt optimization algorithms",
                type: "Research University",
                featured: false
            },
            {
                name: "UC Berkeley",
                logo: "/promptomy1.png",
                description: "AI research lab partnership and student internship programs",
                type: "Research University",
                featured: false
            },
            {
                name: "Coursera",
                logo: "/promptomy1.png",
                description: "Online course platform for prompt engineering certification programs",
                type: "EdTech Platform",
                featured: false
            },
            {
                name: "Udacity",
                logo: "/promptomy1.png",
                description: "Nanodegree programs in AI prompt engineering and optimization",
                type: "EdTech Platform",
                featured: false
            }
        ]
    },
    {
        id: "enterprise",
        title: "Enterprise Partners",
        description: "Leading companies integrating PROMPTOMY into their AI workflows",
        partners: [
            {
                name: "Salesforce",
                logo: "/promptomy1.png",
                description: "CRM integration for AI-powered customer service and sales automation",
                type: "SaaS Platform",
                featured: true
            },
            {
                name: "Slack",
                logo: "/promptomy1.png",
                description: "Workplace collaboration with integrated AI prompt assistance",
                type: "Productivity Tool",
                featured: true
            },
            {
                name: "Notion",
                logo: "/promptomy1.png",
                description: "Knowledge management platform with embedded prompt optimization",
                type: "Productivity Tool",
                featured: false
            },
            {
                name: "Zapier",
                logo: "/promptomy1.png",
                description: "Workflow automation with AI prompt-powered integrations",
                type: "Automation Platform",
                featured: false
            },
            {
                name: "Figma",
                logo: "/promptomy1.png",
                description: "Design tool integration for AI-assisted creative workflows",
                type: "Design Platform",
                featured: false
            },
            {
                name: "GitHub",
                logo: "/promptomy1.png",
                description: "Developer platform integration for code generation prompts",
                type: "Developer Platform",
                featured: false
            }
        ]
    }
];

// Partnership programs
const partnershipPrograms = [
    {
        title: "Technology Integration",
        description: "Integrate your AI platform or tools with PROMPTOMY's ecosystem",
        benefits: [
            "API access and technical documentation",
            "Joint go-to-market opportunities",
            "Co-marketing and PR support",
            "Technical support and engineering resources"
        ],
        requirements: [
            "Established AI or developer platform",
            "Technical integration capabilities",
            "Commitment to joint customer success"
        ],
        icon: "🔧"
    },
    {
        title: "Education Partnership",
        description: "Collaborate on AI education and research initiatives",
        benefits: [
            "Curriculum development support",
            "Student internship programs",
            "Research collaboration opportunities",
            "Free platform access for educational use"
        ],
        requirements: [
            "Accredited educational institution",
            "AI or computer science programs",
            "Research focus on prompt engineering"
        ],
        icon: "🎓"
    },
    {
        title: "Enterprise Reseller",
        description: "Become an authorized reseller of PROMPTOMY enterprise solutions",
        benefits: [
            "Competitive reseller margins",
            "Sales and technical training",
            "Marketing development funds",
            "Dedicated partner support"
        ],
        requirements: [
            "Established enterprise sales team",
            "AI or SaaS solution expertise",
            "Minimum annual commitment"
        ],
        icon: "💼"
    },
    {
        title: "Startup Accelerator",
        description: "Support emerging AI startups with PROMPTOMY platform access",
        benefits: [
            "Free platform credits for portfolio companies",
            "Mentorship and technical guidance",
            "Demo day participation opportunities",
            "Investor network introductions"
        ],
        requirements: [
            "Recognized accelerator or incubator",
            "Focus on AI or ML startups",
            "Active portfolio of companies"
        ],
        icon: "🚀"
    }
];

// Success stories
const successStories = [
    {
        partner: "Stanford AI Lab",
        title: "Advancing Prompt Engineering Research",
        description: "Collaborative research program resulted in 3 published papers and new optimization algorithms now used across the platform.",
        results: [
            "40% improvement in prompt effectiveness",
            "3 peer-reviewed publications",
            "15 student researchers involved"
        ],
        image: "/promptomy1.png"
    },
    {
        partner: "Enterprise Client",
        title: "Scaling AI Across Global Operations",
        description: "Fortune 500 company deployed PROMPTOMY across 50+ business units, standardizing AI workflows and improving productivity.",
        results: [
            "60% reduction in AI project delivery time",
            "500+ employees trained in prompt engineering",
            "$2M annual productivity savings"
        ],
        image: "/promptomy1.png"
    }
];

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Partner
                            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                                Ecosystem
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Join our growing network of technology leaders, educational institutions, and enterprise partners building the future of AI prompt engineering.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <a
                                href="#programs"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                            >
                                Become a Partner
                            </a>
                            <a
                                href="#partners"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                View Partners
                            </a>
                        </div>

                        <div className="flex items-center justify-center space-x-8 text-slate-400">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">100+</div>
                                <div className="text-sm">Active Partners</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">25+</div>
                                <div className="text-sm">Integrations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">15+</div>
                                <div className="text-sm">Universities</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Featured Partners */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Featured Partners</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Leading organizations driving innovation in AI and prompt engineering.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {partnerCategories.flatMap(category =>
                            category.partners.filter(partner => partner.featured)
                        ).map((partner, index) => (
                            <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-8 text-center group">
                                <div className="w-16 h-16 bg-slate-700 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={40}
                                        height={40}
                                        className="rounded"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                                <p className="text-slate-400 text-sm mb-4">{partner.type}</p>
                                <p className="text-slate-300 text-sm leading-relaxed">{partner.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Programs */}
            <section id="programs" className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Partnership Programs</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Choose the partnership model that best fits your organization and goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {partnershipPrograms.map((program, index) => (
                            <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-4xl">{program.icon}</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                                        <p className="text-slate-300">{program.description}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                                        <ul className="space-y-2">
                                            {program.benefits.map((benefit, idx) => (
                                                <li key={idx} className="text-slate-300 text-sm flex items-start">
                                                    <span className="text-teal-400 mr-2">✓</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                                        <ul className="space-y-2">
                                            {program.requirements.map((req, idx) => (
                                                <li key={idx} className="text-slate-300 text-sm flex items-start">
                                                    <span className="text-indigo-400 mr-2">•</span>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Partners by Category */}
            <section id="partners" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Explore our comprehensive partner ecosystem across technology, education, and enterprise.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {partnerCategories.map((category) => (
                            <div key={category.id}>
                                <div className="text-center mb-12">
                                    <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">{category.description}</p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.partners.map((partner, index) => (
                                        <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                                                    <Image
                                                        src={partner.logo}
                                                        alt={partner.name}
                                                        width={32}
                                                        height={32}
                                                        className="rounded"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-white">{partner.name}</h4>
                                                    <p className="text-slate-400 text-sm">{partner.type}</p>
                                                </div>
                                            </div>
                                            <p className="text-slate-300 text-sm leading-relaxed">{partner.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Real results from our partner collaborations and integrations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="text-indigo-400 font-medium mb-2">{story.partner}</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{story.title}</h3>
                                    <p className="text-slate-300 mb-6 leading-relaxed">{story.description}</p>

                                    <div className="space-y-2">
                                        <h4 className="text-lg font-semibold text-white">Key Results:</h4>
                                        {story.results.map((result, idx) => (
                                            <div key={idx} className="text-slate-300 text-sm flex items-center">
                                                <span className="text-teal-400 mr-2">✓</span>
                                                {result}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Showcase */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Integration Ecosystem</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Seamlessly connect PROMPTOMY with your existing tools and workflows.
                        </p>
                    </div>

                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-12">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="w-16 h-16 bg-indigo-500/20 rounded-xl mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">API Integration</h3>
                                <p className="text-slate-300">
                                    Robust REST APIs and SDKs for seamless platform integration and custom workflows.
                                </p>
                            </div>

                            <div>
                                <div className="w-16 h-16 bg-teal-500/20 rounded-xl mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Webhook Support</h3>
                                <p className="text-slate-300">
                                    Real-time notifications and automated workflows with comprehensive webhook support.
                                </p>
                            </div>

                            <div>
                                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Enterprise SSO</h3>
                                <p className="text-slate-300">
                                    Secure single sign-on integration with SAML, OAuth, and enterprise identity providers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Partner with PROMPTOMY?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Join our ecosystem and help shape the future of AI prompt engineering together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:partnerships@promptomy.com"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
                            >
                                Start Partnership Discussion
                            </a>
                            <Link
                                href="/press"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 inline-block"
                            >
                                View Press Coverage
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
import Link from "next/link";

// Sample job openings data
const jobOpenings = [
    {
        id: 1,
        title: "Senior AI Engineer",
        department: "Engineering",
        location: "San Francisco, CA / Remote",
        type: "Full-time",
        experience: "5+ years",
        description: "Lead the development of our AI prompt optimization algorithms and help scale our platform to millions of users.",
        requirements: [
            "5+ years of experience in machine learning and AI",
            "Strong background in NLP and language models",
            "Experience with Python, TensorFlow, or PyTorch",
            "Knowledge of prompt engineering techniques",
            "Experience with cloud platforms (AWS, GCP, Azure)"
        ],
        responsibilities: [
            "Design and implement AI algorithms for prompt optimization",
            "Collaborate with product team on new AI features",
            "Mentor junior engineers and lead technical discussions",
            "Optimize model performance and scalability"
        ]
    },
    {
        id: 2,
        title: "Product Manager - AI Platform",
        department: "Product",
        location: "New York, NY / Remote",
        type: "Full-time",
        experience: "3+ years",
        description: "Drive product strategy for our AI prompt marketplace and shape the future of AI-human collaboration.",
        requirements: [
            "3+ years of product management experience",
            "Understanding of AI/ML technologies",
            "Experience with marketplace or platform products",
            "Strong analytical and communication skills",
            "Bachelor's degree in relevant field"
        ],
        responsibilities: [
            "Define product roadmap and strategy",
            "Work closely with engineering and design teams",
            "Analyze user behavior and market trends",
            "Launch new features and measure success"
        ]
    },
    {
        id: 3,
        title: "UX/UI Designer",
        department: "Design",
        location: "Los Angeles, CA / Remote",
        type: "Full-time",
        experience: "2+ years",
        description: "Create intuitive and beautiful user experiences that make AI accessible to everyone.",
        requirements: [
            "2+ years of UX/UI design experience",
            "Proficiency in Figma, Sketch, or similar tools",
            "Strong portfolio showcasing design process",
            "Understanding of user-centered design principles",
            "Experience with design systems"
        ],
        responsibilities: [
            "Design user interfaces for web and mobile",
            "Conduct user research and usability testing",
            "Create and maintain design systems",
            "Collaborate with product and engineering teams"
        ]
    },
    {
        id: 4,
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Austin, TX / Remote",
        type: "Full-time",
        experience: "3+ years",
        description: "Build and maintain the infrastructure that powers millions of AI prompt generations daily.",
        requirements: [
            "3+ years of DevOps/Infrastructure experience",
            "Experience with Kubernetes and Docker",
            "Knowledge of AWS/GCP cloud platforms",
            "Proficiency in Infrastructure as Code (Terraform)",
            "Experience with CI/CD pipelines"
        ],
        responsibilities: [
            "Manage cloud infrastructure and deployments",
            "Implement monitoring and alerting systems",
            "Optimize system performance and costs",
            "Ensure security and compliance standards"
        ]
    },
    {
        id: 5,
        title: "Content Marketing Manager",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        experience: "2+ years",
        description: "Lead our content strategy to educate and inspire the AI prompt community.",
        requirements: [
            "2+ years of content marketing experience",
            "Excellent writing and editing skills",
            "Understanding of AI and prompt engineering",
            "Experience with SEO and content analytics",
            "Social media marketing experience"
        ],
        responsibilities: [
            "Develop content strategy and editorial calendar",
            "Create blog posts, tutorials, and guides",
            "Manage social media presence",
            "Collaborate with community and product teams"
        ]
    },
    {
        id: 6,
        title: "Customer Success Manager",
        department: "Customer Success",
        location: "Chicago, IL / Remote",
        type: "Full-time",
        experience: "1+ years",
        description: "Help our users succeed with AI prompts and build lasting relationships with our community.",
        requirements: [
            "1+ years of customer success experience",
            "Strong communication and problem-solving skills",
            "Interest in AI and emerging technologies",
            "Experience with CRM and support tools",
            "Empathy and patience working with users"
        ],
        responsibilities: [
            "Onboard new users and provide training",
            "Resolve customer issues and feedback",
            "Identify opportunities for account growth",
            "Collaborate with product team on improvements"
        ]
    }
];

const benefits = [
    {
        icon: "💰",
        title: "Competitive Salary",
        description: "Market-leading compensation with equity options"
    },
    {
        icon: "🏥",
        title: "Health & Wellness",
        description: "Comprehensive health, dental, and vision insurance"
    },
    {
        icon: "🏠",
        title: "Remote First",
        description: "Work from anywhere with flexible hours"
    },
    {
        icon: "📚",
        title: "Learning Budget",
        description: "$2,000 annual budget for courses and conferences"
    },
    {
        icon: "🌴",
        title: "Unlimited PTO",
        description: "Take time off when you need it"
    },
    {
        icon: "💻",
        title: "Equipment",
        description: "Top-tier laptop and home office setup"
    }
];

const values = [
    {
        title: "Innovation First",
        description: "We're building the future of AI-human collaboration and aren't afraid to take risks."
    },
    {
        title: "User Obsessed",
        description: "Every decision we make starts with understanding our users' needs and challenges."
    },
    {
        title: "Transparency",
        description: "We believe in open communication, honest feedback, and sharing knowledge freely."
    },
    {
        title: "Continuous Learning",
        description: "The AI field evolves rapidly, and we're committed to growing with it."
    }
];

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Join the
                            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                                AI Revolution
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Help us democratize AI and build the tools that will shape how humans and artificial intelligence collaborate in the future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <a
                                href="#openings"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                            >
                                View Open Positions
                            </a>
                            <a
                                href="#culture"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                Learn About Our Culture
                            </a>
                        </div>

                        <div className="flex items-center justify-center space-x-8 text-slate-400">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">50+</div>
                                <div className="text-sm">Team Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">15+</div>
                                <div className="text-sm">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">$50M</div>
                                <div className="text-sm">Series A Funding</div>
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

            {/* Company Values */}
            <section id="culture" className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            The principles that guide everything we do at PROMPTOMY.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all">
                                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                                <p className="text-slate-300 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            We believe in taking care of our team so they can do their best work.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all text-center">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                                <p className="text-slate-300">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="openings" className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Join our team and help shape the future of AI prompt engineering.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {jobOpenings.map((job) => (
                            <div key={job.id} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all overflow-hidden">
                                <div className="p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                                                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full">
                                                    {job.department}
                                                </span>
                                                <span>📍 {job.location}</span>
                                                <span>⏰ {job.type}</span>
                                                <span>📊 {job.experience}</span>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/careers/${job.id}`}
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 mt-4 lg:mt-0 inline-block text-center"
                                        >
                                            Apply Now
                                        </Link>
                                    </div>

                                    <p className="text-slate-300 mb-6 leading-relaxed">{job.description}</p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                                            <ul className="space-y-2">
                                                {job.requirements.slice(0, 3).map((req, index) => (
                                                    <li key={index} className="text-slate-300 text-sm flex items-start">
                                                        <span className="text-teal-400 mr-2">•</span>
                                                        {req}
                                                    </li>
                                                ))}
                                                {job.requirements.length > 3 && (
                                                    <li className="text-slate-400 text-sm">
                                                        +{job.requirements.length - 3} more requirements
                                                    </li>
                                                )}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                                            <ul className="space-y-2">
                                                {job.responsibilities.slice(0, 3).map((resp, index) => (
                                                    <li key={index} className="text-slate-300 text-sm flex items-start">
                                                        <span className="text-indigo-400 mr-2">•</span>
                                                        {resp}
                                                    </li>
                                                ))}
                                                {job.responsibilities.length > 3 && (
                                                    <li className="text-slate-400 text-sm">
                                                        +{job.responsibilities.length - 3} more responsibilities
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Growing Team</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            We're building a diverse, global team of passionate individuals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                            <div className="text-4xl font-bold text-indigo-400 mb-2">85%</div>
                            <div className="text-slate-300">Remote Team</div>
                        </div>
                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                            <div className="text-4xl font-bold text-teal-400 mb-2">40%</div>
                            <div className="text-slate-300">Women in Tech</div>
                        </div>
                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                            <div className="text-4xl font-bold text-yellow-400 mb-2">25</div>
                            <div className="text-slate-300">Average Age</div>
                        </div>
                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                            <div className="text-4xl font-bold text-green-400 mb-2">4.9</div>
                            <div className="text-slate-300">Glassdoor Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Don't See Your Role?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:careers@promptomy.com"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
                            >
                                Send Your Resume
                            </a>
                            <Link
                                href="/blog"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
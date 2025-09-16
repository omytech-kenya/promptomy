import Link from "next/link";
import { notFound } from "next/navigation";

// Sample job data - matches the careers page
const jobData = {
    1: {
        id: 1,
        title: "Senior AI Engineer",
        department: "Engineering",
        location: "San Francisco, CA / Remote",
        type: "Full-time",
        experience: "5+ years",
        salary: "$180,000 - $250,000",
        description: "Lead the development of our AI prompt optimization algorithms and help scale our platform to millions of users. You'll work at the forefront of AI technology, building systems that help users create more effective prompts and improve AI interactions across various domains.",
        requirements: [
            "5+ years of experience in machine learning and AI",
            "Strong background in NLP and language models (GPT, BERT, T5, etc.)",
            "Experience with Python, TensorFlow, PyTorch, or JAX",
            "Deep knowledge of prompt engineering techniques and optimization",
            "Experience with cloud platforms (AWS, GCP, Azure)",
            "Understanding of distributed systems and scalable architectures",
            "Experience with MLOps and model deployment pipelines",
            "Strong problem-solving and analytical skills",
            "Excellent communication and collaboration abilities"
        ],
        responsibilities: [
            "Design and implement AI algorithms for prompt optimization and evaluation",
            "Collaborate with product team to define and build new AI features",
            "Mentor junior engineers and lead technical architecture discussions",
            "Optimize model performance, latency, and scalability",
            "Research and implement state-of-the-art NLP techniques",
            "Build robust testing and evaluation frameworks for AI systems",
            "Work with data science team to improve model training pipelines",
            "Contribute to technical documentation and best practices"
        ],
        niceToHave: [
            "PhD in Computer Science, AI, or related field",
            "Experience with transformer architectures and attention mechanisms",
            "Knowledge of reinforcement learning from human feedback (RLHF)",
            "Experience with prompt injection and AI safety techniques",
            "Open source contributions to ML/AI projects",
            "Experience in a high-growth startup environment"
        ],
        team: "Engineering",
        reportsTo: "VP of Engineering",
        teamSize: "12 engineers"
    },
    2: {
        id: 2,
        title: "Product Manager - AI Platform",
        department: "Product",
        location: "New York, NY / Remote",
        type: "Full-time",
        experience: "3+ years",
        salary: "$140,000 - $180,000",
        description: "Drive product strategy for our AI prompt marketplace and shape the future of AI-human collaboration. You'll own the product roadmap for our core platform features and work closely with engineering, design, and data teams to deliver exceptional user experiences.",
        requirements: [
            "3+ years of product management experience, preferably in AI/ML or developer tools",
            "Strong understanding of AI/ML technologies and their applications",
            "Experience with marketplace or platform products",
            "Proven track record of launching successful products",
            "Strong analytical skills and data-driven decision making",
            "Excellent communication and stakeholder management skills",
            "Bachelor's degree in Computer Science, Engineering, or related field",
            "Experience with user research and product discovery methods"
        ],
        responsibilities: [
            "Define and execute product roadmap and strategy for AI platform features",
            "Work closely with engineering and design teams to deliver features",
            "Conduct user research and analyze user behavior to inform decisions",
            "Launch new features and measure success through key metrics",
            "Collaborate with business stakeholders to align on priorities",
            "Write detailed product requirements and user stories",
            "Monitor competitive landscape and identify market opportunities",
            "Present product updates and insights to leadership team"
        ],
        niceToHave: [
            "MBA or advanced degree in relevant field",
            "Experience with AI prompt engineering or LLM applications",
            "Background in developer tools or API products",
            "Experience with A/B testing and experimentation platforms",
            "Knowledge of machine learning model evaluation metrics"
        ],
        team: "Product",
        reportsTo: "Head of Product",
        teamSize: "5 product managers"
    }
};

export default function JobDetailPage({ params }) {
    const job = jobData[params.id];

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Header */}
            <section className="relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                            <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link>
                            <span>/</span>
                            <span className="text-slate-300">{job.title}</span>
                        </div>
                    </nav>

                    {/* Job Header */}
                    <div className="mb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium">
                                {job.department}
                            </span>
                            <span className="text-slate-400">📍 {job.location}</span>
                            <span className="text-slate-400">⏰ {job.type}</span>
                            <span className="text-slate-400">📊 {job.experience}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {job.title}
                        </h1>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="text-xl text-slate-300">
                                💰 {job.salary}
                            </div>
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25">
                                Apply for This Position
                            </button>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Job Details */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">About This Role</h2>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    {job.description}
                                </p>
                            </div>

                            {/* Requirements */}
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
                                <ul className="space-y-3">
                                    {job.requirements.map((req, index) => (
                                        <li key={index} className="text-slate-300 flex items-start">
                                            <span className="text-indigo-400 mr-3 mt-1">•</span>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Responsibilities */}
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Key Responsibilities</h2>
                                <ul className="space-y-3">
                                    {job.responsibilities.map((resp, index) => (
                                        <li key={index} className="text-slate-300 flex items-start">
                                            <span className="text-teal-400 mr-3 mt-1">•</span>
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Nice to Have */}
                            {job.niceToHave && (
                                <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                                    <h2 className="text-2xl font-bold text-white mb-6">Nice to Have</h2>
                                    <ul className="space-y-3">
                                        {job.niceToHave.map((item, index) => (
                                            <li key={index} className="text-slate-300 flex items-start">
                                                <span className="text-yellow-400 mr-3 mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Quick Info */}
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Job Details</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Department:</span>
                                        <span className="text-white">{job.team}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Reports to:</span>
                                        <span className="text-white">{job.reportsTo}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Team size:</span>
                                        <span className="text-white">{job.teamSize}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Location:</span>
                                        <span className="text-white">{job.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Apply Button */}
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Ready to Apply?</h3>
                                <p className="text-slate-300 text-sm mb-4">
                                    Join our team and help shape the future of AI prompt engineering.
                                </p>
                                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 mb-3">
                                    Apply Now
                                </button>
                                <button className="w-full border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                                    Share This Job
                                </button>
                            </div>

                            {/* Contact */}
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Questions?</h3>
                                <p className="text-slate-300 text-sm mb-4">
                                    Have questions about this role or our company? We'd love to hear from you.
                                </p>
                                <a
                                    href="mailto:careers@promptomy.com"
                                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                                >
                                    careers@promptomy.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Similar Jobs */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Other Open Positions</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.values(jobData)
                            .filter(otherJob => otherJob.id !== job.id)
                            .slice(0, 3)
                            .map((otherJob) => (
                                <Link key={otherJob.id} href={`/careers/${otherJob.id}`}>
                                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group cursor-pointer">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                                                {otherJob.department}
                                            </span>
                                            <span className="text-slate-400 text-sm">{otherJob.type}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                            {otherJob.title}
                                        </h3>
                                        <p className="text-slate-300 text-sm mb-4">
                                            📍 {otherJob.location}
                                        </p>
                                        <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors text-sm">
                                            View Details →
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Join PROMPTOMY?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Be part of the team that's democratizing AI and shaping the future of human-AI collaboration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105">
                                Apply for This Position
                            </button>
                            <Link
                                href="/careers"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 inline-block"
                            >
                                View All Positions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Generate static params for the job IDs
export async function generateStaticParams() {
    return Object.keys(jobData).map((id) => ({
        id: id,
    }));
}

// Generate metadata for each job
export async function generateMetadata({ params }) {
    const job = jobData[params.id];

    if (!job) {
        return {
            title: 'Job Not Found - PROMPTOMY Careers',
        };
    }

    return {
        title: `${job.title} - PROMPTOMY Careers`,
        description: job.description,
        openGraph: {
            title: `${job.title} at PROMPTOMY`,
            description: job.description,
            type: 'website',
        },
    };
}
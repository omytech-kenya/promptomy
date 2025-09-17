import Link from "next/link";

export default function CommunityPage() {
    const communityStats = [
        { label: "Active Members", value: "12,500+", icon: "👥" },
        { label: "Prompts Shared", value: "50,000+", icon: "✨" },
        { label: "Daily Discussions", value: "200+", icon: "💬" },
        { label: "Countries", value: "85+", icon: "🌍" }
    ];

    const communityChannels = [
        {
            name: "Discord Server",
            description: "Join our vibrant Discord community for real-time discussions, prompt sharing, and collaboration.",
            members: "8,500+ members",
            icon: "💬",
            link: "#",
            color: "indigo"
        },
        {
            name: "Reddit Community",
            description: "Share prompts, get feedback, and participate in weekly challenges on our subreddit.",
            members: "15,000+ members",
            icon: "📱",
            link: "#",
            color: "orange"
        },
        {
            name: "GitHub Repository",
            description: "Contribute to open-source prompt libraries and collaborate on community projects.",
            members: "2,300+ contributors",
            icon: "🔧",
            link: "#",
            color: "purple"
        },
        {
            name: "Twitter Community",
            description: "Follow the latest updates, tips, and showcase your best prompts with the community.",
            members: "25,000+ followers",
            icon: "🐦",
            link: "#",
            color: "blue"
        }
    ];

    const featuredMembers = [
        {
            name: "Alex Chen",
            role: "AI Researcher",
            avatar: "AC",
            contribution: "Created 150+ prompts",
            specialty: "Technical Writing"
        },
        {
            name: "Sarah Johnson",
            role: "Content Creator",
            avatar: "SJ",
            contribution: "Top seller this month",
            specialty: "Marketing Copy"
        },
        {
            name: "Marcus Rodriguez",
            role: "Developer",
            avatar: "MR",
            contribution: "Built 5 integrations",
            specialty: "Code Generation"
        },
        {
            name: "Emily Zhang",
            role: "Designer",
            avatar: "EZ",
            contribution: "Community moderator",
            specialty: "Creative Prompts"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                            <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-slate-300">Community</span>
                        </div>
                    </nav>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Join the
                            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                                PROMPTOMY Community
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Connect with thousands of AI enthusiasts, prompt engineers, and creators from around the world. Share knowledge, collaborate on projects, and grow together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="#"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                            >
                                Join Discord
                            </a>
                            <Link
                                href="/auth/signup"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                Create Account
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Community Stats */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {communityStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-4">{stat.icon}</div>
                                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-slate-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Channels */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Connect With Us</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Choose your preferred platform to engage with the PROMPTOMY community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {communityChannels.map((channel, index) => (
                            <a
                                key={index}
                                href={channel.link}
                                className={`bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-${channel.color}-500/50 transition-all p-8 group block`}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`w-16 h-16 bg-${channel.color}-500/20 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-${channel.color}-500/30 transition-colors`}>
                                        {channel.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-${channel.color}-400 transition-colors`}>
                                            {channel.name}
                                        </h3>
                                        <p className="text-slate-300 mb-4">{channel.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-400">{channel.members}</span>
                                            <svg className={`w-5 h-5 text-slate-400 group-hover:text-${channel.color}-400 transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Community Members */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Featured Community Members</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Meet some of our amazing community contributors and creators
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredMembers.map((member, index) => (
                            <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-center hover:border-indigo-500/50 transition-all">
                                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                                    {member.avatar}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-indigo-400 text-sm mb-3">{member.role}</p>
                                <p className="text-slate-300 text-sm mb-2">{member.contribution}</p>
                                <span className="inline-block bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-xs">
                                    {member.specialty}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Guidelines */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4">Community Guidelines</h2>
                            <p className="text-slate-300">
                                Help us maintain a welcoming and productive environment for everyone
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="text-green-400 mr-2">✓</span>
                                    Do's
                                </h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2 mt-1">•</span>
                                        Share high-quality prompts and helpful resources
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2 mt-1">•</span>
                                        Provide constructive feedback and support
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2 mt-1">•</span>
                                        Respect different perspectives and experiences
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2 mt-1">•</span>
                                        Credit original creators when sharing content
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-400 mr-2 mt-1">•</span>
                                        Help newcomers learn and grow
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="text-red-400 mr-2">✗</span>
                                    Don'ts
                                </h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2 mt-1">•</span>
                                        Share spam, low-quality, or irrelevant content
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2 mt-1">•</span>
                                        Engage in harassment or discriminatory behavior
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2 mt-1">•</span>
                                        Post prompts that violate platform policies
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2 mt-1">•</span>
                                        Share personal information or private data
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2 mt-1">•</span>
                                        Engage in excessive self-promotion
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events & Activities */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Join our regular community events and activities
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                            <div className="text-center mb-4">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🏆</span>
                                </div>
                                <h3 className="text-lg font-bold text-white">Weekly Prompt Challenge</h3>
                            </div>
                            <p className="text-slate-300 text-sm mb-4">
                                Participate in our weekly themed prompt challenges and win prizes.
                            </p>
                            <div className="text-xs text-slate-400">Every Monday • Discord</div>
                        </div>

                        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                            <div className="text-center mb-4">
                                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <h3 className="text-lg font-bold text-white">Learning Sessions</h3>
                            </div>
                            <p className="text-slate-300 text-sm mb-4">
                                Join expert-led sessions on advanced prompt engineering techniques.
                            </p>
                            <div className="text-xs text-slate-400">Bi-weekly • Zoom</div>
                        </div>

                        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                            <div className="text-center mb-4">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <h3 className="text-lg font-bold text-white">Collaboration Hours</h3>
                            </div>
                            <p className="text-slate-300 text-sm mb-4">
                                Work together on community projects and share knowledge.
                            </p>
                            <div className="text-xs text-slate-400">Fridays • Discord</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Join Our Community?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Connect with like-minded creators and take your AI prompting skills to the next level.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#"
                            className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                        >
                            Join Discord Now
                        </a>
                        <Link
                            href="/help"
                            className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
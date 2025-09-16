import Link from "next/link";

export default function FeaturesPage() {
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
                            <span className="text-slate-300">Features</span>
                        </div>
                    </nav>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Powerful Features for
                            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                                AI Excellence
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Discover the comprehensive suite of tools and features that make PROMPTOMY the ultimate platform for AI prompt creation, optimization, and monetization.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/marketplace"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                            >
                                Explore Marketplace
                            </Link>
                            <Link
                                href="/generator"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                Try Generator
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

            {/* Core Features Overview */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Core Features</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Everything you need to master AI prompting in one powerful platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all group">
                            <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
                                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Smart Discovery</h3>
                            <p className="text-slate-300 mb-4">
                                Advanced search and filtering to find the perfect prompts for your needs across 50+ categories.
                            </p>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>AI-powered recommendations</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Category-based browsing</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Trending prompts</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all group">
                            <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-colors">
                                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">AI Generator</h3>
                            <p className="text-slate-300 mb-4">
                                Create and optimize prompts with our advanced AI assistant that understands context and intent.
                            </p>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Real-time optimization</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Multi-model testing</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Performance analytics</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all group">
                            <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Marketplace</h3>
                            <p className="text-slate-300 mb-4">
                                Buy and sell prompts in our thriving marketplace with built-in payment processing and analytics.
                            </p>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Instant payments</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Revenue tracking</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Global reach</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all group">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
                            <p className="text-slate-300 mb-4">
                                Work together with teams, share prompts privately, and collaborate on prompt development.
                            </p>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Team workspaces</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Version control</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Real-time editing</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all group">
                            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
                            <p className="text-slate-300 mb-4">
                                Comprehensive analytics to track prompt performance, user engagement, and revenue metrics.
                            </p>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Performance insights</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Usage statistics</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Revenue reports</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all group">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">API Integration</h3>
                            <p className="text-slate-300 mb-4">
                                Seamlessly integrate PROMPTOMY into your workflow with our comprehensive API and SDKs.
                            </p>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>RESTful API</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Multiple SDKs</li>
                                <li className="flex items-center"><span className="text-teal-400 mr-2">•</span>Webhook support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Features */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Advanced Capabilities</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Professional-grade features for power users and enterprises
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">AI-Powered Optimization</h3>
                            <p className="text-lg text-slate-300 mb-8">
                                Our advanced AI engine continuously analyzes and optimizes your prompts for better performance across different AI models and use cases.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Real-time Suggestions</h4>
                                        <p className="text-slate-300">Get instant feedback and improvement suggestions as you write your prompts.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Performance Metrics</h4>
                                        <p className="text-slate-300">Track effectiveness across different AI models with detailed performance analytics.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">A/B Testing</h4>
                                        <p className="text-slate-300">Test multiple prompt variations to find the most effective version for your needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                            <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-slate-400 text-sm">Optimization Score</span>
                                    <span className="text-green-400 font-semibold">94%</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Clarity</span>
                                    <span className="text-green-400">Excellent</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Specificity</span>
                                    <span className="text-yellow-400">Good</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Context</span>
                                    <span className="text-green-400">Excellent</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Length</span>
                                    <span className="text-green-400">Optimal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Features */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Enterprise Solutions</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Scale your AI operations with enterprise-grade features and support
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">SSO Integration</h3>
                            <p className="text-slate-300 text-sm">
                                Seamless single sign-on with your existing identity providers and security systems.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Team Management</h3>
                            <p className="text-slate-300 text-sm">
                                Advanced user roles, permissions, and team collaboration tools for large organizations.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-5.414l-4 4-4-4M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Compliance</h3>
                            <p className="text-slate-300 text-sm">
                                SOC 2, GDPR, and enterprise-grade security compliance with audit trails and reporting.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">24/7 Support</h3>
                            <p className="text-slate-300 text-sm">
                                Dedicated support team with priority response times and custom onboarding assistance.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                        >
                            Contact Sales
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Integration Showcase */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Connect with your favorite AI platforms and tools
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-center hover:border-indigo-500/50 transition-all">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-green-400 font-bold text-lg">AI</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">OpenAI</h3>
                            <p className="text-slate-400 text-sm">GPT-4, ChatGPT, DALL-E</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-center hover:border-teal-500/50 transition-all">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-400 font-bold text-lg">A</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Anthropic</h3>
                            <p className="text-slate-400 text-sm">Claude, Claude-2</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-center hover:border-purple-500/50 transition-all">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-purple-400 font-bold text-lg">G</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Google</h3>
                            <p className="text-slate-400 text-sm">Bard, PaLM, Gemini</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-center hover:border-yellow-500/50 transition-all">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-yellow-400 font-bold text-lg">+</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">More</h3>
                            <p className="text-slate-400 text-sm">50+ AI platforms</p>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Developer-Friendly API</h3>
                                <p className="text-slate-300 mb-6">
                                    Integrate PROMPTOMY into your applications with our comprehensive REST API and SDKs for popular programming languages.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm">Python</span>
                                    <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm">JavaScript</span>
                                    <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm">Node.js</span>
                                    <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm">PHP</span>
                                    <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm">Ruby</span>
                                    <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm">Go</span>
                                </div>
                            </div>
                            <div className="bg-slate-900/50 rounded-xl p-6">
                                <div className="text-slate-400 text-sm mb-2">Example API Call</div>
                                <pre className="text-green-400 text-sm overflow-x-auto">
                                    {`curl -X POST \\
  https://api.promptomy.com/v1/prompts \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Your prompt text here",
    "category": "writing",
    "optimize": true
  }'`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Experience These Features?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Join thousands of creators and businesses already using PROMPTOMY to enhance their AI workflows.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/auth/signup"
                            className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                        >
                            Start Free Trial
                        </Link>
                        <Link
                            href="/pricing"
                            className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
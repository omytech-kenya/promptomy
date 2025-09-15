import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        About <span className="text-indigo-400">PROMPTOMY</span>
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                        We're building the future of AI prompt engineering, creating a marketplace where creativity meets technology and innovation thrives.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                At PROMPTOMY, we believe that AI prompt engineering is an art form that deserves recognition, compensation, and community. Our mission is to democratize access to high-quality AI prompts while empowering creators to monetize their expertise.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                We're not just building a marketplace – we're fostering an ecosystem where prompt engineers, developers, and AI enthusiasts can collaborate, learn, and grow together.
                            </p>
                        </div>
                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Innovation</h3>
                                        <p className="text-slate-400 text-sm">Pushing the boundaries of AI interaction</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Community</h3>
                                        <p className="text-slate-400 text-sm">Building connections that matter</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Value</h3>
                                        <p className="text-slate-400 text-sm">Fair compensation for quality work</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Story</h2>
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            PROMPTOMY was born from a simple observation: as AI became more powerful, the art of crafting effective prompts became increasingly valuable. Yet there was no dedicated space for prompt engineers to showcase their work, collaborate with others, or earn recognition for their expertise.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            Founded in 2024, we started as a small team of AI enthusiasts and developers who believed that prompt engineering deserved its own ecosystem. We saw talented creators spending hours perfecting prompts that could unlock incredible AI capabilities, but with no way to share or monetize their innovations.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Today, PROMPTOMY serves thousands of prompt engineers, developers, and businesses worldwide, facilitating the exchange of high-quality AI prompts and fostering a community that's shaping the future of human-AI interaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Quality First</h3>
                            <p className="text-slate-400">
                                We maintain high standards for all prompts on our platform, ensuring users get reliable, effective results every time.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Community Driven</h3>
                            <p className="text-slate-400">
                                Our platform thrives on collaboration, feedback, and shared learning among prompt engineers worldwide.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Continuous Growth</h3>
                            <p className="text-slate-400">
                                We're constantly evolving our platform based on user feedback and the latest developments in AI technology.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Join Our Journey</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Be part of the community that's defining the future of AI interaction
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/auth/signup"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-xl font-medium transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
"use client";

import Link from "next/link";
import { useState } from "react";

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: "all", name: "All Topics", icon: "📚" },
        { id: "getting-started", name: "Getting Started", icon: "🚀" },
        { id: "prompts", name: "Creating Prompts", icon: "✨" },
        { id: "marketplace", name: "Marketplace", icon: "🛒" },
        { id: "account", name: "Account & Billing", icon: "👤" },
        { id: "api", name: "API & Integration", icon: "🔧" },
        { id: "troubleshooting", name: "Troubleshooting", icon: "🔍" }
    ];

    const helpArticles = [
        {
            id: 1,
            title: "Getting Started with PROMPTOMY",
            description: "Learn the basics of using PROMPTOMY to create, optimize, and share AI prompts.",
            category: "getting-started",
            readTime: "5 min read",
            popular: true
        },
        {
            id: 2,
            title: "How to Create Your First Prompt",
            description: "Step-by-step guide to creating effective AI prompts using our generator.",
            category: "prompts",
            readTime: "8 min read",
            popular: true
        },
        {
            id: 3,
            title: "Selling Prompts in the Marketplace",
            description: "Complete guide to listing and selling your prompts to earn revenue.",
            category: "marketplace",
            readTime: "10 min read",
            popular: true
        },
        {
            id: 4,
            title: "Understanding Prompt Optimization",
            description: "Learn how our AI optimization engine improves your prompt performance.",
            category: "prompts",
            readTime: "6 min read",
            popular: false
        },
        {
            id: 5,
            title: "Managing Your Account Settings",
            description: "How to update your profile, preferences, and account information.",
            category: "account",
            readTime: "4 min read",
            popular: false
        },
        {
            id: 6,
            title: "API Integration Guide",
            description: "Technical documentation for integrating PROMPTOMY into your applications.",
            category: "api",
            readTime: "15 min read",
            popular: false
        },
        {
            id: 7,
            title: "Billing and Subscription Management",
            description: "How to manage your subscription, view invoices, and update payment methods.",
            category: "account",
            readTime: "7 min read",
            popular: false
        },
        {
            id: 8,
            title: "Troubleshooting Common Issues",
            description: "Solutions to frequently encountered problems and error messages.",
            category: "troubleshooting",
            readTime: "12 min read",
            popular: true
        }
    ];

    const filteredArticles = helpArticles.filter(article => {
        const matchesCategory = activeCategory === "all" || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
                            <span className="text-slate-300">Help Center</span>
                        </div>
                    </nav>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            How can we help you?
                        </h1>
                        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Find answers to your questions, learn how to use PROMPTOMY effectively, and get the most out of our AI prompt platform.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for help articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 pl-14 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                />
                                <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
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

            {/* Quick Actions */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>
                        <p className="text-slate-300">Get help fast with these common tasks</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/auth/signup" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 text-center group">
                            <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500/30 transition-colors">
                                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Create Account</h3>
                            <p className="text-slate-300 text-sm">Sign up for PROMPTOMY and start creating prompts</p>
                        </Link>

                        <Link href="/generator" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all p-6 text-center group">
                            <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/30 transition-colors">
                                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">Generate Prompt</h3>
                            <p className="text-slate-300 text-sm">Use our AI generator to create optimized prompts</p>
                        </Link>

                        <Link href="/marketplace" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all p-6 text-center group">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Browse Marketplace</h3>
                            <p className="text-slate-300 text-sm">Discover and purchase prompts from creators</p>
                        </Link>

                        <Link href="/contact" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all p-6 text-center group">
                            <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-colors">
                                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Contact Support</h3>
                            <p className="text-slate-300 text-sm">Get personalized help from our support team</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Help Categories and Articles */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Categories Sidebar */}
                        <div className="lg:col-span-1">
                            <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center space-x-3 ${activeCategory === category.id
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                            }`}
                                    >
                                        <span className="text-lg">{category.icon}</span>
                                        <span className="font-medium">{category.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Articles */}
                        <div className="lg:col-span-3">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">
                                    {activeCategory === "all" ? "All Articles" : categories.find(c => c.id === activeCategory)?.name}
                                </h3>
                                <span className="text-slate-400 text-sm">
                                    {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                                </span>
                            </div>

                            <div className="space-y-4">
                                {filteredArticles.map((article) => (
                                    <div key={article.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group cursor-pointer">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                                                        {article.title}
                                                    </h4>
                                                    {article.popular && (
                                                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-lg text-xs font-medium">
                                                            Popular
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-slate-300 mb-3">{article.description}</p>
                                                <div className="flex items-center space-x-4 text-sm text-slate-400">
                                                    <span className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {article.readTime}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <span className="w-2 h-2 bg-slate-500 rounded-full mr-2"></span>
                                                        {categories.find(c => c.id === article.category)?.name}
                                                    </span>
                                                </div>
                                            </div>
                                            <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredArticles.length === 0 && (
                                <div className="text-center py-12">
                                    <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h3 className="text-lg font-semibold text-white mb-2">No articles found</h3>
                                    <p className="text-slate-400">Try adjusting your search or browse different categories.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-300">Quick answers to common questions</p>
                    </div>

                    <div className="space-y-4">
                        <details className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 group">
                            <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                What is PROMPTOMY and how does it work?
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-slate-300">
                                <p>PROMPTOMY is an AI prompt marketplace and optimization platform that allows users to create, optimize, buy, and sell AI prompts. Our platform uses advanced AI to help you craft more effective prompts for various AI models like GPT-4, Claude, and others.</p>
                            </div>
                        </details>

                        <details className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 group">
                            <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                How do I create my first prompt?
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-slate-300">
                                <p>To create your first prompt, navigate to our Prompt Generator, describe what you want to achieve, and our AI will help you craft an optimized prompt. You can then test, refine, and save your prompt for future use or share it in the marketplace.</p>
                            </div>
                        </details>

                        <details className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 group">
                            <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                Can I sell my prompts and earn money?
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-slate-300">
                                <p>Yes! You can list your prompts in our marketplace and earn revenue from sales. We handle payment processing and provide analytics to track your earnings. Creators typically earn 70-85% of the sale price, depending on their tier level.</p>
                            </div>
                        </details>

                        <details className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 group">
                            <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                What AI models does PROMPTOMY support?
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-slate-300">
                                <p>PROMPTOMY supports all major AI models including OpenAI's GPT-4 and ChatGPT, Anthropic's Claude, Google's Bard and PaLM, and many others. Our optimization engine is trained to work across different model architectures and capabilities.</p>
                            </div>
                        </details>

                        <details className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 group">
                            <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                Is there a free plan available?
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-slate-300">
                                <p>Yes, we offer a free tier that includes basic prompt creation, access to community prompts, and limited marketplace features. Premium plans unlock advanced optimization, unlimited prompts, priority support, and higher marketplace revenue shares.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Still need help?</h3>
                        <p className="text-slate-300 mb-8">
                            Can't find what you're looking for? Our support team is here to help you succeed with PROMPTOMY.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                            >
                                Contact Support
                            </Link>
                            <Link
                                href="/community"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                Join Community
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState('getting-started');

    const navigation = [
        {
            title: 'Getting Started',
            items: [
                { id: 'getting-started', title: 'Quick Start', icon: '🚀' },
                { id: 'account-setup', title: 'Account Setup', icon: '👤' },
                { id: 'first-prompt', title: 'Your First Prompt', icon: '✨' }
            ]
        },
        {
            title: 'Prompt Creation',
            items: [
                { id: 'prompt-basics', title: 'Prompt Basics', icon: '📝' },
                { id: 'advanced-techniques', title: 'Advanced Techniques', icon: '🎯' },
                { id: 'best-practices', title: 'Best Practices', icon: '⭐' }
            ]
        },
        {
            title: 'Marketplace',
            items: [
                { id: 'selling-prompts', title: 'Selling Prompts', icon: '💰' },
                { id: 'buying-prompts', title: 'Buying Prompts', icon: '🛒' },
                { id: 'reviews-ratings', title: 'Reviews & Ratings', icon: '⭐' }
            ]
        },
        {
            title: 'API Reference',
            items: [
                { id: 'api-overview', title: 'API Overview', icon: '🔌' },
                { id: 'authentication', title: 'Authentication', icon: '🔐' },
                { id: 'endpoints', title: 'Endpoints', icon: '📡' }
            ]
        },
        {
            title: 'Integrations',
            items: [
                { id: 'chatgpt-integration', title: 'ChatGPT Integration', icon: '🤖' },
                { id: 'claude-integration', title: 'Claude Integration', icon: '🧠' },
                { id: 'custom-integrations', title: 'Custom Integrations', icon: '🔧' }
            ]
        }
    ];

    const content = {
        'getting-started': {
            title: 'Quick Start Guide',
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-slate-300">
                        Welcome to PROMPTOMY! This guide will help you get started with creating, optimizing, and sharing AI prompts.
                    </p>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">What is PROMPTOMY?</h3>
                        <p className="text-slate-300 mb-4">
                            PROMPTOMY is the ultimate marketplace for AI prompts. Whether you're looking to discover high-quality prompts,
                            create your own, or monetize your AI expertise, we provide all the tools you need.
                        </p>
                        <ul className="space-y-2 text-slate-300">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                                Discover thousands of professional prompts
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                                Create optimized prompts with AI assistance
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                Sell your prompts and earn passive income
                            </li>
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                            <div className="text-2xl mb-3">1️⃣</div>
                            <h4 className="font-semibold text-white mb-2">Sign Up</h4>
                            <p className="text-slate-300 text-sm">Create your free account to start exploring prompts and using our generator.</p>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                            <div className="text-2xl mb-3">2️⃣</div>
                            <h4 className="font-semibold text-white mb-2">Explore</h4>
                            <p className="text-slate-300 text-sm">Browse our marketplace or use the generator to create your first prompt.</p>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                            <div className="text-2xl mb-3">3️⃣</div>
                            <h4 className="font-semibold text-white mb-2">Create</h4>
                            <p className="text-slate-300 text-sm">Start building amazing AI interactions with optimized prompts.</p>
                        </div>
                    </div>
                </div>
            )
        },
        'prompt-basics': {
            title: 'Prompt Creation Basics',
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-slate-300">
                        Learn the fundamentals of creating effective AI prompts that get better results.
                    </p>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">Anatomy of a Good Prompt</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-indigo-400 mb-2">1. Role Definition</h4>
                                <p className="text-slate-300 text-sm mb-2">Start by defining the AI's role or persona:</p>
                                <code className="block bg-slate-900 p-3 rounded text-green-400 text-sm">
                                    "You are an expert marketing copywriter with 10 years of experience..."
                                </code>
                            </div>
                            <div>
                                <h4 className="font-medium text-teal-400 mb-2">2. Clear Instructions</h4>
                                <p className="text-slate-300 text-sm mb-2">Provide specific, actionable instructions:</p>
                                <code className="block bg-slate-900 p-3 rounded text-green-400 text-sm">
                                    "Write a compelling product description that highlights benefits, not just features..."
                                </code>
                            </div>
                            <div>
                                <h4 className="font-medium text-yellow-400 mb-2">3. Context & Constraints</h4>
                                <p className="text-slate-300 text-sm mb-2">Add relevant context and limitations:</p>
                                <code className="block bg-slate-900 p-3 rounded text-green-400 text-sm">
                                    "The target audience is eco-conscious millennials. Keep it under 150 words..."
                                </code>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">Example: Before & After</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium text-red-400 mb-2">❌ Poor Prompt</h4>
                                <code className="block bg-slate-900 p-3 rounded text-slate-300 text-sm">
                                    "Write about marketing"
                                </code>
                                <p className="text-slate-400 text-xs mt-2">Too vague, no context or specific instructions</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-green-400 mb-2">✅ Good Prompt</h4>
                                <code className="block bg-slate-900 p-3 rounded text-slate-300 text-sm">
                                    "You are a digital marketing expert. Write a comprehensive guide on email marketing best practices for small businesses. Include 5 actionable tips with examples. Target audience: business owners with limited marketing experience. Format: numbered list with explanations."
                                </code>
                                <p className="text-slate-400 text-xs mt-2">Clear role, specific task, context, and format requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        'api-overview': {
            title: 'API Overview',
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-slate-300">
                        Integrate PROMPTOMY into your applications with our RESTful API.
                    </p>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">Base URL</h3>
                        <code className="block bg-slate-900 p-3 rounded text-green-400">
                            https://api.promptomy.com/v1
                        </code>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">Authentication</h3>
                        <p className="text-slate-300 mb-4">All API requests require authentication using your API key:</p>
                        <code className="block bg-slate-900 p-3 rounded text-green-400 text-sm">
                            curl -H "Authorization: Bearer YOUR_API_KEY" \<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;https://api.promptomy.com/v1/prompts
                        </code>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">Rate Limits</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-slate-700">
                                        <th className="text-left py-2 text-slate-300">Plan</th>
                                        <th className="text-left py-2 text-slate-300">Requests/Hour</th>
                                        <th className="text-left py-2 text-slate-300">Requests/Day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 text-slate-300">Free</td>
                                        <td className="py-2 text-slate-400">100</td>
                                        <td className="py-2 text-slate-400">1,000</td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 text-slate-300">Creator</td>
                                        <td className="py-2 text-slate-400">500</td>
                                        <td className="py-2 text-slate-400">10,000</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-slate-300">Business+</td>
                                        <td className="py-2 text-slate-400">2,000</td>
                                        <td className="py-2 text-slate-400">50,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">Common Endpoints</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                                <div>
                                    <code className="text-green-400">GET /prompts</code>
                                    <p className="text-slate-400 text-xs">List all prompts</p>
                                </div>
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Public</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                                <div>
                                    <code className="text-green-400">POST /prompts/generate</code>
                                    <p className="text-slate-400 text-xs">Generate optimized prompt</p>
                                </div>
                                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Auth Required</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                                <div>
                                    <code className="text-green-400">GET /user/prompts</code>
                                    <p className="text-slate-400 text-xs">Get user's prompts</p>
                                </div>
                                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Auth Required</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        'selling-prompts': {
            title: 'Selling Prompts on PROMPTOMY',
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-slate-300">
                        Turn your AI expertise into passive income by selling prompts on our marketplace.
                    </p>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">Getting Started as a Seller</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-indigo-400 text-sm font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white mb-1">Complete Your Profile</h4>
                                    <p className="text-slate-300 text-sm">Add a professional bio, profile picture, and showcase your expertise areas.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-teal-400 text-sm font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white mb-1">Create Quality Prompts</h4>
                                    <p className="text-slate-300 text-sm">Focus on specific use cases and provide clear, actionable prompts with examples.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-yellow-400 text-sm font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white mb-1">Set Competitive Pricing</h4>
                                    <p className="text-slate-300 text-sm">Research similar prompts and price competitively. Start lower to build reviews.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">Revenue Sharing</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                                <div className="text-2xl font-bold text-green-400 mb-2">70%</div>
                                <div className="text-slate-300 text-sm">Your Earnings</div>
                            </div>
                            <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                                <div className="text-2xl font-bold text-slate-400 mb-2">25%</div>
                                <div className="text-slate-300 text-sm">Platform Fee</div>
                            </div>
                            <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                                <div className="text-2xl font-bold text-slate-400 mb-2">5%</div>
                                <div className="text-slate-300 text-sm">Payment Processing</div>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm mt-4 text-center">
                            Payments are processed weekly via PayPal or bank transfer
                        </p>
                    </div>

                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">Best Practices for Success</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <div>
                                    <strong className="text-white">Write detailed descriptions:</strong>
                                    <span className="text-slate-300"> Explain what the prompt does, who it's for, and what results to expect.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <div>
                                    <strong className="text-white">Include examples:</strong>
                                    <span className="text-slate-300"> Show sample inputs and outputs to demonstrate value.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <div>
                                    <strong className="text-white">Use relevant tags:</strong>
                                    <span className="text-slate-300"> Help buyers find your prompts with accurate categorization.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                <div>
                                    <strong className="text-white">Respond to feedback:</strong>
                                    <span className="text-slate-300"> Engage with buyers and continuously improve based on reviews.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Documentation &
                        <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                            Guides
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Everything you need to master AI prompt creation and make the most of PROMPTOMY.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">

                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 sticky top-8">
                            <h2 className="text-lg font-semibold text-white mb-6">Documentation</h2>

                            <nav className="space-y-6">
                                {navigation.map((section) => (
                                    <div key={section.title}>
                                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {section.items.map((item) => (
                                                <li key={item.id}>
                                                    <button
                                                        onClick={() => setActiveSection(item.id)}
                                                        className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeSection === item.id
                                                                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                                                                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                                                            }`}
                                                    >
                                                        <span className="text-sm">{item.icon}</span>
                                                        <span className="text-sm">{item.title}</span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </nav>

                            {/* Quick Links */}
                            <div className="mt-8 pt-6 border-t border-slate-700">
                                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">
                                    Quick Links
                                </h3>
                                <div className="space-y-2">
                                    <Link
                                        href="/generator"
                                        className="block text-sm text-slate-300 hover:text-white transition-colors"
                                    >
                                        🚀 Prompt Generator
                                    </Link>
                                    <Link
                                        href="/marketplace"
                                        className="block text-sm text-slate-300 hover:text-white transition-colors"
                                    >
                                        🛒 Marketplace
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="block text-sm text-slate-300 hover:text-white transition-colors"
                                    >
                                        💬 Support
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                            <h1 className="text-3xl font-bold text-white mb-6">
                                {content[activeSection]?.title || 'Documentation'}
                            </h1>

                            <div className="prose prose-invert max-w-none">
                                {content[activeSection]?.content || (
                                    <div className="text-center py-12">
                                        <div className="text-slate-400 mb-4">
                                            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <p className="text-lg">Documentation coming soon</p>
                                            <p className="text-sm mt-2">This section is currently being written</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Help Section */}
                        <div className="mt-8 bg-gradient-to-r from-indigo-600/20 to-teal-600/20 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20">
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Need More Help?
                                </h2>
                                <p className="text-slate-300 mb-6">
                                    Can't find what you're looking for? Our support team is here to help.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/contact"
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                                    >
                                        Contact Support
                                    </Link>
                                    <Link
                                        href="/community"
                                        className="border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 backdrop-blur-sm"
                                    >
                                        Join Community
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GeneratorPage() {
    const [prompt, setPrompt] = useState('');
    const [category, setCategory] = useState('writing');
    const [tone, setTone] = useState('professional');
    const [complexity, setComplexity] = useState('intermediate');
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const categories = [
        { value: 'writing', label: 'Writing & Content' },
        { value: 'coding', label: 'Programming & Code' },
        { value: 'marketing', label: 'Marketing & Sales' },
        { value: 'business', label: 'Business Strategy' },
        { value: 'creative', label: 'Creative & Design' },
        { value: 'education', label: 'Education & Learning' },
        { value: 'analysis', label: 'Data & Analysis' },
        { value: 'other', label: 'Other' }
    ];

    const tones = [
        { value: 'professional', label: 'Professional' },
        { value: 'casual', label: 'Casual' },
        { value: 'friendly', label: 'Friendly' },
        { value: 'authoritative', label: 'Authoritative' },
        { value: 'creative', label: 'Creative' },
        { value: 'technical', label: 'Technical' }
    ];

    const complexityLevels = [
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'advanced', label: 'Advanced' },
        { value: 'expert', label: 'Expert' }
    ];

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        setIsGenerating(true);

        // Simulate API call - replace with actual API integration
        setTimeout(() => {
            const enhancedPrompt = `You are an expert ${category} assistant with a ${tone} tone. Your task is to ${prompt}. 

Please ensure your response is:
- Clear and actionable
- Appropriate for ${complexity} level users
- Well-structured and comprehensive
- Tailored to the ${category} domain

Additional context: Consider best practices in ${category} and provide specific, practical guidance that delivers immediate value.`;

            setGeneratedPrompt(enhancedPrompt);
            setIsGenerating(false);
        }, 2000);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedPrompt);
        // You could add a toast notification here
    };

    const handleSave = () => {
        // Implement save to user's collection
        console.log('Saving prompt to collection...');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        AI Prompt
                        <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                            Generator
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Transform your ideas into powerful, optimized AI prompts. Our intelligent generator helps you create professional-grade prompts that get better results.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Input Section */}
                    <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                        <h2 className="text-2xl font-semibold text-white mb-6">Create Your Prompt</h2>

                        {/* Basic Prompt Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Describe what you want the AI to do
                            </label>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g., Write a compelling product description for an eco-friendly water bottle..."
                                className="w-full h-32 px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Category Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Category
                            </label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                                {categories.map((cat) => (
                                    <option key={cat.value} value={cat.value} className="bg-slate-900">
                                        {cat.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Tone and Complexity */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Tone
                                </label>
                                <select
                                    value={tone}
                                    onChange={(e) => setTone(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    {tones.map((t) => (
                                        <option key={t.value} value={t.value} className="bg-slate-900">
                                            {t.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Complexity
                                </label>
                                <select
                                    value={complexity}
                                    onChange={(e) => setComplexity(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    {complexityLevels.map((level) => (
                                        <option key={level.value} value={level.value} className="bg-slate-900">
                                            {level.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Generate Button */}
                        <button
                            onClick={handleGenerate}
                            disabled={!prompt.trim() || isGenerating}
                            className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 disabled:from-slate-600 disabled:to-slate-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25 disabled:hover:scale-100 disabled:cursor-not-allowed"
                        >
                            {isGenerating ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating...
                                </div>
                            ) : (
                                'Generate Enhanced Prompt'
                            )}
                        </button>
                    </div>

                    {/* Output Section */}
                    <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-semibold text-white">Generated Prompt</h2>
                            {generatedPrompt && (
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleCopy}
                                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        Copy
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        Save
                                    </button>
                                </div>
                            )}
                        </div>

                        {generatedPrompt ? (
                            <div className="bg-slate-900/50 border border-slate-600 rounded-xl p-6">
                                <pre className="text-slate-200 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                                    {generatedPrompt}
                                </pre>
                            </div>
                        ) : (
                            <div className="bg-slate-900/50 border border-slate-600 rounded-xl p-6 text-center">
                                <div className="text-slate-400 mb-4">
                                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <p className="text-lg">Your enhanced prompt will appear here</p>
                                    <p className="text-sm mt-2">Fill in the details and click generate to create an optimized AI prompt</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Tips Section */}
                <div className="mt-12 bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white mb-6">💡 Pro Tips for Better Prompts</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="font-medium text-white mb-1">Be Specific</h4>
                                <p className="text-sm text-slate-300">Include specific details about format, length, and style requirements.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="font-medium text-white mb-1">Set Context</h4>
                                <p className="text-sm text-slate-300">Provide background information and define the AI's role clearly.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="font-medium text-white mb-1">Use Examples</h4>
                                <p className="text-sm text-slate-300">Include examples of desired output format or style when possible.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        Ready to share your prompts with the world?
                    </h3>
                    <p className="text-slate-300 mb-6">
                        Join our marketplace and start earning from your AI expertise
                    </p>
                    <Link
                        href="/marketplace"
                        className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                    >
                        Explore Marketplace
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Marketplace() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("popular");

    // Sample prompt data
    const prompts = [
        {
            id: 1,
            title: "Professional Email Writer",
            description: "Generate professional emails for any business context with perfect tone and structure.",
            category: "Business",
            price: 4.99,
            rating: 4.8,
            reviews: 234,
            author: "Omillo Charles",
            tags: ["email", "business", "professional"],
            image: "/api/placeholder/300/200"
        },
        {
            id: 2,
            title: "Creative Story Generator",
            description: "Create engaging stories with compelling characters and plot twists.",
            category: "Creative",
            price: 7.99,
            rating: 4.9,
            reviews: 156,
            author: "Ian Kanja",
            tags: ["storytelling", "creative", "fiction"],
            image: "/api/placeholder/300/200"
        },
        {
            id: 3,
            title: "Code Documentation Assistant",
            description: "Generate comprehensive documentation for your code with examples and explanations.",
            category: "Development",
            price: 9.99,
            rating: 4.7,
            reviews: 89,
            author: "Musyoki Christopher",
            tags: ["coding", "documentation", "development"],
            image: "/api/placeholder/300/200"
        },
        {
            id: 4,
            title: "Social Media Content Creator",
            description: "Create engaging social media posts that drive engagement and followers.",
            category: "Marketing",
            price: 5.99,
            rating: 4.6,
            reviews: 312,
            author: "Kanja Ian",
            tags: ["social media", "marketing", "content"],
            image: "/api/placeholder/300/200"
        },
        {
            id: 5,
            title: "Academic Research Helper",
            description: "Assist with academic research, citations, and paper structure.",
            category: "Education",
            price: 6.99,
            rating: 4.8,
            reviews: 127,
            author: "William Achuachi",
            tags: ["research", "academic", "education"],
            image: "/api/placeholder/300/200"
        },
        {
            id: 6,
            title: "Product Description Writer",
            description: "Create compelling product descriptions that convert browsers into buyers.",
            category: "E-commerce",
            price: 3.99,
            rating: 4.5,
            reviews: 198,
            author: "Eugene Emmanuel",
            tags: ["ecommerce", "product", "sales"],
            image: "/api/placeholder/300/200"
        }
    ];

    const categories = [
        "all", "Business", "Creative", "Development", "Marketing", "Education", "E-commerce"
    ];

    const filteredPrompts = prompts.filter(prompt => {
        const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === "all" || prompt.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            AI Prompt
                            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                                Marketplace
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Discover thousands of high-quality AI prompts created by experts. Find the perfect prompt for your needs.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search prompts, categories, or tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-slate-800/80 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters and Categories */}
            <section className="bg-slate-800/50 border-b border-slate-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-xl font-medium transition-all ${selectedCategory === category
                                        ? "bg-indigo-600 text-white"
                                        : "bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                                        }`}
                                >
                                    {category === "all" ? "All Categories" : category}
                                </button>
                            ))}
                        </div>

                        {/* Sort Options */}
                        <div className="flex items-center space-x-4">
                            <span className="text-slate-300 text-sm">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-slate-700 border border-slate-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Count */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p className="text-slate-400">
                    Showing {filteredPrompts.length} prompts
                    {selectedCategory !== "all" && ` in ${selectedCategory}`}
                    {searchQuery && ` for "${searchQuery}"`}
                </p>
            </section>

            {/* Prompt Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPrompts.map((prompt) => (
                        <div key={prompt.id} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-indigo-500/50 transition-all hover:scale-105 group">
                            {/* Prompt Image */}
                            <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-teal-500/20 flex items-center justify-center">
                                <div className="text-6xl opacity-20">🤖</div>
                            </div>

                            <div className="p-6">
                                {/* Category Badge */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full">
                                        {prompt.category}
                                    </span>
                                    <div className="flex items-center space-x-1 text-yellow-400">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm font-medium">{prompt.rating}</span>
                                        <span className="text-slate-400 text-sm">({prompt.reviews})</span>
                                    </div>
                                </div>

                                {/* Title and Description */}
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                    {prompt.title}
                                </h3>
                                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                                    {prompt.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {prompt.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Author and Price */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-medium">
                                                {prompt.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <span className="text-slate-400 text-sm">{prompt.author}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-white">${prompt.price}</div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-2 mt-4">
                                    <Link
                                        href={`/marketplace/${prompt.id}`}
                                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl font-medium text-center transition-colors"
                                    >
                                        View Details
                                    </Link>
                                    <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-xl transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-xl font-medium transition-colors">
                        Load More Prompts
                    </button>
                </div>
            </section>
        </div>
    );
}
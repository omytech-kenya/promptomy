import Link from "next/link";
import Image from "next/image";

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
    {
        id: 1,
        title: "The Ultimate Guide to AI Prompt Engineering",
        excerpt: "Learn the fundamentals of crafting effective AI prompts that deliver consistent, high-quality results across different AI models.",
        author: "Sarah Chen",
        date: "2024-03-15",
        readTime: "8 min read",
        category: "Tutorial",
        image: "/promptomy1.png",
        featured: true
    },
    {
        id: 2,
        title: "10 ChatGPT Prompts That Will Transform Your Workflow",
        excerpt: "Discover powerful prompts that can automate tasks, enhance creativity, and boost productivity in your daily work.",
        author: "Mike Rodriguez",
        date: "2024-03-12",
        readTime: "6 min read",
        category: "Productivity",
        image: "/promptomy1.png"
    },
    {
        id: 3,
        title: "Building a Profitable AI Prompt Business",
        excerpt: "From ideation to monetization - a complete roadmap for creating and selling AI prompts in the marketplace.",
        author: "Alex Thompson",
        date: "2024-03-10",
        readTime: "12 min read",
        category: "Business",
        image: "/promptomy1.png"
    },
    {
        id: 4,
        title: "Advanced Prompt Techniques for Creative Writing",
        excerpt: "Unlock the creative potential of AI with sophisticated prompting strategies for storytelling and content creation.",
        author: "Emma Wilson",
        date: "2024-03-08",
        readTime: "10 min read",
        category: "Creative",
        image: "/promptomy1.png"
    },
    {
        id: 5,
        title: "The Science Behind Effective AI Prompts",
        excerpt: "Understanding how language models process prompts and what makes certain approaches more effective than others.",
        author: "Dr. James Park",
        date: "2024-03-05",
        readTime: "15 min read",
        category: "Research",
        image: "/promptomy1.png"
    },
    {
        id: 6,
        title: "Prompt Security: Best Practices and Common Pitfalls",
        excerpt: "Essential security considerations when working with AI prompts in production environments.",
        author: "Lisa Chang",
        date: "2024-03-03",
        readTime: "7 min read",
        category: "Security",
        image: "/promptomy1.png"
    }
];

const categories = ["All", "Tutorial", "Productivity", "Business", "Creative", "Research", "Security"];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            AI Prompt
                            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                                Insights
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Expert insights, tutorials, and best practices for mastering AI prompt engineering and building successful prompt businesses.
                        </p>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${category === "All"
                                        ? "bg-indigo-600 text-white"
                                        : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
                        {blogPosts.filter(post => post.featured).map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`}>
                                <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all overflow-hidden group cursor-pointer">
                                    <div className="md:flex">
                                        <div className="md:w-1/2">
                                            <div className="relative h-64 md:h-full">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 p-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                                                    {post.category}
                                                </span>
                                                <span className="text-slate-400 text-sm">{post.readTime}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-300 mb-6 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center">
                                                        <span className="text-white font-semibold text-sm">
                                                            {post.author.split(' ').map(n => n[0]).join('')}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="text-white font-medium">{post.author}</div>
                                                        <div className="text-slate-400 text-sm">{new Date(post.date).toLocaleDateString()}</div>
                                                    </div>
                                                </div>
                                                <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                                                    Read More →
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12">Latest Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.filter(post => !post.featured).map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`}>
                                <article className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all overflow-hidden group cursor-pointer h-full">
                                    <div className="relative h-48">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                                                {post.category}
                                            </span>
                                            <span className="text-slate-400 text-sm">{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-300 mb-4 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-semibold text-xs">
                                                        {post.author.split(' ').map(n => n[0]).join('')}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="text-white font-medium text-sm">{post.author}</div>
                                                    <div className="text-slate-400 text-xs">{new Date(post.date).toLocaleDateString()}</div>
                                                </div>
                                            </div>
                                            <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors text-sm">
                                                Read →
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Get the latest AI prompt insights and tutorials delivered to your inbox weekly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
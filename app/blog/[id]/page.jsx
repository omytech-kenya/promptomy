import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = {
    1: {
        id: 1,
        title: "The Ultimate Guide to AI Prompt Engineering",
        excerpt: "Learn the fundamentals of crafting effective AI prompts that deliver consistent, high-quality results across different AI models.",
        author: "Sarah Chen",
        date: "2024-03-15",
        readTime: "8 min read",
        category: "Tutorial",
        image: "/promptomy1.png",
        content: `
# Introduction

AI prompt engineering has become one of the most valuable skills in the modern digital landscape. As artificial intelligence models become more sophisticated and widely adopted, the ability to craft effective prompts that consistently deliver high-quality results has become essential for professionals across industries.

## What is Prompt Engineering?

Prompt engineering is the practice of designing and refining input prompts to elicit desired responses from AI language models. It's both an art and a science, requiring understanding of how these models process language and what techniques produce the most reliable outputs.

## Core Principles

### 1. Clarity and Specificity

The foundation of effective prompt engineering lies in being clear and specific about what you want. Vague prompts lead to inconsistent results.

**Poor Example:**
"Write something about marketing"

**Better Example:**
"Write a 500-word blog post about email marketing best practices for small businesses, focusing on subject line optimization and segmentation strategies."

### 2. Context Setting

Providing relevant context helps the AI understand the scenario and respond appropriately.

**Example:**
"You are a senior marketing consultant with 15 years of experience. A small business owner asks you about improving their email marketing campaigns. Provide actionable advice."

### 3. Format Specification

Clearly specify the desired output format to ensure consistency.

**Example:**
"Provide your response in the following format:
- Problem: [Brief description]
- Solution: [Detailed explanation]
- Implementation: [Step-by-step guide]
- Expected Results: [Measurable outcomes]"

## Advanced Techniques

### Chain of Thought Prompting

This technique involves asking the AI to show its reasoning process, which often leads to more accurate and thoughtful responses.

**Example:**
"Solve this step by step, showing your reasoning at each stage: A company's revenue increased by 25% in Q1, then decreased by 15% in Q2. If Q1 revenue was $400,000, what was the Q2 revenue?"

### Few-Shot Learning

Provide examples of the desired input-output pattern to guide the AI's responses.

**Example:**
"Convert these business terms to simple language:

Synergy → Working together effectively
Leverage → Use to advantage
Paradigm shift → Major change in approach

Now convert: 'We need to optimize our workflow to maximize ROI while ensuring scalability.'"

### Role-Based Prompting

Assign specific roles or personas to the AI to get more targeted responses.

**Example:**
"Act as a UX designer reviewing a mobile app interface. Analyze the following design and provide feedback on usability, accessibility, and user experience."

## Common Pitfalls to Avoid

### 1. Overcomplicating Prompts

While detail is important, overly complex prompts can confuse the AI and lead to poor results.

### 2. Assuming Human-Like Understanding

AI models don't truly "understand" context the way humans do. Be explicit about your requirements.

### 3. Ignoring Model Limitations

Different AI models have different strengths and weaknesses. Tailor your prompts accordingly.

### 4. Not Iterating and Testing

Effective prompt engineering requires experimentation and refinement. Test different approaches and iterate based on results.

## Best Practices for Different Use Cases

### Content Creation
- Specify tone, style, and target audience
- Provide examples of desired output
- Set clear length and format requirements

### Data Analysis
- Clearly define the data structure
- Specify the type of analysis needed
- Request specific output formats (tables, charts, summaries)

### Code Generation
- Specify programming language and version
- Provide context about the project
- Request comments and documentation

### Problem Solving
- Break complex problems into smaller parts
- Ask for step-by-step solutions
- Request multiple approaches when appropriate

## Measuring Success

To improve your prompt engineering skills, track these metrics:

1. **Consistency**: How often do you get the desired output?
2. **Quality**: How well does the output meet your standards?
3. **Efficiency**: How many iterations are needed to get good results?
4. **Relevance**: How well does the output address your specific needs?

## Tools and Resources

### Prompt Testing Platforms
- OpenAI Playground
- Anthropic Console
- Custom testing environments

### Documentation and Communities
- Model-specific documentation
- Prompt engineering communities
- Research papers and case studies

## Conclusion

Mastering AI prompt engineering is an ongoing journey that requires practice, experimentation, and continuous learning. As AI models evolve, so too must our approaches to working with them effectively.

The key is to start with the fundamentals—clarity, specificity, and context—then gradually incorporate more advanced techniques as you become comfortable with the basics. Remember that effective prompt engineering is not just about getting any response, but about consistently getting the right response for your specific needs.

By following the principles and techniques outlined in this guide, you'll be well on your way to becoming proficient in this essential skill. The investment in learning prompt engineering will pay dividends across virtually every aspect of working with AI systems.
    `
    },
    2: {
        id: 2,
        title: "10 ChatGPT Prompts That Will Transform Your Workflow",
        excerpt: "Discover powerful prompts that can automate tasks, enhance creativity, and boost productivity in your daily work.",
        author: "Mike Rodriguez",
        date: "2024-03-12",
        readTime: "6 min read",
        category: "Productivity",
        image: "/promptomy1.png",
        content: `
# Transform Your Workflow with These 10 Powerful ChatGPT Prompts

In today's fast-paced work environment, efficiency is everything. These carefully crafted ChatGPT prompts can help you automate routine tasks, enhance your creativity, and significantly boost your productivity.

## 1. The Email Optimizer

**Prompt:**
"Rewrite this email to be more professional, concise, and persuasive. Maintain the key points but improve clarity and impact: [paste your email]"

**Use Case:** Transform casual or lengthy emails into professional, impactful communications.

## 2. The Meeting Summarizer

**Prompt:**
"Analyze these meeting notes and create a structured summary with: 1) Key decisions made, 2) Action items with owners, 3) Next steps, 4) Unresolved issues. Notes: [paste meeting notes]"

**Use Case:** Quickly convert messy meeting notes into actionable summaries.

## 3. The Content Repurposer

**Prompt:**
"Take this [blog post/article/presentation] and repurpose it into 5 different formats: 1) LinkedIn post, 2) Twitter thread, 3) Email newsletter section, 4) Instagram caption, 5) YouTube video outline. Original content: [paste content]"

**Use Case:** Maximize the value of your content across multiple platforms.

## 4. The Problem Solver

**Prompt:**
"I'm facing this challenge: [describe problem]. Please provide 3 different solution approaches, each with pros/cons and implementation steps. Consider both conventional and creative solutions."

**Use Case:** Get diverse perspectives on complex problems.

## 5. The Research Assistant

**Prompt:**
"Research [topic] and provide: 1) Key concepts and definitions, 2) Current trends and developments, 3) Main challenges and opportunities, 4) Recommended resources for deeper learning. Focus on information relevant to [your industry/role]."

**Use Case:** Quickly get up to speed on new topics or industries.

## 6. The Presentation Builder

**Prompt:**
"Create a presentation outline for '[presentation topic]' targeting [audience]. Include: 1) Compelling opening hook, 2) 5-7 main points with supporting details, 3) Engaging transitions, 4) Strong conclusion with call-to-action. Duration: [X] minutes."

**Use Case:** Structure compelling presentations quickly.

## 7. The Code Reviewer

**Prompt:**
"Review this code for: 1) Potential bugs or errors, 2) Performance improvements, 3) Best practices compliance, 4) Security considerations, 5) Readability enhancements. Provide specific suggestions: [paste code]"

**Use Case:** Get thorough code reviews and improvement suggestions.

## 8. The Learning Accelerator

**Prompt:**
"I want to learn [skill/topic]. Create a 30-day learning plan with: 1) Daily learning objectives, 2) Recommended resources, 3) Practice exercises, 4) Progress milestones, 5) Assessment methods. My current level: [beginner/intermediate/advanced]."

**Use Case:** Create structured learning paths for new skills.

## 9. The Decision Matrix

**Prompt:**
"Help me decide between these options: [list options]. Create a decision matrix considering these factors: [list factors]. Assign weights to each factor based on importance, score each option, and provide a recommendation with reasoning."

**Use Case:** Make data-driven decisions with multiple variables.

## 10. The Creative Brainstormer

**Prompt:**
"Generate 20 creative ideas for [project/campaign/solution]. Think outside the box and consider: 1) Unconventional approaches, 2) Cross-industry inspiration, 3) Emerging trends, 4) User experience innovations. Provide brief explanations for the most promising ideas."

**Use Case:** Break through creative blocks and generate fresh ideas.

## Pro Tips for Maximum Impact

### 1. Customize for Your Context
Always adapt these prompts to your specific industry, role, and situation. The more context you provide, the better the results.

### 2. Iterate and Refine
Don't accept the first response. Ask follow-up questions, request clarifications, or ask for alternative approaches.

### 3. Combine Prompts
Use multiple prompts in sequence. For example, use the Problem Solver to identify solutions, then the Decision Matrix to choose the best one.

### 4. Save Your Best Variations
Keep a personal library of prompts that work well for your specific needs and modify them over time.

### 5. Provide Examples
When possible, include examples of the type of output you're looking for to guide the AI's response.

## Measuring Your Productivity Gains

Track these metrics to quantify the impact:
- Time saved on routine tasks
- Quality improvement in outputs
- Number of ideas generated
- Decision-making speed
- Learning velocity

## Conclusion

These 10 prompts are just the beginning. The key to transforming your workflow is to experiment, adapt, and continuously refine your approach. Start with one or two prompts that address your biggest pain points, then gradually incorporate others as you become more comfortable with AI-assisted work.

Remember, the goal isn't to replace human creativity and judgment, but to augment your capabilities and free up time for higher-value activities. With these prompts in your toolkit, you'll be amazed at how much more you can accomplish.
    `
    }
};

// Related posts for suggestions
const relatedPosts = [
    { id: 3, title: "Building a Profitable AI Prompt Business", category: "Business" },
    { id: 4, title: "Advanced Prompt Techniques for Creative Writing", category: "Creative" },
    { id: 5, title: "The Science Behind Effective AI Prompts", category: "Research" }
];

export default function BlogPost({ params }) {
    const post = blogPosts[params.id];

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                            <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link>
                            <span>/</span>
                            <span className="text-slate-300">{post.title}</span>
                        </div>
                    </nav>

                    {/* Article Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                            <span className="text-slate-400">{post.readTime}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {post.excerpt}
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div className="text-left">
                                <div className="text-white font-semibold">{post.author}</div>
                                <div className="text-slate-400 text-sm">
                                    Published on {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <div
                                className="text-slate-200 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: post.content
                                        .split('\n')
                                        .map(line => {
                                            if (line.startsWith('# ')) {
                                                return `<h1 class="text-3xl font-bold text-white mt-12 mb-6 first:mt-0">${line.substring(2)}</h1>`;
                                            } else if (line.startsWith('## ')) {
                                                return `<h2 class="text-2xl font-bold text-white mt-10 mb-4">${line.substring(3)}</h2>`;
                                            } else if (line.startsWith('### ')) {
                                                return `<h3 class="text-xl font-bold text-white mt-8 mb-3">${line.substring(4)}</h3>`;
                                            } else if (line.startsWith('**') && line.endsWith('**')) {
                                                return `<p class="font-bold text-indigo-400 mt-6 mb-2">${line.substring(2, line.length - 2)}</p>`;
                                            } else if (line.startsWith('*') && line.endsWith('*') && !line.includes('**')) {
                                                return `<p class="italic text-slate-300 mt-4 mb-2">${line.substring(1, line.length - 1)}</p>`;
                                            } else if (line.trim() === '') {
                                                return '<br>';
                                            } else {
                                                return `<p class="mb-4">${line}</p>`;
                                            }
                                        })
                                        .join('')
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Related Articles</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedPosts.map((relatedPost) => (
                            <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                                <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group cursor-pointer">
                                    <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                                        {relatedPost.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mt-4 group-hover:text-indigo-400 transition-colors">
                                        {relatedPost.title}
                                    </h3>
                                    <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors text-sm mt-4">
                                        Read More →
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Master AI Prompts?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Join thousands of creators building the future of AI interactions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/marketplace"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
                            >
                                Explore Marketplace
                            </Link>
                            <Link
                                href="/generator"
                                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105"
                            >
                                Create Prompts
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Generate static params for static generation (optional)
export async function generateStaticParams() {
    return Object.keys(blogPosts).map((id) => ({
        id: id,
    }));
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
    const post = blogPosts[params.id];

    if (!post) {
        return {
            title: 'Post Not Found - PROMPTOMY Blog',
        };
    }

    return {
        title: `${post.title} - PROMPTOMY Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}
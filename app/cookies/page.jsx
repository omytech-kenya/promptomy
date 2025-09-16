import Link from "next/link";

export default function CookiePolicyPage() {
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
                            <span className="text-slate-300">Cookie Policy</span>
                        </div>
                    </nav>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Cookie Policy
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            This policy explains how PROMPTOMY uses cookies and similar tracking technologies to enhance your experience on our platform.
                        </p>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L4 16.172a2 2 0 002.828 2.828l8.586-8.586a2 2 0 000-2.828z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Last Updated: March 20, 2024</div>
                                    <div className="text-slate-400 text-sm">Effective Date: March 20, 2024</div>
                                </div>
                            </div>
                            <p className="text-slate-300 text-sm">
                                By continuing to use PROMPTOMY, you consent to our use of cookies as described in this policy. You can manage your cookie preferences at any time through your browser settings or our cookie consent manager.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Cookie Policy Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
                        <div className="prose prose-invert prose-lg max-w-none">

                            {/* Table of Contents */}
                            <div className="bg-slate-700/30 rounded-xl p-6 mb-12">
                                <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
                                <div className="grid md:grid-cols-2 gap-2 text-sm">
                                    <a href="#what-are-cookies" className="text-indigo-400 hover:text-indigo-300 transition-colors">1. What Are Cookies?</a>
                                    <a href="#how-we-use-cookies" className="text-indigo-400 hover:text-indigo-300 transition-colors">2. How We Use Cookies</a>
                                    <a href="#types-of-cookies" className="text-indigo-400 hover:text-indigo-300 transition-colors">3. Types of Cookies We Use</a>
                                    <a href="#third-party-cookies" className="text-indigo-400 hover:text-indigo-300 transition-colors">4. Third-Party Cookies</a>
                                    <a href="#managing-cookies" className="text-indigo-400 hover:text-indigo-300 transition-colors">5. Managing Your Cookies</a>
                                    <a href="#other-technologies" className="text-indigo-400 hover:text-indigo-300 transition-colors">6. Other Tracking Technologies</a>
                                    <a href="#updates" className="text-indigo-400 hover:text-indigo-300 transition-colors">7. Policy Updates</a>
                                    <a href="#contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">8. Contact Us</a>
                                </div>
                            </div>

                            {/* 1. What Are Cookies */}
                            <section id="what-are-cookies" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">1. What Are Cookies?</h2>

                                <p className="text-slate-300 mb-4">
                                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">How Cookies Work</h3>
                                <p className="text-slate-300 mb-4">
                                    When you visit PROMPTOMY, our servers send cookies to your browser, which stores them on your device. These cookies contain information that can be read by our servers when you return to our platform, allowing us to:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Remember your login status and preferences</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Provide personalized content and recommendations</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Analyze how you use our platform to improve our services</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Ensure security and prevent fraud</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Cookie Lifespan</h3>
                                <p className="text-slate-300 mb-6">
                                    Cookies can be either "session cookies" (which are deleted when you close your browser) or "persistent cookies" (which remain on your device for a set period or until you delete them). We use both types depending on their purpose.
                                </p>
                            </section>

                            {/* 2. How We Use Cookies */}
                            <section id="how-we-use-cookies" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Cookies</h2>

                                <p className="text-slate-300 mb-6">
                                    PROMPTOMY uses cookies for several important purposes to enhance your experience and improve our services:
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Essential Platform Functions</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Maintaining your login session and authentication</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Remembering your account preferences and settings</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Enabling core platform features like prompt creation and sharing</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Processing transactions and marketplace activities</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Providing security features and fraud protection</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Performance and Analytics</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Analyzing how users interact with our platform</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Identifying popular features and content</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Measuring platform performance and load times</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Detecting and resolving technical issues</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Understanding user behavior patterns for improvements</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Personalization</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Customizing content based on your interests and usage</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Providing relevant prompt recommendations</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Remembering your preferred language and region</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Tailoring the user interface to your preferences</li>
                                </ul>
                            </section>

                            {/* 3. Types of Cookies */}
                            <section id="types-of-cookies" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">3. Types of Cookies We Use</h2>

                                <div className="space-y-8">
                                    {/* Strictly Necessary Cookies */}
                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6V9a2 2 0 00-2-2H8a2 2 0 00-2 2v2" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white">Strictly Necessary Cookies</h3>
                                            <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-medium">Required</span>
                                        </div>
                                        <p className="text-slate-300 mb-4">
                                            These cookies are essential for the platform to function properly and cannot be disabled. They enable core functionality such as:
                                        </p>
                                        <ul className="text-slate-300 space-y-1 text-sm">
                                            <li className="flex items-start"><span className="text-red-400 mr-2">•</span>User authentication and session management</li>
                                            <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Security features and CSRF protection</li>
                                            <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Load balancing and platform stability</li>
                                            <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Cookie consent preferences</li>
                                        </ul>
                                    </div>

                                    {/* Performance Cookies */}
                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white">Performance and Analytics Cookies</h3>
                                            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">Optional</span>
                                        </div>
                                        <p className="text-slate-300 mb-4">
                                            These cookies help us understand how users interact with our platform and identify areas for improvement:
                                        </p>
                                        <ul className="text-slate-300 space-y-1 text-sm">
                                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Google Analytics for usage statistics</li>
                                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Page view tracking and user journey analysis</li>
                                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>Performance monitoring and error tracking</li>
                                            <li className="flex items-start"><span className="text-blue-400 mr-2">•</span>A/B testing for feature improvements</li>
                                        </ul>
                                    </div>

                                    {/* Functional Cookies */}
                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white">Functional and Preference Cookies</h3>
                                            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">Optional</span>
                                        </div>
                                        <p className="text-slate-300 mb-4">
                                            These cookies enable enhanced functionality and personalization features:
                                        </p>
                                        <ul className="text-slate-300 space-y-1 text-sm">
                                            <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Language and region preferences</li>
                                            <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Theme and display settings</li>
                                            <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Recently viewed prompts and favorites</li>
                                            <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Customized dashboard layouts</li>
                                        </ul>
                                    </div>

                                    {/* Marketing Cookies */}
                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white">Marketing and Advertising Cookies</h3>
                                            <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs font-medium">Optional</span>
                                        </div>
                                        <p className="text-slate-300 mb-4">
                                            These cookies are used to deliver relevant advertisements and measure campaign effectiveness:
                                        </p>
                                        <ul className="text-slate-300 space-y-1 text-sm">
                                            <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Targeted advertising based on interests</li>
                                            <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Retargeting campaigns for platform features</li>
                                            <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Social media integration and sharing</li>
                                            <li className="flex items-start"><span className="text-purple-400 mr-2">•</span>Marketing campaign performance tracking</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* 4. Third-Party Cookies */}
                            <section id="third-party-cookies" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">4. Third-Party Cookies and Services</h2>

                                <p className="text-slate-300 mb-6">
                                    We work with trusted third-party services that may set their own cookies on your device. These services help us provide better functionality and insights:
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Analytics Services</h3>
                                        <ul className="text-slate-300 space-y-2 text-sm">
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>Google Analytics:</strong> Website usage statistics and user behavior analysis</li>
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>Mixpanel:</strong> Product analytics and user engagement tracking</li>
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>Hotjar:</strong> User session recordings and heatmap analysis</li>
                                        </ul>
                                    </div>

                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Support and Communication</h3>
                                        <ul className="text-slate-300 space-y-2 text-sm">
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>Intercom:</strong> Customer support chat and messaging</li>
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>Zendesk:</strong> Help desk and ticket management</li>
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>Mailchimp:</strong> Email marketing and newsletter delivery</li>
                                        </ul>
                                    </div>

                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Social Media and Sharing</h3>
                                        <ul className="text-slate-300 space-y-2 text-sm">
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>Twitter:</strong> Social sharing and embedded content</li>
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>LinkedIn:</strong> Professional networking and content sharing</li>
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>YouTube:</strong> Embedded videos and educational content</li>
                                        </ul>
                                    </div>

                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Payment Processing</h3>
                                        <ul className="text-slate-300 space-y-2 text-sm">
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>Stripe:</strong> Secure payment processing and fraud detection</li>
                                            <li className="flex items-start"><span className="text-teal-400 mr-2">•</span><strong>PayPal:</strong> Alternative payment methods and checkout</li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-slate-300 mt-6 text-sm">
                                    Each third-party service has its own privacy policy and cookie practices. We recommend reviewing their policies to understand how they handle your data.
                                </p>
                            </section>

                            {/* 5. Managing Cookies */}
                            <section id="managing-cookies" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">5. Managing Your Cookie Preferences</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Cookie Consent Manager</h3>
                                <p className="text-slate-300 mb-4">
                                    When you first visit PROMPTOMY, you'll see our cookie consent banner where you can:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Accept all cookies for the full platform experience</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Customize your preferences by cookie category</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Reject non-essential cookies (some features may be limited)</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Change your preferences at any time in your account settings</li>
                                </ul>

                                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6 mb-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <h4 className="text-indigo-400 font-semibold">Manage Cookie Preferences</h4>
                                    </div>
                                    <p className="text-slate-300 text-sm mb-4">
                                        You can update your cookie preferences at any time by clicking the "Cookie Settings" link in the footer or visiting your account preferences.
                                    </p>
                                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                        Open Cookie Settings
                                    </button>
                                </div>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Browser Settings</h3>
                                <p className="text-slate-300 mb-4">
                                    You can also manage cookies through your browser settings. Here's how to do it in popular browsers:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-slate-700/30 rounded-lg p-4">
                                        <h4 className="text-white font-semibold mb-2">Chrome</h4>
                                        <p className="text-slate-300 text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-lg p-4">
                                        <h4 className="text-white font-semibold mb-2">Firefox</h4>
                                        <p className="text-slate-300 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-lg p-4">
                                        <h4 className="text-white font-semibold mb-2">Safari</h4>
                                        <p className="text-slate-300 text-sm">Preferences → Privacy → Manage Website Data</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-lg p-4">
                                        <h4 className="text-white font-semibold mb-2">Edge</h4>
                                        <p className="text-slate-300 text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                                    </div>
                                </div>

                                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-yellow-400 font-semibold mb-2">Impact of Disabling Cookies</h4>
                                            <p className="text-slate-300 text-sm">
                                                Disabling cookies may affect your experience on PROMPTOMY. Some features may not work properly, and you may need to re-enter information more frequently. Essential cookies cannot be disabled as they are required for basic platform functionality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 6. Other Technologies */}
                            <section id="other-technologies" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">6. Other Tracking Technologies</h2>

                                <p className="text-slate-300 mb-6">
                                    In addition to cookies, we may use other tracking technologies to enhance your experience:
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Web Beacons and Pixels</h3>
                                <p className="text-slate-300 mb-4">
                                    Small transparent images embedded in web pages or emails that help us:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Track email open rates and engagement</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Measure the effectiveness of marketing campaigns</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Understand user behavior across different pages</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Local Storage</h3>
                                <p className="text-slate-300 mb-4">
                                    Browser storage that allows us to store data locally on your device for:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Faster loading of frequently accessed content</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Offline functionality for certain features</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Temporary storage of draft prompts and work</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Session Storage</h3>
                                <p className="text-slate-300 mb-6">
                                    Temporary storage that is cleared when you close your browser tab, used for maintaining state during your current session and ensuring smooth navigation between pages.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Device Fingerprinting</h3>
                                <p className="text-slate-300 mb-6">
                                    We may collect information about your device configuration (screen size, browser version, installed plugins) for security purposes and to detect fraudulent activity. This information is processed in accordance with our Privacy Policy.
                                </p>
                            </section>

                            {/* 7. Updates */}
                            <section id="updates" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">7. Updates to This Cookie Policy</h2>

                                <p className="text-slate-300 mb-4">
                                    We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Post the updated policy on our website with a new "Last Updated" date</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Notify you through email or platform notifications for material changes</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Request renewed consent for new cookie categories if required</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Provide clear information about what has changed</li>
                                </ul>

                                <p className="text-slate-300 mb-6">
                                    We encourage you to review this policy periodically to stay informed about how we use cookies and tracking technologies.
                                </p>
                            </section>

                            {/* 8. Contact */}
                            <section id="contact" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">8. Contact Us About Cookies</h2>

                                <p className="text-slate-300 mb-6">
                                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                                </p>

                                <div className="bg-slate-700/30 rounded-xl p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Privacy Team</h4>
                                            <div className="space-y-2 text-sm text-slate-300">
                                                <div>Email: <a href="mailto:privacy@promptomy.com" className="text-indigo-400 hover:text-indigo-300">privacy@promptomy.com</a></div>
                                                <div>Subject: Cookie Policy Inquiry</div>
                                                <div>Response Time: Within 5 business days</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Data Protection Officer</h4>
                                            <div className="space-y-2 text-sm text-slate-300">
                                                <div>Email: <a href="mailto:dpo@promptomy.com" className="text-indigo-400 hover:text-indigo-300">dpo@promptomy.com</a></div>
                                                <div>For EU/UK data protection matters</div>
                                                <div>GDPR compliance questions</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                                    <p className="text-indigo-300 text-sm">
                                        <strong>Quick Help:</strong> For immediate assistance with cookie settings, use the "Cookie Settings" link in our website footer or contact our support team through the in-platform chat feature.
                                    </p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Privacy Information</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/privacy" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Privacy Policy</h3>
                            <p className="text-slate-300 text-sm">How we collect, use, and protect your personal information.</p>
                        </Link>
                        <Link href="/terms" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Terms of Service</h3>
                            <p className="text-slate-300 text-sm">The terms and conditions for using the PROMPTOMY platform.</p>
                        </Link>
                        <Link href="/security" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Security Policy</h3>
                            <p className="text-slate-300 text-sm">Our commitment to protecting your data and platform security.</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
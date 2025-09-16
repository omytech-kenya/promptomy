import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                            <span className="text-slate-300">Privacy Policy</span>
                        </div>
                    </nav>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Your privacy is important to us. This policy explains how PROMPTOMY collects, uses, and protects your personal information.
                        </p>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Last Updated: March 20, 2024</div>
                                    <div className="text-slate-400 text-sm">Effective Date: March 20, 2024</div>
                                </div>
                            </div>
                            <p className="text-slate-300 text-sm">
                                This Privacy Policy applies to all users of the PROMPTOMY platform and services. By using our services, you agree to the collection and use of information in accordance with this policy.
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

            {/* Privacy Policy Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
                        <div className="prose prose-invert prose-lg max-w-none">

                            {/* Table of Contents */}
                            <div className="bg-slate-700/30 rounded-xl p-6 mb-12">
                                <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
                                <div className="grid md:grid-cols-2 gap-2 text-sm">
                                    <a href="#information-we-collect" className="text-indigo-400 hover:text-indigo-300 transition-colors">1. Information We Collect</a>
                                    <a href="#how-we-use-information" className="text-indigo-400 hover:text-indigo-300 transition-colors">2. How We Use Information</a>
                                    <a href="#information-sharing" className="text-indigo-400 hover:text-indigo-300 transition-colors">3. Information Sharing</a>
                                    <a href="#data-security" className="text-indigo-400 hover:text-indigo-300 transition-colors">4. Data Security</a>
                                    <a href="#your-rights" className="text-indigo-400 hover:text-indigo-300 transition-colors">5. Your Rights</a>
                                    <a href="#cookies" className="text-indigo-400 hover:text-indigo-300 transition-colors">6. Cookies and Tracking</a>
                                    <a href="#international-transfers" className="text-indigo-400 hover:text-indigo-300 transition-colors">7. International Transfers</a>
                                    <a href="#children-privacy" className="text-indigo-400 hover:text-indigo-300 transition-colors">8. Children's Privacy</a>
                                    <a href="#changes" className="text-indigo-400 hover:text-indigo-300 transition-colors">9. Policy Changes</a>
                                    <a href="#contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">10. Contact Us</a>
                                </div>
                            </div>

                            {/* 1. Information We Collect */}
                            <section id="information-we-collect" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">1. Information We Collect</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Personal Information</h3>
                                <p className="text-slate-300 mb-4">
                                    When you create an account or use our services, we may collect the following personal information:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Name and email address</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Profile information and preferences</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Payment and billing information</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Communication preferences</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Professional information (job title, company)</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Usage Information</h3>
                                <p className="text-slate-300 mb-4">
                                    We automatically collect information about how you use our platform:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Prompts created, modified, and shared</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Platform features used and interaction patterns</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Search queries and marketplace activity</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Device information and browser type</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>IP address and location data</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">AI-Generated Content</h3>
                                <p className="text-slate-300 mb-6">
                                    We may collect and analyze prompts and AI-generated content to improve our services, ensure quality, and develop new features. This includes prompt text, optimization suggestions, and performance metrics.
                                </p>
                            </section>

                            {/* 2. How We Use Information */}
                            <section id="how-we-use-information" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Information</h2>

                                <p className="text-slate-300 mb-4">We use your information for the following purposes:</p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Service Provision</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Provide and maintain the PROMPTOMY platform</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Process transactions and manage your account</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Deliver customer support and respond to inquiries</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Enable collaboration and sharing features</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Platform Improvement</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Analyze usage patterns to improve our services</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Develop new features and functionality</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Optimize AI algorithms and prompt suggestions</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Ensure platform security and prevent abuse</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Communication</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Send service updates and important notifications</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Provide educational content and best practices</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Send marketing communications (with your consent)</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Respond to feedback and support requests</li>
                                </ul>
                            </section>

                            {/* 3. Information Sharing */}
                            <section id="information-sharing" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">3. Information Sharing and Disclosure</h2>

                                <p className="text-slate-300 mb-6">
                                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Service Providers</h3>
                                <p className="text-slate-300 mb-4">
                                    We work with trusted third-party service providers who help us operate our platform:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Cloud hosting and infrastructure providers</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Payment processing services</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Analytics and monitoring tools</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Customer support platforms</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Legal Requirements</h3>
                                <p className="text-slate-300 mb-6">
                                    We may disclose your information when required by law, such as to comply with a subpoena, court order, or other legal process, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Business Transfers</h3>
                                <p className="text-slate-300 mb-6">
                                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction. We will notify you of any such change in ownership or control.
                                </p>
                            </section>

                            {/* 4. Data Security */}
                            <section id="data-security" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">4. Data Security</h2>

                                <p className="text-slate-300 mb-4">
                                    We implement industry-standard security measures to protect your personal information:
                                </p>

                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Encryption of data in transit and at rest</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Regular security audits and penetration testing</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Access controls and authentication measures</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Employee training on data protection practices</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Incident response and breach notification procedures</li>
                                </ul>

                                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-6">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-yellow-400 font-semibold mb-2">Important Security Note</h4>
                                            <p className="text-slate-300 text-sm">
                                                While we implement robust security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information using industry best practices.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 5. Your Rights */}
                            <section id="your-rights" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">5. Your Privacy Rights</h2>

                                <p className="text-slate-300 mb-6">
                                    Depending on your location, you may have the following rights regarding your personal information:
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Access and Portability</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Request access to your personal information</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Receive a copy of your data in a portable format</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Transfer your data to another service provider</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Correction and Deletion</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Correct inaccurate or incomplete information</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Request deletion of your personal information</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Restrict processing of your information</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Communication Preferences</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Opt out of marketing communications</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Manage notification preferences</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Withdraw consent for data processing</li>
                                </ul>

                                <p className="text-slate-300 mb-6">
                                    To exercise these rights, please contact us at <a href="mailto:privacy@promptomy.com" className="text-indigo-400 hover:text-indigo-300">privacy@promptomy.com</a>. We will respond to your request within 30 days.
                                </p>
                            </section>

                            {/* 6. Cookies */}
                            <section id="cookies" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">6. Cookies and Tracking Technologies</h2>

                                <p className="text-slate-300 mb-6">
                                    We use cookies and similar tracking technologies to enhance your experience on our platform:
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Essential Cookies</h3>
                                <p className="text-slate-300 mb-4">
                                    Required for basic platform functionality, including authentication, security, and core features.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Analytics Cookies</h3>
                                <p className="text-slate-300 mb-4">
                                    Help us understand how users interact with our platform to improve performance and user experience.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Preference Cookies</h3>
                                <p className="text-slate-300 mb-6">
                                    Remember your settings and preferences to provide a personalized experience.
                                </p>

                                <p className="text-slate-300 mb-6">
                                    You can manage cookie preferences through your browser settings or our cookie consent manager. Note that disabling certain cookies may affect platform functionality.
                                </p>
                            </section>

                            {/* 7. International Transfers */}
                            <section id="international-transfers" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">7. International Data Transfers</h2>

                                <p className="text-slate-300 mb-6">
                                    PROMPTOMY operates globally, and your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers:
                                </p>

                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Standard Contractual Clauses (SCCs) for EU data transfers</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Adequacy decisions for approved countries</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Binding Corporate Rules for internal transfers</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Certification schemes and codes of conduct</li>
                                </ul>
                            </section>

                            {/* 8. Children's Privacy */}
                            <section id="children-privacy" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">8. Children's Privacy</h2>

                                <p className="text-slate-300 mb-6">
                                    PROMPTOMY is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                                </p>

                                <p className="text-slate-300 mb-6">
                                    For users between 13 and 18 years of age, we recommend parental guidance when using our platform, especially when creating or sharing prompts.
                                </p>
                            </section>

                            {/* 9. Changes */}
                            <section id="changes" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">9. Changes to This Privacy Policy</h2>

                                <p className="text-slate-300 mb-6">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
                                </p>

                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Posting the updated policy on our website</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Sending email notifications for significant changes</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Displaying prominent notices on our platform</li>
                                </ul>

                                <p className="text-slate-300 mb-6">
                                    Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                                </p>
                            </section>

                            {/* 10. Contact */}
                            <section id="contact" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">10. Contact Information</h2>

                                <p className="text-slate-300 mb-6">
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                                </p>

                                <div className="bg-slate-700/30 rounded-xl p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Privacy Officer</h4>
                                            <div className="space-y-2 text-sm text-slate-300">
                                                <div>Email: <a href="mailto:privacy@promptomy.com" className="text-indigo-400 hover:text-indigo-300">privacy@promptomy.com</a></div>
                                                <div>Phone: +1 (555) 123-4567</div>
                                                <div>Response Time: Within 30 days</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Mailing Address</h4>
                                            <div className="text-sm text-slate-300">
                                                PROMPTOMY, Inc.<br />
                                                Attn: Privacy Officer<br />
                                                123 AI Street, Suite 100<br />
                                                San Francisco, CA 94105<br />
                                                United States
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                                    <p className="text-indigo-300 text-sm">
                                        <strong>EU Representative:</strong> For users in the European Union, our EU representative can be contacted at eu-privacy@promptomy.com for matters related to GDPR compliance.
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
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Policies</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/terms" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Terms of Service</h3>
                            <p className="text-slate-300 text-sm">Our terms and conditions for using the PROMPTOMY platform.</p>
                        </Link>
                        <Link href="/cookies" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Cookie Policy</h3>
                            <p className="text-slate-300 text-sm">Detailed information about our use of cookies and tracking.</p>
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
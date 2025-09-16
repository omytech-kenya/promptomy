import Link from "next/link";

export default function TermsOfServicePage() {
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
                            <span className="text-slate-300">Terms of Service</span>
                        </div>
                    </nav>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            These terms govern your use of the PROMPTOMY platform and services. Please read them carefully before using our platform.
                        </p>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Last Updated: March 20, 2024</div>
                                    <div className="text-slate-400 text-sm">Effective Date: March 20, 2024</div>
                                </div>
                            </div>
                            <p className="text-slate-300 text-sm">
                                By accessing or using PROMPTOMY, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
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

            {/* Terms of Service Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
                        <div className="prose prose-invert prose-lg max-w-none">

                            {/* Table of Contents */}
                            <div className="bg-slate-700/30 rounded-xl p-6 mb-12">
                                <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
                                <div className="grid md:grid-cols-2 gap-2 text-sm">
                                    <a href="#acceptance" className="text-indigo-400 hover:text-indigo-300 transition-colors">1. Acceptance of Terms</a>
                                    <a href="#description" className="text-indigo-400 hover:text-indigo-300 transition-colors">2. Service Description</a>
                                    <a href="#accounts" className="text-indigo-400 hover:text-indigo-300 transition-colors">3. User Accounts</a>
                                    <a href="#acceptable-use" className="text-indigo-400 hover:text-indigo-300 transition-colors">4. Acceptable Use Policy</a>
                                    <a href="#content" className="text-indigo-400 hover:text-indigo-300 transition-colors">5. User Content</a>
                                    <a href="#intellectual-property" className="text-indigo-400 hover:text-indigo-300 transition-colors">6. Intellectual Property</a>
                                    <a href="#marketplace" className="text-indigo-400 hover:text-indigo-300 transition-colors">7. Marketplace Terms</a>
                                    <a href="#payment" className="text-indigo-400 hover:text-indigo-300 transition-colors">8. Payment and Billing</a>
                                    <a href="#privacy" className="text-indigo-400 hover:text-indigo-300 transition-colors">9. Privacy and Data</a>
                                    <a href="#disclaimers" className="text-indigo-400 hover:text-indigo-300 transition-colors">10. Disclaimers</a>
                                    <a href="#limitation" className="text-indigo-400 hover:text-indigo-300 transition-colors">11. Limitation of Liability</a>
                                    <a href="#termination" className="text-indigo-400 hover:text-indigo-300 transition-colors">12. Termination</a>
                                    <a href="#governing-law" className="text-indigo-400 hover:text-indigo-300 transition-colors">13. Governing Law</a>
                                    <a href="#changes" className="text-indigo-400 hover:text-indigo-300 transition-colors">14. Changes to Terms</a>
                                    <a href="#contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">15. Contact Information</a>
                                </div>
                            </div>

                            {/* 1. Acceptance of Terms */}
                            <section id="acceptance" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>

                                <p className="text-slate-300 mb-4">
                                    These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and PROMPTOMY, Inc. ("PROMPTOMY," "we," "us," or "our") regarding your use of the PROMPTOMY platform and services.
                                </p>

                                <p className="text-slate-300 mb-4">
                                    By accessing, browsing, or using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use our services.
                                </p>

                                <p className="text-slate-300 mb-6">
                                    You represent and warrant that you have the legal capacity to enter into this agreement and that you are at least 18 years old, or if you are between 13 and 18 years old, you have obtained parental or guardian consent to use our services.
                                </p>
                            </section>

                            {/* 2. Service Description */}
                            <section id="description" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">2. Service Description</h2>

                                <p className="text-slate-300 mb-4">
                                    PROMPTOMY is an AI prompt marketplace and optimization platform that provides:
                                </p>

                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>A marketplace for discovering, purchasing, and selling AI prompts</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>AI-powered prompt generation and optimization tools</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Collaboration features for prompt development</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Educational resources and best practices for prompt engineering</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Analytics and performance tracking for prompts</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Integration capabilities with third-party AI platforms</li>
                                </ul>

                                <p className="text-slate-300 mb-6">
                                    We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice, and without liability to you or any third party.
                                </p>
                            </section>

                            {/* 3. User Accounts */}
                            <section id="accounts" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">3. User Accounts and Registration</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Account Creation</h3>
                                <p className="text-slate-300 mb-4">
                                    To access certain features of our platform, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Account Security</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Use a strong, unique password for your account</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Enable two-factor authentication when available</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Notify us immediately of any unauthorized access</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Keep your contact information up to date</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Account Restrictions</h3>
                                <p className="text-slate-300 mb-6">
                                    You may not create multiple accounts, share your account with others, or use another person's account without permission. We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.
                                </p>
                            </section>

                            {/* 4. Acceptable Use Policy */}
                            <section id="acceptable-use" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">4. Acceptable Use Policy</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Permitted Uses</h3>
                                <p className="text-slate-300 mb-4">
                                    You may use PROMPTOMY for lawful purposes in accordance with these Terms, including:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Creating, sharing, and optimizing AI prompts</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Purchasing and selling prompts in the marketplace</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Collaborating with other users on prompt development</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Learning and improving your prompt engineering skills</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Prohibited Activities</h3>
                                <p className="text-slate-300 mb-4">
                                    You agree not to engage in any of the following prohibited activities:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-red-400 mr-2">✗</span>Violating any applicable laws or regulations</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">✗</span>Infringing on intellectual property rights</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">✗</span>Uploading malicious code, viruses, or harmful content</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">✗</span>Attempting to gain unauthorized access to our systems</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">✗</span>Harassing, threatening, or abusing other users</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">✗</span>Creating prompts that promote illegal activities</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">✗</span>Scraping or automated data collection without permission</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">✗</span>Impersonating others or providing false information</li>
                                </ul>
                            </section>

                            {/* 5. User Content */}
                            <section id="content" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">5. User Content and Ownership</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Your Content</h3>
                                <p className="text-slate-300 mb-4">
                                    You retain ownership of the prompts, content, and materials you create and upload to PROMPTOMY ("User Content"). By uploading User Content, you grant us a non-exclusive, worldwide, royalty-free license to:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Host, store, and display your content on our platform</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Analyze and improve our services using your content</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Enable other users to discover and purchase your prompts</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Create derivative works for platform optimization</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Content Standards</h3>
                                <p className="text-slate-300 mb-4">
                                    All User Content must comply with our content standards:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Be original or properly licensed</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Not violate any third-party rights</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Be accurate and not misleading</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Comply with applicable laws and regulations</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Not contain harmful, offensive, or inappropriate material</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Content Moderation</h3>
                                <p className="text-slate-300 mb-6">
                                    We reserve the right to review, moderate, and remove User Content that violates these Terms or our community guidelines. We may also use automated systems to detect and prevent harmful content.
                                </p>
                            </section>

                            {/* 6. Intellectual Property */}
                            <section id="intellectual-property" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">6. Intellectual Property Rights</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">PROMPTOMY's Rights</h3>
                                <p className="text-slate-300 mb-4">
                                    The PROMPTOMY platform, including its design, functionality, algorithms, and proprietary technology, is owned by PROMPTOMY and protected by intellectual property laws. This includes:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Trademarks, logos, and brand elements</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Software code and algorithms</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Platform design and user interface</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Documentation and educational materials</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Respect for Third-Party Rights</h3>
                                <p className="text-slate-300 mb-6">
                                    We respect the intellectual property rights of others and expect our users to do the same. If you believe your intellectual property rights have been violated, please contact us with a detailed notice including the specific content and your ownership claim.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">DMCA Compliance</h3>
                                <p className="text-slate-300 mb-6">
                                    We comply with the Digital Millennium Copyright Act (DMCA) and will respond to valid takedown notices. Repeat infringers may have their accounts terminated.
                                </p>
                            </section>

                            {/* 7. Marketplace Terms */}
                            <section id="marketplace" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">7. Marketplace Terms</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Buying and Selling</h3>
                                <p className="text-slate-300 mb-4">
                                    The PROMPTOMY marketplace enables users to buy and sell AI prompts. By participating in the marketplace:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Sellers must own or have rights to the prompts they list</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Buyers receive a license to use purchased prompts as specified</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>All transactions are subject to our fee structure</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Refunds and disputes are handled according to our policies</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Quality Standards</h3>
                                <p className="text-slate-300 mb-4">
                                    All marketplace content must meet our quality standards:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Clear, accurate descriptions and documentation</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Functional and tested prompts</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Appropriate categorization and tagging</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Compliance with platform guidelines</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Revenue Sharing</h3>
                                <p className="text-slate-300 mb-6">
                                    PROMPTOMY retains a percentage of each transaction as a platform fee. Current fee structures are available in your account dashboard and may be updated with notice to users.
                                </p>
                            </section>

                            {/* 8. Payment and Billing */}
                            <section id="payment" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">8. Payment and Billing Terms</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Payment Processing</h3>
                                <p className="text-slate-300 mb-4">
                                    We use third-party payment processors to handle transactions securely. By making a purchase, you agree to:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Provide accurate payment information</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Pay all charges incurred on your account</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Comply with payment processor terms</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Accept responsibility for payment disputes</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Subscription Services</h3>
                                <p className="text-slate-300 mb-6">
                                    For subscription-based services, payments are processed automatically according to your chosen billing cycle. You may cancel subscriptions at any time, with cancellation taking effect at the end of the current billing period.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Refund Policy</h3>
                                <p className="text-slate-300 mb-6">
                                    Refunds are handled on a case-by-case basis according to our refund policy. Generally, digital products are non-refundable unless there are technical issues or the content significantly differs from its description.
                                </p>
                            </section>

                            {/* 9. Privacy and Data */}
                            <section id="privacy" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">9. Privacy and Data Protection</h2>

                                <p className="text-slate-300 mb-4">
                                    Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Data Usage</h3>
                                <p className="text-slate-300 mb-4">
                                    By using our services, you consent to our collection and use of data as described in our Privacy Policy, including:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Platform usage analytics and optimization</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>AI model training and improvement</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Security monitoring and fraud prevention</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Customer support and communication</li>
                                </ul>
                            </section>

                            {/* 10. Disclaimers */}
                            <section id="disclaimers" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">10. Disclaimers and Warranties</h2>

                                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-6">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-yellow-400 font-semibold mb-2">Important Disclaimer</h4>
                                            <p className="text-slate-300 text-sm">
                                                PROMPTOMY is provided "as is" and "as available" without warranties of any kind, either express or implied.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-300 mb-4">
                                    We disclaim all warranties, including but not limited to:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Merchantability and fitness for a particular purpose</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Uninterrupted or error-free service</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Accuracy or reliability of content</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Security of data transmission</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Results from using AI-generated content</li>
                                </ul>

                                <p className="text-slate-300 mb-6">
                                    You acknowledge that AI-generated content may contain errors, biases, or inaccuracies, and you use such content at your own risk.
                                </p>
                            </section>

                            {/* 11. Limitation of Liability */}
                            <section id="limitation" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">11. Limitation of Liability</h2>

                                <p className="text-slate-300 mb-4">
                                    To the maximum extent permitted by law, PROMPTOMY shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Loss of profits, data, or business opportunities</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Interruption of business or service</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Cost of substitute goods or services</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Damages resulting from AI-generated content</li>
                                </ul>

                                <p className="text-slate-300 mb-6">
                                    Our total liability to you for any claims arising from these Terms or your use of our services shall not exceed the amount you paid to PROMPTOMY in the 12 months preceding the claim.
                                </p>
                            </section>

                            {/* 12. Termination */}
                            <section id="termination" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">12. Termination</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Termination by You</h3>
                                <p className="text-slate-300 mb-4">
                                    You may terminate your account at any time by contacting us or using the account deletion feature in your settings. Upon termination:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Your access to the platform will be discontinued</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Your content may be removed from the platform</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Outstanding payments will be processed according to our policies</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Termination by PROMPTOMY</h3>
                                <p className="text-slate-300 mb-6">
                                    We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, or for any other reason at our sole discretion. We will provide notice when reasonably possible.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Effect of Termination</h3>
                                <p className="text-slate-300 mb-6">
                                    Upon termination, all rights and licenses granted to you will cease, but provisions regarding intellectual property, disclaimers, and limitation of liability will survive.
                                </p>
                            </section>

                            {/* 13. Governing Law */}
                            <section id="governing-law" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">13. Governing Law and Dispute Resolution</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Governing Law</h3>
                                <p className="text-slate-300 mb-4">
                                    These Terms are governed by and construed in accordance with the laws of the State of California, United States, without regard to conflict of law principles.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Dispute Resolution</h3>
                                <p className="text-slate-300 mb-4">
                                    Any disputes arising from these Terms or your use of our services will be resolved through:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">1.</span>Good faith negotiation between the parties</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">2.</span>Binding arbitration if negotiation fails</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">3.</span>Courts of competent jurisdiction in San Francisco, California</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Class Action Waiver</h3>
                                <p className="text-slate-300 mb-6">
                                    You agree to resolve disputes individually and waive any right to participate in class action lawsuits or class-wide arbitration.
                                </p>
                            </section>

                            {/* 14. Changes to Terms */}
                            <section id="changes" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">14. Changes to These Terms</h2>

                                <p className="text-slate-300 mb-4">
                                    We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices. We will notify you of material changes by:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Posting updated Terms on our website</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Sending email notifications for significant changes</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Displaying prominent notices on our platform</li>
                                </ul>

                                <p className="text-slate-300 mb-6">
                                    Your continued use of our services after any changes indicates your acceptance of the updated Terms. If you do not agree to the changes, you must stop using our services.
                                </p>
                            </section>

                            {/* 15. Contact Information */}
                            <section id="contact" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">15. Contact Information</h2>

                                <p className="text-slate-300 mb-6">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>

                                <div className="bg-slate-700/30 rounded-xl p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Legal Department</h4>
                                            <div className="space-y-2 text-sm text-slate-300">
                                                <div>Email: <a href="mailto:legal@promptomy.com" className="text-indigo-400 hover:text-indigo-300">legal@promptomy.com</a></div>
                                                <div>Phone: +1 (555) 123-4567</div>
                                                <div>Response Time: Within 5 business days</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Mailing Address</h4>
                                            <div className="text-sm text-slate-300">
                                                PROMPTOMY, Inc.<br />
                                                Attn: Legal Department<br />
                                                123 AI Street, Suite 100<br />
                                                San Francisco, CA 94105<br />
                                                United States
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Legal Documents</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/privacy" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Privacy Policy</h3>
                            <p className="text-slate-300 text-sm">How we collect, use, and protect your personal information.</p>
                        </Link>
                        <Link href="/cookies" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Cookie Policy</h3>
                            <p className="text-slate-300 text-sm">Information about our use of cookies and tracking technologies.</p>
                        </Link>
                        <Link href="/community-guidelines" className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all p-6 group">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Community Guidelines</h3>
                            <p className="text-slate-300 text-sm">Standards for behavior and content in our community.</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
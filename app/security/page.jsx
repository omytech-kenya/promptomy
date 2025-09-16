import Link from "next/link";

export default function SecurityPage() {
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
                            <span className="text-slate-300">Security</span>
                        </div>
                    </nav>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Security & Trust
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Your security is our top priority. Learn about the comprehensive measures we take to protect your data, prompts, and privacy on the PROMPTOMY platform.
                        </p>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-5.414l-4 4-4-4M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Security Framework Updated: March 2025</div>
                                    <div className="text-slate-400 text-sm">SOC 2 Type II Compliant • ISO 27001 Certified</div>
                                </div>
                            </div>
                            <p className="text-slate-300 text-sm">
                                PROMPTOMY employs enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with international security standards to ensure your data remains safe and secure.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Security Overview */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
                            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Data Encryption</h3>
                            <p className="text-slate-300">End-to-end encryption for all data in transit and at rest using AES-256 encryption standards.</p>
                        </div>
                        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-5.414l-4 4-4-4M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
                            <p className="text-slate-300">SOC 2 Type II, ISO 27001, and GDPR compliant with regular third-party security audits.</p>
                        </div>
                        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">24/7 Monitoring</h3>
                            <p className="text-slate-300">Continuous security monitoring with real-time threat detection and automated response systems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Security Information */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
                        <div className="prose prose-invert prose-lg max-w-none">

                            {/* Table of Contents */}
                            <div className="bg-slate-700/30 rounded-xl p-6 mb-12">
                                <h2 className="text-xl font-bold text-white mb-4">Security Overview</h2>
                                <div className="grid md:grid-cols-2 gap-2 text-sm">
                                    <a href="#infrastructure" className="text-indigo-400 hover:text-indigo-300 transition-colors">Infrastructure Security</a>
                                    <a href="#data-protection" className="text-indigo-400 hover:text-indigo-300 transition-colors">Data Protection</a>
                                    <a href="#access-controls" className="text-indigo-400 hover:text-indigo-300 transition-colors">Access Controls</a>
                                    <a href="#compliance" className="text-indigo-400 hover:text-indigo-300 transition-colors">Compliance & Certifications</a>
                                    <a href="#incident-response" className="text-indigo-400 hover:text-indigo-300 transition-colors">Incident Response</a>
                                    <a href="#vulnerability-management" className="text-indigo-400 hover:text-indigo-300 transition-colors">Vulnerability Management</a>
                                    <a href="#business-continuity" className="text-indigo-400 hover:text-indigo-300 transition-colors">Business Continuity</a>
                                    <a href="#responsible-disclosure" className="text-indigo-400 hover:text-indigo-300 transition-colors">Responsible Disclosure</a>
                                </div>
                            </div>

                            {/* Infrastructure Security */}
                            <section id="infrastructure" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">Infrastructure Security</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Cloud Infrastructure</h3>
                                <p className="text-slate-300 mb-4">
                                    PROMPTOMY is built on enterprise-grade cloud infrastructure with multiple layers of security:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Multi-region deployment with automatic failover capabilities</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Virtual Private Cloud (VPC) with network segmentation</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Web Application Firewall (WAF) protection</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>DDoS protection and traffic filtering</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Load balancing with SSL/TLS termination</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Network Security</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Zero-trust network architecture</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Network intrusion detection and prevention systems</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Regular network penetration testing</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Encrypted communication channels</li>
                                </ul>
                            </section>

                            {/* Data Protection */}
                            <section id="data-protection" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">Data Protection</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Encryption Standards</h3>
                                <p className="text-slate-300 mb-4">
                                    We implement industry-leading encryption to protect your data:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>AES-256 encryption for data at rest</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>TLS 1.3 for data in transit</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>End-to-end encryption for sensitive prompts</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Hardware Security Modules (HSM) for key management</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Regular key rotation and secure key storage</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Data Classification & Handling</h3>
                                <p className="text-slate-300 mb-4">
                                    We classify and handle data based on sensitivity levels:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-green-400 mr-2">•</span><strong>Public:</strong> Marketplace prompts and public profiles</li>
                                    <li className="flex items-start"><span className="text-yellow-400 mr-2">•</span><strong>Internal:</strong> Usage analytics and platform metrics</li>
                                    <li className="flex items-start"><span className="text-orange-400 mr-2">•</span><strong>Confidential:</strong> Private prompts and user communications</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">•</span><strong>Restricted:</strong> Payment information and authentication data</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Data Backup & Recovery</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Automated daily backups with encryption</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Cross-region backup replication</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Point-in-time recovery capabilities</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Regular backup integrity testing</li>
                                </ul>
                            </section>

                            {/* Access Controls */}
                            <section id="access-controls" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">Access Controls & Authentication</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">User Authentication</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Multi-factor authentication (MFA) support</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>OAuth 2.0 and OpenID Connect integration</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Single Sign-On (SSO) for enterprise customers</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Password strength requirements and breach detection</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Session management with automatic timeout</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Role-Based Access Control</h3>
                                <p className="text-slate-300 mb-4">
                                    We implement granular access controls based on user roles and permissions:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Principle of least privilege access</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Regular access reviews and deprovisioning</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Segregation of duties for critical operations</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Audit logging for all access attempts</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Employee Access</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Background checks for all employees</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Security awareness training and certification</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Just-in-time access for production systems</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Comprehensive activity monitoring and logging</li>
                                </ul>
                            </section>

                            {/* Compliance */}
                            <section id="compliance" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">Compliance & Certifications</h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <h4 className="text-white font-semibold mb-3 flex items-center">
                                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            SOC 2 Type II
                                        </h4>
                                        <p className="text-slate-300 text-sm">
                                            Independently audited for security, availability, processing integrity, confidentiality, and privacy controls.
                                        </p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <h4 className="text-white font-semibold mb-3 flex items-center">
                                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            ISO 27001
                                        </h4>
                                        <p className="text-slate-300 text-sm">
                                            Certified for information security management systems and continuous improvement processes.
                                        </p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <h4 className="text-white font-semibold mb-3 flex items-center">
                                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            GDPR Compliant
                                        </h4>
                                        <p className="text-slate-300 text-sm">
                                            Full compliance with European data protection regulations and user privacy rights.
                                        </p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-xl p-6">
                                        <h4 className="text-white font-semibold mb-3 flex items-center">
                                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            CCPA Compliant
                                        </h4>
                                        <p className="text-slate-300 text-sm">
                                            Adherence to California Consumer Privacy Act requirements for data transparency and control.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Regular Audits</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Annual third-party security assessments</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Quarterly internal security reviews</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Continuous compliance monitoring</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Penetration testing by certified ethical hackers</li>
                                </ul>
                            </section>

                            {/* Incident Response */}
                            <section id="incident-response" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">Incident Response</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">24/7 Security Operations Center</h3>
                                <p className="text-slate-300 mb-4">
                                    Our dedicated security team monitors the platform around the clock:
                                </p>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Real-time threat detection and analysis</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Automated incident response workflows</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Immediate containment and mitigation procedures</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Forensic investigation capabilities</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Incident Response Process</h3>
                                <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                                    <div className="grid md:grid-cols-4 gap-4 text-center">
                                        <div>
                                            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                                <span className="text-red-400 font-bold">1</span>
                                            </div>
                                            <h4 className="text-white font-semibold mb-2">Detection</h4>
                                            <p className="text-slate-300 text-sm">Automated monitoring identifies potential security incidents</p>
                                        </div>
                                        <div>
                                            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                                <span className="text-orange-400 font-bold">2</span>
                                            </div>
                                            <h4 className="text-white font-semibold mb-2">Response</h4>
                                            <p className="text-slate-300 text-sm">Immediate containment and impact assessment</p>
                                        </div>
                                        <div>
                                            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                                <span className="text-yellow-400 font-bold">3</span>
                                            </div>
                                            <h4 className="text-white font-semibold mb-2">Recovery</h4>
                                            <p className="text-slate-300 text-sm">System restoration and service continuity</p>
                                        </div>
                                        <div>
                                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                                <span className="text-green-400 font-bold">4</span>
                                            </div>
                                            <h4 className="text-white font-semibold mb-2">Learning</h4>
                                            <p className="text-slate-300 text-sm">Post-incident analysis and improvement</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Communication</h3>
                                <p className="text-slate-300 mb-6">
                                    In the event of a security incident that may affect users, we commit to transparent and timely communication through our status page, email notifications, and in-app alerts within 72 hours of discovery.
                                </p>
                            </section>

                            {/* Vulnerability Management */}
                            <section id="vulnerability-management" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">Vulnerability Management</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Proactive Security Testing</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Automated vulnerability scanning and assessment</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Regular penetration testing by certified professionals</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Static and dynamic application security testing (SAST/DAST)</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Dependency scanning for third-party components</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Infrastructure security assessments</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Patch Management</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Automated security patch deployment</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Critical vulnerability response within 24 hours</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Regular system updates and maintenance windows</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Zero-downtime deployment capabilities</li>
                                </ul>
                            </section>

                            {/* Business Continuity */}
                            <section id="business-continuity" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">Business Continuity & Disaster Recovery</h2>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">High Availability</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>99.9% uptime SLA with redundant systems</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Multi-region deployment with automatic failover</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Load balancing and traffic distribution</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Database replication and clustering</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Disaster Recovery</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Recovery Time Objective (RTO): &lt; 4 hours</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Recovery Point Objective (RPO): &lt; 1 hour</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Regular disaster recovery testing and drills</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Comprehensive business continuity planning</li>
                                </ul>
                            </section>

                            {/* Responsible Disclosure */}
                            <section id="responsible-disclosure" className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6">Responsible Security Disclosure</h2>

                                <p className="text-slate-300 mb-6">
                                    We welcome and encourage responsible disclosure of security vulnerabilities. If you discover a security issue, please help us protect our users by following our responsible disclosure process.
                                </p>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">How to Report</h3>
                                <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Security Team Contact</h4>
                                            <div className="space-y-2 text-sm text-slate-300">
                                                <div>Email: <a href="mailto:security@omytech.co.ke" className="text-indigo-400 hover:text-indigo-300">security@omytech.co.ke</a></div>
                                                <div>PGP Key: Available on request</div>
                                                <div>Response Time: Within 24 hours</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">Bug Bounty Program</h4>
                                            <div className="text-sm text-slate-300">
                                                We offer rewards for qualifying security vulnerabilities based on severity and impact. Contact our security team for program details.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Disclosure Guidelines</h3>
                                <ul className="text-slate-300 mb-6 space-y-2">
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Provide detailed information about the vulnerability</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Allow reasonable time for investigation and remediation</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Avoid accessing or modifying user data</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Do not perform actions that could harm our users or services</li>
                                    <li className="flex items-start"><span className="text-teal-400 mr-2">•</span>Keep vulnerability details confidential until resolved</li>
                                </ul>
                            </section>

                        </div>
                    </div>
                </div>
            </section>

            {/* Security Contact */}
            <section className="py-16 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Security Questions?</h2>
                        <p className="text-xl text-slate-300">
                            Our security team is here to help with any questions or concerns.
                        </p>
                    </div>

                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Contact Security Team</h3>
                                <div className="space-y-3 text-slate-300">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:security@omytech.co.ke" className="text-indigo-400 hover:text-indigo-300">security@omytech.co.ke</a>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span>PGP Key available on request</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Response within 24 hours</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Security Resources</h3>
                                <div className="space-y-3">
                                    <Link href="/privacy" className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors">
                                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Privacy Policy
                                    </Link>
                                    <Link href="/terms" className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors">
                                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Terms of Service
                                    </Link>
                                    <a href="https://status.promptomy.com" className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors">
                                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        System Status
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
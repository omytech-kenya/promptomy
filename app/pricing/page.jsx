'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: 'Free',
            description: 'Perfect for getting started with AI prompts',
            price: { monthly: 0, yearly: 0 },
            features: [
                '5 prompt generations per month',
                'Access to basic templates',
                'Community support',
                'Basic prompt optimization',
                'Download prompts as text'
            ],
            limitations: [
                'Limited to 5 generations/month',
                'No advanced features',
                'Community support only'
            ],
            cta: 'Get Started Free',
            popular: false,
            color: 'slate'
        },
        {
            name: 'Creator',
            description: 'For content creators and professionals',
            price: { monthly: 10, yearly: 100 },
            features: [
                '100 prompt generations per month',
                'Access to all templates',
                'Priority email support',
                'Advanced prompt optimization',
                'Export in multiple formats',
                'Prompt analytics & insights',
                'Custom categories',
                'Collaboration tools'
            ],
            limitations: [],
            cta: 'Start Creating',
            popular: true,
            color: 'indigo'
        },
        {
            name: 'Business',
            description: 'For teams and growing businesses',
            price: { monthly: 19, yearly: 190 },
            features: [
                'Unlimited prompt generations',
                'Team collaboration (up to 10 users)',
                'Priority support + phone',
                'Custom prompt templates',
                'API access (10k calls/month)',
                'Advanced analytics dashboard',
                'White-label options',
                'Custom integrations',
                'Bulk operations',
                'Version control'
            ],
            limitations: [],
            cta: 'Scale Your Business',
            popular: false,
            color: 'teal'
        },
        {
            name: 'Enterprise',
            description: 'For large organizations with custom needs',
            price: { monthly: 'Custom', yearly: 'Custom' },
            features: [
                'Everything in Business',
                'Unlimited team members',
                'Dedicated account manager',
                'Custom AI model training',
                'On-premise deployment',
                'Advanced security & compliance',
                'Custom SLA agreements',
                'Priority feature requests',
                'Training & onboarding'
            ],
            limitations: [],
            cta: 'Contact Sales',
            popular: false,
            color: 'yellow'
        }
    ];

    const faqs = [
        {
            question: 'What counts as a prompt generation?',
            answer: 'Each time you use our AI generator to create or enhance a prompt counts as one generation. This includes both new prompt creation and optimization of existing prompts.'
        },
        {
            question: 'Can I upgrade or downgrade my plan anytime?',
            answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
        },
        {
            question: 'Do you offer refunds?',
            answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team for a full refund.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans.'
        },
        {
            question: 'Is there a free trial for paid plans?',
            answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required to start your trial.'
        },
        {
            question: 'Can I sell prompts I create with PROMPTOMY?',
            answer: 'Absolutely! All prompts you create are yours to use commercially. Our marketplace also lets you sell prompts to other users and earn revenue.'
        }
    ];

    const getColorClasses = (color, popular = false) => {
        const colors = {
            slate: {
                border: popular ? 'border-slate-500' : 'border-slate-700/50',
                bg: 'bg-slate-800/80',
                button: 'bg-slate-700 hover:bg-slate-600',
                accent: 'text-slate-400'
            },
            indigo: {
                border: popular ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-indigo-500/50',
                bg: 'bg-slate-800/80',
                button: 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800',
                accent: 'text-indigo-400'
            },
            teal: {
                border: popular ? 'border-teal-500' : 'border-teal-500/50',
                bg: 'bg-slate-800/80',
                button: 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800',
                accent: 'text-teal-400'
            },
            yellow: {
                border: popular ? 'border-yellow-500' : 'border-yellow-500/50',
                bg: 'bg-slate-800/80',
                button: 'bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800',
                accent: 'text-yellow-400'
            }
        };
        return colors[color];
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Simple, Transparent
                        <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent block">
                            Pricing
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Choose the perfect plan for your AI prompt needs. Start free and scale as you grow.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center mb-8">
                        <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                        <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
                            Yearly
                        </span>
                        {billingCycle === 'yearly' && (
                            <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                                Save 17%
                            </span>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-4 gap-8 mb-16">
                    {plans.map((plan) => {
                        const colors = getColorClasses(plan.color, plan.popular);
                        return (
                            <div
                                key={plan.name}
                                className={`relative backdrop-blur-sm p-8 rounded-2xl border ${colors.border} ${colors.bg} ${plan.popular ? 'transform scale-105' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-slate-300 mb-4">{plan.description}</p>
                                    <div className="mb-4">
                                        {typeof plan.price[billingCycle] === 'number' ? (
                                            <>
                                                <span className="text-4xl font-bold text-white">
                                                    ${plan.price[billingCycle]}
                                                </span>
                                                <span className="text-slate-400 ml-1">
                                                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-4xl font-bold text-white">
                                                {plan.price[billingCycle]}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg ${colors.button}`}>
                                    {plan.cta}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Feature Comparison */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 mb-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Compare All Features</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="text-left py-4 px-4 text-white font-semibold">Features</th>
                                    <th className="text-center py-4 px-4 text-white font-semibold">Free</th>
                                    <th className="text-center py-4 px-4 text-white font-semibold">Creator</th>
                                    <th className="text-center py-4 px-4 text-white font-semibold">Business</th>
                                    <th className="text-center py-4 px-4 text-white font-semibold">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-800">
                                    <td className="py-3 px-4 text-slate-300">Prompt Generations</td>
                                    <td className="py-3 px-4 text-center text-slate-400">5/month</td>
                                    <td className="py-3 px-4 text-center text-slate-300">100/month</td>
                                    <td className="py-3 px-4 text-center text-slate-300">Unlimited</td>
                                    <td className="py-3 px-4 text-center text-slate-300">Unlimited</td>
                                </tr>
                                <tr className="border-b border-slate-800">
                                    <td className="py-3 px-4 text-slate-300">Team Members</td>
                                    <td className="py-3 px-4 text-center text-slate-400">1</td>
                                    <td className="py-3 px-4 text-center text-slate-300">1</td>
                                    <td className="py-3 px-4 text-center text-slate-300">10</td>
                                    <td className="py-3 px-4 text-center text-slate-300">Unlimited</td>
                                </tr>
                                <tr className="border-b border-slate-800">
                                    <td className="py-3 px-4 text-slate-300">API Access</td>
                                    <td className="py-3 px-4 text-center text-slate-400">✗</td>
                                    <td className="py-3 px-4 text-center text-slate-400">✗</td>
                                    <td className="py-3 px-4 text-center text-green-400">✓</td>
                                    <td className="py-3 px-4 text-center text-green-400">✓</td>
                                </tr>
                                <tr className="border-b border-slate-800">
                                    <td className="py-3 px-4 text-slate-300">Priority Support</td>
                                    <td className="py-3 px-4 text-center text-slate-400">✗</td>
                                    <td className="py-3 px-4 text-center text-green-400">✓</td>
                                    <td className="py-3 px-4 text-center text-green-400">✓</td>
                                    <td className="py-3 px-4 text-center text-green-400">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-slate-300">Custom Integrations</td>
                                    <td className="py-3 px-4 text-center text-slate-400">✗</td>
                                    <td className="py-3 px-4 text-center text-slate-400">✗</td>
                                    <td className="py-3 px-4 text-center text-green-400">✓</td>
                                    <td className="py-3 px-4 text-center text-green-400">✓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                                <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-indigo-600/20 to-teal-600/20 backdrop-blur-sm p-12 rounded-2xl border border-indigo-500/20">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to supercharge your AI workflows?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of creators and businesses already using PROMPTOMY to create better AI prompts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/auth/signup"
                            className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                        >
                            Start Free Trial
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
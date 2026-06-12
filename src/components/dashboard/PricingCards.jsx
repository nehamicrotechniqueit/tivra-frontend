'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    nameColor: 'text-blue-600',
    price: '₹999',
    period: '/month',
    billing: 'Billed Annually',
    popular: false,
    buttonStyle: 'border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600',
    features: [
      '1 User',
      'Up to 500 Leads',
      'Basic CRM',
      'WhatsApp Integration',
      'Email Support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    nameColor: 'text-blue-600',
    price: '₹2,999',
    period: '/month',
    billing: 'Billed Annually',
    popular: false,
    buttonStyle: 'border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600',
    features: [
      '5 Users',
      'Up to 5,000 Leads',
      'Marketing Automation',
      'AI Assistant',
      'Priority Support',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    nameColor: 'text-blue-600',
    price: '₹7,999',
    period: '/month',
    billing: 'Billed Annually',
    popular: true,
    buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
    features: [
      '20 Users',
      'Up to 20,000 Leads',
      'All Features',
      'WhatsApp Campaigns',
      'Advanced Reports',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    nameColor: 'text-slate-800',
    price: '₹24,999',
    period: '/month',
    billing: 'Billed Annually',
    popular: false,
    buttonStyle: 'border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600',
    features: [
      'Unlimited Users',
      'Unlimited Leads',
      'White Label',
      'Custom Integrations',
      'Dedicated Support',
    ],
  },
  {
    id: 'agency',
    name: 'Agency / Reseller',
    nameColor: 'text-orange-500',
    price: '₹49,999',
    period: '/month',
    billing: 'Billed Annually',
    popular: false,
    buttonStyle: 'bg-orange-500 text-white hover:bg-orange-600',
    features: [
      'Reseller Panel',
      'Multi-tenant SaaS',
      'White Label',
      'Unlimited Clients',
      'Priority Support',
    ],
  },
];

export default function PricingCards() {
  const [selected, setSelected] = useState('business');

  return (
    <div className="grid grid-cols-5 gap-3">
      {plans.map((plan) => {
        const isSelected = selected === plan.id;
        const isBusiness = plan.id === 'business';

        return (
          <div
            key={plan.id}
            onClick={() => setSelected(plan.id)}
            className={`
              relative bg-white rounded-xl border-2 p-4 cursor-pointer transition-all duration-200
              ${isSelected
                ? 'border-blue-500 shadow-lg shadow-blue-100 scale-[1.02]'
                : 'border-slate-100 shadow-sm hover:border-blue-300 hover:shadow-md'
              }
              ${isBusiness && !isSelected ? 'border-blue-400' : ''}
            `}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
                  Popular
                </span>
              </div>
            )}

            {/* Selected indicator */}
            {isSelected && (
              <div className="absolute top-3 right-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                  <Check size={11} className="text-white" strokeWidth={3} />
                </div>
              </div>
            )}

            {/* Plan name */}
            <div className={`font-bold text-[13px] mb-1 ${plan.nameColor}`}>
              {plan.name}
            </div>

            {/* Price */}
            <div className="mb-0.5">
              <span className="text-[22px] font-black text-slate-800 leading-tight">{plan.price}</span>
              <span className="text-[11px] text-slate-500 font-medium">{plan.period}</span>
            </div>
            <div className="text-[10px] text-slate-400 mb-3">{plan.billing}</div>

            {/* Features */}
            <ul className="space-y-1.5 mb-4">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-1.5">
                  <Check size={12} className="text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-[11px] text-slate-600 leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              className={`
                w-full py-2 rounded-lg text-[12px] font-bold transition-all duration-150 mt-auto
                ${isSelected
                  ? 'bg-blue-600 text-white shadow-md'
                  : plan.buttonStyle
                }
              `}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(plan.id);
              }}
            >
              Start Free Trial
            </button>
          </div>
        );
      })}
    </div>
  );
}
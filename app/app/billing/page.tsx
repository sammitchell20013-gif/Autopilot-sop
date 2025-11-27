"use client";

import { motion } from "framer-motion";
import { CreditCard, Check, Zap, Crown, TrendingUp, Calendar, DollarSign } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { useSOPs } from "@/hooks/useSOPs";
import { updateUserSubscription, getPlanLimits } from "@/lib/supabase/subscriptions";
import { getTasksByUserId } from "@/lib/supabase/tasks";
import { useState, useEffect } from "react";

export default function BillingPage() {
  const { user } = useAuth();
  const { subscription, loading: subLoading } = useSubscription();
  const { sops } = useSOPs();
  const [tasks, setTasks] = useState<any[]>([]);
  const [upgrading, setUpgrading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      if (user?.id) {
        const { data } = await getTasksByUserId(user.id);
        setTasks(data || []);
      }
    };
    fetchTasks();
  }, [user]);

  const currentPlanName = subscription?.plan || 'free';
  const planDisplayName = currentPlanName.charAt(0).toUpperCase() + currentPlanName.slice(1);
  const planLimits = getPlanLimits(currentPlanName as any);

  const handleUpgrade = async (plan: string) => {
    if (!user?.id) return;
    
    setUpgrading(true);
    const { error } = await updateUserSubscription(user.id, plan as any);
    
    if (error) {
      alert('Error upgrading plan. Please try again.');
    } else {
      alert(`Successfully upgraded to ${plan} plan!`);
      window.location.reload();
    }
    setUpgrading(false);
  };

  const currentPlan = {
    name: planDisplayName,
    price: currentPlanName === 'free' ? '$0' : currentPlanName === 'pro' ? '$29' : currentPlanName === 'business' ? '$79' : 'Custom',
    period: currentPlanName === 'free' ? 'forever' : 'per month',
    features:
      currentPlanName === 'pro'
        ? [
            'Unlimited SOPs',
            'Unlimited Tasks',
            '5 Team members',
            'Video Upload',
            'AI SOP Generation',
            'Priority support',
          ]
        : currentPlanName === 'business'
        ? [
            'Everything in Pro',
            'Unlimited Team members',
            'Advanced AI Features',
            'Custom branding',
            'Analytics & Reports',
            'API Access',
          ]
        : currentPlanName === 'enterprise'
        ? [
            'Everything in Business',
            'Dedicated account manager',
            'Custom integrations',
            'On-premise deployment',
            'SLA guarantees',
          ]
        : ['1 SOP', '5 Tasks', '1 Team member', 'Basic support'],
  };

  if (subLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading billing info...</p>
        </div>
      </div>
    );
  }

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams",
      features: [
        "Unlimited SOPs",
        "Unlimited Tasks",
        "5 Team members",
        "Video Upload (5 videos/month)",
        "AI SOP Generation",
        "Priority support",
        "Export to PDF",
      ],
      color: "from-blue-500 to-primary-600",
      recommended: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "For growing businesses",
      features: [
        "Everything in Starter",
        "Unlimited Team members",
        "Unlimited Video Upload",
        "Advanced AI Features",
        "Custom branding",
        "Analytics & Reports",
        "API Access",
        "24/7 Priority support",
      ],
      color: "from-purple-500 to-pink-600",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment option",
        "SLA guarantees",
        "Advanced security",
        "Training & onboarding",
        "White-label option",
      ],
      color: "from-orange-500 to-red-600",
      recommended: false,
    },
  ];

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Billing & Subscription
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Manage your subscription and billing information
        </p>
      </motion.div>

      {/* Current Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <Card>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Current Plan
              </h2>
              <div className="flex items-center gap-3">
                <Badge variant={currentPlanName === 'free' ? 'default' : 'primary'} className="text-lg">
                  {currentPlan.name}
                </Badge>
                {currentPlanName !== 'free' && (
                  <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
                    ✓ Active
                  </span>
                )}
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentPlan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {currentPlan.period}
                </span>
              </div>
              {subscription?.ends_at && currentPlanName !== 'free' && (
                <p className="text-sm text-gray-500 mt-2">
                  Renews: {new Date(subscription.ends_at).toLocaleDateString()}
                </p>
              )}
            </div>
            {currentPlanName === 'free' && (
              <Button variant="primary" onClick={() => handleUpgrade('pro')} disabled={upgrading}>
                <Zap className="w-4 h-4 mr-2" />
                {upgrading ? 'Processing...' : 'Upgrade Plan'}
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Plan Features
              </h3>
              <ul className="space-y-2">
                {currentPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Usage This Month
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">SOPs Created</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {sops.length} {planLimits.sops === -1 ? '/ Unlimited' : `/ ${planLimits.sops}`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-primary-600 h-2 rounded-full" 
                      style={{ width: planLimits.sops === -1 ? '100%' : `${Math.min((sops.length / planLimits.sops) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Tasks Created</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {tasks.length} {planLimits.tasks === -1 ? '/ Unlimited' : `/ ${planLimits.tasks}`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full" 
                      style={{ width: planLimits.tasks === -1 ? '100%' : `${Math.min((tasks.length / planLimits.tasks) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Available Plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Available Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card
                hover
                className={`relative ${
                  plan.recommended ? 'border-2 border-primary-500 dark:border-primary-600' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="primary" className="shadow-lg">
                      <Crown className="w-3 h-3 mr-1" />
                      Recommended
                    </Badge>
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center mb-4`}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.recommended ? 'primary' : 'outline'}
                  className="w-full"
                  onClick={() => {
                    if (plan.name === 'Starter') handleUpgrade('pro');
                    else if (plan.name === 'Professional') handleUpgrade('business');
                    else if (plan.name === 'Enterprise') handleUpgrade('enterprise');
                  }}
                  disabled={
                    upgrading ||
                    (plan.name === 'Starter' && currentPlanName === 'pro') ||
                    (plan.name === 'Professional' && currentPlanName === 'business') ||
                    (plan.name === 'Enterprise' && currentPlanName === 'enterprise')
                  }
                >
                  {(plan.name === 'Starter' && currentPlanName === 'pro') ||
                   (plan.name === 'Professional' && currentPlanName === 'business') ||
                   (plan.name === 'Enterprise' && currentPlanName === 'enterprise')
                    ? 'Current Plan'
                    : upgrading
                    ? 'Processing...'
                    : plan.name === 'Enterprise'
                    ? 'Contact Sales'
                    : 'Upgrade Now'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Billing Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Payment Method
          </h2>

          <div className="text-center py-8">
            <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No payment method on file
            </p>
            <Button
              variant="outline"
              onClick={() => alert('Payment method setup coming soon!')}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Add Payment Method
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

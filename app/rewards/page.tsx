"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Gift,
  Star,
  Trophy,
  Coins,
  Share2,
  Users,
  UserPlus,
} from "lucide-react";

export default function RewardsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"earned" | "available" | "refer">(
    "earned"
  );

  const earnedRewards = [
    {
      id: 1,
      title: "Welcome Bonus",
      description: "Complete your first loan application",
      points: 1000,
      status: "earned",
      icon: "🎉",
      progress: 100,
    },
    {
      id: 2,
      title: "Referral Reward",
      description: "Refer a friend and both get rewards",
      points: 500,
      status: "earned",
      icon: "👥",
      progress: 100,
    },
    {
      id: 3,
      title: "Early Repayment",
      description: "Repay your loan before due date",
      points: 250,
      status: "earned",
      icon: "⚡",
      progress: 100,
    },
  ];

  const availableRewards = [
    {
      id: 4,
      title: "Monthly Active User",
      description: "Use the app for 30 consecutive days",
      points: 750,
      status: "available",
      icon: "📱",
      progress: 65,
    },
    {
      id: 5,
      title: "Investment Milestone",
      description: "Reach ₹1,00,000 in mutual fund investments",
      points: 1500,
      status: "available",
      icon: "📈",
      progress: 40,
    },
    {
      id: 6,
      title: "Loyalty Champion",
      description: "Complete 5 successful loan transactions",
      points: 2000,
      status: "available",
      icon: "🏆",
      progress: 20,
    },
  ];

  const referralData = {
    totalReferrals: 3,
    totalEarned: 1500,
    referralCode: "ARTH123",
    referralLink: "https://arthdhara.com/ref/ARTH123",
    earnings: [
      {
        id: 1,
        name: "Priya Sharma",
        status: "completed",
        earned: 500,
        date: "2024-01-15",
      },
      {
        id: 2,
        name: "Rajesh Kumar",
        status: "pending",
        earned: 500,
        date: "2024-01-20",
      },
      {
        id: 3,
        name: "Sneha Patel",
        status: "completed",
        earned: 500,
        date: "2024-01-25",
      },
    ],
  };

  const totalPoints = earnedRewards.reduce(
    (sum, reward) => sum + reward.points,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e4d4a] to-[#2d6b5d] px-4 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-white">Rewards</h1>
        </div>

        {/* Points Summary Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-400/20 rounded-full">
                <Coins className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Total Points</p>
                <p className="text-3xl font-bold text-white">
                  {totalPoints.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-sm">Available</p>
              <p className="text-lg font-semibold text-yellow-300">
                ₹{Math.floor(totalPoints / 10)}
              </p>
            </div>
          </div>
          <div className="bg-white/10 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${Math.min((totalPoints / 10000) * 100, 100)}%`,
              }}
            />
          </div>
          <p className="text-white/70 text-xs mt-2">
            {10000 - totalPoints} points to next milestone
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex">
            <button
              onClick={() => setActiveTab("earned")}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors text-sm ${
                activeTab === "earned"
                  ? "bg-[#1e4d4a] text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Earned
            </button>
            <button
              onClick={() => setActiveTab("available")}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors text-sm ${
                activeTab === "available"
                  ? "bg-[#1e4d4a] text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setActiveTab("refer")}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors text-sm ${
                activeTab === "refer"
                  ? "bg-[#1e4d4a] text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Refer & Earn
            </button>
          </div>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="px-4 pt-6 pb-8">
        {activeTab === "refer" ? (
          <div className="space-y-6">
            {/* Referral Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Referral Summary
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your referral performance
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900">
                    {referralData.totalReferrals}
                  </p>
                  <p className="text-gray-600 text-sm">Total Referrals</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-green-600">
                    {referralData.totalEarned}
                  </p>
                  <p className="text-gray-600 text-sm">Points Earned</p>
                </div>
              </div>
            </div>

            {/* Earnings Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">How You Earn</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="p-2 bg-green-100 rounded-full">
                    <UserPlus className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Per Referral</h4>
                    <p className="text-gray-600 text-sm">
                      When your friend signs up
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">500 pts</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Coins className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      First Application
                    </h4>
                    <p className="text-gray-600 text-sm">
                      When they complete first loan
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">1000 pts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Share & Earn</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">
                    Your Referral Code
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-mono font-bold text-lg text-gray-900">
                      {referralData.referralCode}
                    </p>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(referralData.referralCode)
                      }
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Referral Link</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-700 truncate flex-1 mr-2">
                      {referralData.referralLink}
                    </p>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(referralData.referralLink)
                      }
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Join Arthdhara - Loan Against Mutual Funds",
                        text:
                          "Get instant loans against your mutual funds. Use my referral code: " +
                          referralData.referralCode,
                        url: referralData.referralLink,
                      });
                    } else {
                      navigator.clipboard.writeText(
                        `Join Arthdhara - Get instant loans against your mutual funds. Use my referral code: ${referralData.referralCode}. Link: ${referralData.referralLink}`
                      );
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#1e4d4a] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#2d6b5d] transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  Share Referral Link
                </button>
              </div>
            </div>

            {/* Referral History */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">
                Referral History
              </h3>
              <div className="space-y-3">
                {referralData.earnings.map((referral) => (
                  <div
                    key={referral.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {referral.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {new Date(referral.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">
                        +{referral.earned} pts
                      </p>
                      <p
                        className={`text-xs ${referral.status === "completed" ? "text-green-600" : "text-yellow-600"}`}
                      >
                        {referral.status === "completed"
                          ? "Completed"
                          : "Pending"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {(activeTab === "earned" ? earnedRewards : availableRewards).map(
              (reward) => (
                <div
                  key={reward.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{reward.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {reward.title}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Coins className="w-4 h-4 text-yellow-500" />
                          <span className="font-bold text-yellow-600">
                            {reward.points}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {reward.description}
                      </p>

                      {reward.status === "earned" ? (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-green-600 text-sm font-medium">
                            Earned
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium text-gray-900">
                              {reward.progress}%
                            </span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#1e4d4a] to-[#2d6b5d] h-2 rounded-full transition-all duration-500"
                              style={{ width: `${reward.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 pb-8">
        <div className="bg-gradient-to-r from-[#1e4d4a] to-[#2d6b5d] rounded-2xl p-6 text-center">
          <Gift className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            Redeem Your Points
          </h3>
          <p className="text-white/80 text-sm mb-4">
            Use your points to get discounts on loan processing fees
          </p>
          <button className="bg-white text-[#1e4d4a] font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
            Redeem Now
          </button>
        </div>
      </div>
    </div>
  );
}

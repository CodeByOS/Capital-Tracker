"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug tracking-tight bg-gradient-to-r from-gray-700 via-purple-800 to-indigo-500 text-transparent bg-clip-text"
            >
                Take Control of Your Money <br /> with AI-Powered Insights.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
                An AI-Powered Personal Finance App that helps you manage your finances,
                track expenses, and achieve your financial goals.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
            >
            <Link href="/dashboard">
                <Button size={"lg"} className="px-8">
                    Get Started
                </Button>
            </Link>

            <Link href="https://github.com/CodeByOS/Capital-Tracker" target="_blank">
                <Button variant="outline" size={"lg"} className="px-8">
                    Visit Github Repo
                </Button>
            </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-10"
            >
            <Image
                src="/banner.png"
                width={1200}
                height={720}
                alt="Banner"
                className="rounded-xl shadow-lg"
            />
            </motion.div>
        </div>
    </div>
  );
};

export default HeroSection;

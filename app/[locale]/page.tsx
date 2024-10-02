"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Spinner } from "@/components/ui/spinner";
import AnimatedHeader from "@/components/AnimatedHeader";
import { useTranslations } from "next-intl";

interface ResumeData {
  basics: any;
  sections: {
    summary: { content: any };
    experience: { items: any[] };
    education: { items: any[] };
    skills: { items: any[] };
    projects: { items: any[] };
    profiles: { items: any[] };
  };
}

export default function Home() {
  const [data, setData] = useState<ResumeData | null>(null);
  const [error, setError] = useState<unknown>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const t = useTranslations("home");

  useEffect(() => {
    try {
      fetch(t("resumeUrl"))
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData));
    } catch (error) {
      setError(error);
    }
  }, []);

  if (!data) {
    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-red-500">Error: {String(error)}</p>
        </div>
      );
    } else {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Spinner />
            {t("loading")}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b ">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <AnimatedHeader
        name={data.basics.name}
        title={data.basics.label}
        location={data.basics.location}
        email={data.basics.email}
        phone={data.basics.phone}
      />
      <main className="container mx-auto px-4 py-8">
        <div className="mt-screen">
          <About summary={data.sections.summary.content} />
          <Experience items={data.sections.experience.items} />
          <Education items={data.sections.education.items} />
          <Skills items={data.sections.skills.items} />
          <Projects items={data.sections.projects.items} />
        </div>
      </main>
      <Footer profiles={data.sections.profiles.items} />
    </div>
  );
}

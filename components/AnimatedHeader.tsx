import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedHeaderProps {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  name,
  title,
  location,
  email,
  phone,
}) => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const blur = useTransform(scrollY, [0, 300], [20, 0]);

  return (
    <motion.header
      className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
      style={{
        opacity,
        backdropFilter: useTransform(blur, (value) => `blur(${value}px)`),
      }}
    >
      <motion.div className="text-center" style={{ scale, y }}>
        <motion.h1 className="text-6xl font-bold mb-4">{name}</motion.h1>
        <motion.p className="text-2xl mb-2">{title}</motion.p>
        <motion.p className="text-lg">
          {location} | {email} | {phone}
        </motion.p>
      </motion.div>
    </motion.header>
  );
};

export default AnimatedHeader;

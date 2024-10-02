import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { cloneElement } from "react";

const iconMap = {
  GitHub: <FaGithub />,
  Linkedin: <FaLinkedin />,
  Instagram: <FaInstagram />,
  X: <FaXTwitter />,
};

interface Profile {
  id: string;
  network: keyof typeof iconMap;
  url: URL;
}

interface FooterProps {
  profiles: Profile[];
}

export default function Footer({ profiles }: FooterProps) {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="py-8"
    >
      <div className="container mx-auto px-4">
        <Card className="bg-white/10 backdrop-blur-lg">
          <CardContent className="flex justify-center items-center p-6">
            {profiles.map((profile) => {
              const Icon = iconMap[profile.network] || <FaGithub />;
              return (
                <Button
                  key={profile.id}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary-foreground"
                >
                  <a
                    href={profile.url.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cloneElement(Icon, { className: "h-6 w-6" })}
                    <span className="sr-only">{profile.network}</span>
                  </a>
                </Button>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </motion.footer>
  );
}

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

export interface FooterProps {
  items: Profile[];
}

export default function Footer({ items }: FooterProps) {
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
            {items.map((items) => {
              const Icon = iconMap[items.network] || <FaGithub />;
              return (
                <Button
                  key={items.id}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary-foreground"
                >
                  <a
                    href={items.url.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cloneElement(Icon, { className: "h-6 w-6" })}
                    <span className="sr-only">{items.network}</span>
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

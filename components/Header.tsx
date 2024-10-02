import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Basics {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
}

export default function Header({ basics }: { basics: Basics }) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <Card className="bg-white/10 backdrop-blur-lg">
          <CardContent className="flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold mb-2">{basics.name}</h1>
            <h2 className="text-xl mb-4">{basics.headline}</h2>
            <div className="flex gap-4">
              <p>{basics.location}</p>
              <p>{basics.email}</p>
              <p>{basics.phone}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.header>
  );
}

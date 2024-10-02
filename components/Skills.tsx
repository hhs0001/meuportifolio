import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface SkillItem {
  id: number;
  name: string;
  level: number;
  description: string;
}

export interface SkillsProps {
  items: SkillItem[];
}

export default function Skills({ items }: SkillsProps) {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mb-12"
    >
      <Card>
        <CardHeader>
          <CardTitle>Habilidades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="cursor-pointer"
                onClick={() => setSelectedSkill(item)}
              >
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <Progress value={item.level * 20} className="w-full" />
              </motion.div>
            ))}
          </div>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-4 bg-secondary rounded-lg"
            >
              <h4 className="text-xl font-bold mb-2">{selectedSkill.name}</h4>
              <p>{selectedSkill.description}</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.section>
  );
}

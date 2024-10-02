import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface EducationItem {
  id: string;
  institution: string;
  area: string;
  date: string;
  score: string;
}

export interface EducationProps {
  items: EducationItem[];
}

export default function Education({ items }: EducationProps) {
  const t = useTranslations("education");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-12"
    >
      <Card>
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <h3 className="text-lg font-semibold">{item.institution}</h3>
              <h4 className="text-md">{item.area}</h4>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p className="text-sm">
                {t("score")}: {item.score}
              </p>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.section>
  );
}

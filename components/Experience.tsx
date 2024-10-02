import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  date: string;
  location: string;
  summary: string;
}

export interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps) {
  const t = useTranslations("experience");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
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
              <h3 className="text-lg font-semibold">{item.position}</h3>
              <h4 className="text-md">{item.company}</h4>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p className="text-sm">{item.location}</p>
              <div dangerouslySetInnerHTML={{ __html: item.summary }} />
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.section>
  );
}

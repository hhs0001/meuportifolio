import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface AboutProps {
  summary: string;
}

export default function About({ summary }: AboutProps) {
  const t = useTranslations("about");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <Card>
        <CardHeader>
          <CardTitle>{t("aboutMe")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </CardContent>
      </Card>
    </motion.section>
  );
}

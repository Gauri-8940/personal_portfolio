import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillCategory = ({ category, description, items }) => {
  const featuredItems = items.filter((item) => item.featured).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <SkillCard
        title={category}
        description={description}
        items={items}
        featuredCount={featuredItems}
      />
    </motion.div>
  );
};

export default SkillCategory;

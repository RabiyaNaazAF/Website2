import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <motion.a
        href="whatsapp://send?phone=917996545490"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Contact owner on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
      <motion.a
        href="tel:+918088067247"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Direct call"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;

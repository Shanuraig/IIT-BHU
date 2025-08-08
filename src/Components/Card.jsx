import { motion } from 'framer-motion';

const Card = ({ image, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow group transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
    >
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-65 object-cover transition-transform duration-300 ease-in-out group-hover:scale-103"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-black transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default Card;

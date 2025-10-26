import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <motion.div
        className="group cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="relative overflow-hidden bg-secondary aspect-[4/5] rounded-sm mb-4">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />
          {category && (
            <span className="absolute top-4 left-4 bg-background px-3 py-1 text-xs font-medium uppercase tracking-wide">
              {category}
            </span>
          )}
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-sm group-hover:text-muted-foreground transition-colors">
            {name}
          </h3>
          <p className="text-sm font-light">${price}</p>
        </div>
      </motion.div>
    </Link>
  );
};

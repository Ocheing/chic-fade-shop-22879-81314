import { PageTransition } from '@/components/PageTransition';
import { Heart } from 'lucide-react';

const Wishlist = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">My Wishlist</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Save your favorite items for later
            </p>
          </div>

          <div className="flex flex-col items-center justify-center py-20">
            <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="font-serif text-2xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">
              Start adding items you love to your wishlist
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Wishlist;
import { PageTransition } from '@/components/PageTransition';

const Works = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your journey to timeless elegance, simplified
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif text-xl font-bold">
                  1
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-3">Browse Our Collection</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore our carefully curated selection of dresses, skirts, blazers, trousers, and tops. 
                    Each piece is designed to complement your unique style and lifestyle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif text-xl font-bold">
                  2
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-3">Find Your Perfect Fit</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Use our detailed size chart to ensure the perfect fit. We provide comprehensive 
                    measurements for all our garments, and our customer service team is always here to help.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif text-xl font-bold">
                  3
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-3">Secure Checkout</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete your purchase with our secure payment options. We accept all major credit cards 
                    and mobile payment methods for your convenience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif text-xl font-bold">
                  4
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-3">Fast & Reliable Delivery</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your order will be carefully packaged and shipped directly to your door. 
                    Track your shipment every step of the way through your account dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif text-xl font-bold">
                  5
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-3">Enjoy Your Purchase</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience the quality and elegance of our designs. If you're not completely satisfied, 
                    our hassle-free return policy ensures your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Works;
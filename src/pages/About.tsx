import { PageTransition } from '@/components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the story behind our brand
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-foreground leading-relaxed">
              Welcome to Atelier, where timeless elegance meets contemporary style. Since our founding, 
              we've been dedicated to creating exceptional fashion pieces that empower and inspire.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="text-foreground leading-relaxed">
              We believe in crafting clothing that transcends trends and celebrates individuality. 
              Every piece in our collection is thoughtfully designed to bring confidence and sophistication 
              to your wardrobe.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Our Values</h2>
            <ul className="space-y-3 text-foreground">
              <li><strong>Quality:</strong> We source the finest materials and work with skilled artisans</li>
              <li><strong>Sustainability:</strong> We're committed to ethical and eco-friendly practices</li>
              <li><strong>Inclusivity:</strong> Fashion should be accessible and empowering for everyone</li>
              <li><strong>Innovation:</strong> We continuously evolve while honoring timeless design principles</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Our Craftsmanship</h2>
            <p className="text-foreground leading-relaxed">
              Each garment is meticulously crafted with attention to detail, from the initial sketch 
              to the final stitch. We partner with manufacturers who share our commitment to excellence 
              and ethical production.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
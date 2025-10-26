import { PageTransition } from '@/components/PageTransition';

const Terms = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">2. Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may use our website for lawful purposes only. You agree not to use the website in any way 
                that could damage, disable, overburden, or impair our services or interfere with any other party's 
                use of the website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">3. Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that 
                product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. 
                We reserve the right to correct errors and update information at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">4. Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel 
                any order for any reason. Payment must be received before orders are processed and shipped.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">5. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will make every effort to deliver products within the estimated timeframe. However, we are 
                not responsible for delays caused by circumstances beyond our control, including but not limited 
                to weather conditions, carrier delays, or customs procedures.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">6. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please refer to our Shipping & Returns page for detailed information about our return policy. 
                Items must be returned in their original condition with tags attached within the specified timeframe.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property 
                of Atelier and is protected by copyright and other intellectual property laws. You may not reproduce, 
                distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Atelier shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of or inability to use the website 
                or products.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting to the website. Your continued use of the website following any changes indicates your 
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us through our 
                Contact Us page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Terms;
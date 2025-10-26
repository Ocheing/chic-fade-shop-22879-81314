import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold">ATELIER</h3>
            <p className="text-xs text-muted-foreground">
              Timeless elegance meets contemporary style
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xs uppercase tracking-wide">Shop</h4>
            <ul className="space-y-1 text-xs">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-muted-foreground hover:text-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/clothing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/shoes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xs uppercase tracking-wide">Company</h4>
            <ul className="space-y-1 text-xs">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/works" className="text-muted-foreground hover:text-foreground transition-colors">
                  Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xs uppercase tracking-wide">Customer Care</h4>
            <ul className="space-y-1 text-xs">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping-returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/size-chart" className="text-muted-foreground hover:text-foreground transition-colors">
                  Size Chart
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xs uppercase tracking-wide">Newsletter</h4>
            <p className="text-xs text-muted-foreground">
              Subscribe for exclusive offers
            </p>
            <div className="flex gap-1">
              <Input
                type="email"
                placeholder="Your email"
                className="text-xs h-8"
              />
              <Button variant="default" size="sm" className="h-8 px-3 text-xs">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">
            © 2025 Atelier. All rights reserved.
          </p>
          <div className="flex items-center space-x-3">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

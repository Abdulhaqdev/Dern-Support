export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 w md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium">Dern-Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Professional IT support solutions for businesses and individuals.
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a 
                  href="/" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/tickets" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  My Tickets
                </a>
              </li>
              <li>
                <a 
                  href="/knowledge" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Knowledge Base
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dern-Support. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
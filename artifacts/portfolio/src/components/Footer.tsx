export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 border-t border-white/5 py-8">
      <div className="container mx-auto px-6 text-center">
        <a href="#home" className="text-xl font-bold text-white mb-4 inline-block">
          Mustapha<span className="text-primary">.</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {currentYear} Mustapha Bounnit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

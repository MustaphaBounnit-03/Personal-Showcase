export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary text-glow">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <a href="/" className="inline-block mt-4 px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
}

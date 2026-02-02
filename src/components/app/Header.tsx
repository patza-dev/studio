export default function AppHeader() {
  return (
    <header className="w-full max-w-4xl mx-auto flex flex-col items-center text-center py-8 sm:py-12 space-y-2">
      <div className="relative">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          พร้อมพัฒน์
        </h1>
      </div>
      <p className="text-2xl font-medium text-foreground/80">
        พรรคที่ <span className="font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">3</span>
      </p>
    </header>
  );
}

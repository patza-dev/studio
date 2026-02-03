import { X } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="w-full max-w-4xl mx-auto flex flex-col items-center text-center py-8 sm:py-12 space-y-2">
      <div className="relative">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          พร้อมพัฒน์
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4 bg-primary/10 px-4 py-2 rounded-lg">
        <p className="text-2xl font-medium text-foreground/80">
          เบอร์ <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">3</span>
        </p>
        <div className="w-12 h-12 border-4 border-foreground/60 rounded-md flex items-center justify-center bg-background/50">
            <X className="w-10 h-10 text-foreground/60" />
        </div>
      </div>
    </header>
  );
}

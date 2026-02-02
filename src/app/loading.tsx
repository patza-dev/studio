import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <header className="w-full max-w-4xl mx-auto flex flex-col items-center text-center py-8 space-y-2">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </header>
      <main className="w-full max-w-4xl mx-auto">
        <div className="w-full">
          <div className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto gap-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Skeleton className="h-32 w-32 rounded-full" />
                <div className="flex-1 space-y-4 text-center sm:text-left">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-64" />
                    <Skeleton className="h-16 w-full" />
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

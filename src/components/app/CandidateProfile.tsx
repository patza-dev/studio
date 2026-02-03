import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { candidate, platformSummary } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function CandidateProfile() {
  const candidateImage = PlaceHolderImages.find(img => img.id === 'candidate');

  return (
    <Card className="overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
      <CardHeader className="bg-primary/10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar className="w-32 h-32 border-4 border-primary">
            {candidateImage && 
              <AvatarImage 
                src={candidateImage.imageUrl} 
                alt={candidate.name} 
                data-ai-hint={candidateImage.imageHint}
              />
            }
            <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center sm:text-left">
            <CardTitle className="text-4xl font-headline tracking-tight text-primary-foreground bg-primary px-4 py-2 rounded-lg inline-block">พรรค {candidate.name}</CardTitle>
            <CardDescription className="text-xl mt-2 text-foreground/80">{platformSummary}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-lg">
        <p className="leading-relaxed">{candidate.bio}</p>
      </CardContent>
    </Card>
  )
}

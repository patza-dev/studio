import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { team } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"

function TeamMemberCard({ member }: { member: (typeof team)[0] }) {
  const memberImage = PlaceHolderImages.find(img => img.id === `team-member-${member.id}`);

  return (
    <Card className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="items-center">
        <Avatar className="w-24 h-24 border-2 border-secondary">
          {memberImage && 
            <AvatarImage 
              src={memberImage.imageUrl} 
              alt={member.name} 
              data-ai-hint={memberImage.imageHint}
            />
          }
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
      </CardContent>
    </Card>
  )
}


export default function TeamShowcase() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-headline">สมาชิกในทีม</h2>
        <p className="text-muted-foreground">เหล่านักเรียนผู้ทุ่มเท่อยู่เบื้องหลังแคมเปญนี้</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {team.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function QnaForum() {
  const instagramUrl = "https://www.instagram.com/promptpath_tupp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const instagramIconUrl = "/i1.png";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-center">ติดตามเราบน Instagram</CardTitle>
        <CardDescription className="text-center">
          สำหรับคำถาม ข้อเสนอแนะ หรือติดตามความเคลื่อนไหวล่าสุดของพรรคเรา
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center p-6">
        <Link href={instagramUrl} target="_blank" rel="noopener noreferrer" className="group">
            <Image 
              src={instagramIconUrl} 
              alt="Instagram" 
              width={80} 
              height={80}
              className="rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300"
            />
        </Link>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function QnaForum() {
  const instagramUrl = "https://www.instagram.com/promptpath_tupp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const instagramIconUrl = "https://cdn.discordapp.com/attachments/1254050393424527435/1468254611872808992/images-removebg-preview.png?ex=69835a2a&is=698208aa&hm=49de1b4b2107143cbb5a35d55eda88df42f64881f520482cc4e7ca8255fa72e4&";

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

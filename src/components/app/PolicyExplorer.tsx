import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PolicyExplorer() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-center">นโยบาย</CardTitle>
        <CardDescription className="text-center">เรามีนโยบาย 10 ข้อที่จะมาพลิกโฉมโรงเรียนของเราให้ดียิ่งขึ้น</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center p-8 bg-muted/50 rounded-lg mt-4">
          <p className="font-semibold text-lg">"เรามีนโยบาย 10 ข้อ"</p>
          <p className="text-muted-foreground mt-2">รายละเอียดฉบับเต็มจะถูกเปิดเผยเร็วๆ นี้ โปรดติดตาม!</p>
        </div>
      </CardContent>
    </Card>
  )
}

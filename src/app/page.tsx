import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CandidateProfile from "@/components/app/CandidateProfile"
import TeamShowcase from "@/components/app/TeamShowcase"
import PolicyExplorer from "@/components/app/PolicyExplorer"
import QnaForum from "@/components/app/QnaForum"
import AppHeader from "@/components/app/Header"
import { User, Users, FileText, MessageCircleQuestion } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <AppHeader />
      <main className="w-full max-w-4xl mx-auto">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="profile"><User className="mr-2" />โปรไฟล์</TabsTrigger>
            <TabsTrigger value="team"><Users className="mr-2" />สมาชิก</TabsTrigger>
            <TabsTrigger value="policies"><FileText className="mr-2" />นโยบาย</TabsTrigger>
            <TabsTrigger value="qna"><MessageCircleQuestion className="mr-2" />สอบถามเพิ่มเติม</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6">
            <CandidateProfile />
          </TabsContent>
          
          <TabsContent value="team" className="mt-6">
            <TeamShowcase />
          </TabsContent>
          
          <TabsContent value="policies" className="mt-6">
            <PolicyExplorer />
          </TabsContent>
          
          <TabsContent value="qna" className="mt-6">
            <QnaForum />
          </TabsContent>
        </Tabs>
      </main>
      <footer className="w-full max-w-4xl mx-auto text-center py-8 text-muted-foreground text-sm">
        <p>Built with ❤️ for the student body.</p>
        <p>พรรคพร้อมพัฒน์ - เบอร์ 3</p>
      </footer>
    </div>
  );
}

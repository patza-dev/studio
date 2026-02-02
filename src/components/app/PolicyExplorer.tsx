import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { policies } from "@/lib/data"
import { Award, HeartHandshake, Scaling, Users, Lightbulb, Mic, Paintbrush, Trophy, Briefcase, PartyPopper } from 'lucide-react';
import type { LucideProps } from "lucide-react";
import PolicySummary from "./PolicySummary";

const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
  Award,
  HeartHandshake,
  Scaling,
  Users,
  Lightbulb,
  Mic,
  Paintbrush,
  Trophy,
  Briefcase,
  PartyPopper,
};

export default function PolicyExplorer() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-center">นโยบาย</CardTitle>
        <CardDescription className="text-center">เรามีนโยบาย 10 ข้อที่จะมาพลิกโฉมโรงเรียนของเราให้ดียิ่งขึ้น</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {policies.map((policy, index) => {
            const IconComponent = iconMap[policy.icon];
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-4">
                    {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                    <span className="font-semibold text-lg">{policy.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base pl-12 space-y-4">
                  <p>{policy.description}</p>
                  <PolicySummary policyText={policy.description} />
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </CardContent>
    </Card>
  )
}

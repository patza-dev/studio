import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { policies } from "@/lib/data"
import PolicySummary from "./PolicySummary"
import { Lightbulb, Users, BookOpen, HeartHandshake, Scaling, Award } from 'lucide-react';
import type { LucideProps } from "lucide-react";

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Lightbulb,
  Users,
  BookOpen,
  HeartHandshake,
  Scaling,
  Award,
};

export default function PolicyExplorer() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-center">Our Vision &amp; Policies</CardTitle>
        <CardDescription className="text-center">Click on a policy to learn more and get an AI-powered summary.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {policies.map((policy, index) => {
            const IconComponent = iconMap[policy.icon] || Lightbulb;
            return (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  {policy.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                <p className="text-base leading-relaxed text-foreground/80">{policy.description}</p>
                <PolicySummary policyText={policy.description} />
              </AccordionContent>
            </AccordionItem>
          )})}
        </Accordion>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

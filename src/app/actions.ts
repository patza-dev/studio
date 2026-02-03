'use server'

import { summarizeCandidatePolicies } from "@/ai/flows/summarize-candidate-policies"
import { z } from "zod"

const QuestionSchema = z.object({
  question: z.string().min(10, "คำถามของคุณควรมีความยาวอย่างน้อย 10 ตัวอักษร"),
})

export async function getPolicySummary(policyText: string) {
  try {
    const result = await summarizeCandidatePolicies({ policyText });
    return { summary: result.summary, error: null };
  } catch (error) {
    console.error("Error summarizing policy:", error);
    return { summary: null, error: "ขออภัย ขณะนี้เราไม่สามารถสร้างบทสรุปได้" };
  }
}

export async function submitQuestion(prevState: any, formData: FormData) {
  const validatedFields = QuestionSchema.safeParse({
    question: formData.get('question'),
  })

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.question?.[0] || "ข้อมูลไม่ถูกต้อง",
    }
  }

  try {
    // In a real application, you would save this to a database.
    console.log("New question submitted:", validatedFields.data.question);
    return { message: "ขอบคุณ! เราได้รับคำถามของคุณเรียบร้อยแล้ว" };
  } catch (error) {
    console.error("Error submitting question:", error);
    return { message: "เกิดข้อผิดพลาดที่ไม่คาดคิด กรุณาลองใหม่อีกครั้ง" };
  }
}

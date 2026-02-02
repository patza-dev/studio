'use server'

import { summarizeCandidatePolicies } from "@/ai/flows/summarize-candidate-policies"
import { z } from "zod"

const QuestionSchema = z.object({
  question: z.string().min(10, "Your question should be at least 10 characters long."),
})

export async function getPolicySummary(policyText: string) {
  try {
    const result = await summarizeCandidatePolicies({ policyText });
    return { summary: result.summary, error: null };
  } catch (error) {
    console.error("Error summarizing policy:", error);
    return { summary: null, error: "Sorry, we couldn't generate a summary at this time." };
  }
}

export async function submitQuestion(prevState: any, formData: FormData) {
  const validatedFields = QuestionSchema.safeParse({
    question: formData.get('question'),
  })

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.question?.[0] || "Invalid input.",
    }
  }

  try {
    // In a real application, you would save this to a database.
    console.log("New question submitted:", validatedFields.data.question);
    return { message: "Thank you! Your question has been submitted successfully." };
  } catch (error) {
    console.error("Error submitting question:", error);
    return { message: "An unexpected error occurred. Please try again." };
  }
}

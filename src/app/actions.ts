'use server'

import { summarizeCandidatePolicies } from "@/ai/flows/summarize-candidate-policies"

export async function getPolicySummary(policyText: string) {
  try {
    const result = await summarizeCandidatePolicies({ policyText });
    return { summary: result.summary, error: null };
  } catch (error) {
    console.error("Error summarizing policy:", error);
    return { summary: null, error: "ขออภัย ขณะนี้เราไม่สามารถสร้างบทสรุปได้" };
  }
}

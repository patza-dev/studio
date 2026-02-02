'use server';

/**
 * @fileOverview A flow that summarizes candidate policies using Genkit.
 *
 * - summarizeCandidatePolicies - A function that takes a policy text and returns a summary.
 * - SummarizeCandidatePoliciesInput - The input type for the summarizeCandidatePolicies function.
 * - SummarizeCandidatePoliciesOutput - The return type for the summarizeCandidatePolicies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCandidatePoliciesInputSchema = z.object({
  policyText: z.string().describe('The full text of the candidate policy.'),
});
export type SummarizeCandidatePoliciesInput = z.infer<
  typeof SummarizeCandidatePoliciesInputSchema
>;

const SummarizeCandidatePoliciesOutputSchema = z.object({
  summary: z
    .string()
    .describe('A short, concise summary of the candidate policy.'),
});
export type SummarizeCandidatePoliciesOutput = z.infer<
  typeof SummarizeCandidatePoliciesOutputSchema
>;

export async function summarizeCandidatePolicies(
  input: SummarizeCandidatePoliciesInput
): Promise<SummarizeCandidatePoliciesOutput> {
  return summarizeCandidatePoliciesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCandidatePoliciesPrompt',
  input: {schema: SummarizeCandidatePoliciesInputSchema},
  output: {schema: SummarizeCandidatePoliciesOutputSchema},
  prompt: `Summarize the following candidate policy in a concise and easily digestible manner:\n\n{{{policyText}}}`,
});

const summarizeCandidatePoliciesFlow = ai.defineFlow(
  {
    name: 'summarizeCandidatePoliciesFlow',
    inputSchema: SummarizeCandidatePoliciesInputSchema,
    outputSchema: SummarizeCandidatePoliciesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

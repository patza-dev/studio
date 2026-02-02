'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { getPolicySummary } from '@/app/actions'
import { Loader, WandSparkles, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type PolicySummaryProps = {
  policyText: string
}

export default function PolicySummary({ policyText }: PolicySummaryProps) {
  const [summary, setSummary] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSummarize = async () => {
    setIsLoading(true)
    setError(null)
    const result = await getPolicySummary(policyText)
    if (result.summary) {
      setSummary(result.summary)
    } else {
      setError(result.error)
    }
    setIsLoading(false)
  }

  return (
    <div className="mt-4 space-y-4 p-4 border-l-4 border-accent bg-accent/10 rounded-r-lg">
      {!summary && !isLoading && (
         <Button onClick={handleSummarize} disabled={isLoading} variant="secondary" className="bg-accent/20 hover:bg-accent/40 text-accent-foreground">
            <WandSparkles className="mr-2 h-4 w-4" />
            Get AI-Powered Summary
        </Button>
      )}

      {isLoading && (
        <div className="flex items-center text-muted-foreground">
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Generating summary...
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && (
        <Alert className="bg-background">
          <WandSparkles className="h-4 w-4 text-primary" />
          <AlertTitle className="font-semibold text-primary">AI Summary</AlertTitle>
          <AlertDescription>
            {summary}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

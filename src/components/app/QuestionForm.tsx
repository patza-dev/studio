'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useRef } from 'react'
import { submitQuestion } from '@/app/actions'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from 'lucide-react'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      ส่งคำถาม
    </Button>
  )
}

export default function QuestionForm() {
  const initialState = { message: '' };
  const [state, formAction] = useFormState(submitQuestion, initialState)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message) {
      if (state.message.includes("เรียบร้อยแล้ว")) {
        toast({
          title: "สำเร็จ!",
          description: state.message,
        })
        formRef.current?.reset();
      } else {
         toast({
          title: "เกิดข้อผิดพลาด",
          description: state.message,
          variant: "destructive",
        })
      }
    }
  }, [state, toast])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-center">มีคำถามใช่ไหม</CardTitle>
        <CardDescription className="text-center">ส่งคำถามหรือข้อเสนอแนะของคุณถึงผู้สมัครได้โดยตรง</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <Textarea
            id="question"
            name="question"
            placeholder="พิมพ์คำถามของคุณที่นี่..."
            rows={5}
            required
            className="text-base"
          />
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}

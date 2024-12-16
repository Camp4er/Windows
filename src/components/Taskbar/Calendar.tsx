"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarMain() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md p-0 pb-2 m-0"
    />
  )
}

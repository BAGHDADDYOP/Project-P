"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    // Here you would typically send the form data to your backend
    alert("Thank you for your interest. We'll be in touch soon!")
    setFormState({
      name: "",
      email: "",
      organization: "",
      interest: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-gray-800 bg-black p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="border-gray-800 bg-black text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="border-gray-800 bg-black text-white"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="organization" className="text-sm font-medium text-gray-300">
          Organization
        </label>
        <Input
          id="organization"
          name="organization"
          value={formState.organization}
          onChange={handleChange}
          placeholder="Your organization"
          className="border-gray-800 bg-black text-white"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="interest" className="text-sm font-medium text-gray-300">
          Area of Interest
        </label>
        <Select value={formState.interest} onValueChange={handleSelectChange}>
          <SelectTrigger className="border-gray-800 bg-black text-white">
            <SelectValue placeholder="Select an area of interest" />
          </SelectTrigger>
          <SelectContent className="border-gray-800 bg-black text-white">
            <SelectItem value="data-integration">Data Integration</SelectItem>
            <SelectItem value="analytics">Analytics & Visualization</SelectItem>
            <SelectItem value="security">Security & Compliance</SelectItem>
            <SelectItem value="deployment">Deployment Options</SelectItem>
            <SelectItem value="investment">Investment Opportunity</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className="min-h-[100px] border-gray-800 bg-black text-white"
        />
      </div>
      <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
        Submit
      </Button>
    </form>
  )
}

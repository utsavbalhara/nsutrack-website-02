"use client"

import { Instagram } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Utsav Balhara",
    handle: "@utsavbalhara",
    link: "https://instagram.com/utsavbalhara"
  },
  {
    name: "Parth Vats",
    handle: "@_parth.v",
    link: "https://instagram.com/_parth.v"
  },
  {
    name: "Aryaman Jaiswal",
    handle: "@i__aryamanj",
    link: "https://instagram.com/i__aryamanj"
  },
  {
    name: "Moin Makda",
    handle: "@moinmakda",
    link: "https://instagram.com/moinmakda"
  }
]

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-sm font-medium hover:text-primary">
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Contact Us</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {team.map((member) => (
            <Link
              key={member.handle}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border p-4 hover:bg-accent transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.handle}</p>
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

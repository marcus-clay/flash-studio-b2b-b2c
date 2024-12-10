"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowDownToLine } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export type History = {
  id: string
  date: string
  type: "portrait" | "upload"
  status: "completed" | "processing" | "failed"
  filename: string
  thumbnail: string
}

export const columns: ColumnDef<History>[] = [
  {
    accessorKey: "thumbnail",
    header: "",
    cell: ({ row }) => {
      const thumbnail = row.getValue("thumbnail") as string
      return (
        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gray-200">
          <Image
            src={thumbnail}
            alt="Thumbnail"
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string
      return type === "portrait" ? "Portrait" : "Upload"
    },
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge 
          variant={status === "completed" ? "default" : "destructive"}
          className="rounded-full"
        >
          {status === "completed" ? "Terminé" : status === "processing" ? "En cours" : "Échoué"}
        </Badge>
      )
    },
  },
  {
    accessorKey: "filename",
    header: "Fichier",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="sm"
            disabled={status !== "completed"}
            className="rounded-full"
          >
            <ArrowDownToLine className="h-4 w-4" />
          </Button>
        </motion.div>
      )
    },
  },
]
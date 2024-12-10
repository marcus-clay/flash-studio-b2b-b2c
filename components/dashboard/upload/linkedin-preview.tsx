"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface LinkedinPreviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  portraitUrl: string;
}

export function LinkedinPreview({ open, onOpenChange, portraitUrl }: LinkedinPreviewProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Aperçu LinkedIn</DialogTitle>
        </DialogHeader>
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="h-32 bg-[#0A66C2]" />
          <div className="px-6">
            <div className="relative -mt-16 mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden relative">
                <Image
                  src={portraitUrl}
                  alt="Portrait LinkedIn"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-2 pb-6">
              <div className="h-8 bg-gray-200 rounded w-48" />
              <div className="h-4 bg-gray-200 rounded w-64" />
              <div className="h-4 bg-gray-200 rounded w-32" />
            </div>
            <div className="border-t py-4">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
"use client"

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { UploadDialog } from './upload/upload-dialog';
import { useToast } from '@/components/ui/use-toast';

export function PhotoUploadCard() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      toast({
        title: "Format non supporté",
        description: "Veuillez sélectionner uniquement des images (JPG, PNG)",
        variant: "destructive"
      });
      return;
    }

    if (imageFiles.length > 8) {
      toast({
        title: "Trop de fichiers",
        description: "Vous pouvez sélectionner jusqu'à 8 photos maximum",
        variant: "destructive"
      });
      return;
    }

    setDialogOpen(true);
  }, [toast]);

  const handleClick = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Nouveau Portrait</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 space-y-4 transition-colors
              ${dragActive ? 'border-[#0162C1] bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className={`h-12 w-12 ${dragActive ? 'text-[#0162C1]' : 'text-gray-400'}`} />
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Glissez-déposez vos photos ici ou cliquez pour sélectionner
              </p>
              <p className="text-xs text-gray-500">
                JPG, PNG jusqu'à 10MB - Maximum 8 photos
              </p>
            </div>
            <Button 
              className="bg-[#0162C1] hover:bg-[#0152A1]"
              onClick={handleClick}
            >
              Sélectionner des Photos
            </Button>
          </div>
        </CardContent>
      </Card>

      <UploadDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
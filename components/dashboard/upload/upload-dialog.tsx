"use client"

import { useState, useCallback, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { PortraitGenerationDialog } from './portrait-generation-dialog';
import { UploadTutorial } from './upload-tutorial';
import Image from 'next/image';
import { Upload, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [generatingPortraits, setGeneratingPortraits] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleFiles = useCallback((files: File[]) => {
    const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      toast({
        title: "Format non supporté",
        description: "Veuillez sélectionner uniquement des images (JPG, PNG)",
        variant: "destructive"
      });
      return;
    }

    if (imageFiles.length > 6) {
      toast({
        title: "Trop de fichiers",
        description: "Vous pouvez sélectionner jusqu'à 6 photos maximum",
        variant: "destructive"
      });
      return;
    }

    setSelectedFiles(prev => {
      const newFiles = [...prev, ...imageFiles];
      if (newFiles.length > 6) {
        toast({
          title: "Limite atteinte",
          description: "Vous ne pouvez pas ajouter plus de 6 photos",
          variant: "destructive"
        });
        return prev;
      }
      return newFiles;
    });
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(Array.from(e.dataTransfer.files));
  }, [handleFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  }, [handleFiles]);

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleGenerate = () => {
    setGeneratingPortraits(true);
    onOpenChange(false);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(files => files.filter((_, i) => i !== index));
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>Sélectionnez vos photos</DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6 pt-2">
            <UploadTutorial />
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className={cn(
                  "relative rounded-xl transition-all duration-200",
                  "bg-blue-50/50 hover:bg-blue-50/80",
                  dragActive && "ring-2 ring-blue-400 ring-offset-2",
                  !selectedFiles.length && "group cursor-pointer"
                )}
                whileHover={{ scale: 1.01 }}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={selectedFiles.length ? undefined : handleUploadClick}
              >
                <div 
                  className={cn(
                    "h-64 border-2 border-dashed rounded-xl flex flex-col items-center justify-center space-y-4",
                    dragActive ? "border-blue-400" : "border-blue-200 group-hover:border-blue-300",
                    selectedFiles.length > 0 ? "hidden" : "block"
                  )}
                >
                  <Upload className={cn(
                    "h-12 w-12 transition-colors",
                    dragActive ? "text-blue-500" : "text-blue-400 group-hover:text-blue-500"
                  )} />
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      Glissez-déposez vos photos ici ou cliquez pour sélectionner
                    </p>
                    <p className="text-xs text-gray-500">
                      JPG, PNG jusqu'à 10MB - Maximum 6 photos
                    </p>
                  </div>
                  <Button 
                    onClick={handleUploadClick}
                    className="bg-[#0162C1] hover:bg-[#0152A1] rounded-[1000px]"
                  >
                    Sélectionner des Photos
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>

                <AnimatePresence>
                  {selectedFiles.length > 0 && (
                    <motion.div 
                      className="space-y-6 p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedFiles.map((file, index) => (
                          <motion.div 
                            key={index} 
                            className="relative group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                          >
                            <div className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                              <div className="w-full h-full relative">
                                <Image
                                  src={URL.createObjectURL(file)}
                                  alt={`Photo ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                            <motion.button
                              onClick={() => removeFile(index)}
                              className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <X className="h-4 w-4 text-gray-500" />
                            </motion.button>
                          </motion.div>
                        ))}
                        {[...Array(6 - selectedFiles.length)].map((_, index) => (
                          <div
                            key={`empty-${index}`}
                            className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center"
                          >
                            <Upload className="h-8 w-8 text-gray-300" />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end space-x-4">
                        <Button
                          variant="outline"
                          onClick={() => setSelectedFiles([])}
                          className="rounded-[1000px]"
                        >
                          Réinitialiser
                        </Button>
                        <Button
                          onClick={handleGenerate}
                          className="bg-[#0162C1] hover:bg-[#0152A1] rounded-[1000px]"
                        >
                          Générer les Portraits
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>

      <PortraitGenerationDialog 
        open={generatingPortraits} 
        onOpenChange={setGeneratingPortraits}
      />
    </>
  );
}
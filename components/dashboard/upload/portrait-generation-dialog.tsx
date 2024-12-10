```typescript
// Previous imports remain the same...

export function PortraitGenerationDialog({ open, onOpenChange }: PortraitGenerationDialogProps) {
  // Previous state and handlers remain the same...

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] h-[95vh] p-0">
        <DialogTitle className="sr-only">Génération de portraits</DialogTitle>
        {/* Rest of the dialog content remains the same... */}
      </DialogContent>
    </Dialog>
  );
}
```
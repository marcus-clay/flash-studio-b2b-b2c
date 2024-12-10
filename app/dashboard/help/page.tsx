import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Aide</h2>
        <p className="text-muted-foreground">
          Centre d'aide et FAQ
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Questions Fréquentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Comment fonctionne la génération de portraits ?</AccordionTrigger>
              <AccordionContent>
                Notre technologie IA analyse vos photos et crée un portrait professionnel optimisé pour une utilisation professionnelle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quels formats de photo sont acceptés ?</AccordionTrigger>
              <AccordionContent>
                Nous acceptons les formats JPG et PNG avec une taille maximale de 10MB par photo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Combien de temps prend la génération ?</AccordionTrigger>
              <AccordionContent>
                La génération prend généralement entre 2 et 5 minutes selon la complexité.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Notre équipe de support est disponible du lundi au vendredi, de 9h à 18h.
          </p>
          <p className="text-sm">
            Email: support@flashstudio.fr<br />
            Téléphone: +33 1 23 45 67 89
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
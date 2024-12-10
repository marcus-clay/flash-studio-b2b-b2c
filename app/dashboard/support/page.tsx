"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Support et aide</h2>
        <p className="text-muted-foreground">
          Besoin d'aide ? Nous sommes là pour vous accompagner
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contactez-nous</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Quel est le sujet de votre demande ?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre problème ou votre question..."
                  className="min-h-[100px]"
                />
              </div>
              <Button className="w-full bg-[#0162C1] hover:bg-[#0152A1]">
                Envoyer le message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Nous contacter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#0162C1]" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#0162C1]" />
                <span>support@flashstudio.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-[#0162C1]" />
                <span>Chat en direct (9h-18h)</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <HelpCircle className="w-8 h-8 text-[#0162C1]" />
              <div>
                <CardTitle>Questions fréquentes</CardTitle>
              </div>
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
        </div>
      </div>
    </div>
  );
}
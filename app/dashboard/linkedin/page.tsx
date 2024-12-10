import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkedinIcon } from 'lucide-react';

export default function LinkedInPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Intégration LinkedIn</h2>
        <p className="text-muted-foreground">
          Connectez votre compte LinkedIn pour mettre à jour votre photo de profil
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Connexion LinkedIn</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full">
            <LinkedinIcon className="mr-2 h-5 w-5" />
            Connecter avec LinkedIn
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conseils pour LinkedIn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Utilisez une photo professionnelle récente</li>
            <li>Assurez-vous que votre visage occupe 60% du cadre</li>
            <li>Choisissez un arrière-plan neutre</li>
            <li>Portez une tenue professionnelle</li>
            <li>Souriez naturellement</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
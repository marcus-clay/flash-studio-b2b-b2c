"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] flex flex-col items-center justify-center p-4">
      <Link href="/" className="flex items-center mb-8">
        <Camera className="h-8 w-8 text-[#0162C1]" />
        <span className="ml-2 text-xl font-medium">FlashStudio</span>
      </Link>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Créer un compte</CardTitle>
          <CardDescription>Commencez avec FlashStudio</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom Complet</Label>
              <Input id="name" placeholder="Entrez votre nom complet" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Entrez votre email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" placeholder="Créez un mot de passe" required />
            </div>
            <Button type="submit" className="w-full bg-[#0162C1] hover:bg-[#0152A1]">
              Créer un Compte
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">Déjà un compte ? </span>
            <Link href="/auth/login" className="text-[#0162C1] hover:underline">
              Se connecter
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
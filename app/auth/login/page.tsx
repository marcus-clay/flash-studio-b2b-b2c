"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSignIn = () => {
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
          <CardTitle>Bon retour</CardTitle>
          <CardDescription>Connectez-vous à votre compte FlashStudio</CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleSignIn} 
            className="w-full bg-[#0162C1] hover:bg-[#0152A1]"
          >
            Se Connecter
          </Button>
          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">Pas encore de compte ? </span>
            <Link href="/auth/register" className="text-[#0162C1] hover:underline">
              S'inscrire
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
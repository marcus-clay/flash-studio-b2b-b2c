"use client"

import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Star } from 'lucide-react';
import Link from 'next/link';

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium text-black mb-6">
              Des forfaits adaptés à vos besoins
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez le forfait qui vous convient et commencez à transformer votre image professionnelle dès aujourd'hui
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Free Pack */}
            <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm">
                  Gratuit
                </span>
              </div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-medium mb-2">Découverte</h2>
                <div className="text-4xl font-bold mb-2">0€</div>
                <p className="text-gray-600">Pour essayer FlashStudio</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>2 portraits gratuits</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Qualité standard</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Avec filigrane FlashStudio</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Prêt en 5 minutes</span>
                </li>
              </ul>
              <Link href="/auth/login" className="block">
                <Button className="w-full rounded-full" variant="outline">
                  Commencer gratuitement
                </Button>
              </Link>
            </div>

            {/* Premium Pack */}
            <div className="relative bg-gradient-to-b from-white to-blue-50 rounded-xl p-8 shadow-xl border-2 border-[#0A66C2] transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#0A66C2] to-[#0077B5] text-white px-4 py-1 rounded-full text-sm flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Le plus populaire
                </span>
              </div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-medium mb-2">Premium</h2>
                <div className="text-4xl font-bold mb-2">29€</div>
                <p className="text-gray-600">Pour les professionnels</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#0A66C2] flex-shrink-0" />
                  <span>1 portrait premium</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#0A66C2] flex-shrink-0" />
                  <span>3 styles différents</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#0A66C2] flex-shrink-0" />
                  <span>Haute définition</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#0A66C2] flex-shrink-0" />
                  <span>Sans filigrane</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#0A66C2] flex-shrink-0" />
                  <span>Prêt en 3 minutes</span>
                </li>
              </ul>
              <Link href="/auth/login" className="block">
                <Button className="w-full rounded-full bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
                  Choisir Premium
                </Button>
              </Link>
            </div>

            {/* Pro Pack */}
            <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Pro
                </span>
              </div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-medium mb-2">Business</h2>
                <div className="text-4xl font-bold mb-2">49€</div>
                <p className="text-gray-600">Pour les équipes</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span>3 portraits premium</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span>3 styles différents</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span>Ultra haute définition</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span>Sans filigrane</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span>Prêt en 10 minutes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span>Support prioritaire</span>
                </li>
              </ul>
              <Link href="/auth/login" className="block">
                <Button className="w-full rounded-full" variant="outline">
                  Choisir Business
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Comparison */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-medium mb-8 text-center">
              Comparaison détaillée des forfaits
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">Fonctionnalités</th>
                    <th className="text-center py-4">Découverte</th>
                    <th className="text-center py-4">Premium</th>
                    <th className="text-center py-4">Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">Nombre de portraits</td>
                    <td className="text-center">2</td>
                    <td className="text-center">1</td>
                    <td className="text-center">3</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Styles disponibles</td>
                    <td className="text-center">1</td>
                    <td className="text-center">3</td>
                    <td className="text-center">3</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Qualité</td>
                    <td className="text-center">Standard</td>
                    <td className="text-center">HD</td>
                    <td className="text-center">Ultra HD</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Temps de génération</td>
                    <td className="text-center">5 min</td>
                    <td className="text-center">3 min</td>
                    <td className="text-center">10 min</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Sans filigrane</td>
                    <td className="text-center">❌</td>
                    <td className="text-center">✅</td>
                    <td className="text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="py-4">Support prioritaire</td>
                    <td className="text-center">❌</td>
                    <td className="text-center">❌</td>
                    <td className="text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
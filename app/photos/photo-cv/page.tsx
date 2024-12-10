import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Target, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PhotoCVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-medium text-black mb-6 leading-tight">
                Une photo CV qui fait la différence auprès des recruteurs
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Dans un marché compétitif, votre CV n'a que 6 secondes pour convaincre. Votre photo doit immédiatement inspirer confiance et professionnalisme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/login">
                  <Button size="lg" className="rounded-full px-8 py-6 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300">
                    Créer ma photo CV gratuitement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">98% de taux de satisfaction</span>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Photo CV professionnelle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-gray-50 py-20 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-black mb-12 text-center">
              L'impact d'une photo CV professionnelle
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#0A66C2] mb-4">+65%</div>
                <p className="text-gray-600">
                  de chances d'être convoqué à un entretien avec une photo CV professionnelle
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#0A66C2] mb-4">89%</div>
                <p className="text-gray-600">
                  des recruteurs accordent de l'importance à la photo sur un CV
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#0A66C2] mb-4">+40%</div>
                <p className="text-gray-600">
                  de réponses positives avec une photo CV professionnelle
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-black mb-6">
              Pourquoi choisir FlashStudio pour votre photo CV ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <Target className="h-8 w-8 text-[#0A66C2] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Format optimisé pour les CV</h3>
                  <p className="text-gray-600">
                    Photos au format idéal pour tous les modèles de CV, respectant les standards professionnels
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Briefcase className="h-8 w-8 text-[#0A66C2] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Adapté à votre secteur</h3>
                  <p className="text-gray-600">
                    Styles personnalisés selon votre industrie et niveau de poste
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Photo CV exemple"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0A66C2] to-[#0077B5] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-medium text-white mb-6">
              Maximisez vos chances d'obtenir l'emploi de vos rêves
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Créez votre photo CV professionnelle en 5 minutes
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/auth/login">
                <Button size="lg" variant="secondary" className="rounded-full px-8 py-6">
                  Créer ma photo CV
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <span className="text-sm text-white/80 animate-pulse">
                Promotion : Les 100 premières photos gratuites
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
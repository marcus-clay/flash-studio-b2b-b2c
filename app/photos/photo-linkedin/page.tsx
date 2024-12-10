import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PhotoLinkedinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-medium text-black mb-6 leading-tight">
                Multipliez par 3 vos opportunités sur LinkedIn
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Une photo LinkedIn professionnelle est votre meilleur investissement pour attirer les meilleures opportunités de carrière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/login">
                  <Button size="lg" className="rounded-full px-8 py-6 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300">
                    Optimiser mon profil LinkedIn
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">21x plus de visites de profil</span>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                alt="Photo LinkedIn professionnelle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-20 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-black mb-12 text-center">
              L'impact d'une photo LinkedIn optimisée
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="h-12 w-12 text-[#0A66C2] mb-4" />
                <h3 className="text-xl font-medium mb-2">Visibilité x21</h3>
                <p className="text-gray-600">
                  Augmentez drastiquement les visites sur votre profil LinkedIn
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="h-12 w-12 text-[#0A66C2] mb-4" />
                <h3 className="text-xl font-medium mb-2">Réseau x3</h3>
                <p className="text-gray-600">
                  Triplez vos connexions et opportunités professionnelles
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Zap className="h-12 w-12 text-[#0A66C2] mb-4" />
                <h3 className="text-xl font-medium mb-2">Impact immédiat</h3>
                <p className="text-gray-600">
                  Constatez la différence dès le premier jour
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-black mb-6">
              Ils ont transformé leur carrière
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nos utilisateurs ont boosté leur carrière grâce à une photo LinkedIn optimisée
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  alt="Success Story 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-medium mb-2">Thomas D.</p>
                <p className="text-gray-600 mb-4">
                  "J'ai reçu 3 propositions d'emploi dans la semaine suivant ma mise à jour de photo"
                </p>
                <p className="text-sm text-[#0A66C2]">Développeur Senior</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Success Story 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-medium mb-2">Marie L.</p>
                <p className="text-gray-600 mb-4">
                  "Mon taux d'acceptation de connexion a augmenté de 300%"
                </p>
                <p className="text-sm text-[#0A66C2]">Directrice Marketing</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                  alt="Success Story 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-medium mb-2">Paul M.</p>
                <p className="text-gray-600 mb-4">
                  "Les recruteurs me contactent maintenant directement"
                </p>
                <p className="text-sm text-[#0A66C2]">Consultant</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0A66C2] to-[#0077B5] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-medium text-white mb-6">
              Prêt à transformer votre présence sur LinkedIn ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Rejoignez les milliers de professionnels qui ont déjà boosté leur carrière
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/auth/login">
                <Button size="lg" variant="secondary" className="rounded-full px-8 py-6">
                  Optimiser mon profil maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <span className="text-sm text-white/80 animate-pulse">
                Offre spéciale : Première photo gratuite
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
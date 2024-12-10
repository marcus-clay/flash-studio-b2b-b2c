import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortraitProfessionnelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-medium text-black mb-6 leading-tight">
                Un portrait professionnel qui inspire confiance en 5 minutes
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                7 secondes. C'est le temps qu'il faut pour faire une première impression. Ne laissez pas une mauvaise photo compromettre vos opportunités professionnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/login">
                  <Button size="lg" className="rounded-full px-8 py-6 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300">
                    Créer mon portrait gratuitement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.9/5 sur 50 000+ avis</span>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Portrait professionnel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-gray-50 py-20 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-black mb-12 text-center">
              La réalité du recrutement aujourd'hui
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-red-500 mb-4">76%</div>
                <p className="text-gray-600">
                  des recruteurs rejettent des candidats à cause d'une photo de profil non professionnelle
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-red-500 mb-4">-40%</div>
                <p className="text-gray-600">
                  de chances d'être contacté avec une photo de mauvaise qualité sur LinkedIn
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-red-500 mb-4">94%</div>
                <p className="text-gray-600">
                  des premières impressions sont basées sur votre photo de profil
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-black mb-6">
              La solution FlashStudio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transformez votre image professionnelle en quelques minutes, sans studio photo
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-[#0A66C2] mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Rapide</h3>
              <p className="text-gray-600">
                Obtenez votre portrait en 5 minutes, sans rendez-vous
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-[#0A66C2] mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Professionnel</h3>
              <p className="text-gray-600">
                Qualité studio garantie grâce à notre IA avancée
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-[#0A66C2] mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Efficace</h3>
              <p className="text-gray-600">
                3x plus de chances d'être contacté sur LinkedIn
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0A66C2] to-[#0077B5] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-medium text-white mb-6">
              Ne laissez plus une mauvaise photo limiter votre carrière
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Créez votre portrait professionnel gratuitement en quelques minutes
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/auth/login">
                <Button size="lg" variant="secondary" className="rounded-full px-8 py-6">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <span className="text-sm text-white/80">
                Offre limitée : -20% sur tous les forfaits
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
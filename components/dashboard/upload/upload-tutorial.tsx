"use client"

import { Card } from "@/components/ui/card";
import { Check, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const dosAndDonts = {
  dos: [
    {
      title: "Regardez droit vers l'objectif",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Un regard direct inspire confiance et professionnalisme"
    },
    {
      title: "Éclairage naturel",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      description: "Privilégiez la lumière naturelle, face à une fenêtre"
    },
    {
      title: "Tenue professionnelle",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      description: "Portez une tenue professionnelle adaptée à votre secteur"
    }
  ],
  donts: [
    {
      title: "Évitez les selfies",
      image: "https://images.unsplash.com/photo-1528914137830-c85ee162f588?w=400&h=400&fit=crop",
      description: "Les selfies manquent de professionnalisme"
    },
    {
      title: "Pas de fond chargé",
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop",
      description: "Privilégiez un fond neutre et épuré"
    },
    {
      title: "Évitez les photos de groupe",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop",
      description: "Utilisez uniquement des photos individuelles"
    }
  ]
};

const accordionAnimation = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        type: "spring",
        stiffness: 300,
        damping: 30
      },
      opacity: { duration: 0.2 }
    }
  }
};

export function UploadTutorial() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="space-y-4">
      <Button
        variant="ghost"
        className="w-full flex justify-between items-center py-2 rounded-lg hover:bg-gray-100/80"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-sm font-medium text-gray-700">Conseils pour des photos réussies</span>
        <motion.div
          initial={false}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </motion.div>
      </Button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={accordionAnimation}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gray-50/70 border-gray-100/80 shadow-sm">
                <div className="p-4">
                  <h3 className="text-sm font-medium flex items-center gap-2 mb-4 text-gray-700">
                    <Check className="h-4 w-4 text-green-500" />
                    À faire
                  </h3>
                  <div className="space-y-4">
                    {dosAndDonts.dos.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200/80">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-xs mb-1 text-gray-700">{item.title}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-50/70 border-gray-100/80 shadow-sm">
                <div className="p-4">
                  <h3 className="text-sm font-medium flex items-center gap-2 mb-4 text-gray-700">
                    <X className="h-4 w-4 text-red-500" />
                    À éviter
                  </h3>
                  <div className="space-y-4">
                    {dosAndDonts.donts.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200/80">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-xs mb-1 text-gray-700">{item.title}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
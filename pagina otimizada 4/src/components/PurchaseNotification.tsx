import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, X } from "lucide-react";

interface Purchase {
  name: string;
  location: string;
  plan: string;
  time: string;
}

const names = [
  "Ana Paula", "Maria Eduarda", "Cláudia M.", "Juliana Silva", "Priscila R.", 
  "Renata Santos", "Karina Lima", "Daniela P.", "Carla Souza", "Patrícia N.", 
  "Sandra Barbosa", "Bruna Oliveira", "Aline Mendes", "Amanda Costa", "Luciana F.",
  "Rodrigo M.", "Marcos Oliveira", "Felipe Ramos", "Lucas Alves", "Thiago Vieira"
];

const locations = [
  "São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", "Curitiba - PR", 
  "Porto Alegre - RS", "Salvador - BA", "Fortaleza - CE", "Brasília - DF", 
  "Goiânia - GO", "Manaus - AM", "Recife - PE", "Florianópolis - SC", 
  "Campinas - SP", "Vitória - ES", "Belém - PA", "Sorocaba - SP",
  "Niterói - RJ", "Natal - RN", "João Pessoa - PB", "Maceió - AL"
];

const plans = [
  "Plano Completo (+ Bônus)",
  "Plano Completo (+ Bônus)",
  "Plano Básico"
];

const times = [
  "há 12 segundos", "há 34 segundos", "há 1 minuto", "há 2 minutos", 
  "há 3 minutos", "há 4 minutos", "acabou de comprar", "há poucos instantes"
];

export default function PurchaseNotification() {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Generate a random purchase event
  const getRandomPurchase = (): Purchase => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomPlan = plans[Math.floor(Math.random() * plans.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];

    return {
      name: randomName,
      location: randomLocation,
      plan: randomPlan,
      time: randomTime,
    };
  };

  useEffect(() => {
    // Wait 5 seconds before showing the first notification
    const initialDelay = setTimeout(() => {
      setCurrentPurchase(getRandomPurchase());
      setIsVisible(true);
    }, 5000);

    // Set up interval to cycle notifications
    const cycleInterval = setInterval(() => {
      setIsVisible(false);
      
      // Allow fade-out animation to finish before setting the next item
      setTimeout(() => {
        setCurrentPurchase(getRandomPurchase());
        setIsVisible(true);
      }, 500);
    }, 15000); // Cycles every 15 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(cycleInterval);
    };
  }, []);

  if (!currentPurchase) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          id="purchase-notification"
          className="fixed top-4 right-4 left-4 sm:left-auto sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-green-100 z-50 flex items-center gap-3"
        >
          {/* Green active pulse indicator & icon */}
          <div className="relative shrink-0 w-11 h-11 rounded-full bg-green-50 flex items-center justify-center border border-green-200">
            <ShoppingBag className="h-5 w-5 text-green-600" />
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>

          {/* Core Content details */}
          <div className="flex-1 min-w-0 pr-4">
            <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">
              {currentPurchase.name} ({currentPurchase.location})
            </p>
            <p className="text-xs text-gray-600 leading-tight mt-0.5">
              Adquiriu o <span className="text-green-600 font-extrabold">{currentPurchase.plan}</span>
            </p>
            <p className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-wider">
              {currentPurchase.time}
            </p>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

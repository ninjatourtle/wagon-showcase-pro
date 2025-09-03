import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tankWagon from "@/assets/tank-wagon.jpg";
import gondolaWagon from "@/assets/gondola-wagon.jpg";
import boxcarWagon from "@/assets/boxcar-wagon.jpg";

const wagons = [
  {
    id: 1,
    name: "Цистерны",
    description: "Для перевозки нефтепродуктов, химических веществ и пищевых жидкостей",
    image: tankWagon,
    specs: ["Объем: 50-120 м³", "Грузоподъемность: до 70 тонн"]
  },
  {
    id: 2,
    name: "Полувагоны",
    description: "Для перевозки угля, руды, строительных материалов и металлолома",
    image: gondolaWagon,
    specs: ["Объем: 70-90 м³", "Грузоподъемность: до 75 тонн"]
  },
  {
    id: 3,
    name: "Крытые вагоны",
    description: "Для перевозки тарно-штучных грузов, зерна и оборудования",
    image: boxcarWagon,
    specs: ["Объем: 120-140 м³", "Грузоподъемность: до 68 тонн"]
  }
];

export default function WagonTypes() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Типы вагонов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент вагонов для любых типов грузов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wagons.map((wagon, index) => (
            <Card 
              key={wagon.id} 
              className="overflow-hidden hover:shadow-strong transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={wagon.image}
                  alt={wagon.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {wagon.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {wagon.description}
                </p>
                <div className="space-y-2 mb-4">
                  {wagon.specs.map((spec, i) => (
                    <p key={i} className="text-sm text-secondary">
                      • {spec}
                    </p>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Shield, Clock, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Надежность",
    description: "Все вагоны проходят техническую экспертизу и сертификацию"
  },
  {
    icon: Clock,
    title: "Оперативность",
    description: "Быстрая поставка вагонов в любую точку России"
  },
  {
    icon: TrendingUp,
    title: "Выгодные условия",
    description: "Гибкая система скидок для постоянных клиентов"
  },
  {
    icon: Award,
    title: "Качество",
    description: "Работаем только с проверенными производителями"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем комплексные решения для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
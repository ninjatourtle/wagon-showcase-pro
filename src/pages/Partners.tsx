import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, Users, TrendingUp } from "lucide-react";

export default function Partners() {
  const partners = [
    {
      name: "РЖД",
      category: "Стратегический партнер",
      description: "Основной партнер в сфере железнодорожных перевозок",
      logo: "🚂",
    },
    {
      name: "Трансконтейнер",
      category: "Логистический партнер",
      description: "Сотрудничество в области контейнерных перевозок",
      logo: "📦",
    },
    {
      name: "Уралвагонзавод",
      category: "Производственный партнер",
      description: "Поставка и обслуживание подвижного состава",
      logo: "🏭",
    },
    {
      name: "ВТБ Лизинг",
      category: "Финансовый партнер",
      description: "Лизинговые программы для приобретения вагонов",
      logo: "💰",
    },
    {
      name: "Газпромнефть",
      category: "Корпоративный клиент",
      description: "Долгосрочные контракты на перевозку нефтепродуктов",
      logo: "⛽",
    },
    {
      name: "ЕВРАЗ",
      category: "Промышленный партнер",
      description: "Перевозка металлопродукции и сырья",
      logo: "🏗️",
    },
  ];

  const benefits = [
    {
      icon: Handshake,
      title: "Надежное партнерство",
      description: "Строим долгосрочные взаимовыгодные отношения",
    },
    {
      icon: Building2,
      title: "Крупнейшие компании",
      description: "Работаем с лидерами российского бизнеса",
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Разрабатываем уникальные решения для каждого партнера",
    },
    {
      icon: TrendingUp,
      title: "Совместное развитие",
      description: "Растем и развиваемся вместе с нашими партнерами",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Наши партнеры
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Мы гордимся сотрудничеством с ведущими компаниями России
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {partners.map((partner, index) => (
                <Card key={index} className="p-6 hover:shadow-elevated transition-all">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{partner.logo}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-primary">{partner.category}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {partner.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Преимущества партнерства
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Активных партнеров</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">Лет на рынке</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Надежность</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Поддержка</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Станьте нашим партнером
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к числу наших надежных партнеров и развивайте бизнес вместе с нами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-semibold">
                Стать партнером
              </Button>
              <Button size="lg" variant="outline" className="font-semibold bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Узнать условия
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Shield, Clock, TrendingUp, Globe, Truck, Settings } from "lucide-react";

export default function About() {
  const achievements = [
    { year: "2010", event: "Основание компании ВагонТрейд" },
    { year: "2012", event: "Получение лицензии на ремонт вагонов" },
    { year: "2015", event: "Открытие филиала в Санкт-Петербурге" },
    { year: "2018", event: "Запуск собственного ремонтного депо" },
    { year: "2020", event: "Расширение парка до 5000+ вагонов" },
    { year: "2023", event: "Сертификация ISO 9001:2015" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Надежность",
      description: "Гарантируем качество и безопасность каждого вагона"
    },
    {
      icon: Users,
      title: "Партнерство",
      description: "Строим долгосрочные отношения с клиентами"
    },
    {
      icon: TrendingUp,
      title: "Инновации",
      description: "Внедряем современные технологии в работу"
    },
    {
      icon: Globe,
      title: "Масштаб",
      description: "Работаем по всей территории России и СНГ"
    }
  ];

  const team = [
    {
      name: "Александр Петров",
      position: "Генеральный директор",
      experience: "20 лет в отрасли"
    },
    {
      name: "Мария Иванова",
      position: "Коммерческий директор",
      experience: "15 лет в логистике"
    },
    {
      name: "Сергей Козлов",
      position: "Технический директор",
      experience: "18 лет в железнодорожной отрасли"
    },
    {
      name: "Елена Смирнова",
      position: "Финансовый директор",
      experience: "12 лет в финансах"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            О компании ВагонТрейд
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Более 14 лет мы обеспечиваем надежные железнодорожные перевозки по всей России
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Лидер в сфере железнодорожных перевозок
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ВагонТрейд — это современная компания с богатым опытом в области железнодорожных перевозок. 
                  Мы специализируемся на продаже, аренде и обслуживании грузовых вагонов различных типов.
                </p>
                <p>
                  За годы работы мы зарекомендовали себя как надежный партнер для крупнейших промышленных 
                  предприятий России. Наш парк насчитывает более 5000 единиц подвижного состава.
                </p>
                <p>
                  Мы постоянно расширяем географию присутствия и совершенствуем качество услуг, 
                  внедряя инновационные решения в области логистики и управления парком.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Скачать презентацию
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">14+</div>
                  <p className="text-muted-foreground">Лет на рынке</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <p className="text-muted-foreground">Вагонов в парке</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Клиентов</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Поддержка</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            История развития
          </h2>
          <div className="max-w-4xl mx-auto">
            {achievements.map((item, index) => (
              <div key={index} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-24 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{item.year}</span>
                  </div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-border pl-8 relative">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <p className="text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Лицензии и сертификаты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>ISO 9001:2015</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Международный стандарт системы менеджмента качества
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Лицензия ФСТ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Федеральная служба по тарифам на железнодорожные перевозки
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Сертификат РЖД</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Аккредитация в системе сертификации ОАО "РЖД"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Начните сотрудничество с надежным партнером
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и получите индивидуальное предложение
          </p>
          <Button size="lg" variant="secondary">
            Связаться с нами
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
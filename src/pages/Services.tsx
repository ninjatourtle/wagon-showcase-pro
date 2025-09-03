import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Truck, Wrench, FileText, Shield, Clock, Users, Package } from "lucide-react";

export default function Services() {
  const services = {
    sale: {
      title: "Продажа вагонов",
      description: "Широкий выбор новых и б/у вагонов с гарантией",
      features: [
        "Полувагоны, крытые вагоны, цистерны, платформы",
        "Новые вагоны от производителя",
        "Восстановленные вагоны после КРП",
        "Гарантия до 5 лет",
        "Помощь в оформлении документов",
        "Доставка по всей России"
      ],
      benefits: [
        { icon: Shield, text: "Юридическая чистота сделки" },
        { icon: FileText, text: "Полный пакет документов" },
        { icon: Truck, text: "Доставка до станции назначения" }
      ]
    },
    rent: {
      title: "Аренда вагонов",
      description: "Гибкие условия аренды под ваши задачи",
      features: [
        "Краткосрочная аренда от 1 месяца",
        "Долгосрочная аренда с выгодными условиями",
        "Возможность выкупа арендованных вагонов",
        "Техническое обслуживание включено",
        "Страхование вагонов",
        "Круглосуточная поддержка"
      ],
      benefits: [
        { icon: Clock, text: "Быстрое оформление" },
        { icon: Users, text: "Индивидуальные условия" },
        { icon: Package, text: "Большой выбор вагонов" }
      ]
    },
    repair: {
      title: "Ремонт и обслуживание",
      description: "Профессиональный ремонт в собственном депо",
      features: [
        "Плановый ремонт (ТР-1, ТР-2)",
        "Капитальный ремонт (КР-1, КР-2)",
        "Деповской ремонт (ДР)",
        "Модернизация вагонов",
        "Замена колесных пар",
        "Покраска и антикоррозийная обработка"
      ],
      benefits: [
        { icon: Wrench, text: "Современное оборудование" },
        { icon: Shield, text: "Гарантия на работы" },
        { icon: Clock, text: "Соблюдение сроков" }
      ]
    },
    logistics: {
      title: "Логистические услуги",
      description: "Комплексные решения для грузоперевозок",
      features: [
        "Планирование маршрутов",
        "Оптимизация грузопотоков",
        "Мониторинг перевозок",
        "Таможенное оформление",
        "Экспедирование грузов",
        "Консультации по перевозкам"
      ],
      benefits: [
        { icon: Truck, text: "Оптимальные маршруты" },
        { icon: FileText, text: "Документальное сопровождение" },
        { icon: Users, text: "Персональный менеджер" }
      ]
    }
  };

  const additionalServices = [
    {
      title: "Техническое освидетельствование",
      description: "Проведение экспертизы технического состояния вагонов",
      price: "от 15 000 ₽"
    },
    {
      title: "Юридическое сопровождение",
      description: "Помощь в оформлении сделок и регистрации вагонов",
      price: "от 30 000 ₽"
    },
    {
      title: "Страхование вагонов",
      description: "Полное страховое покрытие вашего подвижного состава",
      price: "от 0.5% стоимости"
    },
    {
      title: "Обучение персонала",
      description: "Курсы повышения квалификации для работников ж/д транспорта",
      price: "от 25 000 ₽"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Полный спектр услуг в сфере железнодорожных перевозок — от продажи вагонов до комплексной логистики
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="sale" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="sale">Продажа</TabsTrigger>
              <TabsTrigger value="rent">Аренда</TabsTrigger>
              <TabsTrigger value="repair">Ремонт</TabsTrigger>
              <TabsTrigger value="logistics">Логистика</TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([key, service]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                      Получить консультацию
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Преимущества
                    </h3>
                    {service.benefits.map((benefit, idx) => (
                      <Card key={idx}>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                              <benefit.icon className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <p className="text-foreground font-medium">
                              {benefit.text}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Дополнительные услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <p className="text-xl font-bold text-primary">
                    {service.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Как мы работаем
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: 1, title: "Заявка", desc: "Вы оставляете заявку на сайте или по телефону" },
                { step: 2, title: "Консультация", desc: "Наш специалист связывается с вами и уточняет детали" },
                { step: 3, title: "Предложение", desc: "Мы подготавливаем индивидуальное коммерческое предложение" },
                { step: 4, title: "Договор", desc: "Заключаем договор с прозрачными условиями" },
                { step: 5, title: "Исполнение", desc: "Выполняем работы в согласованные сроки" },
                { step: 6, title: "Поддержка", desc: "Обеспечиваем постоянную поддержку и сопровождение" }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Оставьте заявку и получите персональное предложение в течение часа
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
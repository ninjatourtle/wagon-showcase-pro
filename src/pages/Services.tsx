import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Truck, Wrench, FileText, Shield, Clock, Users, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-telegram', {
        body: {
          formType: 'contact',
          data: formData
        }
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время"
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <Button 
                      size="lg" 
                      className="bg-gradient-primary hover:opacity-90"
                      onClick={() => setIsModalOpen(true)}
                    >
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
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => setIsModalOpen(true)}
          >
            Оставить заявку
          </Button>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Получить консультацию</DialogTitle>
            <DialogDescription>
              Оставьте заявку и наши специалисты свяжутся с вами в течение часа
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input 
                id="name" 
                placeholder="Ваше имя" 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+7 (999) 999-99-99" 
                value={formData.phone} 
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="example@mail.ru" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea 
                id="message" 
                placeholder="Опишите ваш вопрос или потребность" 
                className="min-h-[100px]" 
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
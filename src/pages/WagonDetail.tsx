import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  Calendar, 
  Shield, 
  CheckCircle, 
  Truck,
  Wrench,
  FileText,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Download,
  Award,
  Users,
  Clock,
  AlertCircle,
  Star
} from "lucide-react";
import gondolaWagon from "@/assets/gondola-wagon.jpg";
import boxcarWagon from "@/assets/boxcar-wagon.jpg";
import tankWagon from "@/assets/tank-wagon.jpg";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function WagonDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время"
    });
    setIsModalOpen(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const wagon = {
    id: 1,
    name: "Полувагон модель 12-132",
    type: "Полувагон",
    capacity: "69 тонн",
    volume: "88 м³",
    year: 2020,
    price: "3 500 000 ₽",
    status: "available",
    features: ["Усиленная конструкция", "Антикоррозийная обработка", "Гарантия 5 лет"],
    images: [gondolaWagon, boxcarWagon, tankWagon, gondolaWagon],
    specifications: {
      "Основные характеристики": {
        "Модель": "12-132",
        "Год выпуска": "2020",
        "Грузоподъемность": "69 тонн",
        "Объем кузова": "88 м³",
        "Масса тары": "23 тонны",
        "База вагона": "8650 мм",
        "Нагрузка на ось": "23,5 тс",
        "Количество люков": "14 шт"
      },
      "Габариты": {
        "Длина по осям автосцепок": "13920 мм",
        "Длина по концевым балкам": "12700 мм",
        "Ширина максимальная": "3134 мм",
        "Высота от УГР": "3800 мм",
        "Высота борта": "2365 мм",
        "Внутренняя длина": "12088 мм",
        "Внутренняя ширина": "2878 мм",
        "Площадь пола": "34,8 м²"
      },
      "Технические данные": {
        "Конструкционная скорость": "120 км/ч",
        "Количество осей": "4",
        "Тип тележки": "18-100",
        "Тип автосцепки": "СА-3",
        "Тормозная система": "Композиционные колодки",
        "Воздухораспределитель": "483М",
        "Авторежим": "265А-1",
        "Ручной тормоз": "Усиленный"
      },
      "Эксплуатационные показатели": {
        "Межремонтный пробег": "500 000 км",
        "Срок службы": "32 года",
        "Гарантийный срок": "5 лет",
        "КТИ": "0,42",
        "Статическая нагрузка": "92 тс",
        "Динамическая нагрузка": "94 тс",
        "Коэффициент тары": "0,33",
        "Температура эксплуатации": "-60°C до +50°C"
      }
    },
    description: "Полувагон модель 12-132 — это современный грузовой вагон, разработанный с учетом последних требований железнодорожной отрасли. Предназначен для перевозки навалочных и насыпных грузов: угля, руды, лесоматериалов, металлопроката, строительных материалов. Усиленная конструкция кузова и рамы обеспечивает надежную эксплуатацию в тяжелых условиях российских железных дорог.",
    fullDescription: "Вагон оснащен современной тормозной системой с композиционными колодками, что обеспечивает эффективное торможение и снижает износ колесных пар. Кузов изготовлен из высокопрочной стали с применением антикоррозийного покрытия последнего поколения, что гарантирует длительный срок службы даже при перевозке агрессивных грузов.",
    advantages: [
      "Увеличенный межремонтный пробег до 500 тыс. км или 3 года",
      "Антикоррозийное покрытие последнего поколения толщиной 180 мкм",
      "Усиленные узлы крепления тормозного оборудования",
      "Возможность установки съемной крыши для защиты груза",
      "Полное соответствие требованиям ГОСТ 22235-2010",
      "Улучшенная аэродинамика для снижения сопротивления",
      "Система автоматического слива воды из кузова",
      "Усиленные петли и запоры разгрузочных люков"
    ],
    documents: [
      "Сертификат соответствия СТ-1 №РЖД.001.2020",
      "Паспорт вагона форма ВУ-4М",
      "Руководство по эксплуатации РЭ-12-132",
      "Акт последнего деповского ремонта",
      "Гарантийный талон завода-изготовителя",
      "Протокол испытаний №234/2020",
      "Сертификат качества металла",
      "Акт приемки ОТК"
    ],
    deliveryTerms: {
      "Условия поставки": [
        "Доставка по всей территории РФ и СНГ",
        "Срок поставки: от 14 дней",
        "Возможность отгрузки партиями",
        "Предоставление полного пакета документов"
      ],
      "Способы оплаты": [
        "Безналичный расчет",
        "Лизинг от 3 лет",
        "Рассрочка до 12 месяцев",
        "Trade-in (обмен старых вагонов)"
      ],
      "Дополнительные услуги": [
        "Техническое обслуживание",
        "Поставка запчастей",
        "Модернизация и переоборудование",
        "Обучение персонала"
      ]
    },
    certificates: [
      { name: "ISO 9001:2015", year: "2023" },
      { name: "ГОСТ Р ИСО 14001", year: "2022" },
      { name: "OHSAS 18001", year: "2023" },
      { name: "Сертификат РЖД", year: "2024" }
    ],
    reviews: [
      {
        id: 1,
        author: "ООО «ТрансКарго»",
        rating: 5,
        date: "15 марта 2024",
        text: "Приобрели партию из 20 вагонов. Качество отличное, все документы в порядке. Рекомендуем!"
      },
      {
        id: 2,
        author: "АО «УгольЭкспорт»",
        rating: 5,
        date: "28 февраля 2024",
        text: "Используем для перевозки угля уже полгода. Вагоны показали себя надежными в эксплуатации."
      },
      {
        id: 3,
        author: "ЗАО «МеталлТранс»",
        rating: 4,
        date: "10 января 2024",
        text: "Хорошее соотношение цены и качества. Доставка точно в срок."
      }
    ],
    similarWagons: [
      {
        id: 2,
        name: "Полувагон 12-196",
        price: "2 800 000 ₽",
        capacity: "69 тонн",
        image: gondolaWagon
      },
      {
        id: 3,
        name: "Полувагон 12-119",
        price: "3 200 000 ₽",
        capacity: "70 тонн",
        image: boxcarWagon
      },
      {
        id: 4,
        name: "Полувагон 12-9046",
        price: "3 700 000 ₽",
        capacity: "71 тонна",
        image: tankWagon
      }
    ],
    faq: [
      {
        question: "Какой срок гарантии на вагон?",
        answer: "Гарантийный срок составляет 5 лет с момента ввода в эксплуатацию или 500 000 км пробега, в зависимости от того, что наступит раньше."
      },
      {
        question: "Возможна ли модернизация вагона?",
        answer: "Да, мы предлагаем различные варианты модернизации: установка съемной крыши, усиление кузова, установка системы GPS-мониторинга."
      },
      {
        question: "Какие документы предоставляются при покупке?",
        answer: "Полный пакет документов: паспорт вагона, сертификат соответствия, руководство по эксплуатации, гарантийный талон, акты испытаний."
      },
      {
        question: "Есть ли возможность лизинга?",
        answer: "Да, мы сотрудничаем с ведущими лизинговыми компаниями. Срок лизинга от 3 до 7 лет, первоначальный взнос от 20%."
      },
      {
        question: "Как осуществляется доставка?",
        answer: "Доставка осуществляется железнодорожным транспортом до станции назначения. Срок доставки зависит от удаленности и составляет от 14 до 30 дней."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-32 pb-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <a href="/" className="hover:text-primary">Главная</a>
            <span>/</span>
            <a href="/catalog" className="hover:text-primary">Каталог</a>
            <span>/</span>
            <span className="text-foreground">{wagon.name}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={wagon.images[selectedImage]} 
                  alt={wagon.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {wagon.images.map((image, i) => (
                  <div 
                    key={i} 
                    className={`aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedImage === i ? 'ring-2 ring-primary' : 'hover:opacity-75'
                    }`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <img 
                      src={image} 
                      alt={`${wagon.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2 bg-green-500 text-white">В наличии</Badge>
                <h1 className="text-3xl font-bold text-foreground mb-2">{wagon.name}</h1>
                <p className="text-muted-foreground">{wagon.type} • {wagon.year} год</p>
              </div>

              <div className="text-4xl font-bold text-primary">
                {wagon.price}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-primary" />
                  <span>Грузоподъемность: <strong>{wagon.capacity}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Объем кузова: <strong>{wagon.volume}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Год выпуска: <strong>{wagon.year}</strong></span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Особенности:</h3>
                {wagon.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={() => setIsModalOpen(true)}
                >
                  Заказать вагон
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Позвонить
                </Button>
              </div>

              <Card className="bg-muted/50">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Гарантия качества и полный пакет документов</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Wrench className="h-4 w-4 text-primary" />
                    <span>Техническое обслуживание и запчасти</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Помощь в оформлении лизинга</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full max-w-2xl grid-cols-6">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specs">Характеристики</TabsTrigger>
                <TabsTrigger value="advantages">Преимущества</TabsTrigger>
                <TabsTrigger value="delivery">Поставка</TabsTrigger>
                <TabsTrigger value="documents">Документы</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Описание</h2>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {wagon.description}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {wagon.fullDescription}
                      </p>
                      
                      <Separator className="my-6" />
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <Package className="h-5 w-5 text-primary" />
                            Применение
                          </h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Перевозка угля и кокса</li>
                            <li>• Транспортировка руды и минералов</li>
                            <li>• Доставка строительных материалов</li>
                            <li>• Перевозка металлопроката</li>
                            <li>• Транспортировка лесоматериалов</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            Безопасность
                          </h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Усиленная рама и кузов</li>
                            <li>• Современная тормозная система</li>
                            <li>• Антикоррозийная защита</li>
                            <li>• Система контроля нагрузки</li>
                            <li>• Аварийное торможение</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(wagon.specifications).map(([category, specs]) => (
                    <Card key={category}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">{category}</h3>
                        <div className="space-y-2">
                          {Object.entries(specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm py-1 border-b border-muted">
                              <span className="text-muted-foreground">{key}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="advantages" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Преимущества</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {wagon.advantages.map((advantage, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">{advantage}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="grid md:grid-cols-4 gap-4 mt-6">
                      {wagon.certificates.map((cert, idx) => (
                        <Card key={idx} className="text-center">
                          <CardContent className="p-4">
                            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                            <h4 className="font-semibold text-sm">{cert.name}</h4>
                            <p className="text-xs text-muted-foreground">{cert.year}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="delivery" className="mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(wagon.deliveryTerms).map(([title, items]) => (
                    <Card key={title}>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          {title === "Условия поставки" && <Truck className="h-5 w-5 text-primary" />}
                          {title === "Способы оплаты" && <FileText className="h-5 w-5 text-primary" />}
                          {title === "Дополнительные услуги" && <Wrench className="h-5 w-5 text-primary" />}
                          {title}
                        </h3>
                        <ul className="space-y-2">
                          {items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Card className="mt-6 bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-2">Важная информация</h3>
                        <p className="text-sm text-muted-foreground">
                          Все вагоны проходят полную предпродажную подготовку, включая техническое освидетельствование, 
                          проверку тормозной системы и оформление необходимой документации. Гарантируем соответствие 
                          всем требованиям РЖД и Ространснадзора.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Документы</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                      {wagon.documents.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <span className="text-sm">{doc}</span>
                          </div>
                          <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                      <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-semibold">Все документы в наличии</span>
                      </div>
                      <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                        Предоставляем полный пакет документов для регистрации и эксплуатации вагона
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  {wagon.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{review.author}</h4>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${
                                  i < review.rating 
                                    ? 'fill-yellow-400 text-yellow-400' 
                                    : 'text-muted-foreground'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Card className="bg-muted/50">
                    <CardContent className="p-6 text-center">
                      <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Более 500 довольных клиентов</h3>
                      <p className="text-sm text-muted-foreground">
                        Средняя оценка 4.8 из 5 на основе отзывов наших покупателей
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
                <Accordion type="single" collapsible className="w-full">
                  {wagon.faq.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Similar Wagons */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Похожие вагоны</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {wagon.similarWagons.map((similar) => (
                <Card key={similar.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-muted">
                    <img 
                      src={similar.image} 
                      alt={similar.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{similar.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Грузоподъемность: {similar.capacity}
                    </p>
                    <p className="text-xl font-bold text-primary">{similar.price}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-12 py-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
            <div className="grid md:grid-cols-4 gap-6 px-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">32</div>
                <div className="text-sm text-muted-foreground">года срок службы</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500К</div>
                <div className="text-sm text-muted-foreground">км пробег до ремонта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">лет гарантии</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">69</div>
                <div className="text-sm text-muted-foreground">тонн грузоподъемность</div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground">+7 (800) 555-35-35</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">info@zheldorvagon.ru</p>
                <p className="text-sm text-muted-foreground">sales@zheldorvagon.ru</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Офис</h3>
                <p className="text-sm text-muted-foreground">г. Москва, ул. Промышленная, 15</p>
                <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Заказать вагон</DialogTitle>
            <DialogDescription>
              Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ваше имя"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Дополнительная информация..."
                rows={3}
              />
            </div>
            <Button type="submit" className="w-full">
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  MapPin
} from "lucide-react";
import gondolaWagon from "@/assets/gondola-wagon.jpg";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function WagonDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    images: [gondolaWagon],
    specifications: {
      "Основные характеристики": {
        "Модель": "12-132",
        "Год выпуска": "2020",
        "Грузоподъемность": "69 тонн",
        "Объем кузова": "88 м³",
        "Масса тары": "23 тонны",
        "База вагона": "8650 мм"
      },
      "Габариты": {
        "Длина по осям автосцепок": "13920 мм",
        "Длина по концевым балкам": "12700 мм",
        "Ширина максимальная": "3134 мм",
        "Высота от УГР": "3800 мм",
        "Высота борта": "2365 мм"
      },
      "Технические данные": {
        "Конструкционная скорость": "120 км/ч",
        "Количество осей": "4",
        "Тип тележки": "18-100",
        "Тип автосцепки": "СА-3",
        "Тормозная система": "Композиционные колодки"
      }
    },
    description: "Полувагон модель 12-132 предназначен для перевозки навалочных и насыпных грузов: угля, руды, лесоматериалов, металлопроката. Усиленная конструкция кузова и рамы обеспечивает надежную эксплуатацию в тяжелых условиях.",
    advantages: [
      "Увеличенный межремонтный пробег до 500 тыс. км",
      "Антикоррозийное покрытие последнего поколения",
      "Усиленные узлы крепления тормозного оборудования",
      "Возможность установки съемной крыши",
      "Полное соответствие требованиям ГОСТ 22235-2010"
    ],
    documents: [
      "Сертификат соответствия СТ-1",
      "Паспорт вагона",
      "Руководство по эксплуатации",
      "Акт последнего ремонта",
      "Гарантийный талон"
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
                  src={wagon.images[0]} 
                  alt={wagon.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                    <img 
                      src={wagon.images[0]} 
                      alt={`${wagon.name} ${i}`}
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
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specs">Характеристики</TabsTrigger>
                <TabsTrigger value="advantages">Преимущества</TabsTrigger>
                <TabsTrigger value="documents">Документы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Описание</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {wagon.description}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(wagon.specifications).map(([category, specs]) => (
                    <Card key={category}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">{category}</h3>
                        <div className="space-y-2">
                          {Object.entries(specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
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
                    <h2 className="text-2xl font-bold mb-4">Преимущества</h2>
                    <div className="space-y-3">
                      {wagon.advantages.map((advantage, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <p className="text-muted-foreground">{advantage}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Документы</h2>
                    <div className="space-y-3">
                      {wagon.documents.map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                          <FileText className="h-5 w-5 text-primary" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Contact Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground">+7 (800) 555-35-35</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">info@zheldorvagon.ru</p>
                <p className="text-sm text-muted-foreground">sales@zheldorvagon.ru</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
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
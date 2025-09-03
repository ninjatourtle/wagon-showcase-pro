import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Truck, Calendar, Package, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

type Wagon = {
  id: number;
  name: string;
  type: string;
  capacity: string;
  year: number;
  price: string;
  status: "available" | "reserved" | "sold";
  features: string[];
  image: string;
};

const wagons: Wagon[] = [
  {
    id: 1,
    name: "Полувагон модель 12-132",
    type: "Полувагон",
    capacity: "69 тонн",
    year: 2020,
    price: "3 500 000 ₽",
    status: "available",
    features: ["Усиленная конструкция", "Антикоррозийная обработка", "Гарантия 5 лет"],
    image: "/gondola-wagon.jpg"
  },
  {
    id: 2,
    name: "Крытый вагон 11-280",
    type: "Крытый вагон",
    capacity: "68 тонн",
    year: 2019,
    price: "3 200 000 ₽",
    status: "available",
    features: ["Вентиляционная система", "Защита от влаги", "Погрузочные люки"],
    image: "/boxcar-wagon.jpg"
  },
  {
    id: 3,
    name: "Цистерна 15-871",
    type: "Цистерна",
    capacity: "66 тонн",
    year: 2021,
    price: "4 800 000 ₽",
    status: "available",
    features: ["Нержавеющая сталь", "Система подогрева", "Клапаны безопасности"],
    image: "/tank-wagon.jpg"
  },
  {
    id: 4,
    name: "Платформа 13-401",
    type: "Платформа",
    capacity: "70 тонн",
    year: 2022,
    price: "2 900 000 ₽",
    status: "reserved",
    features: ["Универсальное крепление", "Усиленная рама", "Контейнерные фитинги"],
    image: "/gondola-wagon.jpg"
  },
  {
    id: 5,
    name: "Хоппер-дозатор 19-923",
    type: "Хоппер",
    capacity: "71 тонна",
    year: 2020,
    price: "3 700 000 ₽",
    status: "available",
    features: ["Автоматическая разгрузка", "Защита от пыли", "Усиленные люки"],
    image: "/tank-wagon.jpg"
  },
  {
    id: 6,
    name: "Рефрижератор ZB-5",
    type: "Рефрижератор",
    capacity: "40 тонн",
    year: 2021,
    price: "6 200 000 ₽",
    status: "available",
    features: ["Температурный режим -25°C до +15°C", "Автономная работа", "GPS мониторинг"],
    image: "/boxcar-wagon.jpg"
  },
  {
    id: 7,
    name: "Полувагон 12-196",
    type: "Полувагон",
    capacity: "69 тонн",
    year: 2018,
    price: "2 800 000 ₽",
    status: "sold",
    features: ["Капитальный ремонт 2023", "Новые тележки", "Гарантия 3 года"],
    image: "/gondola-wagon.jpg"
  },
  {
    id: 8,
    name: "Цистерна для битума 15-1547",
    type: "Цистерна",
    capacity: "60 тонн",
    year: 2020,
    price: "5 100 000 ₽",
    status: "available",
    features: ["Паровая рубашка", "Теплоизоляция", "Специальное покрытие"],
    image: "/tank-wagon.jpg"
  }
];

export default function Catalog() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWagons = wagons.filter(wagon => {
    const matchesType = typeFilter === "all" || wagon.type === typeFilter;
    const matchesStatus = statusFilter === "all" || wagon.status === statusFilter;
    const matchesSearch = wagon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          wagon.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: Wagon["status"]) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500 text-white">В наличии</Badge>;
      case "reserved":
        return <Badge className="bg-yellow-500 text-white">Забронирован</Badge>;
      case "sold":
        return <Badge variant="secondary">Продан</Badge>;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Каталог вагонов
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Широкий выбор железнодорожных вагонов различных типов. Все вагоны проходят полную техническую проверку и имеют необходимую документацию.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Поиск по названию или типу..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="md:w-96 bg-background"
            />
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="md:w-48 bg-background">
                <SelectValue placeholder="Тип вагона" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все типы</SelectItem>
                <SelectItem value="Полувагон">Полувагон</SelectItem>
                <SelectItem value="Крытый вагон">Крытый вагон</SelectItem>
                <SelectItem value="Цистерна">Цистерна</SelectItem>
                <SelectItem value="Платформа">Платформа</SelectItem>
                <SelectItem value="Хоппер">Хоппер</SelectItem>
                <SelectItem value="Рефрижератор">Рефрижератор</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="md:w-48 bg-background">
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="available">В наличии</SelectItem>
                <SelectItem value="reserved">Забронирован</SelectItem>
                <SelectItem value="sold">Продан</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWagons.map((wagon) => (
              <Card key={wagon.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={wagon.image} 
                    alt={wagon.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    {getStatusBadge(wagon.status)}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{wagon.name}</CardTitle>
                  <CardDescription>
                    <span className="font-semibold">{wagon.type}</span> • {wagon.year} год
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="h-4 w-4" />
                      <span>Грузоподъемность: {wagon.capacity}</span>
                    </div>
                    <div className="space-y-1">
                      {wagon.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {wagon.price}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    disabled={wagon.status === "sold"}
                  >
                    {wagon.status === "sold" ? "Продан" : "Подробнее"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredWagons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                По вашему запросу ничего не найдено
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Не нашли подходящий вагон?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы подберем оптимальное решение под ваши задачи
          </p>
          <Button size="lg" variant="secondary">
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, FileText, Download, Clock, MapPin, DollarSign, Search, Filter, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Tender {
  id: string;
  title: string;
  category: string;
  status: "active" | "completed" | "upcoming";
  startDate: string;
  endDate: string;
  budget: string;
  location: string;
  documents: string[];
  description: string;
  requirements: string[];
}

const tenders: Tender[] = [
  {
    id: "T-2024-001",
    title: "Поставка полувагонов модели 12-132",
    category: "Поставка вагонов",
    status: "active",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    budget: "от 150 млн ₽",
    location: "Москва",
    documents: ["Техническое задание", "Проект договора", "Требования к участникам"],
    description: "Объявлен тендер на поставку 50 единиц полувагонов модели 12-132 для нужд крупного промышленного предприятия.",
    requirements: [
      "Наличие лицензий на производство",
      "Опыт поставок не менее 5 лет",
      "Финансовая устойчивость",
      "Гарантийные обязательства"
    ]
  },
  {
    id: "T-2024-002",
    title: "Закупка запасных частей для ремонта",
    category: "Запчасти",
    status: "active",
    startDate: "2024-01-20",
    endDate: "2024-02-20",
    budget: "от 25 млн ₽",
    location: "Санкт-Петербург",
    documents: ["Спецификация", "Техническое задание", "Форма заявки"],
    description: "Требуется поставка комплекта запасных частей для планового ремонта парка грузовых вагонов.",
    requirements: [
      "Сертификаты качества на продукцию",
      "Складские мощности",
      "Логистические возможности",
      "Опыт работы с ж/д транспортом"
    ]
  },
  {
    id: "T-2024-003",
    title: "Услуги по модернизации цистерн",
    category: "Услуги",
    status: "upcoming",
    startDate: "2024-02-01",
    endDate: "2024-03-01",
    budget: "от 80 млн ₽",
    location: "Екатеринбург",
    documents: ["Техническое задание", "График работ", "Требования безопасности"],
    description: "Планируется проведение тендера на выполнение работ по модернизации парка цистерн для перевозки нефтепродуктов.",
    requirements: [
      "Наличие специализированного оборудования",
      "Квалифицированный персонал",
      "Опыт модернизации не менее 100 единиц",
      "Сертификаты соответствия"
    ]
  },
  {
    id: "T-2023-098",
    title: "Поставка крытых вагонов",
    category: "Поставка вагонов",
    status: "completed",
    startDate: "2023-11-01",
    endDate: "2023-12-01",
    budget: "120 млн ₽",
    location: "Новосибирск",
    documents: ["Итоговый протокол", "Договор поставки"],
    description: "Завершен тендер на поставку 30 единиц крытых вагонов для перевозки тарно-штучных грузов.",
    requirements: [
      "Выполнены все требования",
      "Победитель: ООО 'ВагонСтрой'"
    ]
  },
  {
    id: "T-2024-004",
    title: "Лизинг платформ для контейнеров",
    category: "Лизинг",
    status: "active",
    startDate: "2024-01-25",
    endDate: "2024-02-25",
    budget: "от 200 млн ₽",
    location: "Владивосток",
    documents: ["Условия лизинга", "Техническое задание", "Финансовые требования"],
    description: "Объявлен тендер на предоставление в лизинг 100 платформ для перевозки контейнеров сроком на 5 лет.",
    requirements: [
      "Лизинговая компания с опытом от 10 лет",
      "Парк не менее 1000 единиц",
      "Гибкие условия платежей",
      "Техническая поддержка"
    ]
  }
];

export default function Tenders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredTenders = tenders.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tender.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tender.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || tender.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const activeTenders = filteredTenders.filter(t => t.status === "active");
  const upcomingTenders = filteredTenders.filter(t => t.status === "upcoming");
  const completedTenders = filteredTenders.filter(t => t.status === "completed");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500 text-white">Активный</Badge>;
      case "upcoming":
        return <Badge className="bg-blue-500 text-white">Планируется</Badge>;
      case "completed":
        return <Badge className="bg-gray-500 text-white">Завершен</Badge>;
      default:
        return null;
    }
  };

  const TenderCard = ({ tender }: { tender: Tender }) => (
    <Card className="p-6 hover:shadow-strong transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{tender.title}</h3>
          <p className="text-sm text-muted-foreground">Номер: {tender.id}</p>
        </div>
        {getStatusBadge(tender.status)}
      </div>

      <p className="text-foreground mb-4">{tender.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{tender.startDate} - {tender.endDate}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <DollarSign className="h-4 w-4 mr-2" />
          <span>Бюджет: {tender.budget}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{tender.location}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <FileText className="h-4 w-4 mr-2" />
          <span>{tender.documents.length} документов</span>
        </div>
      </div>

      {tender.status === "active" && (
        <div className="space-y-3">
          <div className="border-t border-border pt-4">
            <h4 className="font-semibold text-sm mb-2">Основные требования:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {tender.requirements.slice(0, 3).map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-3">
            <Button className="flex-1">
              <FileText className="h-4 w-4 mr-2" />
              Подробнее
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Скачать документы
            </Button>
          </div>
        </div>
      )}

      {tender.status === "completed" && (
        <div className="border-t border-border pt-4">
          <p className="text-sm text-muted-foreground">
            <strong>Результат:</strong> {tender.requirements[tender.requirements.length - 1]}
          </p>
        </div>
      )}
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Тендеры и закупки
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Участвуйте в наших тендерах на поставку вагонов, запчастей и услуг.
              Прозрачные условия, честная конкуренция.
            </p>
          </div>

          {/* Alert */}
          <Alert className="mb-8 border-accent">
            <AlertCircle className="h-4 w-4 text-accent" />
            <AlertDescription>
              <strong>Новые тендеры!</strong> Опубликованы 2 новых тендера на поставку вагонов и услуги лизинга.
              Прием заявок до 25 февраля 2024 года.
            </AlertDescription>
          </Alert>

          {/* Filters */}
          <div className="bg-card rounded-lg p-6 mb-8 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по тендерам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="Поставка вагонов">Поставка вагонов</SelectItem>
                  <SelectItem value="Запчасти">Запчасти</SelectItem>
                  <SelectItem value="Услуги">Услуги</SelectItem>
                  <SelectItem value="Лизинг">Лизинг</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Статус" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все статусы</SelectItem>
                  <SelectItem value="active">Активные</SelectItem>
                  <SelectItem value="upcoming">Планируемые</SelectItem>
                  <SelectItem value="completed">Завершенные</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Сбросить фильтры
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="active">
                Активные ({activeTenders.length})
              </TabsTrigger>
              <TabsTrigger value="upcoming">
                Планируемые ({upcomingTenders.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Завершенные ({completedTenders.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-6">
              {activeTenders.length > 0 ? (
                activeTenders.map(tender => (
                  <TenderCard key={tender.id} tender={tender} />
                ))
              ) : (
                <Card className="p-12 text-center">
                  <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Нет активных тендеров</p>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-6">
              {upcomingTenders.length > 0 ? (
                upcomingTenders.map(tender => (
                  <TenderCard key={tender.id} tender={tender} />
                ))
              ) : (
                <Card className="p-12 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Нет планируемых тендеров</p>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              {completedTenders.length > 0 ? (
                completedTenders.map(tender => (
                  <TenderCard key={tender.id} tender={tender} />
                ))
              ) : (
                <Card className="p-12 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Нет завершенных тендеров</p>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Хотите стать поставщиком?</h2>
            <p className="text-lg mb-8 opacity-90">
              Зарегистрируйтесь в нашей системе электронных закупок и получайте уведомления о новых тендерах
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Регистрация поставщика
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Правила участия
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
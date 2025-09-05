import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const newsArticles = [
  {
    id: 1,
    title: "КБСЛогистик расширяет парк грузовых вагонов",
    description: "Компания приобрела 150 новых полувагонов для увеличения объемов перевозок",
    content: "В рамках стратегии развития на 2024-2025 годы, КБСЛогистик завершила сделку по приобретению 150 современных полувагонов. Это позволит увеличить объем перевозок на 30% и удовлетворить растущий спрос клиентов.",
    date: "2024-12-15",
    category: "Развитие",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "Новый маршрут: Москва - Владивосток",
    description: "Запущен регулярный маршрут для перевозки контейнерных грузов",
    content: "С января 2025 года КБСЛогистик запускает регулярные перевозки по маршруту Москва - Владивосток. Время в пути составит 7 дней, что на 20% быстрее стандартных перевозок.",
    date: "2024-12-10",
    category: "Маршруты",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Внедрение системы GPS-мониторинга",
    description: "Все вагоны оснащены современными системами отслеживания",
    content: "Завершено внедрение системы GPS-мониторинга на всем подвижном составе компании. Клиенты теперь могут отслеживать местоположение своих грузов в режиме реального времени через личный кабинет.",
    date: "2024-12-05",
    category: "Технологии",
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Партнерство с крупнейшим металлургическим комбинатом",
    description: "Подписан контракт на перевозку металлопродукции на 3 года",
    content: "КБСЛогистик заключила долгосрочный контракт с Магнитогорским металлургическим комбинатом на перевозку металлопродукции. Объем перевозок составит более 2 млн тонн ежегодно.",
    date: "2024-11-28",
    category: "Партнерство",
    image: "/api/placeholder/600/400"
  },
  {
    id: 5,
    title: "Открытие нового офиса в Екатеринбурге",
    description: "Расширение географии присутствия на Урале",
    content: "В Екатеринбурге открыт новый региональный офис КБСЛогистик. Это позволит улучшить обслуживание клиентов в Уральском федеральном округе и сократить время обработки заявок.",
    date: "2024-11-20",
    category: "Развитие",
    image: "/api/placeholder/600/400"
  },
  {
    id: 6,
    title: "Рекордные показатели третьего квартала",
    description: "Объем перевозок вырос на 45% по сравнению с прошлым годом",
    content: "По итогам третьего квартала 2024 года КБСЛогистик продемонстрировала рекордные показатели. Объем перевозок составил 3,5 млн тонн, что на 45% превышает показатели аналогичного периода прошлого года.",
    date: "2024-11-15",
    category: "Результаты",
    image: "/api/placeholder/600/400"
  },
  {
    id: 7,
    title: "Экологическая инициатива: переход на электронный документооборот",
    description: "Компания полностью отказалась от бумажных документов",
    content: "В рамках программы по защите окружающей среды, КБСЛогистик полностью перешла на электронный документооборот. Это позволит сэкономить более 500 000 листов бумаги ежегодно.",
    date: "2024-11-10",
    category: "Экология",
    image: "/api/placeholder/600/400"
  },
  {
    id: 8,
    title: "Обучение персонала: новые стандарты безопасности",
    description: "Проведено обучение 500 сотрудников по новым правилам РЖД",
    content: "Завершена масштабная программа обучения сотрудников новым стандартам безопасности при работе с грузовыми вагонами. Обучение прошли все технические специалисты компании.",
    date: "2024-11-05",
    category: "Безопасность",
    image: "/api/placeholder/600/400"
  },
  {
    id: 9,
    title: "Специальные тарифы на перевозку зерна",
    description: "Скидки до 20% на перевозку зерновых культур",
    content: "До конца 2024 года действуют специальные тарифы на перевозку зерновых культур. Скидки достигают 20% от базовой стоимости для постоянных клиентов.",
    date: "2024-10-30",
    category: "Акции",
    image: "/api/placeholder/600/400"
  },
  {
    id: 10,
    title: "КБСЛогистик вошла в топ-10 железнодорожных операторов России",
    description: "По итогам рейтинга независимого агентства",
    content: "По данным аналитического агентства 'РЖД-Партнер', КБСЛогистик вошла в десятку крупнейших железнодорожных операторов России по объему перевозок и качеству обслуживания.",
    date: "2024-10-25",
    category: "Достижения",
    image: "/api/placeholder/600/400"
  }
];

const categoryColors: Record<string, string> = {
  "Развитие": "bg-blue-500",
  "Маршруты": "bg-green-500",
  "Технологии": "bg-purple-500",
  "Партнерство": "bg-orange-500",
  "Результаты": "bg-yellow-500",
  "Экология": "bg-emerald-500",
  "Безопасность": "bg-red-500",
  "Акции": "bg-pink-500",
  "Достижения": "bg-indigo-500"
};

export default function News() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Новости компании
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Последние события, достижения и обновления КБСЛогистик
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Featured Article */}
            <div className="mb-12">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-muted-foreground">Изображение новости</span>
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className={`${categoryColors[newsArticles[0].category]} text-white`}>
                        {newsArticles[0].category}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        {formatDate(newsArticles[0].date)}
                      </div>
                    </div>
                    <CardTitle className="text-3xl mb-4">
                      {newsArticles[0].title}
                    </CardTitle>
                    <CardDescription className="text-lg mb-4">
                      {newsArticles[0].description}
                    </CardDescription>
                    <p className="text-muted-foreground mb-6">
                      {newsArticles[0].content}
                    </p>
                    <Link 
                      to={`/news/${newsArticles[0].id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    >
                      Читать полностью
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardHeader>
                </div>
              </Card>
            </div>

            {/* Other Articles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Изображение</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${categoryColors[article.category]} text-white text-xs`}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="mb-4 line-clamp-2">
                      {article.description}
                    </CardDescription>
                    <Link 
                      to={`/news/${article.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm"
                    >
                      Читать далее
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle, Shield, Award, Briefcase } from "lucide-react";
import license1 from "@/assets/license-1.jpg";
import license2 from "@/assets/license-2.jpg";
import certificate1 from "@/assets/certificate-1.jpg";
import certificate2 from "@/assets/certificate-2.jpg";

export default function Licenses() {
  const licenses = [
    {
      title: "Лицензия на осуществление погрузочно-разгрузочной деятельности на железнодорожном транспорте",
      number: "ПРД № 7725091562",
      issueDate: "15 марта 2023",
      validUntil: "15 марта 2028",
      issuer: "Федеральная служба по надзору в сфере транспорта (Ространснадзор)",
      image: license1,
    },
    {
      title: "Свидетельство о включении в реестр владельцев железнодорожного подвижного состава",
      number: "РВ № 001562",
      issueDate: "20 июня 2023",
      validUntil: "Бессрочно",
      issuer: "Федеральное агентство железнодорожного транспорта (Росжелдор)",
      image: license2,
    },
    {
      title: "Лицензия на осуществление деятельности по ремонту грузовых вагонов",
      number: "РЖД № 772501001",
      issueDate: "5 сентября 2023",
      validUntil: "5 сентября 2028",
      issuer: "Федеральная служба по надзору в сфере транспорта",
      image: certificate1,
    },
    {
      title: "Лицензия на перевозку грузов железнодорожным транспортом",
      number: "ГП № 077259",
      issueDate: "10 февраля 2024",
      validUntil: "10 февраля 2029",
      issuer: "Министерство транспорта Российской Федерации",
      image: certificate2,
    },
  ];

  const certificates = [
    {
      title: "Сертификат соответствия ГОСТ Р 51659-2000",
      description: "Вагоны-цистерны магистральных железных дорог колеи 1520 мм. Общие технические условия",
      icon: Award,
      documentNumber: "РОСС RU.ЖТ02.Н00562",
    },
    {
      title: "Сертификат соответствия СТ ССФЖТ ЦТ-ЦВ-ЦЛ 084-2000",
      description: "Вагоны грузовые железных дорог колеи 1520 мм. Требования по сертификации",
      icon: Shield,
      documentNumber: "ФТС ЖТ ЦТ 028-99",
    },
    {
      title: "Сертификат системы менеджмента качества ISO 9001:2015",
      description: "Подтверждает соответствие международным стандартам качества в области железнодорожных перевозок",
      icon: CheckCircle,
      documentNumber: "ISO 9001:2015 / ГОСТ Р ИСО 9001-2015",
    },
    {
      title: "Сертификат безопасности движения",
      description: "Подтверждает соответствие требованиям безопасности при эксплуатации подвижного состава",
      icon: Briefcase,
      documentNumber: "БД № 772501562",
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
                Лицензии и сертификаты
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Полный комплект разрешительной документации для эксплуатации и обслуживания железнодорожных вагонов
              </p>
            </div>
          </div>
        </section>

        {/* Licenses Section with Images */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Действующие лицензии
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {licenses.map((license, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all">
                  <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                    <img 
                      src={license.image} 
                      alt={license.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 right-4">
                      <Button variant="secondary" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Скачать PDF
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          {license.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Номер:</span> {license.number}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Дата выдачи:</span> {license.issueDate}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Действует до:</span> {license.validUntil}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Выдано:</span> {license.issuer}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Сертификаты соответствия
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {certificates.map((cert, index) => (
                <Card key={index} className="p-6 hover:shadow-elevated transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <cert.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {cert.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-primary">
                          {cert.documentNumber}
                        </p>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Скачать
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Соответствие стандартам
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  КБС-Логистик имеет полный пакет разрешительной документации для осуществления деятельности в сфере железнодорожных грузоперевозок. Все наши вагоны соответствуют требованиям:
                </p>
                <ul className="space-y-3 mb-6">
                  <li>ГОСТ Р 51659-2000 - Вагоны-цистерны магистральных железных дорог</li>
                  <li>ГОСТ 7370-98 - Крышки люков полувагонов и платформ</li>
                  <li>СТ ССФЖТ ЦТ-ЦВ-ЦЛ - Вагоны грузовые железных дорог колеи 1520 мм</li>
                  <li>ФТС ЖТ ЦТ 028-99 - Башмаки тормозных колодок локомотивов</li>
                  <li>Технический регламент Таможенного союза ТР ТС 001/2011</li>
                </ul>
                <p>
                  Компания регулярно проходит аудиты и подтверждает соответствие всем требованиям Росжелдора, Ространснадзора и ОАО "РЖД".
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Нужны копии документов для тендера?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Предоставим полный пакет заверенных копий лицензий и сертификатов для участия в конкурсных процедурах
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-semibold">
                Запросить документы
              </Button>
              <Button size="lg" variant="outline" className="font-semibold bg-white/10 text-white border-white/20 hover:bg-white/20">
                Связаться с юристом
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
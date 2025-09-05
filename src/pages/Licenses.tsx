import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle, Shield } from "lucide-react";

export default function Licenses() {
  const licenses = [
    {
      title: "Лицензия на осуществление погрузочно-разгрузочной деятельности",
      number: "ПРД № 7725091562",
      issueDate: "15 марта 2022",
      validUntil: "15 марта 2027",
      issuer: "Федеральная служба по надзору в сфере транспорта",
    },
    {
      title: "Свидетельство о включении в реестр операторов железнодорожного подвижного состава",
      number: "РОЖД № 468192",
      issueDate: "20 июня 2022",
      validUntil: "Бессрочно",
      issuer: "Министерство транспорта РФ",
    },
    {
      title: "Сертификат соответствия системы менеджмента качества",
      number: "ISO 9001:2015",
      issueDate: "10 января 2023",
      validUntil: "10 января 2026",
      issuer: "Bureau Veritas Certification",
    },
    {
      title: "Лицензия на осуществление деятельности по ремонту средств железнодорожного транспорта",
      number: "РЖД № 772501001",
      issueDate: "5 сентября 2022",
      validUntil: "5 сентября 2027",
      issuer: "Федеральная служба по надзору в сфере транспорта",
    },
  ];

  const certificates = [
    {
      title: "Сертификат безопасности движения",
      description: "Подтверждает соответствие требованиям безопасности при эксплуатации железнодорожного транспорта",
      icon: Shield,
    },
    {
      title: "Экологический сертификат",
      description: "Подтверждает соответствие экологическим стандартам при осуществлении деятельности",
      icon: CheckCircle,
    },
    {
      title: "Сертификат профессиональной компетенции",
      description: "Подтверждает квалификацию специалистов компании в области железнодорожных перевозок",
      icon: FileText,
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
                Все разрешительные документы для осуществления деятельности в сфере железнодорожных перевозок
              </p>
            </div>
          </div>
        </section>

        {/* Licenses Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Действующие лицензии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {licenses.map((license, index) => (
                <Card key={index} className="p-6 hover:shadow-elevated transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">
                    {license.title}
                  </h3>
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
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Сертификаты и аттестации
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {certificates.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Нужны копии документов?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Мы предоставим все необходимые копии лицензий и сертификатов для участия в тендерах
            </p>
            <Button size="lg" variant="secondary" className="font-semibold">
              Запросить документы
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
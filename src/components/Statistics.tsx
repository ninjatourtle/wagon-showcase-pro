import { useEffect, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Вагонов в наличии" },
  { value: 300, suffix: "+", label: "Довольных клиентов" },
  { value: 24, suffix: "/7", label: "Поддержка" }
];

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${isVisible ? 'animate-countUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                <CountUpAnimation 
                  target={stat.value} 
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <p className="text-primary-foreground/80 text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpAnimation({ 
  target, 
  suffix, 
  isVisible 
}: { 
  target: number; 
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return <>{count}{suffix}</>;
}
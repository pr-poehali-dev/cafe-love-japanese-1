import React from "react";

const Hero = () => {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-pink-50 via-accent/30 to-pink-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(248,215,218,0.1)_0%,transparent_50%)] opacity-20"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-gradient mb-4">
            愛 Любовь
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Окунитесь в мир подлинной японской кухни, где каждое блюдо готовится
            с любовью и традициями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍣</span>
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">
              Свежие суши
            </h3>
            <p className="text-sm text-muted-foreground">
              Ежедневно готовим из лучших ингредиентов
            </p>
          </div>

          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍜</span>
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">
              Горячие рамены
            </h3>
            <p className="text-sm text-muted-foreground">
              Насыщенные бульоны и домашние лапши
            </p>
          </div>

          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥟</span>
            </div>
            <h3 className="font-montserrat font-semibold text-lg mb-2">
              Традиционные гёза
            </h3>
            <p className="text-sm text-muted-foreground">
              Пельмени по старинным рецептам
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

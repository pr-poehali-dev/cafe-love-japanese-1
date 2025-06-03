import { useState } from "react";
import { MenuItem, CartItem } from "@/types";
import { menuItems } from "@/data/menu";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuCard from "@/components/MenuCard";
import Cart from "@/components/Cart";
import OrderForm from "@/components/OrderForm";

type View = "menu" | "cart" | "checkout" | "success";

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("menu");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (menuItem: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.menuItem.id === menuItem.id,
      );
      if (existingItem) {
        return prev.map((item) =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { id: Date.now().toString(), menuItem, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOrderSubmit = (orderData: any) => {
    console.log("Order submitted:", orderData);
    setCurrentView("success");
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const categories = [
    { id: "sushi", name: "Суши", emoji: "🍣" },
    { id: "ramen", name: "Рамен", emoji: "🍜" },
    { id: "appetizers", name: "Закуски", emoji: "🥟" },
    { id: "desserts", name: "Десерты", emoji: "🍡" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartCount={cartCount}
        onCartClick={() => setCurrentView("cart")}
      />

      {currentView === "menu" && (
        <>
          <Hero />

          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="font-montserrat font-bold text-3xl text-center mb-12 text-gradient">
                Наше меню
              </h2>

              {categories.map((category) => {
                const categoryItems = menuItems.filter(
                  (item) => item.category === category.id,
                );
                if (categoryItems.length === 0) return null;

                return (
                  <div key={category.id} className="mb-12">
                    <h3 className="font-montserrat font-semibold text-2xl mb-6 flex items-center gap-3">
                      <span className="text-3xl">{category.emoji}</span>
                      {category.name}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {categoryItems.map((item) => (
                        <MenuCard
                          key={item.id}
                          item={item}
                          onAddToCart={addToCart}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}

      {currentView === "cart" && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="mb-8">
              <button
                onClick={() => setCurrentView("menu")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Назад к меню
              </button>
            </div>

            <Cart
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeItem}
              onCheckout={() => setCurrentView("checkout")}
            />
          </div>
        </section>
      )}

      {currentView === "checkout" && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <OrderForm
              items={cartItems}
              onSubmit={handleOrderSubmit}
              onBack={() => setCurrentView("cart")}
            />
          </div>
        </section>
      )}

      {currentView === "success" && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="bg-white rounded-2xl p-8 border border-pink-100 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>

              <h2 className="font-montserrat font-bold text-2xl mb-4 text-gradient">
                Заказ принят!
              </h2>

              <p className="text-muted-foreground mb-8">
                Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время для
                подтверждения.
              </p>

              <button
                onClick={() => setCurrentView("menu")}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Вернуться к меню
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;

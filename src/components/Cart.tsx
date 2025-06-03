import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const Cart = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <Card className="border-pink-100">
        <CardContent className="p-8 text-center">
          <Icon
            name="ShoppingCart"
            size={48}
            className="mx-auto mb-4 text-muted-foreground"
          />
          <h3 className="font-montserrat font-semibold text-lg mb-2">
            Корзина пуста
          </h3>
          <p className="text-muted-foreground">Добавьте блюда из меню</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-pink-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="ShoppingCart" size={20} />
          Ваш заказ
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg"
          >
            <img
              src={item.menuItem.image}
              alt={item.menuItem.name}
              className="w-16 h-16 object-cover rounded-md"
            />

            <div className="flex-1">
              <h4 className="font-medium text-sm">{item.menuItem.name}</h4>
              <p className="text-xs text-muted-foreground">
                {item.menuItem.price} ₽
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
                }
                className="w-8 h-8 p-0"
              >
                <Icon name="Minus" size={12} />
              </Button>

              <span className="w-8 text-center text-sm font-medium">
                {item.quantity}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 p-0"
              >
                <Icon name="Plus" size={12} />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveItem(item.id)}
                className="w-8 h-8 p-0 text-destructive hover:text-destructive"
              >
                <Icon name="X" size={12} />
              </Button>
            </div>
          </div>
        ))}

        <div className="border-t border-pink-100 pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-montserrat font-semibold text-lg">
              Итого:
            </span>
            <span className="font-montserrat font-bold text-xl text-primary">
              {total} ₽
            </span>
          </div>

          <Button
            onClick={onCheckout}
            className="w-full bg-primary hover:bg-primary/90 text-white"
            size="lg"
          >
            Оформить заказ
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;

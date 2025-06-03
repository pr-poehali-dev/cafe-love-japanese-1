import { useState } from "react";
import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface OrderFormProps {
  items: CartItem[];
  onSubmit: (orderData: any) => void;
  onBack: () => void;
}

const OrderForm = ({ items, onSubmit, onBack }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
  });

  const total = items.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.address) {
      onSubmit({
        ...formData,
        items,
        total,
      });
    }
  };

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
      >
        <Icon name="ArrowLeft" size={16} />
        Назад к корзине
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-pink-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="User" size={20} />
              Данные для доставки
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="border-pink-200 focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="border-pink-200 focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="address">Адрес доставки *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                  className="border-pink-200 focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="comment">Комментарий к заказу</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  className="border-pink-200 focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                Подтвердить заказ на {total} ₽
                <Icon name="Check" size={16} className="ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-pink-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Receipt" size={20} />
              Ваш заказ
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-b border-pink-100"
              >
                <div>
                  <p className="font-medium text-sm">{item.menuItem.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.quantity} × {item.menuItem.price} ₽
                  </p>
                </div>
                <span className="font-medium">
                  {item.menuItem.price * item.quantity} ₽
                </span>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4 border-t border-pink-200">
              <span className="font-montserrat font-bold text-lg">Итого:</span>
              <span className="font-montserrat font-bold text-xl text-primary">
                {total} ₽
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderForm;

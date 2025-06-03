import { MenuItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuCard = ({ item, onAddToCart }: MenuCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-pink-100 hover:border-pink-200 animate-scale-in">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-montserrat font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-sm px-2 py-1 bg-pink-100 text-pink-600 rounded-full">
            {getCategoryName(item.category)}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-montserrat font-bold text-xl text-primary">
            {item.price} ₽
          </span>

          <Button
            onClick={() => onAddToCart(item)}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Icon name="Plus" size={16} className="mr-1" />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const getCategoryName = (category: string) => {
  switch (category) {
    case "sushi":
      return "Суши";
    case "ramen":
      return "Рамен";
    case "appetizers":
      return "Закуски";
    case "desserts":
      return "Десерты";
    default:
      return category;
  }
};

export default MenuCard;

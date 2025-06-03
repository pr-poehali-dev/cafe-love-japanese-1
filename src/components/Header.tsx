import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-pink-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">愛</span>
          </div>
          <div>
            <h1 className="font-montserrat font-bold text-xl text-gradient">
              Любовь
            </h1>
            <p className="text-xs text-muted-foreground">японское кафе</p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onCartClick}
          className="relative border-pink-200 hover:bg-pink-50"
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          Корзина
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;

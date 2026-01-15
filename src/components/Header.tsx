import { Wallet, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import eigenLayerLogo from "@/assets/eigenlayer-logo.png";

const navItems = ["Dashboard", "Token", "Operator", "AVS", "Apps"];

interface HeaderProps {
  onConnectWallet?: () => void;
}

export const Header = ({ onConnectWallet }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={eigenLayerLogo} alt="EigenLayer" className="h-8 w-8" />
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item === "Dashboard"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-primary hover:bg-primary/90" onClick={onConnectWallet}>
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

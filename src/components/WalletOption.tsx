import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

interface WalletOptionProps {
  name: string;
  icon: string;
  color?: string;
}

export const WalletOption = ({ name, icon, color = "#6366f1" }: WalletOptionProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    // Simulate connection attempt with loading
    setTimeout(() => {
      navigate(`/issues?wallet=${encodeURIComponent(name)}`);
    }, 1500);
  };

  return (
    <button 
      onClick={handleClick}
      disabled={isLoading}
      className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:border-primary hover:bg-secondary/30 transition-all duration-200 group disabled:opacity-70"
    >
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center mb-3 text-2xl relative"
        style={{ backgroundColor: `${color}20` }}
      >
        {isLoading ? (
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        ) : (
          icon
        )}
      </div>
      <span className="text-sm font-medium text-primary group-hover:text-primary/80">
        {isLoading ? "Connecting..." : name}
      </span>
    </button>
  );
};

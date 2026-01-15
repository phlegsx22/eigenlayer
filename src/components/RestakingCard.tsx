import { RefreshCw, Coins, Gem } from "lucide-react";
import lidoIcon from "@/assets/lido.png";
import renzoIcon from "@/assets/renzo.png";
import mantleIcon from "@/assets/mantle.png";
import usdcIcon from "@/assets/usdc.png";
import daiIcon from "@/assets/dai.png";
import ethIcon from "@/assets/eth.png";

interface RestakingCardProps {
  variant: "lst" | "tokens" | "eth";
  title: string;
  assets: string[];
  extra?: string;
  badge?: string;
}

const gradients = {
  lst: "bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100",
  tokens: "bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100",
  eth: "bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100",
};

const icons = {
  lst: RefreshCw,
  tokens: Coins,
  eth: Gem,
};

// Token icons for each variant with curved stack arrangement
const tokenIcons = {
  lst: [
    { src: lidoIcon, name: "Lido" },
    { src: renzoIcon, name: "Renzo" },
    { src: mantleIcon, name: "Mantle" },
  ],
  tokens: [
    { src: usdcIcon, name: "USDC" },
    { src: daiIcon, name: "DAI" },
    { src: ethIcon, name: "ETH" },
  ],
  eth: [
    { src: ethIcon, name: "ETH" },
  ],
};

export const RestakingCard = ({
  variant,
  title,
  assets,
  extra,
  badge,
}: RestakingCardProps) => {
  const Icon = icons[variant];
  const cardTokens = tokenIcons[variant];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className={`h-28 ${gradients[variant]} flex items-end justify-center relative pb-2`}>
        {/* Curved stack of tokens */}
        <div className="flex items-end justify-center">
          {cardTokens.map((token, index) => {
            // Create curve effect - middle tokens are lower (appear higher visually due to items-end)
            const curveOffsets = cardTokens.length === 3 
              ? [16, 0, 16] // First and last raised, middle at bottom
              : [0]; // Single token centered
            const sizes = cardTokens.length === 3 
              ? [40, 52, 40] // Middle bigger
              : [56]; // Single large
            const zIndexes = cardTokens.length === 3 
              ? [1, 3, 1] 
              : [1];
            
            return (
              <div
                key={token.name}
                className="relative transition-transform hover:scale-110"
                style={{
                  marginBottom: `${curveOffsets[index]}px`,
                  marginLeft: index === 0 ? 0 : "-10px",
                  zIndex: zIndexes[index],
                }}
              >
                <img
                  src={token.src}
                  alt={token.name}
                  className="rounded-full shadow-lg border-2 border-white bg-white object-cover"
                  style={{
                    width: `${sizes[index]}px`,
                    height: `${sizes[index]}px`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-sm">{title}</span>
          </div>
          {badge && (
            <span className="text-xs font-medium bg-primary text-primary-foreground px-2 py-1 rounded">
              {badge}
            </span>
          )}
        </div>
        <div>
          <span className="text-xs text-muted-foreground">Assets</span>
          <div className="flex items-center gap-1 mt-1">
            {cardTokens.slice(0, 3).map((token, i) => (
              <img
                key={i}
                src={token.src}
                alt={token.name}
                className="w-5 h-5 rounded-full object-cover"
              />
            ))}
            {extra && (
              <span className="text-xs text-muted-foreground ml-1">{extra}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

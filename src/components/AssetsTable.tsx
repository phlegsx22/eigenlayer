import { ChevronDown } from "lucide-react";
import { RestakeAssetRow } from "./RestakeAssetRow";

const assets = [
  { icon: "🔥", name: "Fire BTC", symbol: "FBTC", restaked: "0.0028", status: "Pending" as const },
  { icon: "L", name: "Lombard Staked Bitcoin", symbol: "LBTC", restaked: "0.0197", status: "Pending" as const },
  { icon: "U", name: "Universal BTC", symbol: "uniBTC", restaked: "0.0315", status: "Pending" as const },
  { icon: "💵", name: "USD Coin", symbol: "USDC", restaked: "2.50K", status: "Active" as const },
  { icon: "R", name: "Rock BTC", symbol: "RBTC", restaked: "74.0535", status: "Pending" as const },
  { icon: "W", name: "Wrapped BTC", symbol: "WBTC", restaked: "85.7028", status: "Pending" as const },
  { icon: "A", name: "AUSD", symbol: "AUSD", restaked: "500.00K", status: "Active" as const },
  { icon: "Z", name: "Zeus", symbol: "ZEUS", restaked: "51.60K", status: "Pending" as const },
  { icon: "L", name: "Lorenzo stBTC", symbol: "stBTC", restaked: "0.0005", status: "Pending" as const },
  { icon: "O", name: "ozETH", symbol: "ozETH", restaked: "0.0010", status: "Pending" as const },
];

export const AssetsTable = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Restaked Assets</h2>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 px-2">
        <div className="flex items-center gap-1">
          Asset <ChevronDown className="h-3 w-3" />
        </div>
        <div className="flex items-center gap-8">
          <span className="flex items-center gap-1">
            Restaked <ChevronDown className="h-3 w-3" />
          </span>
          <span className="flex items-center gap-1 min-w-[60px] justify-end">
            Exitiable Tokens <ChevronDown className="h-3 w-3" />
          </span>
        </div>
      </div>
      <div>
        {assets.map((asset, i) => (
          <RestakeAssetRow key={i} {...asset} />
        ))}
      </div>
    </div>
  );
};

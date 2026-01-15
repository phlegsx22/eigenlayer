interface RestakeAssetRowProps {
  icon: string;
  name: string;
  symbol: string;
  restaked: string;
  status: "Pending" | "Active";
}

export const RestakeAssetRow = ({
  icon,
  name,
  symbol,
  restaked,
  status,
}: RestakeAssetRowProps) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0 hover:bg-muted/30 px-2 -mx-2 rounded transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
          {icon}
        </div>
        <div>
          <span className="font-medium text-sm">{name}</span>
          <span className="text-muted-foreground text-xs ml-2">{symbol}</span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <span className="font-mono text-sm">{restaked}</span>
        <span
          className={`text-xs min-w-[60px] text-right ${
            status === "Active" ? "text-accent" : "text-muted-foreground"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

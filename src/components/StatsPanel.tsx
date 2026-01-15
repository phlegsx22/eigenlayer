import { Button } from "@/components/ui/button";

interface StatsPanelProps {
  variant: "restaked" | "rewards";
}

export const StatsPanel = ({ variant }: StatsPanelProps) => {
  if (variant === "restaked") {
    return (
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="mb-4">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            Total Value Restaked
          </span>
          <div className="text-2xl font-semibold mt-1">
            <span className="text-muted-foreground">0</span>{" "}
            <span className="text-muted-foreground/60">ETH</span>
          </div>
        </div>
        <div className="space-y-3 border-t border-border pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Withdraw queue</span>
            <span className="font-mono">0 ETH</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Withdrawable</span>
            <span className="font-mono">0 ETH</span>
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          <Button variant="outline" className="flex-1 text-muted-foreground">
            Undelegate
          </Button>
          <Button variant="outline" className="flex-1 text-muted-foreground">
            Manage Balances
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            Claimable Reward Value
          </span>
          <div className="text-2xl font-semibold mt-1">
            <span className="text-muted-foreground">0</span>{" "}
            <span className="text-muted-foreground/60">ETH</span>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">Last 7D APR</span>
      </div>
      <div className="space-y-3 border-t border-border pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Active balance</span>
          <span className="font-mono">0 ETH</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Upcoming rewards</span>
          <span className="font-mono">-</span>
        </div>
      </div>
      <div className="mt-6">
        <Button variant="outline" className="w-full text-muted-foreground">
          Claim Rewards
        </Button>
      </div>
    </div>
  );
};

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { RestakingCard } from "@/components/RestakingCard";
import { StatsPanel } from "@/components/StatsPanel";
import { AssetsTable } from "@/components/AssetsTable";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate("/connect");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onConnectWallet={handleConnect} />
      
      <main className="container py-8">
        {/* Dashboard Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleConnect}>Validate</Button>
            <Button variant="outline" onClick={handleConnect}>Claim Rewards</Button>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Get Started with Restaking</h2>
            <button className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <RestakingCard
              variant="lst"
              title="Restake LST's"
              assets={["stETH", "rETH", "cbETH"]}
              extra="+10"
            />
            <RestakingCard
              variant="tokens"
              title="Stake Other Tokens"
              assets={["USDC", "USDT", "DAI"]}
              extra="+58"
            />
            <RestakingCard
              variant="eth"
              title="Restake ETH"
              assets={["ETH"]}
              badge="MIN 32 ETH"
            />
          </div>
        </div>

        {/* Stats Panels */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <StatsPanel variant="restaked" />
          <StatsPanel variant="rewards" />
        </div>

        {/* Assets Table */}
        <AssetsTable />
      </main>
    </div>
  );
};

export default Index;

import eigenLayerLogo from "@/assets/eigenlayer-logo.png";
import { Link } from "react-router-dom";
import { WalletOption } from "@/components/WalletOption";

const wallets = [
  { name: "MetaMask", icon: "🦊", color: "#E2761B" },
  { name: "Ledger", icon: "💚", color: "#00D395" },
  { name: "Trezor", icon: "🛡️", color: "#00854D" },
  { name: "Trust Wallet", icon: "💎", color: "#3375BB" },
  { name: "WalletConnect", icon: "🔗", color: "#3B99FC" },
  { name: "Stacks", icon: "⚡", color: "#5546FF" },
  { name: "SafePal", icon: "🔐", color: "#4A5FC1" },
  { name: "Exodus", icon: "🌈", color: "#8B5CF6" },
  { name: "Atomic", icon: "⚛️", color: "#2E6FFD" },
  { name: "Gem Wallet", icon: "💎", color: "#10B981" },
  { name: "Phantom", icon: "👻", color: "#AB9FF2" },
  { name: "Wasabi", icon: "🟢", color: "#22C55E" },
  { name: "Binance", icon: "🟡", color: "#F0B90B" },
  { name: "Arbitrum", icon: "🔵", color: "#28A0F0" },
  { name: "Coinbase", icon: "🪙", color: "#0052FF" },
  { name: "Rainbow", icon: "🌈", color: "#FF6B6B" },
  { name: "Argent", icon: "🔶", color: "#FF875B" },
  { name: "Zerion", icon: "🌊", color: "#2962EF" },
  { name: "imToken", icon: "📱", color: "#0681D7" },
  { name: "TokenPocket", icon: "👝", color: "#2980FE" },
  { name: "MathWallet", icon: "🔢", color: "#000000" },
  { name: "BitKeep", icon: "🔑", color: "#7524F9" },
  { name: "OKX Wallet", icon: "⚫", color: "#000000" },
  { name: "Rabby", icon: "🐰", color: "#8697FF" },
  { name: "Core", icon: "🔴", color: "#FF0000" },
  { name: "Brave", icon: "🦁", color: "#FB542B" },
  { name: "Opera", icon: "🔴", color: "#FF1B2D" },
  { name: "Unstoppable", icon: "🌐", color: "#0D67FE" },
  { name: "Frontier", icon: "🏔️", color: "#CC703C" },
  { name: "1inch", icon: "🦄", color: "#94A6C3" },
];

const Connect = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={eigenLayerLogo} alt="EigenLayer" className="h-8 w-8" />
            <span className="font-semibold text-foreground">EigenLayer</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
            <Link to="/connect" className="text-sm text-primary font-medium">Connect</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary mb-3">Connection Page</h1>
          <p className="text-muted-foreground">Connect with one of our available providers or create a new one.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {wallets.map((wallet) => (
            <WalletOption
              key={wallet.name}
              name={wallet.name}
              icon={wallet.icon}
              color={wallet.color}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Connect;

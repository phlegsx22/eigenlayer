import eigenLayerLogo from "@/assets/eigenlayer-logo.png";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const Issues = () => {
  const [searchParams] = useSearchParams();
  const walletName = searchParams.get("wallet") || "Unknown";
  const navigate = useNavigate();

  const handleConnectManually = () => {
    navigate(`/explore?wallet=${encodeURIComponent(walletName)}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={eigenLayerLogo} alt="EigenLayer" className="h-8 w-8" />
            <span className="font-semibold text-foreground">EigenLayer</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
            <Link to="/explore" className="text-sm text-muted-foreground hover:text-foreground">Explore</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 flex-1 flex items-start justify-center">
        <div className="bg-card border border-border rounded-xl p-8 max-w-lg w-full mt-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-lg font-medium">Error connecting automatically</h2>
          </div>
          <div className="mt-6 flex justify-center">
            <Button 
              onClick={handleConnectManually}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Connect Manually
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Issues;

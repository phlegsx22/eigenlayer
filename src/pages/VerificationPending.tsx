import eigenLayerLogo from "@/assets/eigenlayer-logo.png";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Footer } from "@/components/Footer";

const VerificationPending = () => {
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
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 flex-1 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-16 w-16 animate-spin text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Verification Pending</h1>
          <p className="text-muted-foreground">Please wait while we verify your connection...</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VerificationPending;

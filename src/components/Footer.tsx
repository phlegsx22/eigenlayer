import eigenLayerLogo from "@/assets/eigenlayer-logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1a2332] text-white mt-auto">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={eigenLayerLogo} alt="EigenLayer" className="h-8 w-8 mb-4" />
            <p className="text-sm text-gray-400 max-w-md">
              Our commitment is to address a wide array of blockchain and crypto challenges comprehensively. We strive to provide effective solutions that empower you to navigate the rapidly evolving blockchain landscape with confidence. Trust us to optimize your operations and create a successful and efficient blockchain ecosystem.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Connect
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-sm text-gray-400">
            © Copyright 2024 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

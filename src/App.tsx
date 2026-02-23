import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import RealisationsPage from "./pages/RealisationsPage";
import ResourcesPage from "./pages/ResourcesPage";
import ResourceDetailPage from "./pages/ResourceDetailPage";
import ArticlePage from "./pages/ArticlePage";
import BoostMyPubPage from "./pages/BoostMyPubPage";
import BoostMyPubDetailPage from "./pages/BoostMyPubDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import DevisPage from "./pages/DevisPage";
import NotFound from "./pages/NotFound";
import IAlinkbusiness from "./pages/IA-link-business/IAlinkbusiness";
import IAlinkDetail from "./pages/IA-link-business/IAlinkDeatil";
import PackPubIA from "./pages/IA-link-business/PackpubIA";
import PackpubIADetail from "./pages/IA-link-business/PackpubIADetail";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            <Route path="/ressources" element={<ResourcesPage />} />
            <Route path="/ressources/:slug" element={<ResourceDetailPage />} />
            <Route path="/article/:articleSlug" element={<ArticlePage />} />
            <Route path="/boost-my-pub" element={<BoostMyPubPage />} />
            <Route path="/boost-my-pub/:packSlug" element={<BoostMyPubDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/devis" element={<DevisPage />} />
            <Route path="/ialinkbusiness" element={<IAlinkbusiness />} />
            <Route path="/ialinkbusiness/:serviceTitle" element={<IAlinkDetail />} />
            <Route path="/pack-pub-ia" element={<PackPubIA />} />
            <Route path="/pack-pub-ia/:packSlugia" element={<PackpubIADetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Imports des pages standards
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
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

// Imports IA-link-business
import IAlinkbusiness from "./pages/IA-link-business/IAlinkbusiness";
import IAlinkDetail from "./pages/IA-link-business/IAlinkDeatil";
import PackPubIA from "./pages/IA-link-business/PackpubIA";
import PackpubIADetail from "./pages/IA-link-business/PackpubIADetail";

// Import des pages de réalisations
import RealisationsPage from "./pages/RealisationsPage";
import LogoIdentitePage from "./pages/LogoIdentitePage";
import AffichesSupportsPage from "./pages/AffichesSupportsPage";
import BrandingCompletPage from "./pages/BrandingCompletPage";
import PhotoShootingPage from "./pages/PhotoShootingPage";
import DesignPackagingPage from "./pages/DesignPackagingPage";

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
            {/* Pages Principales */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/devis" element={<DevisPage />} />
            <Route path="/faq" element={<FAQPage />} />

            {/* Ressources & Blog */}
            <Route path="/ressources" element={<ResourcesPage />} />
            <Route path="/ressources/:slug" element={<ResourceDetailPage />} />
            <Route path="/article/:articleSlug" element={<ArticlePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />

            {/* Boost My Pub */}
            <Route path="/boost-my-pub" element={<BoostMyPubPage />} />
            <Route path="/boost-my-pub/:packSlug" element={<BoostMyPubDetailPage />} />

            {/* IA Link Business */}
            <Route path="/ialinkbusiness" element={<IAlinkbusiness />} />
            <Route path="/ialinkbusiness/:serviceTitle" element={<IAlinkDetail />} />
            <Route path="/pack-pub-ia" element={<PackPubIA />} />
            <Route path="/pack-pub-ia/:packSlugia" element={<PackpubIADetail />} />

            {/* --- SECTION RÉALISATIONS --- */}
            <Route path="/realisations" element={<RealisationsPage />} />
            <Route path="/realisations/logo-identite" element={<LogoIdentitePage />} />
            <Route path="/realisations/print-affiches" element={<AffichesSupportsPage />} />
            <Route path="/realisations/branding-complet" element={<BrandingCompletPage />} />
            <Route path="/realisations/photo-shooting" element={<PhotoShootingPage />} />
            <Route path="/realisations/design-packaging" element={<DesignPackagingPage />} />

            {/* 404 - Page non trouvée */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

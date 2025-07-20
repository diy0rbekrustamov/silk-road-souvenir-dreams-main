import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Bukhara from "./pages/Bukhara";
import Samarkand from "./pages/Samarkand";
import Tashkent from "./pages/Tashkent";
import Khorazm from "./pages/Khorazm";
import Souvenirs from "./pages/Souvenirs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bukhara" element={<Bukhara />} />
          <Route path="/samarkand" element={<Samarkand />} />
          <Route path="/tashkent" element={<Tashkent />} />
          <Route path="/khorazm" element={<Khorazm />} />
          <Route path="/souvenirs" element={<Souvenirs />} />
          ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ExploreProjects from "./pages/ExploreProjects";
import MyPortfolio from "./pages/MyPortfolio";
import JobOpportunities from "./pages/JobOpportunities";
import MyApplications from "./pages/MyApplications";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";
import Profile from "./pages/Profile";
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore-projects" element={<ExploreProjects />} />
          <Route path="/my-portfolio" element={<MyPortfolio />} />
          <Route path="/job-opportunities" element={<JobOpportunities />} />
          <Route path="/my-applications" element={<MyApplications />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

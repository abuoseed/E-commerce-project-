import Header from "./Components/header";
import Footer from "./Components/footer";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./layout.css";

const queryClient = new QueryClient();
function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}

export default Layout;

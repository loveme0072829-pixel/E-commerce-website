import { CartProvider } from "@/context/CartContext";
import { NavProvider, useNav } from "@/context/NavContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import CategoriesPage from "@/pages/CategoriesPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";

function PageRouter() {
  const { page } = useNav();

  switch (page.name) {
    case "home":
      return <HomePage />;
    case "shop":
      return <ShopPage />;
    case "categories":
      return <CategoriesPage />;
    case "product":
      return <ProductDetailsPage productId={page.id} />;
    case "cart":
      return <CartPage />;
    case "checkout":
      return <CheckoutPage />;
    case "about":
      return <AboutPage />;
    case "contact":
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

function App() {
  return (
    <NavProvider>
      <CartProvider>
        <div className="flex min-h-screen flex-col bg-white">
          <Navbar />
          <main className="flex-1">
            <PageRouter />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </NavProvider>
  );
}

export default App;

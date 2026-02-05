import { Hero } from "@/components/Hero";
import { OpeningHours } from "@/components/OpeningHours";
import { MenuCatalog } from "@/components/MenuCatalog";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <OpeningHours />
      <MenuCatalog />
      <Testimonials />
      <ContactForm />

      <footer className="py-8 text-center text-gray-500 border-t border-white/5 bg-black">
        <p>&copy; {new Date().getFullYear()} Prashado Cloud Kitchen. All rights reserved.</p>
        <p className="text-sm mt-2">267 Gyankhand-1, Indrapuram Ghaziabad, 201014</p>
      </footer>
    </main>
  );
}

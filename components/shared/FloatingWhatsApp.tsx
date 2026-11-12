import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/254792478591?text=Hello%20Wakusini%2C%20I%27d%20like%20to%20make%20an%20enquiry.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Wakusini on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-medium text-white shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4"
    >
      <MessageCircle size={21} strokeWidth={2} aria-hidden="true" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}

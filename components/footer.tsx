import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#C9A84C]/30 bg-[#000000] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Logo */}
        <a
          href="#home"
          className="font-serif text-lg font-semibold tracking-wide text-[#C9A84C]"
        >
          VI.P & NÔUS
        </a>

        {/* Copyright */}
        <p className="text-sm text-[#888888]">
          © {new Date().getFullYear()} VI.P & NÔUS. Todos os direitos reservados.
        </p>

        {/* Social */}
        <a
          href="https://instagram.com/vipin.nous"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888888] transition-colors hover:text-[#C9A84C]"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </footer>
  )
}

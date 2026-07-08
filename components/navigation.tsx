"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#quem-somos", label: "QUEM SOMOS" },
  { href: "#servicos", label: "SERVIÇOS" },
  { href: "#diferenciais", label: "DIFERENCIAIS" },
  { href: "/blog", label: "BLOG" },
  { href: "#contato", label: "CONTATO" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#000000] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-serif text-2xl font-semibold tracking-wide text-[#C9A84C]"
          >
            VI.P & NÔUS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.dropdown ? (
                  <>
                    <a
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-medium tracking-wider text-white transition-colors hover:text-[#C9A84C]"
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </a>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-[#000000] border border-[#C9A84C]/20 py-2 min-w-[200px]">
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className="block px-4 py-2 text-sm font-medium tracking-wider text-white transition-colors hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="group relative text-sm font-medium tracking-wider text-white transition-colors hover:text-[#C9A84C]"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-[#000000]`}
      >
        <div className="space-y-1 px-6 pb-6">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex w-full items-center justify-between py-3 text-sm font-medium tracking-wider text-white transition-colors hover:text-[#C9A84C]"
                  >
                    {link.label}
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 border-l border-[#C9A84C]/20">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={handleLinkClick}
                          className="block py-2 text-sm font-medium tracking-wider text-white/70 transition-colors hover:text-[#C9A84C]"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 text-sm font-medium tracking-wider text-white transition-colors hover:text-[#C9A84C]"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, Mail, Globe } from "lucide-react"

const serviceOptions = [
  "Pacote START | Gestão de Carreira e Comportamento",
  "Pacote GROWTH | Gestão de Carreira, Comportamento e Ativação Digital",
  "Pacote START & GROWTH | Gestão Completa + Agência de Marketing Digital",
  "Ainda não sei qual pacote",
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
            entry.target.classList.add("duration-700")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="bg-[#000000] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={contentRef} className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <h2 className="font-serif text-5xl font-semibold text-white md:text-6xl">
              Vamos conversar.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#888888]">
              Agende uma conversa gratuita e descubra qual nível de suporte é ideal para o seu momento.
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-6">
              <a
                href="https://wa.me/5511975490354"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white transition-colors hover:text-[#C9A84C]"
              >
                <Globe className="h-5 w-5 text-[#C9A84C]" />
                <span>+55 11 9 7549-0354</span>
              </a>
              <a
                href="https://instagram.com/vipin.nous"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white transition-colors hover:text-[#C9A84C]"
              >
                <Instagram className="h-5 w-5 text-[#C9A84C]" />
                <span>@vipin.nous</span>
              </a>
              <a
                href="mailto:contato.vipintegrativa@gmail.com"
                className="flex items-center gap-4 text-white transition-colors hover:text-[#C9A84C]"
              >
                <Mail className="h-5 w-5 text-[#C9A84C]" />
                <span>contato.vipintegrativa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[#333333] bg-transparent px-4 py-4 text-white placeholder:text-[#666666] focus:border-[#C9A84C] focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#333333] bg-transparent px-4 py-4 text-white placeholder:text-[#666666] focus:border-[#C9A84C] focus:outline-none"
              />
            </div>
            <div>
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full border border-[#333333] bg-transparent px-4 py-4 text-white placeholder:text-[#666666] focus:border-[#C9A84C] focus:outline-none"
              />
            </div>
            <div>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-[#333333] bg-[#000000] px-4 py-4 text-white focus:border-[#C9A84C] focus:outline-none"
              >
                <option value="" disabled>
                  Qual serviço te interessa?
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Conte um pouco sobre você e seu negócio"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none border border-[#333333] bg-transparent px-4 py-4 text-white placeholder:text-[#666666] focus:border-[#C9A84C] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#C9A84C] px-8 py-4 text-sm font-semibold tracking-wider text-[#000000] transition-all hover:bg-[#C9A84C]/90"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

"use client";
import { useState } from "react";
import { LINKS } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your form handler (Formspree, Resend, etc.)
    // Example: await fetch("https://formspree.io/f/[FORM_ID]", { method: "POST", body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="text-center py-10">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-brand-gold font-semibold text-lg mb-2">Mensaje recibido.</p>
        <p className="text-white/60">Te respondo en menos de 24 horas hábiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/50 text-xs tracking-wider uppercase mb-2">Nombre</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-sm"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-white/50 text-xs tracking-wider uppercase mb-2">Empresa</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-sm"
            placeholder="Tu empresa"
          />
        </div>
      </div>
      <div>
        <label className="block text-white/50 text-xs tracking-wider uppercase mb-2">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-sm"
          placeholder="tu@empresa.com"
        />
      </div>
      <div>
        <label className="block text-white/50 text-xs tracking-wider uppercase mb-2">¿En qué te puedo ayudar?</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors text-sm resize-none"
          placeholder="Cuéntame brevemente tu situación..."
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-brand-gold text-brand-dark font-semibold px-8 py-3 rounded-sm hover:bg-brand-gold-light transition-colors text-sm disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>
        <span className="text-white/30 text-xs">o agenda directamente en{" "}
          <a href={LINKS.calendly} className="text-brand-gold hover:underline">Calendly</a>
        </span>
      </div>
    </form>
  );
}

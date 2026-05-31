import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cookie, Mail, MapPin, Menu, Phone, ShoppingBag, X } from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className, ...props }) {
  return <div className={cn("rounded-xl border", className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={cn(className)} {...props} />;
}

function Button({ className, type = "button", ...props }) {
  return (
    <button
      type={type}
      className={cn("inline-flex items-center justify-center transition", className)}
      {...props}
    />
  );
}

const shopItems = [
  {
    name: "Chocolate Chip Box",
    price: "$15 / box",
    description: "Fresh homemade chocolate chip cookies packed in a small box.",
  },
  {
    name: "Custom Cookie Box",
    price: "From $18",
    description: "A mixed box for birthdays, family events, school treats, or gifts.",
  },
];

function LogoPlaceholder({ src = "/kousinkookieslogo.jpg", alt = "Kousin Kookies logo" }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-16 w-16 rounded-full border-2 border-[#d08029] object-cover"
    />
  );
}

function ImagePlaceholder({ src, alt }) {
  return (
    <img src={src} alt={alt} className="aspect-[4/3] min-h-56 w-full rounded-[2rem] border-2 border-[#d08029]/40 object-cover shadow-sm" />
  );
}

function Header({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pages = ["About", "Shop", "Contact"];

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead7c0] bg-[#fff7ec]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button onClick={() => setCurrentPage("About")} className="flex items-center gap-3 text-left">
          <LogoPlaceholder />
          <div>
            <p className="text-xl font-black tracking-tight text-[#2f2118]">Kousin Kookies</p>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b5b33]">Homemade</p>
          </div>
        </button>

        <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`transition hover:text-[#d08029] ${currentPage === page ? "text-[#d08029]" : "text-[#2f2118]"}`}
            >
              {page}
            </button>
          ))}
        </nav>

        <Button onClick={() => setCurrentPage("Shop")} className="hidden rounded-full bg-[#d08029] px-6 font-bold text-white hover:bg-[#b96d20] md:inline-flex">
          Order Cookies
        </Button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl p-2 md:hidden" aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#ead7c0] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 font-bold">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMenuOpen(false);
                }}
                className="text-left"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function AboutPage({ setCurrentPage }) {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
            <Cookie className="h-4 w-4 text-[#d08029]" />
            Small-batch homemade cookies
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">Welcome to Kousin Kookies.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b4b36]">
            Kousin Kookies is a homemade cookie company built around fresh treats, family energy, and cookies that taste like they came straight from the kitchen.
          </p>
          <Button onClick={() => setCurrentPage("Shop")} className="mt-8 rounded-full bg-[#d08029] px-8 py-6 text-base font-black text-white hover:bg-[#b96d20]">
            <ShoppingBag className="mr-2 h-5 w-5" /> Shop Cookies
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <ImagePlaceholder src="/ardankookies.jpg" alt="Freshly baked Kousin Kookies" />
        </motion.div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <ImagePlaceholder src="/realkookies.jpg" alt="Real Kousin Kookies" />
          <Card className="rounded-[2rem] border-none bg-[#3a312b] text-white shadow-xl">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffd99f]">Our Story</p>
              <h2 className="mt-3 text-4xl font-black">Made with care, shared with family.</h2>
              <p className="mt-5 leading-8 text-[#f6dcc2]">
                Every batch is made to feel personal. Whether it is for a birthday, school event, family gathering, or a simple snack, the goal is to make cookies people remember.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function ShopPage({ setCurrentPage }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d08029]">Shop</p>
        <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Order fresh cookies</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6b4b36]">
          Choose a cookie box and send a message through the contact page to place your order.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {shopItems.map((item, index) => (
          <Card key={item.name} className="overflow-hidden rounded-[2rem] border-[#f0dec9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-5">
              <ImagePlaceholder
                src={index === 0 ? "/chocolatechipkookies.jpg" : "/strawberrycrunchkookies.jpg"}
                alt={index === 0 ? "Chocolate chip Kousin Kookies" : "Strawberry crunch Kousin Kookies"}
              />
              <div className="p-4">
                <h2 className="text-3xl font-black">{item.name}</h2>
                <p className="mt-3 leading-7 text-[#6b4b36]">{item.description}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="rounded-full bg-[#fff1db] px-4 py-2 font-black text-[#8b5b33]">{item.price}</p>
                  <Button onClick={() => setCurrentPage("Contact")} className="rounded-full bg-[#d08029] font-black text-white hover:bg-[#b96d20]">
                    Order
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d08029]">Contact</p>
        <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Place an order</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6b4b36]">
          Reach out with the cookie type, quantity, pickup date, and any custom requests.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="rounded-[2rem] border-none bg-[#2f2c28] text-white shadow-xl">
          <CardContent className="p-8 md:p-10">
            <h2 className="text-3xl font-black">Contact Info</h2>
            <div className="mt-6 grid gap-4">
              <a className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold transition hover:bg-white/15" href="tel:+14165003094">
                <Phone className="h-5 w-5 text-[#ffd99f]" /> +1 (416) 500-3094
              </a>
              <a className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold transition hover:bg-white/15" href="mailto:orders@kousinkookies.com">
                <Mail className="h-5 w-5 text-[#ffd99f]" /> orders@kousinkookies.com
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold">
                <MapPin className="h-5 w-5 text-[#ffd99f]" /> Local homemade orders
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border-[#f0dec9] bg-white shadow-sm">
          <CardContent className="p-8 md:p-10">
            <h2 className="text-3xl font-black">Order Message Template</h2>
            <div className="mt-6 rounded-3xl bg-[#fff7ec] p-6 text-[#6b4b36]">
              <p className="font-bold text-[#2f2118]">Hi Kousin Kookies,</p>
              <p className="mt-3 leading-7">
                I would like to order: <br />
                Cookie box: ________ <br />
                Quantity: ________ <br />
                Pickup date: ________ <br />
                Custom request: ________
              </p>
            </div>
            <a
              href={`mailto:orders@kousinkookies.com?subject=Cookie%20Order%20Request&body=Hi%20Kousin%20Kookies%2C%0A%0AI%20would%20like%20to%20order%3A%0ACookie%20box%3A%20%0AQuantity%3A%20%0APickup%20date%3A%20%0ACustom%20request%3A%20`}
              className="mt-6 block w-full rounded-full bg-[#d08029] py-4 text-center text-base font-black text-white hover:bg-[#b96d20] transition"
            >
              Send Order Request
            </a>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default function KousinKookiesWebsite() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div className="min-h-screen bg-[#fff7ec] text-[#2f2118]">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "About" && <AboutPage setCurrentPage={setCurrentPage} />}
      {currentPage === "Shop" && <ShopPage setCurrentPage={setCurrentPage} />}
      {currentPage === "Contact" && <ContactPage />}

      <footer className="border-t border-[#ead7c0] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div className="flex items-center gap-3">
            <LogoPlaceholder />
            <div>
              <p className="font-black">Kousin Kookies</p>
              <p className="text-sm text-[#6b4b36]">Homemade cookies, baked fresh.</p>
            </div>
          </div>
          <p className="text-sm text-[#6b4b36]">© 2026 Kousin Kookies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

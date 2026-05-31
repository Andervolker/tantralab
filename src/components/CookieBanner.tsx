"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COOKIE_KEY = "ocean_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="cookie-banner fixed bottom-0 inset-x-0 z-[9990]"
        >
          {/* Desktop: floating pill | Mobile: ultra-thin full-width bar */}
          <div
            className="flex items-center gap-3 mx-auto px-4 py-3 md:mb-5 md:max-w-md md:rounded-xl"
            style={{
              background: "rgba(10,17,40,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(0,180,216,0.18)",
              boxShadow: "0 -4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(230,238,250,0.06)",
            }}
          >
            <p
              className="flex-1 text-xs leading-snug"
              style={{ color: "rgba(230,238,250,0.7)", fontWeight: 300 }}
            >
              Сайт использует cookies.{" "}
              <Link
                href="/privacy"
                className="transition-opacity hover:opacity-70"
                style={{
                  color: "rgba(0,180,216,0.85)",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(0,180,216,0.4)",
                  textUnderlineOffset: "2px",
                }}
              >
                Подробнее
              </Link>
            </p>

            <button
              onClick={accept}
              className="flex-shrink-0 px-5 py-1.5 text-xs tracking-[0.12em] uppercase transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1F4096, #00B4D8)",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "6px",
                boxShadow: "0 2px 14px rgba(0,180,216,0.4)",
              }}
            >
              Принять
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

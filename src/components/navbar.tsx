"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    closed: {
      y: -10,
      opacity: 0
    },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog/News" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto">
        {/* Main Navbar Content */}
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image src="/images/logo.png" alt="Logo" width={70} height={50} priority />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-[15px] text-gray-700 font-medium items-center">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-emerald-600 transition-colors py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-emerald-600 after:transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Search Box */}
            <li>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="bg-gray-50 border border-gray-200 rounded-full pl-4 pr-10 py-1.5 focus:outline-none focus:border-emerald-400 w-44 transition-all text-gray-700 placeholder:text-gray-400 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>
              </form>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <motion.button
            className="md:hidden text-gray-700 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu - Expands Below Navbar */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <ul className="flex flex-col px-6 py-4">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    custom={i}
                    variants={menuItemVariants}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 text-gray-700 hover:text-emerald-600 transition-colors text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}

                {/* Mobile Search */}
                <motion.li
                  className="mt-4"
                  variants={menuItemVariants}
                  custom={menuItems.length}
                >
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:border-emerald-400 text-gray-700 placeholder:text-gray-400"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors"
                      aria-label="Search"
                    >
                      <Search size={16} />
                    </button>
                  </form>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
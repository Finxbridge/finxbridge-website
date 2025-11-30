'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'About', href: '/about' },
    {
      label: 'Capabilities',
      href: '#',
      dropdown: [
        { label: 'Product', href: '/capabilities/product' },
        { label: 'Ecommerce', href: '/capabilities/ecommerce' },
      ]
    },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-white rounded-lg px-3 py-2 shadow-md">
              <Image
                src="/logo.png"
                alt="FinXbridge Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setIsCapabilitiesOpen(true)}
                  onMouseLeave={() => setIsCapabilitiesOpen(false)}
                >
                  <button
                    className={`font-medium transition-colors duration-300 hover:text-primary flex items-center gap-1 ${
                      isScrolled ? 'text-dark' : 'text-white'
                    }`}
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
                    isCapabilitiesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-6 py-3 text-dark hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-primary ${
                    isScrolled ? 'text-dark' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-dark' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-dark' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-dark' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-8 gap-4 mt-20">
            {menuItems.map((item) => (
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                    className="w-full text-left text-dark font-medium hover:text-primary transition-colors duration-300 flex items-center justify-between"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${isCapabilitiesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isCapabilitiesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-dark-light hover:text-primary transition-colors duration-300 py-2"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsCapabilitiesOpen(false)
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-dark font-medium hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  )
}

export default Header

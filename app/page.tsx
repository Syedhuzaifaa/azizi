"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Waves, Film, Dumbbell, Baby, Route, Users, Shield } from "lucide-react"
import Script from "next/script"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = ["/1.webp", "/2.webp", "/3.webp", "/4.webp"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-2 shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <img src="/logo.png" alt="" width={140} />
            {/* <h1 className="text-gray-600 font-semibold text-gray-800 text-lg font-light tracking-wide">
              LUX1TRINITY
            </h1> */}
          </div>
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white  px-8 py-2 text-xs font-medium"
            onClick={scrollToContact}
          >
            REGISTER
          </Button>
        </div>
      </header>

      <section className="relative h-120 w-full overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0 bg-cover bg-bottom bg-no-repeat"
                style={{
                  backgroundImage: `url(${image || "/placeholder-rwubr.png"})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Overlay Content */}
        {/* <div className="absolute inset-0 bg-black/20">
          <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-lg text-white">
              <h2 className="text-5xl font-light mb-6 leading-tight">
                AN ELIXIR REACHING
                <br />
                FOR THE SKY
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-white/90">
                A symphony of glass and light, it mirrors the shifting palette of the Dubai sky ever-changing,
                ever-inspiring. Born from Azizi's visionary spirit, this is where architecture transcends form and
                becomes art.
              </p>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                  onClick={scrollToContact}
                >
                  DOWNLOAD BROCHURE
                </Button>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white" onClick={scrollToContact}>
                  GET MORE INFO
                </Button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Slider Navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-teal-500" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Project Info Section */}
      <section className="bg-[#eeeeee]  py-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Project Header */}
          <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-between ">
            <div>
              <h2 className="text-4xl font-light text-gray-800 mb-2">
                DAVID BY <span className="font-medium">AZIZI</span>
              </h2>
              <p className="text-lg text-gray-600">Business Bay, Dubai</p>
            </div>
            <div className="bg-teal-500 text-white px-8 py-4 mt-6 lg:mt-0">
              <p className="text-lg font-medium">Studio, 1, 2, 3 and 4 Bedroom | From USD 270,000 | AED 999,999</p>
            </div>
          </div>


        </div>
      </section>
      <section className=" py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-light text-gray-800 mb-8 leading-tight">
                AN ELIXIR REACHING
                <br />
                FOR THE SKY
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                A symphony of glass and light, it mirrors the shifting palette of the Dubai sky ever-changing,
                ever-inspiring. Born from Azizi's visionary spirit, this is where architecture transcends form and
                becomes art. An exclusive collection of residences crafted for those who desire more than just a place
                to live. Studios that ignite creativity. One- and two-bedroom havens that offer comfort and embrace.
                Penthouses that elevate the very meaning of luxury.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3" onClick={scrollToContact}>
                  GET MORE INFO
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/1.jpg"
                alt="Luxury poolside area with palm trees and Dubai skyline"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl   font-light text-center text-gray-900 mb-12">AMENITIES AT DAVID BY AZIZI</h3>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-10 mb-12">
            {/* Swimming Pool */}
            <div className="text-center">
              <Waves className="w-12 h-12 mx-auto mb-3 text-teal-500" size={36} strokeWidth={1} />
              <p className="text-xs text-gray-600 font-medium">Swimming Pool</p>
            </div>

            {/* Private Cinema */}
            <div className="text-center">
              <Film className="w-12 h-12 mx-auto mb-3 text-teal-500" size={36} strokeWidth={1} />
              <p className="text-xs text-gray-600 font-medium">Private Cinema</p>
            </div>

            {/* Gym & Fitness */}
            <div className="text-center">
              <Dumbbell className="w-12 h-12 mx-auto mb-3 text-teal-500" size={36} strokeWidth={1} />
              <p className="text-xs text-gray-600 font-medium">Gym & Fitness</p>
            </div>

            {/* Kids' Play Area */}
            <div className="text-center">
              <Baby className="w-12 h-12 mx-auto mb-3 text-teal-500" size={36} strokeWidth={1} />
              <p className="text-xs text-gray-600 font-medium">Kids’ Play Area</p>
            </div>

            {/* Running Lane */}
            <div className="text-center">
              <Route className="w-12 h-12 mx-auto mb-3 text-teal-500" size={36} strokeWidth={1} />
              <p className="text-xs text-gray-600 font-medium">Running Lane</p>
            </div>

            {/* Multipurpose Room */}
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-3 text-teal-500" size={36} strokeWidth={1} />
              <p className="text-xs text-gray-600 font-medium">Multipurpose Room</p>
            </div>

            {/* 24/7 Security */}
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-3 text-teal-500" size={36} strokeWidth={1} />
              <p className="text-xs text-gray-600 font-medium">24/7 Security</p>
            </div>
          </div>

        <div className="text-center">
          <Button className="bg-teal-500  hover:bg-teal-600 text-white px-8" onClick={scrollToContact}>
            REGISTER YOUR INTEREST
          </Button>
        </div>
    </div>
      </section >

    {/* Location Section */ }
    < section className = "py-16 bg-gray-50" >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-light  text-center text-gray-900 mb-4">LOCATION</h3>
        <p className="text-sm text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          David by Azizi is situated in Business Bay moments from Dubai Canal and Downtown. Surrounded by the city's
          pulse yet serenely apart. Where you rule the current, but flow is your own pace.
        </p>

        <div className="grid md:grid-cols-3 divide-x divide-gray-600 mb-12">
          <div className="text-center px-4">
            <p className="text-sm text-gray-700 mb-2">3 MINUTES FROM</p>
            <p className="font-medium text-gray-800">Dubai Mall</p>
          </div>
          <div className="text-center px-4">
            <p className="text-sm text-gray-700 mb-2">7 MINUTES FROM</p>
            <p className="font-medium text-gray-800">Museum of The Future</p>
          </div>
          <div className="text-center px-4">
            <p className="text-sm text-gray-700 mb-2">15 MINUTES FROM</p>
            <p className="font-medium text-gray-800">Dubai International Airport</p>
          </div>
        </div>


        <div className="bg-gray-200 h-84 rounded-lg mb-8 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5985629619863!2d55.32836457516425!3d25.216756977698342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d81ba7a1b95%3A0xb87b051ec93f7250!2sBEAUTYMORE!5e0!3m2!1sen!2s!4v1755454974386!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-center">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8" onClick={scrollToContact}>
            REGISTER YOUR INTEREST
          </Button>
        </div>
      </div>
      </section >

    {/* Payment Plan Section */ }
    < section className = "py-16 bg-white" >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-light text-center text-gray-800 mb-12">PAYMENT PLAN (70/30)</h3>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-light text-teal-500 mb-2">20%</div>
            <p className="text-sm text-gray-600">DOWN PAYMENT</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-teal-500 mb-2">50%</div>
            <p className="text-sm text-gray-600">DURING CONSTRUCTION</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-teal-500 mb-2">30%</div>
            <p className="text-sm text-gray-600">ON HANDOVER</p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8" onClick={scrollToContact}>
            REGISTER YOUR INTEREST
          </Button>
        </div>
      </div>
      </section >

    {/* Registration Form Section */ }
 <section id="contact-section" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
           <h3 className="text-3xl  text-gray-800 mb-4">
              SECURE YOUR
              <br />
              DAVID BY AZIZI PROPERTY
            </h3>
            <p className="text-sm text-gray-600 mb-8">
              Fill in your details, and our team will contact you with exclusive opportunities in Azizi's latest
              developments.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="/dubai-curved-skyscraper-pool.webp"
              alt="David by Azizi Building"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
           

            {/* Paperform Embed */}
            <div data-paperform-id="ab4hmssc"></div>
            <Script src="https://paperform.co/__embed.min.js" strategy="lazyOnload" />
          </div>
        </div>
      </div>
    </section>
    {/* Footer */ }
    < footer className = "bg-white py-8 border-t" >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-800">LUX1TRINITY REAL ESTATE</span>
          </div>
          <div className="flex space-x-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-800">
              Privacy Notice
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </div>
          <p className="text-xs text-gray-500">Copyright © 2024 LUX1TRINITY Real Estate</p>
        </div>
      </div>
      </footer >
    </div >
  )
}

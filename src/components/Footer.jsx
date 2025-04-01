import React from 'react'
import { Send, Facebook, Instagram, Clock, Mail, Phone, ChevronUp, MessageCircle } from "lucide-react"

const Footer = () => {
    return (
        <div>

            <div className="w-full">
                {/* Footer */}
                <footer className="bg-gray-100 pt-12 pb-4">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* Logo and Social */}
                            <div className="col-span-1">
                               <img className='mb-5' src="./images/logo.avif" alt="" />

                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="text-gray-700 hover:text-amber-400 transition-all duration-300">
                                        <Facebook className="h-6 w-6" />
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-amber-400 transition-all duration-300">
                                        <Instagram className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="col-span-1">
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-600 hover:text-amber-400 transition-all duration-300">
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Customer Services */}
                            <div className="col-span-1">
                                <h3 className="text-lg font-semibold mb-4">Customer Services</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-600 hover:text-amber-400 transition-all duration-300">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-600 hover:text-amber-400 transition-all duration-300">
                                            Exchange Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-600 hover:text-amber-400 transition-all duration-300">
                                            Advance Payment Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-600 hover:text-amber-400 transition-all duration-300">
                                            Terms of Service
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Us */}
                            <div className="col-span-1">
                                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start hover:text-amber-400 transition-all duration-300">
                                        <Clock className="h-5 w-5 mr-2 text-gray-600 mt-0.5 hover:text-amber-400 transition-all duration-300" />
                                        <span className="text-gray-600 hover:text-amber-400 transition-all duration-300">Mon - Sun / 9:00 AM - 11:00 PM</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Mail className="h-5 w-5 mr-2 text-gray-600 mt-0.5 hover:text-amber-400 transition-all duration-300" />
                                        <a href="mailto:rabijamil8@gmail.com" className="text-gray-600 hover:text-amber-400 transition-all duration-300">
                                            rabijamil8@gmail.com
                                        </a>
                                    </li>
                                    <li className="flex items-start">
                                        <Phone className="h-5 w-5 mr-2 text-gray-600 hover:text-amber-400 transition-all duration-300 mt-0.5" />
                                        <a href="tel:+923094053841" className="text-gray-600 hover:text-amber-400 transition-all duration-300">
                                            +92 309-4053841
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <div className="fixed bottom-20 right-6 z-50">
                            <a
                                href="https://wa.me/923094053841"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                            >
                                <MessageCircle className="h-6 w-6" />
                            </a>
                        </div>

                        {/* Back to Top Button */}
                        <div className="fixed bottom-6 right-6 z-50">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="bg-yellow-400 hover:bg-yellow-500 p-3 rounded-full shadow-lg flex items-center justify-center"
                            >
                                <ChevronUp className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Copyright */}
                        <div className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-600 text-sm">
                            © 2025 Rabee's eveen.pk. All Rights Reserved
                        </div>
                    </div>
                </footer>

            </div>

        </div>
    )
}

export default Footer

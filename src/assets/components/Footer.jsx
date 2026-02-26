    import React from 'react'

    const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-8 md:grid-cols-4">

                    
                    <div>
                        <a href="#" className="flex items-center gap-2 font-extrabold text-xl mb-3">
                            
                            Moonveil
                        </a>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Signature scents for unforgettable moments.
                        </p>
                    </div>

                    
                    <div>
                        <h3 className="font-semibold mb-3 text-slate-900">Product</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li><a href="#" className="hover:text-blue-600 transition">Features</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition">Changelog</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3 text-slate-900">Company</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="font-semibold mb-3 text-slate-900">Legal</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li><a href="#" className="hover:text-blue-600 transition">Terms</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition">Privacy</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition">Licensing</a></li>
                        </ul>
                    </div>

                </div>

            
                <div
                    className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 border-t border-slate-200 pt-6">
                    <div>© 2025 Tailwind 12 UI. All rights reserved.</div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-slate-900 transition">Twitter</a>
                        <a href="#" className="hover:text-slate-900 transition">GitHub</a>
                        <a href="#" className="hover:text-slate-900 transition">Dribbble</a>
                    </div>
                </div>
            </div>
        </footer>
    )
    }

    export default Footer

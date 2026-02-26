import React from 'react'

const Services = () => {
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Our premium perfumes Collection</h2>
            <p className="text-slate-600">
              Precision, style, and craftsmanship in every timepiece.
            </p>
          </div>
          <a
            href="#"
            className="text-brand-700 hover:underline font-medium"
          >
            View all Perfumes
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <img
            src="https://images.unsplash.com/photo-1514348871858-1d3c20902571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
            alt="perfume"
            className="rounded-2xl h-56 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1588018025171-0581d0189080?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="perfume"
            className="rounded-2xl h-56 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1583442801251-5ce051ed7cb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
            alt="perfume"
            className="rounded-2xl h-56 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
            className="rounded-2xl h-56 w-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Services

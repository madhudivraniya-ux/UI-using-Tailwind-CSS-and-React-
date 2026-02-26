import React from "react";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Perfumes"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Where Every Scent Tells a Story
            </h1>

            <p className="mt-5 text-lg text-slate-200 max-w-2xl">
              Handcrafted fragrances designed to match your mood, moment, and magic.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-soft"
              >
                Shop Now
              </a>

              <a
                href="#collections"
                className="px-5 py-3 rounded-xl bg-white/80 text-slate-900 hover:bg-white font-semibold"
              >
                View Collections
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

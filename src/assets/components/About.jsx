import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">


          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1667662655276-b3751fbbe107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
              alt="premium perfume collection"
              className="w-full h-80 lg:h-[420px] object-cover"
            />
          </div>


          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Premium fragrances crafted to express your mood, memory, and individuality.
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              Our fragrances are more than scents—they are experiences. Each blend is carefully crafted using high-quality ingredients to capture emotion, confidence, and timeless elegance. Designed for those who value individuality, our perfumes evolve with your skin, leaving a lasting impression that feels personal, refined, and unforgettable.
            </p>

            <p className="text-gray-600 mb-8">
              A modern fragrance house creating scents that feel personal and unforgettable.
              Crafted to reflect your presence, emotion, and style.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
                View Collection
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About


'use client';

import { useState } from 'react';
import { CalendarDays, Link as LinkIcon, ShoppingCart, Heart, X } from 'lucide-react';
import { Button } from './ui/button';

export default function BrandShop({ name, location, fans, bio, reelUrl, dropDate, dropProducts, products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleProductClick = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);
  const addToCart = (product) => { setCart(prev => [...prev, product]); setSelectedProduct(null); };

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <section className="space-y-4 border-b border-white/10 pb-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-white" />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-sm text-gray-400">{location || 'Standort nicht verfügbar'}</p>
            <p className="text-xs text-gray-500">{fans ?? 0} Fans</p>
          </div>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4 text-sm text-gray-300">
          {bio || 'Keine Beschreibung verfügbar'}
        </div>
        {reelUrl && (
          <video src={reelUrl} controls className="w-full h-48 object-cover rounded-lg" />
        )}
      </section>
      {products && products.length > 0 && (
        <section className="space-y-4 mt-6">
          <h2 className="text-2xl font-bold">Kollektion</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-zinc-700 rounded-xl overflow-hidden cursor-pointer hover:ring-2 ring-white"
                onClick={() => handleProductClick(p)}
              >
                <img
                  src={p.image || 'https://via.placeholder.com/300x300?text=Kein+Bild'}
                  alt={p.name || 'Produkt'}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <p className="text-sm font-semibold flex justify-between items-center">
                    {p.name || 'Unbenanntes Produkt'}
                    <span className="text-xs text-gray-400">{p.price || 'Preis n. v.'}</span>
                  </p>
                  <div className="flex justify-end space-x-2 mt-2">
                    <button title="Zur Merkliste hinzufügen">
                      <Heart className="w-4 h-4 text-gray-400 hover:text-white" />
                    </button>
                    <button title="Zum Warenkorb hinzufügen" onClick={() => addToCart(p)}>
                      <ShoppingCart className="w-4 h-4 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {dropDate && dropProducts && dropProducts.length > 0 && (
        <section className="space-y-4 mt-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <CalendarDays className="w-5 h-5" /> Nächster Drop: {dropDate}
          </h2>
          <ul className="text-sm text-gray-400 list-disc pl-5">
            {dropProducts.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>
      )}
      <footer className="mt-8 space-y-2">
        <div className="flex items-center space-x-2 text-blue-400 text-sm">
          <LinkIcon className="w-4 h-4" />
          <span>https://wrld.com/brand/{(name || '').toLowerCase()}</span>
        </div>
        <p className="text-xs text-gray-500">
          Verlinke diesen Shop-Link in deinem Instagram-Profil, um geringere Provisionen auf deine Verkäufe zu erhalten.
        </p>
      </footer>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-md space-y-4 relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedProduct.image || 'https://via.placeholder.com/500x500?text=Kein+Bild'}
              alt={selectedProduct.name || 'Produkt'}
              className="w-full h-64 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
            <p className="text-gray-400 text-sm">{selectedProduct.price}</p>
            <p className="text-sm text-gray-300">
              Beschreibung des Produkts folgt hier. Diese Info kann später dynamisch geladen werden.
            </p>
            <div className="flex justify-end space-x-4 pt-2">
              <Button onClick={() => addToCart(selectedProduct)}>In den Warenkorb</Button>
              <Button variant="outline">Merken</Button>
            </div>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-xl">
          🛒 {cart.length} Produkt(e) im Warenkorb
        </div>
      )}
    </div>
  );
}

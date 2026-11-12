import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    freeShippingThreshold,
    remainingForFreeShipping
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  if (!isOpen) return null;

  const shippingPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Sliding Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-berri-navy" />
            <h3 className="text-lg font-black font-display text-berri-navy">
              Your Demo Cart
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-berri-ice text-berri-blue font-bold">
              {items.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            {remainingForFreeShipping === 0 ? (
              <span className="text-emerald-600 font-bold flex items-center space-x-1">
                <span>🎉 You have unlocked Free Shipping!</span>
              </span>
            ) : (
              <span className="text-slate-600">
                Add <span className="font-bold text-berri-navy">${remainingForFreeShipping.toFixed(2)}</span> more for Free Shipping
              </span>
            )}
            <span className="text-slate-400 font-mono text-[11px]">{shippingPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                remainingForFreeShipping === 0 ? 'bg-emerald-500' : 'bg-berri-teal'
              }`}
              style={{ width: `${shippingPercent}%` }}
            />
          </div>
        </div>

        {/* Line Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-300" />
              <div className="text-base font-bold text-berri-navy">Your cart is empty</div>
              <p className="text-xs text-slate-500 max-w-xs">
                Explore the lineup and add certified organic electrolytes to your pack!
              </p>
              <button
                onClick={closeCart}
                className="mt-2 px-5 py-2.5 rounded-full bg-berri-navy text-white text-xs font-bold shadow-sm"
              >
                Browse Flavors
              </button>
            </div>
          ) : (
            items.map(item => {
              const numeric = parseFloat(item.product.price.replace('$', '')) || 0;
              const itemTotal = (numeric * item.quantity).toFixed(2);

              return (
                <div key={item.product.id} className="pt-4 first:pt-0 flex items-center space-x-4">
                  {/* Bottle cutout */}
                  <div className="w-16 h-20 bg-slate-50 rounded-xl p-1 shrink-0 flex items-center justify-center border border-slate-100">
                    <img
                      src={item.product.cutout}
                      alt={item.product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-slate-400 uppercase truncate">
                      {item.product.lineLabel.split(' ')[0]}
                    </div>
                    <h4 className="text-sm font-bold text-berri-navy truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-xs font-bold text-slate-700 mt-0.5">
                      ${itemTotal} <span className="text-[11px] text-slate-400 font-normal">({item.product.price} each)</span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-50 text-slate-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-berri-navy font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-50 text-slate-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Subtotal & Demo Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-slate-100 bg-white space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Subtotal</span>
                <span className="font-bold text-berri-navy font-mono text-sm">
                  ${subtotal.toFixed(2)} USD
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-slate-700">
                  {remainingForFreeShipping === 0 ? 'FREE' : '$6.99 flat'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setCheckoutModalOpen(true)}
              className="w-full py-4 rounded-full bg-berri-navy text-white text-sm font-bold shadow-lg hover:bg-berri-royal hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Proceed to Demo Checkout</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>45-Day Money-Back Guarantee Included</span>
            </div>
          </div>
        )}
      </div>

      {/* Demo Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-2xl bg-berri-ice text-berri-navy flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6 text-berri-teal" />
            </div>

            <div className="text-center space-y-2">
              <h4 className="text-xl font-black text-berri-navy font-display">
                Concept Redesign Demo
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                This is a high-fidelity frontend redesign pitch concept and not the official Berri Organics checkout. No payment forms or data collection are active here.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1">
              <div className="font-bold text-berri-navy">Current Demo Cart:</div>
              <div>Subtotal: <span className="font-mono font-bold">${subtotal.toFixed(2)} USD</span></div>
              <div>Items: <span className="font-bold">{items.reduce((s, i) => s + i.quantity, 0)} bottles</span></div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href="https://berriorganics.com/collections/all"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-full bg-berri-navy text-white text-xs sm:text-sm font-bold shadow-md hover:bg-berri-royal transition-all flex items-center justify-center space-x-2"
              >
                <span>Visit Official Berri Organics Store</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="w-full py-3 rounded-full border border-slate-200 text-slate-600 hover:text-berri-navy text-xs font-bold transition-colors"
              >
                Back to Concept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


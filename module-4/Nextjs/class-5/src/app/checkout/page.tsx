'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const steps = ['Shipping', 'Payment', 'Review'];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const { items, cartTotal, clearCart } = useCart();
  const router = useRouter();

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  if (items.length === 0) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link href="/products" className="mt-4 text-indigo-600 hover:text-indigo-500">
          Go back to shopping
        </Link>
      </div>
    );
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Place Order
      handlePlaceOrder();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handlePlaceOrder = () => {
    // Simulate API call
    setTimeout(() => {
      clearCart();
      router.push('/checkout/success');
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Order Summary (Right Column on Desktop) */}
          <div className="lg:col-start-2">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <ul role="list" className="divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.cartId} className="flex py-6 px-4 sm:px-6">
                    <div className="flex-shrink-0">
                        <div className="relative h-20 w-20 rounded-md border-gray-200 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <Link href={`/products/${item.id}`} className="font-medium text-gray-700 hover:text-gray-800">
                              {item.name}
                            </Link>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">{item.selectedColor} - {item.selectedSize}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between pt-2">
                        <p className="mt-1 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">Qty {item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Shipping</dt>
                  <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="text-base font-medium text-gray-900">${(cartTotal + 5).toFixed(2)}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Checkout Form (Left Column) */}
          <div className="mt-10 lg:mt-0">
            {/* Steps Indicator */}
            <nav aria-label="Progress" className="mb-8">
              <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
                {steps.map((step, index) => (
                  <li key={step} className="md:flex-1">
                    <div
                      className={`group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 ${
                        index <= currentStep
                          ? 'border-indigo-600 hover:border-indigo-800'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold uppercase tracking-wide ${
                          index <= currentStep ? 'text-indigo-600' : 'text-gray-500'
                        }`}
                      >
                        Step {index + 1}
                      </span>
                      <span className="text-sm font-medium">{step}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-6">
              <div className={`transition-opacity duration-300 ${currentStep === 0 ? 'opacity-100' : 'hidden opacity-0'}`}>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      >
                        <option value="">Select...</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                      ZIP / Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={shippingInfo.zip}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-opacity duration-300 ${currentStep === 1 ? 'opacity-100' : 'hidden opacity-0'}`}>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        placeholder="0000 0000 0000 0000"
                        value={paymentInfo.cardNumber}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="expiration-date"
                        name="expiration-date"
                        placeholder="MM/YY"
                        value={paymentInfo.expiry}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        placeholder="123"
                        value={paymentInfo.cvc}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cvc: e.target.value })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-opacity duration-300 ${currentStep === 2 ? 'opacity-100' : 'hidden opacity-0'}`}>
                <div className="space-y-6">
                  <div className="rounded-md bg-gray-50 p-4 border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-900">Shipping Information</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {shippingInfo.firstName} {shippingInfo.lastName}<br />
                      {shippingInfo.address}<br />
                      {shippingInfo.city}, {shippingInfo.country} {shippingInfo.zip}
                    </p>
                  </div>
                  <div className="rounded-md bg-gray-50 p-4 border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-900">Payment Method</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Card ending in {paymentInfo.cardNumber.slice(-4) || '****'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-between pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {currentStep === steps.length - 1 ? 'Place Order' : 'Next Step'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

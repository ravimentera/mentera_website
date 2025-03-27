import { ShinyGradientText } from "@/components/atoms/ShinyGradientText/ShinyGradientText";
import React from "react";

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="px-32">
      <div className="w-full py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <ShinyGradientText>
              Unleash Your Expertise, Let AI Handle the Rest
            </ShinyGradientText>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="space-y-8 col-span-7">
              <div className="bg-[#ffffff63] border-2 border-[#BD05DD] backdrop-blur-sm rounded-lg p-5 transition-all duration-300 hover:shadow-lg relative group overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    <ShinyGradientText>
                      Effortless Scheduling & Management
                    </ShinyGradientText>
                  </h3>
                  <p className="text-gray-700">
                    Say goodbye to admin overload—our AI-powered assistant
                    handles appointments, staff schedules, and customer
                    inquiries so you can focus on delivering exceptional
                    treatments.
                  </p>
                </div>
              </div>

              <div className="bg-[#ffffff63] border-2 border-[#BD05DD] backdrop-blur-sm rounded-lg p-5 transition-all duration-300 hover:shadow-lg relative group overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    <ShinyGradientText>
                      Automated Marketing & Sales Growth
                    </ShinyGradientText>
                  </h3>
                  <p className="text-gray-700">
                    Our intelligent platform runs targeted promotions, engages
                    clients, and boosts bookings—all while you do what you love
                    most.
                  </p>
                </div>
              </div>

              <div className="bg-[#ffffff63] border-2 border-[#BD05DD] backdrop-blur-sm rounded-lg p-5 transition-all duration-300 hover:shadow-lg relative group overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    <ShinyGradientText>
                      AI-Powered Support & Personalization
                    </ShinyGradientText>
                  </h3>
                  <p className="text-gray-700">
                    Provide personalized customer interactions 24/7 with
                    AI-driven communication, ensuring every client feels valued.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative col-span-5">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-[#ffffff63] border border-[#ffffff63] backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:shadow-lg relative group overflow-hidden">
                    <div className="p-4 border-b border-gray-200/50">
                      <h4 className="font-semibold">Reschedule Booking</h4>
                      <div className="flex items-center text-sm mt-2">
                        <span className="text-gray-600 mr-2">
                          Booking ID DTP456789
                        </span>
                        <span className="text-gray-600 mr-2">•</span>
                        <span className="text-gray-600">Will Smith</span>
                        <span className="text-gray-600 ml-4">
                          📞 089-5654321
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date & time:
                        </label>
                        <div className="flex space-x-2">
                          <button className="flex-1 flex items-center justify-between border border-gray-300 rounded-md p-2 text-sm">
                            Wed, 15 August 2023 <span>▼</span>
                          </button>
                          <button className="flex-1 flex items-center justify-between border border-gray-300 rounded-md p-2 text-sm">
                            Pick Time <span>▼</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">
                          Quick Picks:
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="relative group overflow-hidden rounded-md">
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 animate-shimmer"
                              style={{ backgroundSize: "200% 100%" }}
                            ></div>
                            <div className="border border-gray-200 rounded-md p-2 text-xs text-center group-hover:border-transparent relative z-10 bg-white group-hover:bg-white/80 transition-colors duration-300">
                              Aug 16, 09:00 AM
                            </div>
                          </div>
                          <div className="relative group overflow-hidden rounded-md">
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 animate-shimmer"
                              style={{ backgroundSize: "200% 100%" }}
                            ></div>
                            <div className="border border-gray-200 rounded-md p-2 text-xs text-center group-hover:border-transparent relative z-10 bg-white group-hover:bg-white/80 transition-colors duration-300">
                              Aug 16, 10:00 AM
                            </div>
                          </div>
                          <div className="relative group overflow-hidden rounded-md">
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 animate-shimmer"
                              style={{ backgroundSize: "200% 100%" }}
                            ></div>
                            <div className="border border-gray-200 rounded-md p-2 text-xs text-center group-hover:border-transparent relative z-10 bg-white group-hover:bg-white/80 transition-colors duration-300">
                              Aug 17, 11:00 AM
                            </div>
                          </div>
                          <div className="relative group overflow-hidden rounded-md">
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 animate-shimmer"
                              style={{ backgroundSize: "200% 100%" }}
                            ></div>
                            <div className="border border-gray-200 rounded-md p-2 text-xs text-center group-hover:border-transparent relative z-10 bg-white group-hover:bg-white/80 transition-colors duration-300">
                              Aug 17, 12:00 PM
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2 mt-4">
                        <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300">
                          Cancel
                        </button>
                        <button className="relative group overflow-hidden rounded-md">
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 animate-shimmer"
                            style={{ backgroundSize: "200% 100%" }}
                          ></div>
                          <span className="px-4 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700/90 transition-colors duration-300 relative z-10 block">
                            Save
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

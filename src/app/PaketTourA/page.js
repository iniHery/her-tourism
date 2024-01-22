"use client";

import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

const PaketTourA = () => {
  return (
    <div className="bg-white h-full">
      <div className="bg-[#171717] h-[90px]">
        <Navbar />
      </div>
      <div className="w-full h-auto">
        <div className="w-full md:w-full lg:mx-auto max-w-screen-xl p-4 mt-10">
          <div className="w-full flex justify-start">
            <div className="text-start text-4xl pb-[20%] md:pb-[6%] font-bold w-full text-[#171717]">
              Bali Jadma<span className="font-medium px-2">Tour</span>: Ubud
              Cultural Tour
            </div>
            <div></div>
          </div>
          {/* Foto Start */}
          <div className="w-full ">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="bg-cover bg-center h-[60vh] w-full max-w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1592994580521-7be0e621be9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
              </div>
              <div className="grid gap-2 w-full">
                <div className="w-full">
                  <div className="bg-cover bg-center h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1604973104381-870c92f10343?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                </div>
                <div className="w-full">
                  <div className="bg-cover bg-center h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1667924779335-9b03c021ebed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          {/* Foto End */}
          {/* Description Start */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <div className="w-full">
              <div className="border-b border-gray-300 pb-6">
                <div className="py-2">
                  <div className="font-semibold pb-2">- Barong Dance</div>
                  <div className="font-light text-gray-600">
                    Barong dance is a style of traditional Balinese Dance. The
                    dance featured battle between Barong and Rangda to represent
                    the eternal battle between good and evil.
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Batik Factory</div>
                  <div className="font-light text-gray-600">
                    Batik is a traditional form of painting fabric. They use
                    dots and lines from wax to decorate the cloth. Batik is one
                    of the techniques of dying cloth using wax and one of
                    Indonesia's cultural heritage that still exist today and is
                    preserved in each region, including Bali itself.
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Celuk Village</div>
                  <div className="font-light text-gray-600">
                    Gold and silver smith handicraft product in this village.
                    The design of the craft always follow the time to adjust the
                    situation without forgetting the charateristics of each
                    silver craft.
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Ubud Art Market</div>
                  <div className="font-light text-gray-600">
                    Ubud are the most popular tourist market in bali located
                    directly on the centre of ubud town it is not only a great
                    place to buy goods, it is also great street style
                    photography
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Ubud Palace</div>
                  <div className="font-light text-gray-600">
                    Also known as Puri saren agung there are a lot of great
                    culture to soak up here. The palace can also be regarded as
                    a local landmark of Ubud
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="border-b border-gray-300">
                <div className="w-full md:w-1/2">
                  <div className="grid py-6">
                    <div className="font-semibold pb-2">Hotel pick up </div>
                    {/*  */}
                    <div className="flex flex-wrap items-center py-2 ">
                      <div>
                        <FaClock />
                      </div>
                      <div className=" pl-4 text-xs font-light flex justify-start">
                        08:00 AM : Nusa dua, Jimbaran
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-wrap items-center py-2 ">
                      <div>
                        <FaClock />
                      </div>
                      <div className=" pl-4 text-xs font-light flex justify-start">
                        08:30 AM : Seminyak, Kuta, Canggu, Sanur, Ubud
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
              {/*  */}
              <div className=" ">
                <div className="w-full">
                  <div className="py-6">
                    <div className="grid items-center py-2">
                      <div></div>
                      <div className="font-semibold pb-2">
                        Price and Inclusion
                      </div>
                      <div className="flex justify-center">
                        <div className="flex justify-start items-center w-full">
                          <div className="flex justify-between items-center gap-1">
                            <div className="text-xs text-light text-gray-500">
                              From USD
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-1 ">
                            <div className="text-lg font-semibold px-2 text-[#171717]">
                              $45.00
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-1">
                            <div className="text-xs text-light text-gray-500">
                              / Person
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-md font-light grid items-center py-4">
                        <li>Private Fully air conditioning car</li>
                        <li>Engglish speaking driver</li>
                        <li>All entrance ticket</li>
                        <li>Lunch</li>
                        <li>Parking Fee</li>
                        <li>Petrol</li>
                        <li>Government Tax & Services</li>
                      </div>
                      <div className="text-sm font-semibold text-[#171717]">
                        Remarks: Minimum 2 Person
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center md:justify-end p-4 rounded-xl">
              <div className="w-full md:w-2/3 lg:h-[60vh] sm:h-[68vh]">
                <div className="pb-6">
                  <div className="font-semibold text-2xl pb-2">
                    Reserve your spot
                  </div>
                  {/* <div className="font-light text-gray-600">
                    If you want to escape Bali’s crowds and spend the day in
                    nature, this private waterfalls tour is ideal. After your
                    pickup in Ubud, head to three of Bali’s most beautiful
                    waterfalls: Tibumana, Tukad Cepung, and Tegenungan Falls. If
                    you’re a photography enthusiast then you’re even more in
                    luck, as these spots are very photogenic. Take a dip in the
                    pools if you like. You can also enjoy a traditional Balinese
                    lunch en route, to keep you energized.
                  </div> */}
                </div>

                <div className="w-full h-auto mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] grid grid-cols flex-wrap-4 rounded-xl mb-8 duration-300 transition-all ">
                  {/* <div className="bg-cover bg-center h-[30vh] w-full rounded-t-lg bg-[url('https://images.unsplash.com/photo-1484924331917-24b8c2f118f4?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div> */}
                  <div className="p-6">
                    <h1 className="font-bold text-2xl text-center text-[#171717]">
                      Ubud Cultural Tour
                    </h1>
                    <div className="flex justify-center py-2">
                      <div className="flex justify-center items-center w-full">
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light text-gray-400">
                            Start from
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-lg font-semibold px-4 text-[#171717]">
                            USD $45
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light text-gray-400">
                            / person
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button className="bg-[#FF9900] duration-300 transition-all px-8 py-3 w-full rounded-xl font-semibold text-[#171717] hover:opacity-75">
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Description End */}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PaketTourA;

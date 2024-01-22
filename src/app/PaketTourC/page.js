"use client";

import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

const PaketTourC = () => {
  return (
    <div className="bg-white h-full">
      <div className="bg-[#171717] h-[90px]">
        <Navbar />
      </div>
      <div className="w-full h-auto">
        <div className="w-full md:w-full lg:mx-auto max-w-screen-xl p-4 mt-10">
          <div className="w-full flex justify-start">
            <div className="text-start text-4xl pb-[20%] md:pb-[6%] font-bold w-full text-[#171717]">
              Bali Jadma<span className="font-medium px-2">Tour</span>: North
              East Bali Tour
            </div>
            <div></div>
          </div>
          {/* Foto Start */}
          <div className="w-full ">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="bg-cover bg-center h-[60vh] w-full max-w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1576475706812-822620fc23ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
              </div>
              <div className="grid gap-2 w-full">
                <div className="w-full">
                  <div className="bg-cover bg-center h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1575573333701-d644e92a5160?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                </div>
                <div className="w-full">
                  <div className="bg-cover bg-center h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1672128558600-599e314f3678?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          {/* Foto End */}
          {/* Description Start */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="w-full">
              <div className="border-b border-gray-300 pb-6">
                <div className="py-2">
                  <div className="font-semibold pb-2">
                    - Tegenungan Waterfall
                  </div>
                  <div className="font-light text-gray-600">
                    The waterfall offer an amazing scenery with clean water and
                    cool atmosphere. Several step must be taken to get waterfall
                    with green view and the beauty of surrounding nature
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Tirta Empul Temple</div>
                  <div className="font-light text-gray-600">
                    The temple is considered one of the holiest water sources in
                    bali. The temple has several holy springs which are said to
                    have been created by God Indra and believed to be blessed
                    water that could purify those who bathe there
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Kintamani</div>
                  <div className="font-light text-gray-600">
                    The magnificent view of active Volcano of Mt. Batur and Lake
                    Batur. Located in plateu area with cool weather around. It
                    will definitely make your day memorable
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Tegalalang</div>
                  <div className="font-light text-gray-600">
                    It offer a very enchanting view of terraced rice fields
                    located in a valley that offer extraordinary Scenic look out
                    over the terraces and surrounding green landscape
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
                  <div className="font-semibold pb-2">- Ubud Palace </div>
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
                        08:00 am : Nusa dua, Jimbaran
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-wrap items-center py-2 ">
                      <div>
                        <FaClock />
                      </div>
                      <div className=" pl-4 text-xs font-light flex justify-start">
                        08:30 am : Seminyak,Kuta,Canggu,Sanur,Ubud
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
                        <li>Buffet Lunch</li>
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
                      North East Bali Tour
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
                    {/* <div className="flex justify-start">
                      <div className="flex justify-center gap-2 items-center w-full text-[#ffab56]">
                        <div className="flex justify-between items-center gap-1">
                          <img
                            className="h-4 w-4"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAzxJREFUaEPtWU160zAQfWPae7Qs4AywacIGDhCbsqHNDk5Reop2l5YNxc4BYEPCBs4AC5p7JPXwWU4aW5KtkWMD4YuWjTyaN+/Nj1TCli/acv+xA/C3GeyMAU4iLoKjMO7krE6MZo7vAAi1uWOgGChOjntA2gP4CKBeOYg8BQUzpOlXipIrYYCd2zZmgD8cH2AvPQVw5jxttYEwA2iKOZ3Tq5uZ+DvLxo0AcBK983JcdyADwrimMM7sNFqNAORRvxuZMmnkA5ABmQf9Jmx4A1hK5tbq6jKiQDDFArPMIbU/W3s4APEJwD0w8r+VGkUzEF4AlDP76cRwwEMK9zlDOLHa8WTCD0ASTmzVhcKk7yueyuQnzGgQH0rtiQFYE5boigYfh9LD9H01FexcmtgiAHbd89QWeY7DJwjoNYBnYDxUThN+AfiClN9TlHwv9Q4lSz4Dc1aK8+WR1DIA45ej0gHZGZbhjJPoAsAbByOXFMZvTRBabgnZFQKIbksJxzzUuynH0ScQnovkxPhMUfyiBCIOT0E0KrIgyQUnANYNW6IvjLyOrcSEvbcEfQpvpnVBcQPQ5aNRqzRP9E0UeSOL+WkxJyyFwpnMAgD18uFxdAF26t6Oj3BJg3U+LIfByXqzvVCU+59mWr+IGCcvgsNiy+dx9AOMR40YIPykQfx49W1tl18VKK14GAy4AOjVh5NorgaFZmtBYbz/3wDIgPgG0JsB/OsSMgqFMf+US1urSWz0Aveo4q5C+qWlyzLqKNm2NBMAUPfcdWmzTIttNDKl/7G74+sg3ADyO2/5AvMnRomKecsbQB4ZbZirmNmFTBjDnDX6rQ5zNhYqDvAdp/PSabkoadWuqs04JXTfZCxDHQDnrOLqbwa7+Qdiu3IAlS8R7nmlCoQ18vCzJwagqG7hUr/stvb3JM/7cGbLC0AtiNxa/uLGdG19VlHPjhUveOplIxi65v9GVcjozlVMuARf+bufbIpmvBnQJke/N1E7AHHCNurErqA2ftzd8E105VdjBqyyenDXQxAcgdMD4wGs8Ozoq/O6ILYGwJxid/8jc6lX/b5joLrLbrmERPy3sKkzCbXgm8jEDoAoTB1u+g2KvAJPsHjpWAAAAABJRU5ErkJggg=="
                          />
                          <div className="text-sm">Bali</div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <img
                            className="h-4 w-4"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAxNJREFUaEPtmVtW20AMhqWBrqNhJSR7wCl9gqyEdiVJn0pj9pDsBHcdJBZnxjiNR5qrB3Jyil990yfpH2k0CGd+4ZnbD58Ap45gsQjQ79sJXLb3gPgVqJ0A4gQIJoDQGEiiBlA1QPQXQG2xetyWgB8F8M9ouDPGplwajOAX7NQKvz92kBlXNgDV8x8A8JDxz+ErbyBYrfX3kq9kAKpvpwDtJvlPoRcyQZIAgl7v0wLUFnbQ6NQwaaavS5gA7bUm7gBw6uH5mRKNaACqq4344wzPBbWDuMKbP4tQ0PT9KACn8QBJ3rINOoBIWoqECAKIaWO8rhallkID8qXdCCtZ0EFeAFGwCA3erK9iwpvyjBOCaIHzeuX6lh/gaf488Ir2/IuajVm3fVAiRMBhTgB5xVGz2LShek7HxmK1DqarKdhdRX8egHr04AMYGACJgs0FMBDrSrckywOEJ/IiAD19WwLRfY4H+3dGAciiFgXtALByPyAkKa/HALiiIC0eMkBm/h6DjAaQtABcgwyA5198VSwJYKLAqz9LIw5g539G+nQ/z1uFBk6wxQy0xaqeDbTJyjujjl86y0fA7nxjAOzitVNXOYXLjkCoKkt1gtUEoajxFCoQeimF/kuAGC0JIrZqwPmlkL1xyRNxKGVi7vNuOErErI0I9uQxxuQ8E1OTwoVMWHtzjMl5hxUyoSZxALuEv9MGJgaILcWCHh29kKWDzGocY6TrGZY+jkxwNXPDodUJokBsNyj3ZDJA4q5ojKcdrTif+jmWc/eOTNoVFZxEOFNHnvw5V0I3gLQr+ohNvb0f1sMrz37aP5Vg7awZhb3LZKJr3PZLPv3zF9LgpMA52Co4XvEMjINFNAjw1lBxUWXMRKMFax7kbYP0fhxAf/oizjC7g4qUibJ3JppgvH40CqAn947XTUSoO3XBi0Ycr0M7BaDrk4zXDxBa2Aofko+UQsUic2CcFIEDhC+lQoba90dqKQuAgwTTgmONNLz/4CiAY6uMMC/2U1DqOnjMOvJk8vi/xQBSM6fU858ApTyZ+52zj8ArHe8iT05p8cMAAAAASUVORK5CYII="
                          />
                          <div className="text-sm">1 Jam</div>
                        </div>
                      </div>
                    </div> */}

                    <div className="pt-6">
                      <button className="bg-[#FF9900] duration-300 transition-all px-8 py-3 w-full rounded-xl font-semibold text-white hover:opacity-75">
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

export default PaketTourC;

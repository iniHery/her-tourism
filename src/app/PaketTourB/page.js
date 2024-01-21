"use client";

import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

const PaketTourB = () => {
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
                <div className="bg-cover bg-center h-[60vh] w-full max-w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1558005530-a7958896ec60?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
              </div>
              <div className="grid gap-2 w-full">
                <div className="w-full">
                  <div className="bg-cover bg-center h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1664551544292-7a9fc40c7bce?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                </div>
                <div className="w-full">
                  <div className="bg-cover bg-center h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1705364238367-707e71dbad2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          {/* Foto End */}
          {/* Description Start */}
          <div className="py-8 grid grid-cols-2 gap-10">
            <div className="w-full">
              <div className="border-b border-gray-300 pb-6">
                <div className="py-2">
                  <div className="font-semibold pb-2">- Taman Ayun Temple </div>
                  <div className="font-light text-gray-600">
                    Taman ayun temple is a royal temple of Mengwi kingdom. A
                    beautiful temple building with multistoried roof and
                    balinese architecture. The temple that it had been newly
                    sanctified in the uear 1634. Temple is surrounded by a big
                    fiah pond. The balinese magnificent architecture is the most
                    attraction of this place
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Fruit Market</div>
                  <div className="font-light text-gray-600">
                    A traditional fruit and vegetable marker is located in Candi
                    Kuning village. The fruits and vegetable that are sold here
                    from local community plantation
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Tanah Lot Temple</div>
                  <div className="font-light text-gray-600">
                    Magnificent Balinese temple in the open ocean. The shrine
                    sits gracefully on a huge rock. Ideally to visit the temple
                    in the late afternoon to catch a beatiful sunset with
                    dramatic colour of the dusk sky as background. Tanah lot
                    temple was built by 16th century.
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Ulun Danu Temple</div>
                  <div className="font-light text-gray-600">
                    Ulun Danu temple is located at lake Beratan. In the mild,
                    mountain wether approximately 1100 meters above sea level.
                    The temple was built in adration of the queen ot water,
                    lakes and rivers. The temple itself has been recorded as
                    early 1556. Lake beratan is the second largest lake in Bali
                    and as the source of irrigation for rice field and
                    plantation accros to entire Bedugul village. Ulun Danu
                    temple is a place of reverence and offerings for locals
                    especially farmers who seek her blessing for bountiful
                    harvest.
                  </div>
                </div>

                <div className="py-2">
                  <div className="font-semibold pb-2">- Jatiluwih</div>
                  <div className="font-light text-gray-600">
                    Most beautiful teracced rice field and one of a UNESCO
                    Cultural Heritage site. Located about 700 meters above sea
                    level. The largest and most picturesque expanse of paddies
                    and most iconic rice paddies in Bali.
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="border-b border-gray-300">
                <div className="w-1/2">
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
            <div className="flex justify-end p-4 rounded-xl">
              <div className="w-2/3 lg:h-[60vh] sm:h-[68vh]">
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
                      North West Bali Tour
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

export default PaketTourB;

"use client";

import { useEffect, useState } from "react";
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
              Her<span className="font-medium">Tourism</span>: Tari Kecak
              Uluwatu - Paket Tour Kekinian
            </div>
            <div></div>
          </div>
          {/* Foto Start */}
          <div className="w-full ">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="bg-cover bg-center h-[60vh] w-full max-w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1588625224664-a561c1f5f619?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
              </div>
              <div className="grid gap-2 w-full">
                <div className="w-full">
                  <div className="bg-cover bg-center h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1611894275618-5eb7b678e273?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                </div>
                <div className="w-full">
                  <div className="bg-cover bg-center h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1609816178245-c22de999509a?q=80&w=2809&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
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
                <div className="font-semibold pb-2">About</div>
                <div className="font-light text-gray-600">
                  If you want to escape Bali’s crowds and spend the day in
                  nature, this private waterfalls tour is ideal. After your
                  pickup in Ubud, head to three of Bali’s most beautiful
                  waterfalls: Tibumana, Tukad Cepung, and Tegenungan Falls. If
                  you’re a photography enthusiast then you’re even more in luck,
                  as these spots are very photogenic. Take a dip in the pools if
                  you like. You can also enjoy a traditional Balinese lunch en
                  route, to keep you energized.
                </div>
              </div>
              {/*  */}
              <div className="border-b border-gray-300">
                <div className="w-1/2">
                  <div className="grid py-6  ">
                    {/*  */}
                    <div className="flex flex-wrap items-center py-2 ">
                      <div>
                        <img
                          className="h-4 text-gray-300"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmFJREFUaEPtmI1NAzEMRtNNYBJgEmASYBJgEmAS2AT6pDO6ur7EdtKWE42Eqpbk7nv+iZ1sysrHZuX6yxng1B48hAceJ6jbUspFKeVr+v5eSvnY/vYyEnokwHUp5XkSXdMI0Ot2goB28YwCQMxDUMnTCIgRABnxwtoN0QtA2LwZlifOCRPinjzgj7mWl+578qIX4FPFPPGNIIRbAxCA+ZTBmstg+P1O7wG4m5J2/u6biniZZ3nNs85k7AFgxwFCBmGD9T1Dr8VjQIRHD4AOn0gsay+kw6gH4FuZiziWotWyJDmAAbrz4FQACNcGSGlJLZrMpkMokoh6AzhJCLEdEsuZJO5ZuxOePR7IbofWusgGMAyARGQ7nHuhVcgs8enwgaTHA6y3ihm/0+Owt3taiUju7O1uvQA8cNXNHACEEp5YbTstbhWIeaNmFbRWnrSK4LAktl4kbfPVlNzzIyXttYRcSGRt8ogcGCYm86B/DyAJTMjIyatlSGn4+OSWQrbb1jrz/1kPeG8gvKKAoXaEr1yiAFb19Yr0zAOEwuZty0OVeOkA7xEWmRPyhtcDNfG4noH7PZaTOsEzyZ35sVRA3bXCA6BPT/ISko8u0iO65oGlSu4KJw+A7t0R030hZRBZPVWzU20BWN3mIcQLjwVR7VZbANr66euPQBbrK5eqF2oAlvUjNw8BzTtTrZxb9EIEIHJxlRUv67TnF8O2BqAfkj63Jmj0tr0YujUAfW1yjPARVvfFVw1gyMVTwvosWT0AEC4D/lUPDAFIev+4y1qF7LhqEm87AySMNnTJ2QNDzZl42A/Ov4UxH1jmsQAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div className=" pl-4 text-xs font-light flex justify-start">
                        Ages 7-65
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-wrap items-center py-2 ">
                      <div>
                        <img
                          className="h-4 text-gray-300"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmFJREFUaEPtmI1NAzEMRtNNYBJgEmASYBJgEmAS2AT6pDO6ur7EdtKWE42Eqpbk7nv+iZ1sysrHZuX6yxng1B48hAceJ6jbUspFKeVr+v5eSvnY/vYyEnokwHUp5XkSXdMI0Ot2goB28YwCQMxDUMnTCIgRABnxwtoN0QtA2LwZlifOCRPinjzgj7mWl+578qIX4FPFPPGNIIRbAxCA+ZTBmstg+P1O7wG4m5J2/u6biniZZ3nNs85k7AFgxwFCBmGD9T1Dr8VjQIRHD4AOn0gsay+kw6gH4FuZiziWotWyJDmAAbrz4FQACNcGSGlJLZrMpkMokoh6AzhJCLEdEsuZJO5ZuxOePR7IbofWusgGMAyARGQ7nHuhVcgs8enwgaTHA6y3ihm/0+Owt3taiUju7O1uvQA8cNXNHACEEp5YbTstbhWIeaNmFbRWnrSK4LAktl4kbfPVlNzzIyXttYRcSGRt8ogcGCYm86B/DyAJTMjIyatlSGn4+OSWQrbb1jrz/1kPeG8gvKKAoXaEr1yiAFb19Yr0zAOEwuZty0OVeOkA7xEWmRPyhtcDNfG4noH7PZaTOsEzyZ35sVRA3bXCA6BPT/ISko8u0iO65oGlSu4KJw+A7t0R030hZRBZPVWzU20BWN3mIcQLjwVR7VZbANr66euPQBbrK5eqF2oAlvUjNw8BzTtTrZxb9EIEIHJxlRUv67TnF8O2BqAfkj63Jmj0tr0YujUAfW1yjPARVvfFVw1gyMVTwvosWT0AEC4D/lUPDAFIev+4y1qF7LhqEm87AySMNnTJ2QNDzZl42A/Ov4UxH1jmsQAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div className=" pl-4 text-xs font-light flex justify-start">
                        Duration: 8h
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-wrap items-center py-2 ">
                      <div>
                        <img
                          className="h-4 text-gray-300"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmFJREFUaEPtmI1NAzEMRtNNYBJgEmASYBJgEmAS2AT6pDO6ur7EdtKWE42Eqpbk7nv+iZ1sysrHZuX6yxng1B48hAceJ6jbUspFKeVr+v5eSvnY/vYyEnokwHUp5XkSXdMI0Ot2goB28YwCQMxDUMnTCIgRABnxwtoN0QtA2LwZlifOCRPinjzgj7mWl+578qIX4FPFPPGNIIRbAxCA+ZTBmstg+P1O7wG4m5J2/u6biniZZ3nNs85k7AFgxwFCBmGD9T1Dr8VjQIRHD4AOn0gsay+kw6gH4FuZiziWotWyJDmAAbrz4FQACNcGSGlJLZrMpkMokoh6AzhJCLEdEsuZJO5ZuxOePR7IbofWusgGMAyARGQ7nHuhVcgs8enwgaTHA6y3ihm/0+Owt3taiUju7O1uvQA8cNXNHACEEp5YbTstbhWIeaNmFbRWnrSK4LAktl4kbfPVlNzzIyXttYRcSGRt8ogcGCYm86B/DyAJTMjIyatlSGn4+OSWQrbb1jrz/1kPeG8gvKKAoXaEr1yiAFb19Yr0zAOEwuZty0OVeOkA7xEWmRPyhtcDNfG4noH7PZaTOsEzyZ35sVRA3bXCA6BPT/ISko8u0iO65oGlSu4KJw+A7t0R030hZRBZPVWzU20BWN3mIcQLjwVR7VZbANr66euPQBbrK5eqF2oAlvUjNw8BzTtTrZxb9EIEIHJxlRUv67TnF8O2BqAfkj63Jmj0tr0YujUAfW1yjPARVvfFVw1gyMVTwvosWT0AEC4D/lUPDAFIev+4y1qF7LhqEm87AySMNnTJ2QNDzZl42A/Ov4UxH1jmsQAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div className=" pl-4 text-xs font-light flex justify-start">
                        Start time: Check availability
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-wrap items-center py-2 ">
                      <div>
                        <img
                          className="h-4 text-gray-300"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmFJREFUaEPtmI1NAzEMRtNNYBJgEmASYBJgEmAS2AT6pDO6ur7EdtKWE42Eqpbk7nv+iZ1sysrHZuX6yxng1B48hAceJ6jbUspFKeVr+v5eSvnY/vYyEnokwHUp5XkSXdMI0Ot2goB28YwCQMxDUMnTCIgRABnxwtoN0QtA2LwZlifOCRPinjzgj7mWl+578qIX4FPFPPGNIIRbAxCA+ZTBmstg+P1O7wG4m5J2/u6biniZZ3nNs85k7AFgxwFCBmGD9T1Dr8VjQIRHD4AOn0gsay+kw6gH4FuZiziWotWyJDmAAbrz4FQACNcGSGlJLZrMpkMokoh6AzhJCLEdEsuZJO5ZuxOePR7IbofWusgGMAyARGQ7nHuhVcgs8enwgaTHA6y3ihm/0+Owt3taiUju7O1uvQA8cNXNHACEEp5YbTstbhWIeaNmFbRWnrSK4LAktl4kbfPVlNzzIyXttYRcSGRt8ogcGCYm86B/DyAJTMjIyatlSGn4+OSWQrbb1jrz/1kPeG8gvKKAoXaEr1yiAFb19Yr0zAOEwuZty0OVeOkA7xEWmRPyhtcDNfG4noH7PZaTOsEzyZ35sVRA3bXCA6BPT/ISko8u0iO65oGlSu4KJw+A7t0R030hZRBZPVWzU20BWN3mIcQLjwVR7VZbANr66euPQBbrK5eqF2oAlvUjNw8BzTtTrZxb9EIEIHJxlRUv67TnF8O2BqAfkj63Jmj0tr0YujUAfW1yjPARVvfFVw1gyMVTwvosWT0AEC4D/lUPDAFIev+4y1qF7LhqEm87AySMNnTJ2QNDzZl42A/Ov4UxH1jmsQAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div className=" pl-4 text-xs font-light flex justify-start">
                        Mobile ticket
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-wrap items-center py-2 ">
                      <div>
                        <img
                          className="h-4 text-gray-300"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmFJREFUaEPtmI1NAzEMRtNNYBJgEmASYBJgEmAS2AT6pDO6ur7EdtKWE42Eqpbk7nv+iZ1sysrHZuX6yxng1B48hAceJ6jbUspFKeVr+v5eSvnY/vYyEnokwHUp5XkSXdMI0Ot2goB28YwCQMxDUMnTCIgRABnxwtoN0QtA2LwZlifOCRPinjzgj7mWl+578qIX4FPFPPGNIIRbAxCA+ZTBmstg+P1O7wG4m5J2/u6biniZZ3nNs85k7AFgxwFCBmGD9T1Dr8VjQIRHD4AOn0gsay+kw6gH4FuZiziWotWyJDmAAbrz4FQACNcGSGlJLZrMpkMokoh6AzhJCLEdEsuZJO5ZuxOePR7IbofWusgGMAyARGQ7nHuhVcgs8enwgaTHA6y3ihm/0+Owt3taiUju7O1uvQA8cNXNHACEEp5YbTstbhWIeaNmFbRWnrSK4LAktl4kbfPVlNzzIyXttYRcSGRt8ogcGCYm86B/DyAJTMjIyatlSGn4+OSWQrbb1jrz/1kPeG8gvKKAoXaEr1yiAFb19Yr0zAOEwuZty0OVeOkA7xEWmRPyhtcDNfG4noH7PZaTOsEzyZ35sVRA3bXCA6BPT/ISko8u0iO65oGlSu4KJw+A7t0R030hZRBZPVWzU20BWN3mIcQLjwVR7VZbANr66euPQBbrK5eqF2oAlvUjNw8BzTtTrZxb9EIEIHJxlRUv67TnF8O2BqAfkj63Jmj0tr0YujUAfW1yjPARVvfFVw1gyMVTwvosWT0AEC4D/lUPDAFIev+4y1qF7LhqEm87AySMNnTJ2QNDzZl42A/Ov4UxH1jmsQAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div className=" pl-4 text-xs font-light flex justify-start">
                        Live guide: English
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
                    <div className="grid items-center py-2 ">
                      <div className="font-semibold pb-2">Highlights</div>
                      <div className="text-md font-light grid">
                        <li>
                          Receive personalized attention on a private tour
                        </li>
                        <li>
                          Round-trip transfers are included, for your
                          convenience
                        </li>
                        <li>
                          A fun and relaxing day out for families, friends, or
                          couples
                        </li>
                        <li>
                          Visit picturesque waterfalls in the jungle and hidden
                          in caves
                        </li>
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

                <div className="w-full h-auto mx-auto border border-gray-300 grid grid-cols flex-wrap-4 rounded-xl mb-8 duration-300 transition-all ">
                  <div className="bg-cover bg-center h-[30vh] w-full rounded-t-lg bg-[url('https://images.unsplash.com/photo-1588625224664-a561c1f5f619?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                  <div className="p-6">
                    <h1 className="font-bold text-2xl text-center text-[#171717]">
                      Tari Kecak Uluwatu
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
                            Rp 350.000,-
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light text-gray-400">
                            / pax
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start">
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
                    </div>

                    <div className="pt-10">
                      <button className="bg-[#FF9900] duration-300 transition-all px-8 py-4 w-full rounded-xl font-semibold text-[#171717] hover:opacity-75">
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

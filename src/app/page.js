import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="max-h-full bg-white">
      <div className="flex justify-center w-full fixed">
        <div className="w-full md:w-full lg:mx-auto max-w-screen-xl p-4 bg-transparent">
          <div>
            <Navbar />
          </div>
        </div>
      </div>
      <Link href="/" className="">
        <div className="bg-cover bg-center h-screen bg-[url('https://images.unsplash.com/photo-1574080344876-1f4089ba07fe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="bg-black text-white bg-opacity-75 h-full">
            <div className="w-full md:w-full lg:mx-auto max-w-screen-xl p-4 ">
              <div className="h-full">
                <div className="flex flex-cols-1 md:flex-cols-3 items-center h-screen">
                  <div className="pr-[100px] flex md:block">
                    <div className="bg-white h-[14vh] w-[8%] mx-auto rounded-full"></div>
                    <div className="py-6">
                      <div className="py-2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYRJREFUSEvFVUFOw0AMnPkE17YvgV648wAk+hKKxD9In8EJeAmFA3deYDSRd+XsbsMiFDW3KLZnxh47xMIPF66P8wCY2RrAHYBLAFczKo/+7RXAA8n0nlMqBWamwk8eoQQlzz0iIxKKPZDcx+AJgDN/V1GS2975eN6Lx+9IZlIlgJhLwaYltwQ0s1u1BsA3gBsAFbkSQAHHFntvndqxAvBGcjCzawDPAD5JrsxsVBHzSwADMJDcJbYuX8rKYavnjwC+AFyQPDjAmuQm5fcAiJWKyyX74LB7V5uLmdnYYpK57ixAcNRYPM4gfNumofYC5GIpoTX04Lgq/jcFMUGs1Yqmq8xMM/sXgHqvGbRalMDl+0Ht621RdlFwkOw5bmkx5MlC/hnAWan4KZtqwPn+9ABUixJA1C4dvw+359iWwlnVorZOhQpNmPXcpOCqyaKeOnaS3Q1SbHvei/FsNGSmcx1vfc+5Vkx2VPNUFPdH/k+3fg4g/TPksurfcZ5fZs9Qe2MWV/ADbpf7GdVdoCQAAAAASUVORK5CYII=" />
                      </div>
                      <div className="py-2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXVJREFUaEPtmY1NwzAQhe8mASaBbkInASahm1AmoZs89CQXhebsuHEUn6WzVKlqXOU+v/uzrTL40MHtlwDorWAo4FYBAC8i8ikij52NvIjIUVXPlh1ZFwLwJSKE8DAuqvp0LwA8WH61QVXNxS4pEABbKuhNAQYmP98TyIf0nXE3SxyeAD5U9T2nDgBmvtfb514ADrl0eDXYMwBz+WkpLrwCnFX1sGQ8n3sFOKnq0QIAQH+fBu2zVUB7x4DpPvdU+94AZvACqC6W7gAA0G1+auKCcwKgdqUy82Yu5FkBtgi3vTurL3//GwngzQDu3koUW4UlJQEwLrr2Qq0AZmbaM4hXA5TiYhQA+j+3srMxCgDbCrbTXQH+ZZtkiXmqkAJ2amz2BGRPBawFHKoOBEDvGAgFQoG0N63ebCz1NyISWSjqQIWblKaEC61xoS0vOFoVyB6Mle4H2Npyy7fFLU0LwLorpkaf3+3vcc2621JnXhQKhAKNK/ALi/MyQF34JRcAAAAASUVORK5CYII=" />
                      </div>
                      <div className="py-2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPZJREFUSEvtVcENwjAQszeBTegmdBJgEsokdBPYxMioqa4lUgIFxIOTqqhqYp/ti0p8uPhhfPwJig6PFknaADgDuAI4kdwXT4cNkrYAjvPzkeACYBXOdCTbGhJJBjZBqivJtV8igTJgVtOQ9PpQktyQwa1+UiTv2CUC78laFizJinyGIAEcUi6SnNVD15HpFYKkxmvM6m0KavIe99Qo6AYbSt06Iz8Ty2oIDgBMspuNYFTSk2wk+c5431MK7qEOo+gZnwAAiKG/TpBaGog8Pa6WZB++LScwmElyl26RRTWj8zMEcx/HEEsqMgqckSfw/0crmfcFi25zeJMZywA/3wAAAABJRU5ErkJggg==" />
                      </div>
                    </div>

                    <div className="bg-white h-[14vh] w-[8%] mx-auto rounded-full"></div>
                  </div>
                  <div className="block">
                    <h1 className="text-7xl font-bold w-[50%]">Exploring</h1>
                    <h1 className="text-9xl font-bold">Bali.</h1>

                    <div className="block">
                      <h1 className="font-medium text-4xl pb-6 my-8 border-b-2 w-[30px]">
                        About
                      </h1>
                      <p className="w-2/3 font-light tracking-wide">
                        Menjelajahi keajaiban dan keindahan pulau Bali, yang
                        terkenal dengan kekayaan budaya, alam yang memesona, dan
                        kegiatan rekreasi yang beragam.
                      </p>
                    </div>
                    <h1 className="pt-10">
                      <burron className="bg-white px-10 py-4 text-black rounded-lg">
                        Explore
                      </burron>
                    </h1>
                  </div>
                  <div className="w-full hidden md:flex items-end h-[80vh]">
                    <div className="block">
                      <div className="flex items-center pb-4">
                        <h1 className="font-semibold pr-4">Photos</h1>
                        <div className="bg-white h-[4px] w-[10%] rounded-full"></div>
                      </div>
                      <div className="md:flex gap-2">
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-lg bg-[url('https://images.unsplash.com/photo-1444194563460-454833ba6005?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-lg bg-[url('https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-lg bg-[url('https://images.unsplash.com/photo-1604842937136-1648761a6256?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-lg bg-[url('https://images.unsplash.com/photo-1616377009507-c8111f07aced?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-lg bg-[url('https://images.unsplash.com/photo-1544094529-002edb772da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbGklMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D')] "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Service Start */}
      <Link href="/">
        <div className="w-full ">
          <div className="w-full md:w-full lg:mx-auto max-w-screen-xl p-4 ">
            <div className="flex justify-center">
              <div className="pt-10">
                <div className="w-full flex justify-center">
                  <div className="text-center text-5xl pb-[20%] md:pb-[6%] font-bold w-4/6">
                    Layanan yang kami sediakan untuk anda.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-1 justify-center ">
                  <div className="w-[80%] h-[45vh] mx-auto shadow-md border grid grid-cols grid-rows-3 p-6 rounded-3xl mb-8 hover:bg-[#F9B572] duration-300 transition-all hover:text-white">
                    <h1 className="font-bold text-3xl mb-4">Local Agent</h1>
                    <p className="text-xl font-light">
                      Kami adalah Local Agent Bali, dapatkan penawaran harga
                      terbaik
                    </p>
                    <div className="pt-12">
                      <button className="bg-gray-900 px-8 py-2 rounded-2xl text-white">
                        Konsultasi
                      </button>
                    </div>
                  </div>
                  <div className="w-[80%] h-[45vh] mx-auto shadow-md border grid grid-cols grid-rows-3 p-6 rounded-3xl mb-8 hover:bg-[#78C1F3] duration-300 transition-all hover:text-white">
                    <h1 className="font-bold text-3xl mb-4">Paket Tour</h1>
                    <p className="text-xl font-light">
                      One Stop Shopping, kami juga melayani pemesanan Paket Tour
                      Bali
                    </p>
                    <div className="pt-12">
                      <button className="bg-gray-900 px-8 py-2 rounded-2xl text-white">
                        Konsultasi
                      </button>
                    </div>
                  </div>
                  <div className="w-[80%] h-[45vh] mx-auto shadow-md border grid grid-cols grid-rows-3 p-6 rounded-3xl mb-8 hover:bg-[#A0C49D] duration-300 transition-all hover:text-white">
                    <h1 className="font-bold text-3xl mb-4">Pelayanan Cepat</h1>
                    <p className="text-xl font-light">
                      Dapatkan pelayanan cepat dari Team Kami
                    </p>
                    <div className="pt-12">
                      <button className="bg-gray-900 px-8 py-2 rounded-2xl text-white">
                        Konsultasi
                      </button>
                    </div>
                  </div>
                  <div className="w-[80%] h-[45vh] mx-auto shadow-md border grid grid-cols grid-rows-3 p-6 rounded-3xl mb-8 hover:bg-[#8EACCD] duration-300 transition-all hover:text-white">
                    <h1 className="font-bold text-3xl mb-4">
                      Paket Tour Kekinian
                    </h1>
                    <p className="text-xl font-light">
                      Dapatkan penawaran harga Paket Tour ke Destinasi Kekinian
                    </p>
                    <div className="pt-12">
                      <button className="bg-gray-900 px-8 py-2 rounded-2xl text-white">
                        Konsultasi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Service End */}

      {/* Paket Tour Start */}
      <Link href="/">
        <div className="w-full ">
          <div className="w-full md:w-full lg:mx-auto max-w-screen-xl p-4 ">
            <div className="flex justify-center">
              <div className="pt-10">
                <div className="w-full flex justify-center">
                  <div className="text-center text-5xl pb-[20%] md:pb-[6%] font-bold w-4/6">
                    Paket Tour Kekinian.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-6 justify-center ">
                  <div className="w-full h-full mx-auto shadow-md border grid grid-cols flex-wrap-4 p-6 rounded-3xl mb-8 hover:bg-[#F9B572] duration-300 transition-all hover:text-white">
                    <div className="bg-cover bg-center h-[20vh] w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1444194563460-454833ba6005?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                    <h1 className="font-bold text-2xl text-center">
                      Tari Kecak Uluwatu
                    </h1>
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center w-full">
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light">Mulai</div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-lg font-semibold px-4">
                            Rp 350.000,-
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light">/ pax</div>
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
                      <button className="bg-gray-900 px-8 py-2 w-full rounded-xl text-white">
                        Konsultasi
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="w-full h-full mx-auto shadow-md border grid grid-cols flex-wrap-4 p-6 rounded-3xl mb-8 hover:bg-[#F9B572] duration-300 transition-all hover:text-white">
                    <div className="bg-cover bg-center h-[20vh] w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1444194563460-454833ba6005?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                    <h1 className="font-bold text-2xl text-center">
                      Tari Kecak Uluwatu
                    </h1>
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center w-full">
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light">Mulai</div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-lg font-semibold px-4">
                            Rp 350.000,-
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light">/ pax</div>
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
                      <button className="bg-gray-900 px-8 py-2 w-full rounded-xl text-white">
                        Konsultasi
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="w-full h-full mx-auto shadow-md border grid grid-cols flex-wrap-4 p-6 rounded-3xl mb-8 hover:bg-[#F9B572] duration-300 transition-all hover:text-white">
                    <div className="bg-cover bg-center h-[20vh] w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1444194563460-454833ba6005?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                    <h1 className="font-bold text-2xl text-center">
                      Tari Kecak Uluwatu
                    </h1>
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center w-full">
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light">Mulai</div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-lg font-semibold px-4">
                            Rp 350.000,-
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light">/ pax</div>
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
                      <button className="bg-gray-900 px-8 py-2 w-full rounded-xl text-white">
                        Konsultasi
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="w-full h-full mx-auto shadow-md border grid grid-cols flex-wrap-4 p-6 rounded-3xl mb-8 hover:bg-[#F9B572] duration-300 transition-all hover:text-white">
                    <div className="bg-cover bg-center h-[20vh] w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1444194563460-454833ba6005?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                    <h1 className="font-bold text-2xl text-center">
                      Tari Kecak Uluwatu
                    </h1>
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center w-full">
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light">Mulai</div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-lg font-semibold px-4">
                            Rp 350.000,-
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div className="text-sm text-light">/ pax</div>
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
                      <button className="bg-gray-900 px-8 py-2 w-full rounded-xl text-white">
                        Konsultasi
                      </button>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Paket Tour End */}

      {/* Footer Start */}

      <div className="pt-20">
        <Footer />
      </div>

      {/* Footer End */}
    </div>
  );
}

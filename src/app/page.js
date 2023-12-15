import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import PaketTourA from "./PaketTourA/page";
import FAQ from "./FAQ/page";

import Testimoni from "./Testimoni/page";
import Tours from "./Tours/page";

export default function Home() {
  return (
    <div className="max-h-full bg-white">
      <div className="flex justify-center w-full fixed z-10">
        <div className="w-full md:w-full lg:mx-auto max-w-screen-xl p-4 bg-transparent">
          <div>
            <Navbar />
          </div>
        </div>
      </div>
      <Link href="/" className="">
        <div className="bg-cover bg-center h-screen bg-[url('https://images.unsplash.com/photo-1574080344876-1f4089ba07fe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <div className="bg-[#171717] text-white bg-opacity-75 h-full">
            <div className="w-full md:w-full lg:mx-auto max-w-screen-xl p-4 ">
              <div className="h-full">
                <div className="flex flex-cols-1 md:flex-cols-3 items-center h-screen">
                  <div className="pr-[50px] flex md:block">
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
                      <burron className="bg-white px-24 py-4 text-[#171717] rounded-xl">
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
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-xl bg-[url('https://images.unsplash.com/photo-1444194563460-454833ba6005?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-xl bg-[url('https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-xl bg-[url('https://images.unsplash.com/photo-1604842937136-1648761a6256?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-xl bg-[url('https://images.unsplash.com/photo-1616377009507-c8111f07aced?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="bg-cover bg-center h-[20vh] w-[12vh] rounded-xl bg-[url('https://images.unsplash.com/photo-1544094529-002edb772da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbGklMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D')] "></div>
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

                <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-6 justify-center ">
                  <div className="w-full h-[38vh] bg-[#aaffa5] mx-auto shadow-md border grid grid-cols grid-rows-2 p-8 rounded-3xl mb-8 duration-300 transition-all">
                    <div className="pb-8 flex items-center">
                      <Image src="/hand.png" width={100} height={100} />
                    </div>
                    <div>
                      <h1 className="font-bold text-2xl pb-4">Local Agent</h1>
                      <p className="text-md font-light">
                        Kami adalah Local Agent Bali, dapatkan penawaran harga
                        terbaik
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-[38vh] bg-[#a5e2ff] mx-auto shadow-md border grid grid-cols grid-rows-2 p-8 rounded-3xl mb-8 duration-300 transition-all">
                    <div className="pb-8 flex items-center">
                      <Image src="/gps.png" width={80} height={80} />
                    </div>
                    <div>
                      <h1 className="font-bold text-2xl pb-4">Paket Tour</h1>
                      <p className="text-md font-light">
                        One Stop Shopping, kami juga melayani pemesanan Paket
                        Tour Bali
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-[38vh] bg-[#ffa5a5] mx-auto shadow-md border grid grid-cols grid-rows-2 p-8 rounded-3xl mb-8 duration-300 transition-all">
                    <div className="pb-8 flex items-center">
                      <Image src="/fast.png" width={100} height={100} />
                    </div>
                    <div>
                      <h1 className="font-bold text-2xl pb-4">
                        Pelayanan Cepat
                      </h1>
                      <p className="text-md font-light">
                        Dapatkan pelayanan cepat dari Team Kami
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-[38vh] bg-[#ffe2a5] mx-auto shadow-md border grid grid-cols grid-rows-2 p-8 rounded-3xl mb-8 duration-300 transition-all">
                    <div className="pb-8 flex items-center">
                      <Image src="/wisata.png" width={96} height={96} />
                    </div>
                    <div>
                      <h1 className="font-bold text-2xl pb-4">
                        Wisata Kekinian
                      </h1>
                      <p className="text-md font-light">
                        Dapatkan penawaran pergi ke Destinasi Wisata Kekinian
                      </p>
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
      {/* <div className="flex justify-center items-center pt-10"> */}
      <Tours />
      {/* </div> */}
      {/* Paket Tour End */}

      {/* Testimoni  Start */}
      <div className="flex justify-center items-center pt-10">
        <Testimoni />
      </div>
      {/* Testimoni End */}

      {/* FAQs Start */}
      <div>
        <FAQ />
      </div>
      {/* FAQs End */}

      {/* Footer Start */}
      <div className="pt-20">
        <Footer />
      </div>
      {/* Footer End */}
    </div>
  );
}

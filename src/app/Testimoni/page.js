"use client";

import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

const Testimoni = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const keenSlider = new KeenSlider("#keen-slider", {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });

      const keenSliderPrevious = document.getElementById(
        "keen-slider-previous"
      );
      const keenSliderNext = document.getElementById("keen-slider-next");

      const keenSliderPreviousDesktop = document.getElementById(
        "keen-slider-previous-desktop"
      );
      const keenSliderNextDesktop = document.getElementById(
        "keen-slider-next-desktop"
      );

      keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
      keenSliderNext.addEventListener("click", () => keenSlider.next());

      keenSliderPreviousDesktop.addEventListener("click", () =>
        keenSlider.prev()
      );
      keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());

      return () => {
        // Clean up KeenSlider when component unmounts
        keenSlider.destroy();
      };
    }
  }, []); // Empty dependency array to ensure useEffect runs only once
  return (
    <section className="bg-[#171717] ">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl text-start font-bold tracking-tight text-white sm:text-4xl">
              Don't just take our word for it...
            </h2>

            <p className="mt-4 text-white text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-blue-500 p-3 text-blue-500 transition hover:bg-blue-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-blue-500 p-3 text-blue-500 transition hover:bg-blue-500 hover:text-white"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12 rounded-xl">
                  <div className="">
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-blue-400 sm:text-3xl">
                        Stayin' Alive
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12 rounded-xl">
                  <div className="">
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-blue-400 sm:text-3xl">
                        Stayin' Alive
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12 rounded-xl">
                  <div className="">
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-blue-400 sm:text-3xl">
                        Stayin' Alive
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12 rounded-xl">
                  <div className="">
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-blue-400 sm:text-3xl">
                        Stayin' Alive
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12 rounded-xl">
                  <div className="">
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-blue-400 sm:text-3xl">
                        Stayin' Alive
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg
              className="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;

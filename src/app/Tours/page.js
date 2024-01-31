"use client";

import Link from "next/link";

const Tours = () => {
  return (
    <div className="w-full ">
      <div className="w-full md:w-full lg:mx-auto max-w-screen-xl p-4 ">
        <div className="flex justify-center">
          <div className="pt-10 w-full">
            {/* Tour Start */}
            <div>
              <div className="w-full flex justify-center">
                <div className="text-center text-5xl pb-[20%] md:pb-[6%] font-bold w-4/6">
                  Paket Tour Kekinian.
                </div>
              </div>
              <div>
                <div className="py-8">
                  <div className="font-semibold text-xl">
                    Bali Fullday Tour Package
                  </div>
                  <div className="font-light">
                    Book these experiences for a close-up look at Denpasar.
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3  sm:gap-6 justify-center ">
                  <Link href="/PaketTourA">
                    <div className="h-full">
                      <div className="h-full mx-auto border-gray-300 grid grid-cols flex-wrap-4 rounded-2xl duration-300 transition-all bg-white">
                        <div className="bg-cover bg-center h-[36vh] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1484924331917-24b8c2f118f4?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="py-4">
                          <h1 className="font-medium text-lg leading-tight text-start text-[#171717]">
                            Ubud Cultural Tour
                          </h1>
                          <div className="flex justify-center pt-2">
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
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/PaketTourB">
                    <div className="h-full">
                      <div className="h-full mx-auto border-gray-300 grid grid-cols flex-wrap-4 rounded-2xl duration-300 transition-all bg-white">
                        <div className="bg-cover bg-center h-[36vh] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1664551614393-b1b896485c7f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="py-4">
                          <h1 className="font-medium text-lg leading-tight text-start text-[#171717]">
                            North West Bali Tour
                          </h1>
                          <div className="flex justify-center pt-2">
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
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/PaketTourC">
                    <div className="h-full">
                      <div className="h-full mx-auto border-gray-300 grid grid-cols flex-wrap-4 rounded-2xl duration-300 transition-all bg-white">
                        <div className="bg-cover bg-center h-[36vh] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1655289112327-5b9c0fcd1995?q=80&w=1873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                        <div className="py-4 grid items-start">
                          <h1 className="font-medium text-lg leading-tight text-start text-[#171717]">
                            North East Bali Tour
                          </h1>
                          <div className="flex justify-center pt-2">
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
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Tour End */}

            {/* Activity Start */}
            <div className="pt-10">
              <div className="py-8">
                <div className="font-semibold text-xl">Activity</div>
                <div className="font-light">
                  Book these experiences for a close-up look at Denpasar.
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5  sm:gap-6 justify-center ">
                <Link href="/PaketActivityA">
                  <div className="h-full">
                    <div className="h-full mx-auto border-gray-300 grid grid-cols flex-wrap-4 rounded-2xl duration-300 transition-all bg-white">
                      <div className="bg-cover bg-center h-[36vh] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                      <div className="py-4">
                        <h1 className="font-medium text-lg leading-tight text-start text-[#171717]">
                          Ayung River Rafting
                        </h1>
                        <div className="flex justify-center pt-2">
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
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/PaketTourB">
                  <div className="h-full">
                    <div className="h-full mx-auto border-gray-300 grid grid-cols flex-wrap-4 rounded-2xl duration-300 transition-all bg-white">
                      <div className="bg-cover bg-center h-[36vh] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                      <div className="py-4">
                        <h1 className="font-medium text-lg leading-tight text-start text-[#171717]">
                          Water Sport
                        </h1>
                        <div className="flex justify-center pt-2">
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
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/PaketTourC">
                  <div className="h-full">
                    <div className="h-full mx-auto border-gray-300 grid grid-cols flex-wrap-4 rounded-2xl duration-300 transition-all bg-white">
                      <div className="bg-cover bg-center h-[36vh] w-full rounded-2xl bg-[url('https://plus.unsplash.com/premium_photo-1661861258656-f4ed72ab27e5?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                      <div className="py-4 grid items-start">
                        <h1 className="font-medium text-lg leading-tight text-start text-[#171717]">
                          Rafting
                        </h1>
                        <div className="flex justify-center pt-2">
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
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/PaketTourC">
                  <div className="h-full">
                    <div className="h-full mx-auto border-gray-300 grid grid-cols flex-wrap-4 rounded-2xl duration-300 transition-all bg-white">
                      <div className="bg-cover bg-center h-[36vh] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1582959746698-660400376dd6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                      <div className="py-4 grid items-start">
                        <h1 className="font-medium text-lg leading-tight text-start text-[#171717]">
                          Atv Adventure
                        </h1>
                        <div className="flex justify-center pt-2">
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
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/PaketTourC">
                  <div className="h-full">
                    <div className="h-full mx-auto border-gray-300 grid grid-cols flex-wrap-4 rounded-2xl duration-300 transition-all bg-white">
                      <div className="bg-cover bg-center h-[36vh] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1580100586938-02822d99c4a8?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "></div>
                      <div className="py-4 grid items-start">
                        <h1 className="font-medium text-lg leading-tight text-start text-[#171717]">
                          Blue Lagoon Snorkeling
                        </h1>
                        <div className="flex justify-center pt-2">
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
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Activity End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;

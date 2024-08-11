import Link from 'next/link';

export default function Navbar() {
  return (
    <header class=" body-font  w-full">
    <div class="container mx-auto flex flex-wrap px-5 pt-10 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="/images\Royal Money (mobile pics)\Logo-white.png"   style={{
               width:"12rem"
            }}/>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-[1.1rem] font-semibold">
        <a class="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
        <a class="mr-5 hover:text-gray-900 cursor-pointer">About</a>
        <a class="mr-5 hover:text-gray-900 cursor-pointer">Features</a>
        <a class="mr-5 hover:text-gray-900 cursor-pointer">Screenshots</a>
      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-3 px-10 focus:outline-none hover:bg-gray-200 rounded-[30px] text-base mt-4 md:mt-0 text-gray-600">Download
        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg> */}
      </button>
    </div>
  </header>
  );
}

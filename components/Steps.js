export default function Steps() {
    return (
<section class="text-gray-600 body-font">
    
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
  <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-5xl text-2xl font-semibold title-font mb-4 text-gray-900">How to use our app</h1>
        <div class="h-1 w-20 bg-primary mx-auto rounded"></div>
    </div>
    <div class="flex flex-wrap w-full justify-around">
      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  <path d="M12 8v4m-2-2h4"></path></svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-bold title-font text-base text-gray-900 mb-1 tracking-wider">1 - Sign In:</h2>
            <p class="leading-relaxed">Access your account through our app or with Google credentials.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
  <path d="M12 1v22"></path>
  <path d="M17 5H9c-2.5 0-4 1.5-4 4s1.5 4 4 4h6c2.5 0 4 1.5 4 4s-1.5 4-4 4H7"></path>
</svg>

          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-bold title-font text-base text-gray-900 mb-1 tracking-wider">2 - Fund Your Account:</h2>
            <p class="leading-relaxed">Top up your balance using Stripe, Google Pay, Apple Pay, or PayPal.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
  <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
  <path d="M12 8c-2 0-4 1.5-4 4s2 4 4 4 4-1.5 4-4-2-4-4-4z"></path>
  <path d="M6 10v0"></path>
  <path d="M6 14v0"></path>
  <path d="M18 10v0"></path>
  <path d="M18 14v0"></path>
</svg>

          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-bold title-font text-base text-gray-900 mb-1 tracking-wider">3 - Choose an Amount:</h2>
            <p class="leading-relaxed">Enter the amount you wish to send.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-bold title-font text-base text-gray-900 mb-1 tracking-wider">4 - Select Recipient: </h2>
            <p class="leading-relaxed">Choose the recipient from your contacts.</p>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-bold title-font text-base text-gray-900 mb-1 tracking-wider">5 - Instant Transfer:</h2>
            <p class="leading-relaxed"> Your funds will be swiftly transferred to the recipient.</p>
          </div>
        </div>
      </div>
      <img class=" h-[35rem] doubleMobile object-cover object-center rounded-lg md:mt-0 mt-12" src="\images\Royal Money (mobile pics)\Double-phone.png" alt="step"/>
    </div>
  </div>
</section>

    );
}

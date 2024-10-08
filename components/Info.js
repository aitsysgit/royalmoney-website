export default function Info() {
    return (
<section id="info" class="text-gray-600 body-font" style={{
            // height:"100vh",
            background:"#F3F3F3"
        }}>
  <div class="container infoSection px-5 py-2 mx-auto flex flex-wrap">
  <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 twoMobile">
      <img class="object-cover object-center " src="\images/Royal Money (mobile pics)/mobile.09073dsab.png" alt="stats" style={{
        height:"40rem"
      }}/>
    </div>
    <div class="flex  flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 Trusted">
      <div class="w-full sm:p-4  mb-6">
        <h1 class="mainTitle font-semibold title-font mb-4 text-gray-900">Trusted Worldwide</h1>
        <div class="h-1 w-20 bg-primary mx-auto rounded ml-0 mb-8"></div>

        <div class="leading-loose sm:text-justify text-left">Send and receive money with just a few taps. Our user-friendly interface makes managing your finances easier than ever. No hidden fees, no complications—just simple, straightforward transactions.</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-semibold text-4xl text-primary" style={{textShadow: "0 0 1px #B2E300"}}>100</h2>
        <p class="leading-relaxed">Active Users</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-semibold text-4xl text-primary" style={{textShadow: "0 0 1px #B2E300"}}>1K</h2>
        <p class="leading-relaxed">Transactions</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-semibold text-4xl text-primary" style={{textShadow: "0 0 1px #B2E300"}}>200</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
     
    </div>
    
  </div>
</section>
    );
}

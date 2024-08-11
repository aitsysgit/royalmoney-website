export default function Hero() {
    return (

        <section style={{
            height:"100vh"
        }}>

        <div class="container mt-24 px-5 pb-24 mx-auto relative">
        <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-5xl text-2xl font-semibold title-font mb-4 text-gray-900">Amazing Application Features</h1>
        <div class="h-1 w-20 bg-primary mx-auto rounded"></div>
    </div>
    <div class="flex flex-wrap -m-4 justify-between">
      <div class="xl:w-1/3 md:w-1/2 p-4 hover:-translate-y-4 transform transition-transform duration-300" style={{height:"436px",}}>
        <div class=" p-6 rounded-lg " style={{boxShadow: "0 3px 45px 0 rgba(0, 0, 0, .16)", height:"100%"}}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images\Royal Money (mobile pics)\Flat-Designed-Concepts-Colored-71@2ax.png" alt="content" style={{
                objectPosition: "center",
                height: "auto",
                maxWidth: "50%",
                margin: "0 auto"
          }}/>
          <h2 class="text-[30px]  text-gray-900 font-semibold title-font mb-4 text-center">Secured Payment </h2>
          <p class="leading-relaxed text-base text-[#727272] font-light text-center">"Your transactions are protected with industry-standard encryption, ensuring your financial information is safe and secure."</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4 hover:-translate-y-4 transform transition-transform duration-300" style={{height:"436px"}}>
        <div class=" p-6 rounded-lg " style={{boxShadow: "0 3px 45px 0 rgba(0, 0, 0, .16)", height:"100%"} }>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images\Royal Money (mobile pics)\Flat-Designed-Concepts-Colored-3@z2x.png" alt="content" style={{
                objectPosition: "center",
                height: "auto",
                maxWidth: "50%",
                margin: "0 auto"
          }}/>
          <h2 class="text-[30px]  text-gray-900 font-semibold title-font mb-4 text-center">Modern Design </h2>
          <p class="leading-relaxed text-base text-[#727272] font-light text-center">"Enjoy the convenience of quick and effortless transfers, enabling you to move your funds instantly."</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4 hover:-translate-y-4 transform transition-transform duration-300" style={{height:"436px"}}>
        <div class=" p-6 rounded-lg " style={{boxShadow: "0 3px 45px 0 rgba(0, 0, 0, .16)" ,height:"100%"}}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images\Royal Money (mobile pics)\Flat-Designed-Concepts-Colored-71n3@2x.png" alt="content" style={{
                objectPosition: "center",
                height: "auto",
                maxWidth: "50%",
                margin: "0 auto"
          }}/>
          <h2 class="text-[30px]  text-gray-900 font-semibold title-font mb-4 text-center">Instant Transfer </h2>
          <p class="leading-relaxed text-base text-[#727272] font-light text-center">"Experience a sleek, user-friendly interface that combines style with functionality for a seamless journey."</p>
        </div>
      </div>
    </div>
    <div className="right-circle bg-primary" style={{
        width:"200px",
        height:"200px",
        borderRadius:"50%",
        opacity:"0.1",
        position:"absolute",
        right:"-10%"

    }}>

    </div>
    </div>

        </section>
        
    );
}

"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
        
  return (
    <>
    <section id="home" className={`${poppins.className} h-screen flex flex-col lg:justify-center md:justify-center items-center bg-slate-300 text-gray-950 dark:bg-gray-900 dark:text-slate-300`}>
     <div className="w-full flex flex-col lg:flex-row justify-center gap-10 lg:gap-0 py-16 px-7 lg:p-10 lg:border rounded-full border-gray-800  dark:border-slate-200">
          <div className="w-full lg:w-1/2 lg:mx-10 p-10 lg:p-11  md:p-11 border mt-16 lg:mt-0 border-gray-800 lg:rounded-full md:rounded-full dark:border-slate-200">
               <p className="text-lg px-0 lg:px-10 md:px-10">Frontend Developer</p>
               <h1 className="text-4xl xl:text-8xl lg:text-6xl font-bold leading-tight mt-5 px-0 lg:px-5 md:px-5">Chidera Odo.</h1>
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-11  md:p-11 border border-gray-800 lg:rounded-full md:rounded-full  dark:border-slate-200">
               <h2 className="text-2xl lg:text-xl xl:text-4xl font-bold text-gray-900 dark:text-slate-400 p-3 mt-3 px-0 lg:px-10 md:px-10">I Build for the Web.</h2>
               <p className="text-sm xl:text-md lg:text-sm text-wrap leading-7 mt-3 px-0 lg:px-10 md:px-10">I bring ideas to life on the web, crafting websites and web 
                    apps that are clean, efficient, and user-friendly. It is not just about getting things
                    to work—it is about learning, improving, and solving real problems along the way. 
                    Whether it is creating smooth user experiences, making things run faster, or simplifying 
                    complex challenges, I enjoy every part of the process.</p>
          </div>
     </div>
    </section>

    <section id="about" className={`${poppins.className}  bg-slate-300 text-gray-950 dark:bg-gray-900 dark:text-slate-300 px-7 lg:px-10 md:px-10 py-10`}>
     <div data-aos="fade-up" className="about_div w-full flex flex-col justify-between items-center mt-16 lg:mt-0 md:mt-0">
          <div>
              <h2 className="text-5xl lg:text-8xl border-l-8 px-5  border-l-gray-900 dark:border-l-slate-200">About Me.</h2>
              <p className="py-10 text-center leading-loose">Hey there! I&apos;m Chidera, a passionate web developer who loves bringing ideas to life through clean, efficient, and user-friendly code.
               I specialize in JavaScript, React, and modern web technologies, building fast, 
               dynamic applications that feel great to use. I love learning as I go, solving real problems, 
               and truly enjoying the process. I&apos;m always exploring new technologies, refining my skills, and pushing myself to write better, smarter code.
               When I&apos;m not deep in a project, I&apos;m brainstorming fresh ideas for my next build. And when I need to unwind from all the coding? 
               You&apos;ll probably find me binge-watching a good K-drama or getting lost in a novel. 
              </p>
          </div>
     </div>
    </section>

    <section id="technologies" className={`${poppins.className} bg-gray-900 text-slate-300 dark:bg-slate-300 dark:text-gray-950 py-10 lg:p-10 md:p-10`}>
     <h2 className="text-5xl lg:text-8xl border-l-8 px-5 border-l-gray-900 dark:border-l-slate-200">Technologies.</h2>
     <h3 className="mt-5 px-7 lg:px-10 md:px-10">Here are the frontend technologies I work with:</h3>
     <div className="w-full flex justify-evenly items-center mt-10 overflow-hidden py-10">
          <div className="technologies_slides">
               <Image src="/html-logo.svg" width={100} height={100} alt="html" />
               <Image src="/css-logo.svg" width={100} height={100} alt="css" />
               <Image src="/javascript-logo.svg" width={100} height={100} alt="javascript" />
               <Image src="/nextjs-logo.svg" width={100} height={100} alt="nextjs" />
               <Image src="/bootstrap-logo.svg" width={100} height={100}  alt="bootstrap" />
               <Image src="/tailwindcss-logo.svg" width={100} height={100}  alt="tailwind" />
               <Image src="/react-logo.svg" width={100} height={100} alt="react" />
               <Image src="/github.svg" width={100} height={100} alt="github" />
               <Image src="/vercel.svg" width={100} height={100} alt="vercel" />
               <Image src="/netlify.svg" width={100} height={100} alt="netlify" />
               <Image src="/postman.svg" width={100} height={100}  alt="postman" />

               <Image src="/html-logo.svg" width={100} height={100} alt="html" />
               <Image src="/css-logo.svg" width={100} height={100} alt="css" />
               <Image src="/javascript-logo.svg" width={100} height={100} alt="javascript" />
               <Image src="/nextjs-logo.svg" width={100} height={100} alt="nextjs" />
               <Image src="/bootstrap-logo.svg" width={100} height={100}  alt="bootstrap" />
               <Image src="/tailwindcss-logo.svg" width={100} height={100}  alt="tailwind" />
               <Image src="/react-logo.svg" width={100} height={100} alt="react" />
               <Image src="/github.svg" width={100} height={100} alt="github" />
               <Image src="/vercel.svg" width={100} height={100} alt="vercel" />
               <Image src="/netlify.svg" width={100} height={100} alt="netlify" />
               <Image src="/postman.svg" width={100} height={100}  alt="postman" />
          </div>
     </div>
    </section>

    <section id="projects" className={`${poppins.className}  bg-slate-300 text-gray-950 dark:bg-gray-900 dark:text-slate-300 py-10 px-5 lg:p-10 md:p-10`}>
     <h2 className="project text-5xl lg:text-8xl px-5 border-l-8 border-l-gray-900 dark:border-l-slate-200">Projects.</h2>
     <p className="mt-10">Here are some of the projects I&apos;ve built, showcasing my skills in JavaScript, React, Next.js
        and modern web development:</p>

     <div className="grid grid-cols-1 gap-y-10 mt-10">
          <div data-aos="fade-up" className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 justify-between items-center gap-x-10">
               <div>
                   <h2 className="text-3xl text-green-700 font-extrabold">Foodie</h2>
                   <p className="py-5">Foodie is a modern food ordering website built with React and Redux for efficient state management. 
                    It allows users to browse menus, add items to their cart, and place orders with a smooth and responsive UI</p>
                   <h3 className="py-5"><span className="text-green-700 font-bold">Tech Stack:</span> React, Redux, React Router</h3>
                   <h3 className="py-5"><span className="text-green-700 font-bold">Features:</span> Browse restaurant menus and filter items, Add/remove items from the cart with real-time updates,
                   Responsive design for mobile and desktop, State management with Redux for a seamless experience.
                   </h3> 
                   <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg  hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://restaurant-nine-ashy.vercel.app/" target="_blank">Demo</a></button> | <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg  hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://github.com/PrincessCS/restaurant" target="_blank">GitHub</a></button>
               </div>
               <div>
                   <Image src="/foodie.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }}  className="transition-all duration-300 transform hover:scale-105 cursor-pointer"  alt="foodie" />
               </div>
          </div>

          <div data-aos="fade-up" className="flex flex-col gap-10 lg:grid lg:grid-cols-2 justify-between items-center gap-x-10">
               <div>
                  <Image src="/cyborg.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }}  className="transition-all duration-300 transform hover:scale-105 cursor-pointer" alt="cyborg" />
               </div>  
               <div>
                  <h2 className="text-3xl text-green-700 font-extrabold">Cyborg QFS</h2>
                  <p className="py-5">Cyborg QFS is a crypto website built with HTML, CSS, and JavaScript, 
                    designed for a seamless and interactive user experience. I developed the frontend, 
                    integrating Google Translate for multilingual support and adding smooth scroll 
                    animations for an engaging interface.
                  </p>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Tech Stack:</span> HTML, CSS, JavaScript</h3>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Features:</span>Google Translate integration for multi-language support, 
                    Smooth scroll animations for enhanced user experience, Responsive and modern UI design
                  </h3> 
                  <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg  hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://cyborg-lovat.vercel.app/" target="_blank">Demo</a></button> | <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg  hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://github.com/PrincessCS/Cyborg" target="_blank">GitHub</a> </button>
               </div>
          </div>

          <div data-aos="fade-up" className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 justify-between items-center gap-x-10">
              <div>
                  <h2 className="text-3xl text-green-700 font-extrabold">Velvety</h2>
                  <p className="py-5">Velvety is a React-powered skincare e-commerce website 
                    for ordering nature-inspired skincare products. It features Redux Toolkit Query 
                    for efficient state management and fetches product data from a local db.json file. 
                    The site also includes an automatic carousel and category-based product filtering 
                    for a seamless shopping experience.
                  </p>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Tech Stack:</span> React, Redux Toolkit Query, JSON Server, Styled Components</h3>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Features:</span>Fetches product data from a local db.json file, 
                  Automatic carousel for featured products, Category-based filtering for easy browsing,  Responsive and user-friendly UI
                  </h3> 
                  <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg  hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://velvety-virid.vercel.app/" target="_blank">Demo</a></button> | <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg  hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://github.com/PrincessCS/velvety" target="_blank">GitHub</a></button>
               </div>
               <div>
                  <Image src="/velvety.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }}  className="transition-all duration-300 transform hover:scale-105 cursor-pointer"  alt="velvety" />
               </div>
          </div>

          {/*<div className="flex flex-col lg:grid lg:grid-cols-2 justify-between items-center gap-x-10">
               <div>
                  <Image src="/foodie.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }} alt="foodie" />
               </div>
               <div>
                  <h2 className="text-3xl text-green-700 font-extrabold">ThoughtsnLetters</h2>
                  <p className="py-5">ThoughtsNLetters is a Next.js-powered journal and lifestyle blog, 
                    designed for sharing personal reflections, experiences, and insights. 
                    Built with Tailwind CSS, it offers a clean, modern, and responsive reading experience
                  </p>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Tech Stack:</span>Next.js, Tailwind CSS, CMS</h3>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Features:</span>Fast and SEO-optimized with Next.js, 
                  Minimalist and responsive design with Tailwind CSS, Dynamic routing for individual journal entries, Smooth navigation and reading experience
                  </h3> 
                  <p><a href="https://cyborg-lovat.vercel.app/">Demo</a> | <a href="https://github.com/PrincessCS/Cyborg">GitHub</a></p> 
               </div>
          </div>*/}

          <div data-aos="fade-up" className="flex flex-col gap-10 lg:grid  lg:grid-cols-2 justify-between items-center gap-x-10">
               <div>
                  <Image src="/weather.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }}  className="transition-all duration-300 transform hover:scale-105 cursor-pointer" alt="weather-app" />
               </div>
               <div>
                  <h2 className="text-3xl text-green-700 font-extrabold">HowsTheWeather</h2>
                  <p className="py-5">HowsTheWeather is a weather web app built with HTML, CSS, and JavaScript,
                     using the OpenWeatherMap API to fetch real-time weather data for any location. 
                     It features dynamic background images, manually sourced from Pexels, which change 
                     based on the current weather conditions for a more immersive experience.
                  </p>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Tech Stack:</span>HTML, CSS, JavaScript, OpenWeatherMap API</h3>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Features:</span>Fetches real-time weather data for any location, 
                  Dynamic background images sourced from Pexels based on weather conditions (rain, sun, snow, etc.),  Responsive and user-friendly interface
                  </h3> 
                  <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg  hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://sprightly-cactus-0fdf86.netlify.app/" target="_blank">Demo</a></button> | <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg  hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://github.com/PrincessCS/weather" target="_blank">GitHub</a></button>
               </div>
          </div>

          <div data-aos="fade-up" className="flex flex-col-reverse gap-10 lg:grid  lg:grid-cols-2 justify-between items-center gap-x-10">
               <div>
                  <h2 className="text-3xl text-green-700 font-extrabold">Gleek Dashboard</h2>
                  <p className="py-5">Gleek Dashboard is a React-powered cryptocurrency dashboard UI, 
                    designed to showcase a sleek and modern interface for tracking cryptocurrencies. 
                    It features Chart.js for interactive data visualization and a well-structured layout
                    for an intuitive user experience.
                  </p>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Tech Stack:</span>React, Chart.js, CSS</h3>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Features:</span> Dashboard UI for cryptocurrency tracking, 
                  Chart.js graphs for visualizing market trends (static data), Modern and responsive design implementation
                  </h3> 
                  <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://dashboard-sigma-nine-21.vercel.app/" target="_blank">Demo</a></button> | <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg  hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}><a href="https://github.com/PrincessCS/dashboard" target="_blank">GitHub</a></button>
               </div>
               <div>
                  <Image src="/gleek.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }}  className="transition-all duration-300 transform hover:scale-105 cursor-pointer" alt="gleek_dashboard" />
               </div>
          </div>

          {/*<div className="flex flex-col lg:grid lg:grid-cols-2 justify-between items-center gap-x-10">
               <div>      
                 <Image src="/foodie.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }} alt="foodie" />
               </div>
               <div>
                  <h2 className="text-3xl text-green-700 font-extrabold">Recipe Finder</h2>
                  <p className="py-5">RecipeFinder is a recipe search web app built with HTML, CSS, and JavaScript, 
                    using the Edamam API to fetch and display a variety of recipes based on user searches. 
                    It provides an easy way to explore new dishes with detailed ingredients and instructions
                  </p>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Tech Stack:</span>HTML, CSS, JavaScript, Edamam API</h3>
                  <h3 className="py-5"><span className="text-green-700 font-bold">Features:</span>Search for recipes by ingredients or dish name, 
                  Displays recipe details, including ingredients and instructions, Responsive and user-friendly interface
                  </h3> 
                  <p><a href="https://cyborg-lovat.vercel.app/">Demo</a> | <a href="https://github.com/PrincessCS/Cyborg">GitHub</a></p> 
               </div>
          </div>*/}
     </div>
     <div className="flex justify-center items-center mt-10">
          <button className={`${poppins.className} border border-gray-800 dark:border-slate-200 px-5 py-1 rounded-lg hover:bg-gray-900 dark:hover:bg-slate-400 hover:text-slate-400 dark:hover:text-gray-900`}>
               <a href="https://github.com/PrincessCS" target="_blank">View GitHub</a>
          </button>
     </div>
    </section>

    <section id="contact">
      <div data-aos="fade-up" className="w-full fixed left-0 bottom-0 flex justify-between">
          <div className="flex flex-col gap-4 justify-between px-3">
          <a href="https://github.com/PrincessCS" target="_blank"><Image src="/github.png" width={30} height={30} style={{ width: "auto", height: "auto" }} alt="github" /></a>
          <a href="https://linkedin.com/in/princessodo" target="_blank"><Image src="/linkedin.png" width={30} height={30} style={{ width: "auto", height: "auto" }} alt="linkedin" /></a>
          <a href="https://x.com/__psteph" target="_blank"><Image src="/x.png" width={30} height={30} style={{ width: "auto", height: "auto" }} alt="twitter" /></a>
          </div>
          <div className="flex  relative h-[100px] w-[40px] items-center justify-center">
               <a href="mailto:princeschidera@gmail.com" className="rotate-90 bg-gray-900 text-slate-300 p-2 text-sm">princeschidera@gmail.com</a>
          </div>
      </div>
    </section>
   </>
  );
}

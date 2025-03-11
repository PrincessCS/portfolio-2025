import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({subsets: ["latin"], weight: "400"})
export default function Home() {
  return (
    <>
    <section id="home" className={`${poppins.className} h-screen flex flex-col justify-center bg-slate-300 text-gray-950 dark:bg-gray-900 dark:text-slate-300`}>
     <div className="w-full flex flex-col lg:flex-row justify-center gap-10 lg:gap-0 p-16 lg:p-10 lg:border border-gray-800 rounded-full dark:border-slate-200">
          <div className="w-full lg:w-1/2 lg:mx-10 p-11 border border-gray-800 lg:rounded-full md:rounded-full dark:border-slate-200">
               <p className="text-lg px-5 lg:px-10">Frontend Developer</p>
               <h1 className="text-4xl xl:text-8xl lg:text-6xl font-bold leading-tight mt-5 px-5">Chidera Odo.</h1>
          </div>
          <div className="w-full lg:w-1/2 p-10 border border-gray-800 lg:rounded-full md:rounded-full  dark:border-slate-200">
               <h2 className="text-2xl lg:text-xl xl:text-4xl font-bold text-gray-900 dark:text-slate-500 p-3 px-10">I Build for the Web.</h2>
               <p className="text-sm xl:text-lg lg:text-sm text-wrap leading-7 mt-3 px-10">I love turning ideas into clean, efficient, and user-friendly code.
                I'm all about writing code that not only works but also makes an impact.
                Whether it's crafting seamless user experiences, optimizing performance, 
                or simplifying complex problems, I enjoy every step of the process.</p>
          </div>
     </div>
    </section>

    <section id="about" className={`${poppins.className}  bg-slate-300 text-gray-950 dark:bg-gray-900 dark:text-slate-300 px-10 py-10`}>
     <div className="w-full flex flex-col justify-between items-center">
          <div>
              <h2 className="text-6xl lg:text-8xl border-l-8 px-5  border-l-gray-900 dark:border-l-slate-200">About Me.</h2>
              <p className="py-10 text-center leading-loose">Hey there! I'm Chidera, a passionate web developer who loves turning ideas into clean, 
                 efficient, and user-friendly code. I specialize in JavaScript, React, and modern web technologies,
                 building dynamic and high-performance applications. I'm all about writing code that not only works but 
                 also makes an impact. Whether it's crafting seamless user experiences, optimizing performance, or simplifying
                 complex problems, I enjoy every step of the process. Currently, I'm expanding my expertise in Next.js and diving 
                 deeper into backend development to build scalable and robust applications. When I'm not coding, I'm probably 
                 experimenting with new tech, creating coding tutorials, or sharing my latest findings on YouTube. 
                 Let's connect and build something awesome!
              </p>
          </div>
     </div>
    </section>

    <section className={`${poppins.className}  bg-slate-300 text-gray-950 dark:bg-gray-900 dark:text-slate-300 p-10`}>
     <h2 className="text-6xl lg:text-8xl border-l-8 px-5 border-l-gray-900 dark:border-l-slate-200">Technologies.</h2>
     <h3 className="mt-5">Here are the frontend technologies I work with:</h3>
     <div className="w-full flex justify-evenly items-center mt-10 overflow-hidden">
          <div className="technologies_slides">
               <Image src="/html-logo.svg" width={100} height={100} alt="html" />
               <Image src="/css-logo.svg" width={100} height={100} alt="css" />
               <Image src="/javascript-logo.svg" width={100} height={100} alt="javascript" />
               <Image src="/nextjs-logo.svg" width={100} height={100} alt="nextjs" />
               <Image src="/bootstrap-logo.svg" width={100} height={100}  alt="bootstrap" />
               <Image src="/tailwindcss-logo.svg" width={100} height={100}  alt="tailwind" />
               <Image src="/react-logo.svg" width={100} height={100} alt="react" />
               <Image src="/react-logo.svg" width={100} height={100} alt="github" />
               <Image src="/react-logo.svg" width={100} height={100} alt="vercel" />
               <Image src="/netlify.svg" width={100} height={100} alt="netlify" />
               <Image src="/react-logo.svg" width={100} height={100}  alt="render" />
               <Image src="/postman.svg" width={100} height={100}  alt="postman" />

               <Image src="/html-logo.svg" width={100} height={100} alt="html" />
               <Image src="/css-logo.svg" width={100} height={100} alt="css" />
               <Image src="/javascript-logo.svg" width={100} height={100} alt="javascript" />
               <Image src="/nextjs-logo.svg" width={100} height={100} alt="nextjs" />
               <Image src="/bootstrap-logo.svg" width={100} height={100}  alt="bootstrap" />
               <Image src="/tailwindcss-logo.svg" width={100} height={100}  alt="tailwind" />
               <Image src="/react-logo.svg" width={100} height={100} alt="react" />
               <Image src="/react-logo.svg" width={100} height={100} alt="github" />
               <Image src="/react-logo.svg" width={100} height={100} alt="vercel" />
               <Image src="/netlify.svg" width={100} height={100} alt="netlify" />
               <Image src="/react-logo.svg" width={100} height={100}  alt="render" />
               <Image src="/postman.svg" width={100} height={100}  alt="postman" />
          </div>
     </div>
    </section>

    <section id="projects" className={`${poppins.className}  bg-slate-300 text-gray-950 dark:bg-gray-900 dark:text-slate-300 p-10 py-10`}>
     <h2 className="text-6xl lg:text-8xl px-5 border-l-8 border-l-gray-900 dark:border-l-slate-200">Projects.</h2>
     <p className="mt-10">Here are some of the projects I've built, showcasing my skills in JavaScript, React, Next.js
        and modern web development:</p>

     <div className="grid grid-cols-1 gap-y-10 mt-10">
          <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 justify-between items-center gap-x-10">
               <div>
                   <h2 className="text-3xl text-green-700 font-extrabold">Foodie</h2>
                   <p className="py-5">Foodie is a modern food ordering website built with React and Redux for efficient state management. 
                    It allows users to browse menus, add items to their cart, and place orders with a smooth and responsive UI</p>
                   <h3 className="py-5"><span className="text-green-700 font-bold">Tech Stack:</span> React, Redux, React Router</h3>
                   <h3 className="py-5"><span className="text-green-700 font-bold">Features:</span> Browse restaurant menus and filter items, Add/remove items from the cart with real-time updates,
                   Responsive design for mobile and desktop, State management with Redux for a seamless experience.
                   </h3> 
                   <p><a href="https://restaurant-nine-ashy.vercel.app/">Demo</a> | <a href="https://github.com/PrincessCS/restaurant">GitHub</a></p> 
               </div>
               <div>
                   <Image src="/foodie.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }} alt="foodie" />
               </div>
          </div>

          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 justify-between items-center gap-x-10">
               <div>
                  <Image src="/cyborg.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }} alt="cyborg" />
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
                  <p><a href="https://cyborg-lovat.vercel.app/">Demo</a> | <a href="https://github.com/PrincessCS/Cyborg">GitHub</a></p> 
               </div>
          </div>

          <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 justify-between items-center gap-x-10">
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
                  <p><a href="https://velvety-virid.vercel.app/">Demo</a> | <a href="https://github.com/PrincessCS/velvety">GitHub</a></p> 
               </div>
               <div>
                  <Image src="/velvety.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }} alt="velvety" />
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

          <div className="flex flex-col-reverse gap-10 lg:grid  lg:grid-cols-2 justify-between items-center gap-x-10">
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
                  <a href="https://cyborg-lovat.vercel.app/">Demo</a> | <a href="https://github.com/PrincessCS/Cyborg">GitHub</a>
               </div>
               <div>
                  <Image src="/foodie.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }} alt="foodie" />
               </div>
          </div>

          <div className="flex flex-col gap-10 lg:grid  lg:grid-cols-2 justify-between items-center gap-x-10">
               <div>
                  <Image src="/gleek.jpg" width={500} height={500} style={{ width: "auto", height: "auto" }} alt="gleek" />
               </div>
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
                  <a href="https://dashboard-sigma-nine-21.vercel.app/" className="">Demo</a> | <a href="https://github.com/PrincessCS/dashboard">GitHub</a>
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
    </section>

    <section id="contact">
      <div className="w-full fixed left-0 bottom-0 flex justify-between">
          <div className="flex flex-col gap-4 justify-between px-3">
          <Image src="/github.png" width={30} height={30} style={{ width: "auto", height: "auto" }} alt="github" />
          <Image src="/linkedin.png" width={30} height={30} style={{ width: "auto", height: "auto" }} alt="linkedin" />
          <Image src="/x.png" width={30} height={30} style={{ width: "auto", height: "auto" }} alt="twitter" />
          </div>
          <div className="flex  relative h-[100px] w-[40px] items-center justify-center">
               <a href="mailto:princeschidera@gmail.com" className="rotate-90 bg-gray-900 text-slate-300 p-2 text-sm">princeschidera@gmail.com</a>
          </div>
      </div>
    </section>
   </>
  );
}

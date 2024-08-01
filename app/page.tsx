import Image from "next/image";
import NavigationBar from "./navigationbar";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <main className="w-full">
        <section>
          <div className="fixed inset-0 z-0">
            <Image
              aria-hidden="true"
              data-placeholder-image=""
              className="object-cover w-full h-full opacity-100 transition-opacity duration-500 ease-linear"
              src="/asdn24-web/perth_skyline.webp"
              layout="fill"
              alt="Perth Skyline"
            />
          </div>
          <div
            className="absolute right-40 bg-opacity-85 bg-gray-200 pl-11 pr-4 py-8 rounded-b-xl shadow-lg w-[350px]"
            style={{ backgroundColor: "rgba(230, 228, 220, 0.85)" }}
          >
            <h1 className="mb-2 relative text-gray-700 font-extrabold tracking-wide text-4xl leading-tight">
              <span>The 3rd Australian Data Science Network Conference</span>
              <br />
              <span className="text-blue-900" style={{ fontSize: "37px" }}>
                ADSN Conference
              </span>
              <br />
              <span className="text-blue-900" style={{ fontSize: "37px" }}>
                2024
              </span>
            </h1>
            <p className="mb-4 font-semibold text-xl text-gray-700 ">
              Perth, Australia
            </p>
            <p className="mb-1 font-bold text-2xl tracking-wide text-gray-700 ">
              2 - 5 December, 2024
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

//<img aria-hidden="true" data-placeholder-image="" style="opacity:1;transition:opacity 500ms linear" src="./img/back.jpg" alt="Southbank skyline"></img>
// <div className="px-6 flex gap-4 flex-col pb-16 flex-grow">
// <h1 className="mt-4 font-bold text-4xl">Lorem ipsum dolor sit amet</h1>
// <p>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//   eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
//   gravida quis blandit turpis. Augue neque gravida in fermentum et
//   sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas.
//   Elementum tempus egestas sed sed risus pretium quam vulputate.
//   Interdum velit euismod in pellentesque massa placerat duis ultricies.
// </p>
// <p>
//   Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
//   Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum
//   fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc
//   consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed
//   viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget
//   arcu. Augue mauris augue neque gravida in.
// </p>
// <p>
//   Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida
//   dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus
//   quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl
//   nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh.
//   Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
//   Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper
//   risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
//   dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida
//   rutrum quisque non tellus orci ac.
// </p>
// <p>
//   Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. In
//   pellentesque massa placerat duis ultricies. Sit amet massa vitae
//   tortor condimentum. Morbi tincidunt augue interdum velit euismod.
//   Aliquet enim tortor at auctor urna nunc id. A scelerisque purus semper
//   eget. Vitae justo eget magna fermentum iaculis. Arcu non odio euismod
//   lacinia at quis. Et leo duis ut diam quam nulla porttitor massa. Eget
//   nunc scelerisque viverra mauris. Suscipit tellus mauris a diam
//   maecenas sed enim. Cras sed felis eget velit aliquet. Est placerat in
//   egestas erat imperdiet sed euismod nisi porta. In ante metus dictum at
//   tempor commodo. In cursus turpis massa tincidunt dui ut ornare lectus.
//   Tempus iaculis urna id volutpat. Iaculis eu non diam phasellus
//   vestibulum lorem sed risus.
// </p>
// <p>
//   Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
//   Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper
//   malesuada. Faucibus pulvinar elementum integer enim neque volutpat.
//   Gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo
//   in vitae. Ultricies tristique nulla aliquet enim tortor. Nec tincidunt
//   praesent semper feugiat nibh sed. Imperdiet proin fermentum leo vel
//   orci porta non pulvinar neque. Praesent semper feugiat nibh sed
//   pulvinar proin gravida. Dis parturient montes nascetur ridiculus mus
//   mauris. Rhoncus dolor purus non enim praesent elementum facilisis leo
//   vel. Ut lectus arcu bibendum at. Integer enim neque volutpat ac. Diam
//   sit amet nisl suscipit. Eros donec ac odio tempor orci dapibus
//   ultrices in iaculis. Ullamcorper a lacus vestibulum sed arcu non odio
//   euismod. Quis lectus nulla at volutpat diam ut. Turpis egestas integer
//   eget aliquet. Adipiscing tristique risus nec feugiat in fermentum
//   posuere. Morbi tempus iaculis urna id. Amet commodo nulla facilisi
//   nullam vehicula ipsum a arcu.
// </p>
// <p>
//   Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
//   Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum
//   fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc
//   consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed
//   viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget
//   arcu. Augue mauris augue neque gravida in.
// </p>
// <p>
//   Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida
//   dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus
//   quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl
//   nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh.
//   Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
//   Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper
//   risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
//   dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida
//   rutrum quisque non tellus orci ac.
// </p>
// <p>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//   eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
//   gravida quis blandit turpis. Augue neque gravida in fermentum et
//   sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas.
//   Elementum tempus egestas sed sed risus pretium quam vulputate.
//   Interdum velit euismod in pellentesque massa placerat duis ultricies.
// </p>
// <p>
//   Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
//   Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum
//   fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc
//   consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed
//   viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget
//   arcu. Augue mauris augue neque gravida in.
// </p>
// <p>
//   Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida
//   dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus
//   quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl
//   nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh.
//   Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
//   Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper
//   risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
//   dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida
//   rutrum quisque non tellus orci ac.
// </p>
// <p>
//   Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. In
//   pellentesque massa placerat duis ultricies. Sit amet massa vitae
//   tortor condimentum. Morbi tincidunt augue interdum velit euismod.
//   Aliquet enim tortor at auctor urna nunc id. A scelerisque purus semper
//   eget. Vitae justo eget magna fermentum iaculis. Arcu non odio euismod
//   lacinia at quis. Et leo duis ut diam quam nulla porttitor massa. Eget
//   nunc scelerisque viverra mauris. Suscipit tellus mauris a diam
//   maecenas sed enim. Cras sed felis eget velit aliquet. Est placerat in
//   egestas erat imperdiet sed euismod nisi porta. In ante metus dictum at
//   tempor commodo. In cursus turpis massa tincidunt dui ut ornare lectus.
//   Tempus iaculis urna id volutpat. Iaculis eu non diam phasellus
//   vestibulum lorem sed risus.
// </p>
// <p>
//   Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
//   Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper
//   malesuada. Faucibus pulvinar elementum integer enim neque volutpat.
//   Gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo
//   in vitae. Ultricies tristique nulla aliquet enim tortor. Nec tincidunt
//   praesent semper feugiat nibh sed. Imperdiet proin fermentum leo vel
//   orci porta non pulvinar neque. Praesent semper feugiat nibh sed
//   pulvinar proin gravida. Dis parturient montes nascetur ridiculus mus
//   mauris. Rhoncus dolor purus non enim praesent elementum facilisis leo
//   vel. Ut lectus arcu bibendum at. Integer enim neque volutpat ac. Diam
//   sit amet nisl suscipit. Eros donec ac odio tempor orci dapibus
//   ultrices in iaculis. Ullamcorper a lacus vestibulum sed arcu non odio
//   euismod. Quis lectus nulla at volutpat diam ut. Turpis egestas integer
//   eget aliquet. Adipiscing tristique risus nec feugiat in fermentum
//   posuere. Morbi tempus iaculis urna id. Amet commodo nulla facilisi
//   nullam vehicula ipsum a arcu.
// </p>
// <p>
//   Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
//   Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum
//   fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc
//   consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed
//   viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget
//   arcu. Augue mauris augue neque gravida in.
// </p>
// <p>
//   Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida
//   dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus
//   quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl
//   nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh.
//   Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
//   Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper
//   risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
//   dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida
//   rutrum quisque non tellus orci ac.
// </p>
// </div>

// export default function Home() {
//   return (
//     <div>
//       <div>
//       <Navbar shouldHideOnScroll>
//         <NavbarBrand>
//         <Image
//             src="/asdn24-web/ADSN_logo.png"
//             alt="ADSN Logo"
//             className="dark:invert"
//             width={36}
//             height={36}
//             priority
//           />
//           <p className="font-bold text-inherit">ADSN</p>
//         </NavbarBrand>
//         <NavbarContent className="hidden sm:flex gap-4" justify="center">
//           <NavbarItem>
//             <Link color="foreground" href="#">
//               Features
//             </Link>
//           </NavbarItem>
//           <NavbarItem isActive>
//             <Link href="#" aria-current="page">
//               Customers
//             </Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link color="foreground" href="#">
//               Integrations
//             </Link>
//           </NavbarItem>
//         </NavbarContent>
//         <NavbarContent justify="end">
//           <NavbarItem className="hidden lg:flex">
//             <Link href="#">Login</Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Button as={Link} color="primary" href="#" variant="flat">
//               Sign Up
//             </Button>
//           </NavbarItem>
//         </NavbarContent>
//       </Navbar>
//       </div>
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//           <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//             Get started by editing&nbsp;
//             <code className="font-mono font-bold">app/page.tsx</code>
//           </p>
//           <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//             <a
//               className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//               href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               By{" "}
//               <Image
//                 src="/asdn24-web/vercel.svg"
//                 alt="Vercel Logo"
//                 className="dark:invert"
//                 width={100}
//                 height={24}
//                 priority
//               />
//             </a>
//           </div>
//         </div>

//         <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//           <Image
//             className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//             src="/asdn24-web/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           />
//         </div>

//         <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Docs{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Find in-depth information about Next.js features and API.
//             </p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Learn{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Templates{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">
//               Explore starter templates for Next.js.
//             </p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Deploy{" "}
//               <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//               Instantly deploy your Next.js site to a shareable URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

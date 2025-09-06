// "use client"
// import React from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// const Navbar=()=>{
//     const pathname=usePathname()
//     const showNavbar=["/","/generate"].includes(pathname)
//     return (
//         <>
//     {showNavbar&& <div className="flex justify-between bg-white w-[100%] rounded-full p-3 mt-10  container mx-auto fixed">
//         <Link href={"/"}><h1 className="text-2xl font-bold">LinkTree</h1></Link>
//         <ul className="flex gap-2">
//             <Link href="/"><li>Templates</li></Link>
//             <Link href="/"><li>Master Place</li></Link>
//             <Link href="/"><li>Discover</li></Link>
//             <Link href="/"><li>Pricing</li></Link>
//             <Link href="/"><li>Users</li></Link>
//         </ul>
//         <div className="flex gap-3">
//             <button className="border border-green p-1 rounded-lg bg-green-50">LogIn</button>
//             <button className="border border-green p-1 rounded-full bg-green-700">SignUP</button>
//         </div>
//     </div>
//     }
//     </>
//     )
// }
// export default Navbar

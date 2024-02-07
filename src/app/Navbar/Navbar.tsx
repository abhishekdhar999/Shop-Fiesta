
import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import shoes from "../pictures/shoes-removebg-preview.png"
async function searchProducts(formData: FormData) {
    "use server";

    const searchQuery = formData.get("searchQuery")?.toString();

    if (searchQuery) {
        redirect("/search?query=" + searchQuery)
    }
}
export default async function Navbar() {
    const session = await getServerSession(authOptions);
    const cart = await getCart();
    return (

        <>

    <div className="flex flex-row justify-between align-middle h-[40px] " >
       
       <div>

       </div>
       <div>
        <ul className="flex ">
        <li className=" my-2.5">
            <a href="">Contact Us |</a>
            </li>
            <li className="mx-2 my-2.5">
            <a href="">Join Us |</a>
            </li>
            <li>
            <UserMenuButton session={session} />
            </li>
        </ul>
        </div>
    </div>
    




            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={shoes} width={50} height={50} alt="Shopify"></Image>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SNEAKER PLUG</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        {/*  */}
                        <div className="relative  md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg> */}
                                <span className="sr-only">Search icon</span>
                            </div>

                            <form action={searchProducts}>
                              <div className="form-control">
                                     <input type="text"
                                    name="searchQuery"
                                    placeholder="Search"
                                    className="input input-bordered  h-[40px] md:w-[250px] rounded-full"
                                    />
                               </div>
                            </form>
                            
                        </div>
                        <div className="text-white">
                        <ShoppingCartButton cart={cart} />
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>


                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />

                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page" >
                                 HOME
                                </Link>
                                
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">MENS</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">WOMENS</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">KIDS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>








            {/* <div className="bg-base-100">
                <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                    <div className="flex-1">
                        <Link
                            href="/" className="btn btn-ghost text-xl normal-case"
                        >
                            <Image src={shoes} width={80} height={70} alt="Shopify"></Image>
                            <span>Sneaker<span><span className="h-[30px]">P</span>lug</span></span>
                        </Link>
                    </div>

                    <div className="flex-none gap-2">
                        <form action={searchProducts}>
                            <div className="form-control">
                                <input type="text"
                                    name="searchQuery"
                                    placeholder="Search"
                                    className="input input-bordered w-full min-w-[100px]" />
                            </div>
                        </form>
                        <ShoppingCartButton cart={cart} />
                        <UserMenuButton session={session} />
                    </div>
                </div>

                {/* <div className="flex flex-row">
            <Link
                        href = "/SignIn" className="btn btn-ghost text-xl normal-case"
                        >
                            <button className="btn btn-primary">signIN </button>
                        </Link>
            </div> */}
            {/* </div> */} 

        </>
    )
}
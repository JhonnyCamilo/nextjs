import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Sidebar = () => {

    // routing de next
    const router = useRouter();

    // console.log(router.pathname)

    return ( 
        <aside className="bg-indigo-600 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5" >
            <div>
                <p className="text-white text-2xl font-black">D-GeeK Clientes</p>
            </div>

            <nav className="mt-5 list-none">
                <li className={router.pathname === "/" ? "bg-indigo-800 p-2" : "p-2"}>
                    <Link href="/">
                        <a className="text-white block">
                            Clientes
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/pedidos" ? "bg-indigo-800 p-2" : "p-2"}>
                    <Link href="/pedidos">
                        <a className="text-white block">
                            Pedidos
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/productos" ? "bg-indigo-800 p-2" : "p-2"}>
                    <Link href="/productos">
                        <a className="text-white block">
                            Productos
                        </a>
                    </Link>
                </li>
            </nav>

            <div className="sm:mt-10">
                <p className="text-white text-2xl font-black">Graficas</p>
            </div>
            <nav className="mt-5 list-none">
                <li className={router.pathname === "/mejoresvendedores" ? "bg-indigo-800 p-2" : "p-2"}>
                    <Link href="/mejoresvendedores">
                        <a className="text-white block">
                            Mejores Vendedores
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/mejoresclientes" ? "bg-indigo-800 p-2" : "p-2"}>
                    <Link href="/mejoresclientes">
                        <a className="text-white block">
                            Mejores Clientes
                        </a>
                    </Link>
                </li>
            </nav>

        </aside>
     );
}
 
export default Sidebar;
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const navigation = [
    {id:1,title:"Home",path:"/"},
    {id:2,title:"Posts",path:"/posts"},
    {id:3,title:"Contacts",path:"/contacts"}
];

const Navbar = ()=>{    

    const {pathname} = useRouter();

    return (
        <div className="container mx-auto">
            <nav className="flex justify-between items-center py-8">                
                    <div>
                        <Image src="/logo.jpg" height={60} width={60} alt="logo" />
                    </div>
                    <ul className="flex items-center space-x-3">
                        {navigation.map(({id,title,path})=>(
                            <li key={id}>
                                <Link href={path}>
                                    <a className={pathname===path ? 'underline' : null}>{title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                
            </nav>
        </div>

    )
}

export default Navbar;
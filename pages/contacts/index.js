import Heading from "../../components/Heading";
import Head from "next/head";
import { useState,useEffect } from "react";
import Link from "next/link";


const Contacts = ()=>{

    const [contacts,setContacts] = useState(null);

    useEffect(()=>{       

        const fetchData = async ()=>{
            const resp = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await resp.json();
            setContacts(data);
            console.log(data);
        };

        fetchData();

    },[]);

    return (
        <>
            <Head>
                <title>Контакты</title>
            </Head>
            <Heading text="Контакты" />
            <ul>
                {contacts && contacts.map(({id,name,email})=>(
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>
                            {name}
                        </Link>                         
                    </li>
                ))}
            </ul>
            <span>test</span>
            
        </>
    )

}

export default Contacts;
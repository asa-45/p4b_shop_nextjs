import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading from "../components/Heading";

const Error = ()=>{

    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        },3000);

    },[router]);

    return (
        <>
            <Heading text="Ошибка" />
            <Heading tag="h2" text="Какая-то ошибка..." />
            
        </>
    )

}

export default Error;
import Heading from "../components/Heading";
import Head from "next/head";

export const getStaticProps = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();

    if(!data){
        return {
            notFound: true
        }
    }

    return {
        props: {posts: data}
    }

};

const Posts = ({posts})=>{

    return (
        <>
            <Head>
                <title>Посты</title>
            </Head>
            <Heading text="Post list" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ea voluptatibus eveniet obcaecati sit cupiditate repellendus in eius, incidunt ducimus architecto commodi illo molestiae nobis culpa iusto maxime ratione deserunt nisi tempore quos consequuntur corporis cumque! Eum in dignissimos nostrum molestias? Labore a porro dolor in, sed eligendi vero assumenda!</p>
            <ul>
                {posts.map(({id,title,body})=>(
                    <li key={id}>
                        <div className="flex">
                            <span>Заголовок: </span>
                            <p>{title}</p>
                        </div>
                        
                        <div className="flex">
                            <span>Статья</span>
                            <p>{body}</p>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </>
    )

}

export default Posts;
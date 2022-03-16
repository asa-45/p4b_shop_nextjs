import Heading from "../../components/Heading";

export const getServerSideProps = async (context) => {

    const {id} = context.params;

    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await resp.json();

    if(!data){
        return {
            notFound: true
        }
    }

    return {
        props: {contact: data}
    }

};

const Contact = ({contact})=>{

    return (
        <>
            <Heading text={`Контакт ${contact.name}`} />
            <span>{contact.email}</span>

            
        </>
    )

}

export default Contact;
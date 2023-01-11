


export const getStaticPaths = async () => {
  
    const res = await fetch(`http://localhost:5000/AllBBQProducts`)
    const data = await res.json();

    const paths = data.map(product => {
        return {
            params: { id: product._id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:5000/AllBBQProducts/${id}`)
    const data = await res.json();
    return {
        props: {
            product: data,
        },
    };
}
const singleBbq = ({ product }) => {
    return (
        <div>
            <h1>
                {product.name}
            </h1>
            <p>{product.desc}</p>
        </div>
    );
};

export default singleBbq;



// export async function getServerSideProps() {
//     const res = await fetch(`http://localhost:5000/AllBBQProducts`);
//     const data = await res.json();

//     return {
//         props: {
//             products: data,
//         },
//     };
// }
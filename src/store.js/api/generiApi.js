
export const getProducts = () => {
    fetch('http://localhost:5000/AllBBQProducts')
        .then(response => response.json())
    .then(data => {
        
        return data;
    })

}
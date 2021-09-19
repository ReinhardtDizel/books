import axios from "axios";


export const booksDataURL = "http://localhost:8080/books/";

export default axios.create({
    responseType: "json",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
});

export const queryGet = async () => {
    const data = await axios.get(booksDataURL);
    return data;
}

export const queryPut = async (id:string, postData:any) => {
    const data = await axios.put(booksDataURL + id, postData);
    const wait = await simulateNetworkRequest()
        .then(() => {
        });
    return data;
}
export const simulateNetworkRequest = ():any => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}




//Old axios function from BookTable
/* axios
         .get(
             booksDataURL, {
                 headers: {"Access-Control-Allow-Origin": "*"}
             }
         )
         .then(res => {
                 if (res !== null && res !== undefined) {
                     if (res.data !== null && res.data !== undefined) {
                         const data = res.data;
                         if (data !== null && data !== undefined) {
                             this.setState({
                                 bookComponent: res.data as BookEntity[],
                             });
                         }
                     }
                 }
             }
         );
     */
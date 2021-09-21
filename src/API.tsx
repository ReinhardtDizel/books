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
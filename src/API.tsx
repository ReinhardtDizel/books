import axios from "axios";

export const booksDataURL = "http://localhost:8080/books/";

export default axios.create({
    responseType: "json",
    headers: {"Access-Control-Allow-Origin": "*"}
});

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
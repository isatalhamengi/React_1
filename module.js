import axios from "axios";

export const getData = (number) => {
    return new Promise(async (resolve,reject) => {
        const user = await axios("https://jsonplaceholder.typicode.com/users/"+number);
        const post = await axios("https://jsonplaceholder.typicode.com/posts?userId="+number)

        const combinedData = {
            ...user.data,
            posts: post.data
          };

        resolve(combinedData);
    });
}
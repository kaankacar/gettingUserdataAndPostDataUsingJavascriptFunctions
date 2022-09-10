import axios from 'axios';

export const getData = async (number) => {
    const {data: user} = await (await axios(`https://jsonplaceholder.typicode.com/users/${number}`));
    const {data: posts} = await (await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`));
    console.log(user);
    console.log(posts);
}


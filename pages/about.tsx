import type { NextPage } from 'next';
import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())


// const useUser = () => {
//     const { data, error } = useSWR(`/api/hello`, fetcher)
// }

const About: NextPage = () => {
    const fetchUrl = '/api/hello';
    const {data, error} = useSWR(fetchUrl, fetcher);

    if(!data) {
        return (
            <h1>Loading....</h1>
        )
    }
    if(error) {
        return (
            <h1>Error</h1>
        )
    }
    return <h1>Sup {data.name}</h1>
}

export default About;
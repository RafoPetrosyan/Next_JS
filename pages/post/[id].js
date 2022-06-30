import {useRouter} from "next/router";

export default function Post() {
    const {query: {id}} = useRouter();

    return (
        <h1>Post {id}</h1>
    )
}
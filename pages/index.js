import Link from 'next/link';


export default function Index() {
    return (
        <>
            <h1>Hello Next.JS!</h1>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href={'/posts'}><a>Posts</a></Link></p>
            <p>Lorem Ipsum dolor sit amet</p>
        </>
    )
}
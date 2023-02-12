import Head from 'next/head';

export default function HeadDefault(){
    return (
        <Head>
            <title>Login</title>
            <meta name="description" content="Login Page" />
            <meta name="keywords" content="loginpage,loginhomepage"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="This is a login home page" key="title" />
        </Head>
    )
}
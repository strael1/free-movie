import Head from "next/head";

export default function HeadDefault(){
    return(
        <Head>
          <title>About</title>
          <meta name="description" content="We're talkgin about page only" />
          <meta name="keywords" content="about,aboutpage,onlypage"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="We're talkgin about page only" key="title" />
      </Head>
    )
}
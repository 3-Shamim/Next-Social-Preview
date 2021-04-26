import Head from 'next/head';
import React from 'react';

const Home = ({photo}) => {
    return (
        <div>
            <Head>

                <title>Social Media Preview</title>

                <meta property="og:type" content="website"/>

                <meta property="og:title" content={photo?.title}/>
                <meta property="og:description" content="Social media preview"/>
                <meta property="og:image" content={photo?.url}/>
                <meta property="og:url" content="https://static.fembula.com"/>
                <meta name="twitter:card" content="summary_large_image"/>

                <meta property="og:site_name" content="Social Media, Inc."/>
                <meta name="twitter:image:alt" content="Alt text for image"/>

                <meta property="fb:app_id" content="507733220387321"/>
                <meta name="twitter:site" content="@website-username"/>
                <meta name="twitter:creator" content="summary creator"/>

            </Head>
            <h2>{photo?.title}</h2>
            <img src={photo?.url} alt="Alt image"/>
        </div>
    );
}
export default Home

export const getServerSideProps = async () => {
    let photo = null;
    await fetch('https://jsonplaceholder.typicode.com/photos/1')
        .then((response) => response.json())
        .then((json) => {
            photo = json
        })

    return {
        props: {
            photo,
        },
    };
};
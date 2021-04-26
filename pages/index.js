import Head from 'next/head';
import React from 'react';

const Home = ({photo}) => {
    return (
        <div>
            <Head>

                <title>Social Media Preview</title>

                {/*<meta property="og:type" content="website"/>*/}
                {/*<meta property="og:url" content="https://static.fembula.com"/>*/}
                {/*<meta property="og:image" content={photo?.url}/>*/}
                {/*<meta property="og:site_name" content="Social Media Preview"/>*/}
                {/*<meta property="og:title" content={photo?.title}/>*/}
                {/*<meta property="og:description" content="Hurray!! Yes Social Media Preview is Working"/>*/}

                {/*<meta property="fb:app_id" content="2747726002141483"/>*/}

                {/*<meta name="twitter:card" content="summary"/>*/}
                {/*<meta name="twitter:creator" content="summary creator"/>*/}

                <meta property="og:title" content="Static Fembula" />
                <meta property="og:description" content="Social preview Static Fembula" />
                <meta property="og:image" content="https://cdn0.iconfinder.com/data/icons/line-file-type-icons/100/file_image_1-512.png" />
                <meta property="og:url" content="https://static.fembula.com" />
                <meta name="twitter:card" content="summary_large_image" />

                <meta property="og:site_name" content="Fembula, Inc." />
                <meta name="twitter:image:alt" content="Alt text for image" />

                <meta property="fb:app_id" content="507733220387321" />
                <meta name="twitter:site" content="@website-username" />

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
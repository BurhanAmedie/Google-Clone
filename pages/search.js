import React from 'react'
import head from 'next/head'
import Header from '../components/Header'
import {API_KEY, CONTEXT_KEY} from '../Keys.js'
import Response from '../Response'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'

function Search({ results }) {
    
    const router = useRouter()
    return (
        <div>
            <head>
                <title>{router.query.term} - Google Search</title>
                <link rel='icon' href='/favicon.ico' />
            </head>
            {/* header */}
            <Header />
            {/* body */}
            <SearchResults results = {results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false ;
    const startIndex = context.query.start || '0' ;


    const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());

    //After the server had rendered pass the result to the client

    return {
        props: {
            results: data,
        },
    };
};

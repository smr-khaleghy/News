import axios from "axios";
import { nyTimesApiKey } from "../utils/config"
import {categoriesEquivalentKeys} from "../utils/categories"

const instance = axios.create({
    baseURL:'https://api.nytimes.com'
});


export const getNYTimeNewsV1 = async (filters) => {

    filters = {
        query: '',
        category: '',
        fromDate: new Date(),
        page: 1,
        ...filters
    };


    const year = filters.fromDate.getFullYear();
    const month = filters.fromDate.getMonth() + 1;

    //  https://api.nytimes.com/svc/search/v2/articlesearch.json
    let query = `svc/archive/v1/${year}/${month}.json?api-key=${nyTimesApiKey}`;
    //let query = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nyTimesApiKey}`;
    const response = await instance.get(query);
 

    /*if(response.data?.response?.status === 'ok')
    {
        let results = [];
        response.data.response.results.map((item, index) => {
            results.push({
                id: `nytimes-${index}-${item.id}`,
                image:'Elon-Musks-Tesla-lost-140m-on-Bitcoin-in-2022-min-370x280.webp',
                title: item.webTitle,
                description: item.webUrl
            });
        })
        return results;
    }
    else
        return [];*/
}

export const getNYTimeNewsV2 = async (filters) => {

    filters = {
        query: '',
        category: '',
        fromDate: '',
        page: 1,
        ...filters
    }

    let query = `svc/search/v2/articlesearch.json?api-key=${nyTimesApiKey}`;
    if(filters.query)
        query += `&q=${filters.query}`;
    if(filters?.fromDate)
        query += `&begin_date=${filters.fromDate.replaceAll('-', '')}`;
    if(filters?.category)
    {
        const category = categoriesEquivalentKeys[filters.category]?.ny ?? '';
        query += `&fq=section_name:${category}`;
    }
    if(filters?.page > 0)
        query += `&page=${filters.page}`;

    const response = await instance.get(query);
 
    if(response.data?.status === 'OK')
    {
        let results = [];
        response.data.response.docs.map((item, index) => {
            results.push({
                id: `nytimes-${index}-${item._id}`,
                image: `https://www.nytimes.com/${item.multimedia[0].url}`,
                title: item.headline.main,
                description: item.abstract
            });
        })
        return results;
    }
    else
        return [];
}
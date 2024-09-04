import axios from "axios";
import { newApisApiKey } from "../utils/config"
import {categoriesEquivalentKeys} from "../utils/categories";

const instance = axios.create({
    baseURL:'https://newsapi.org/v2'
});

export const geNewApiNews = async (filters) => {

    filters = {
        query: '',
        category: '',
        fromDate: '',
        page: 1,
        ...filters
    }

    let query = `everything?apiKey=${newApisApiKey}`;
    query += `&q=${filters.query}`;
    query += `&qInTitle="title search"`;
    if(filters?.date)
        query += `&from=${filters.fromDate}`;
    if(filters?.page > 0)
        query += `&page=${filters.page}`;

    const response = await instance.get(query);
    if(response.data?.status === 'ok')
    {
        let results = [];
        response.data.articles.map((item, index) => {
            results.push({
                id: `newapi-${index}-${item.id}`,
                image: item.urlToImage ? item.urlToImage : 'no-image.webp',
                title: item.title,
                description: item.description,
                url: item.url
            });
        })

        return results;
    }
    else
        return [];
}

export const getTopHeadline = async (filters) => {

    filters = {
        query: '',
        country: 'de', // we can use other languages
        category: '', // business entertainment general health science sports technology
        fromDate: '',
        page: 1,
        ...filters
    }

    let query = `top-headlines?apiKey=${newApisApiKey}`;
    if(filters?.query)
        query += `&q=${filters.query}`;
    if(filters?.country)
        query += `&country=${filters.country}`;
    if(filters?.category)
    {
        const category = categoriesEquivalentKeys[filters.category]?.na ?? '';
        query += `&category=${category}`;
    }
    if(filters?.page > 0)
        query += `&page=${filters.page}`;


    const response = await instance.get(encodeURI(query));
    if(response.data?.status === 'ok')
    {
        let results = [];
        response.data.articles.map((item, index) => {
            results.push({
                id: `newapi-${index}-${item.id}`,
                image: item.urlToImage ? item.urlToImage : './images/no-image.jpg',
                title: item.title,
                description: item.description,
                url: item.url
            });
        })

        return results;
    }
    else
        return [];
}

export const getSources = async (filters = {
    country: '',
    category: '',
}) => {

    let query = `top-headlines/sources?apiKey=${newApisApiKey}`;
    if(filters?.country)
        query += `&country=${filters.country}`;
    if(filters?.category)
        query += `&category=${filters.category}`;

    const response = await instance.get(query);
    if(response.data?.status === 'ok')
    {
        return response.data.sources
    }
    else
        return [];
}
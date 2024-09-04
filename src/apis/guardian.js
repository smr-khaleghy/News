import axios from "axios";
import { guardianApiKey } from "../utils/config"
import {categoriesEquivalentKeys} from "../utils/categories";

const instance = axios.create({
    baseURL:'https://content.guardianapis.com'
});

export const geGDNews = async (filters) => {

    filters = {
        query: '',
        category: '',
        fromDate: '',
        page: 1,
        ...filters
    }

    let query = `search?api-key=${guardianApiKey}`;
    if(filters?.fromDate)
        query += `&from-date=${filters.fromDate}`;
    if(filters?.category)
    {
        const category = categoriesEquivalentKeys[filters.category]?.gd ?? '';
        query += `&tag=${category}`;
    }
    if(filters?.page > 0)
        query += `&page=${filters.page}`;

    const response = await instance.get(query);
    if(response.data?.response?.status === 'ok')
    {
        let results = [];
        response.data.response.results.map((item, index) => {
            results.push({
                id: `guardian-${index}-${item.id}`,
                image:'./images/no-image.jpg',
                title: item.webTitle,
                description: item.webUrl
            });
        })
        return results;
    }
    else
        return [];
}

export const getTags = async () => {

    let query = `tags?api-key=${guardianApiKey}`;

    const response = await instance.get(query);
    if(response.data?.response?.status === 'ok')
    {
        return response.data.response.results;
    }
    else
        return [];
}

export const getSections = async () => {

    let query = `sections?api-key=${guardianApiKey}`;
    const response = await instance.get(query);
    if(response.data?.response?.status === 'ok')
    {
        return response.data.response.results;
    }
    else
        return [];
}
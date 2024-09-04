import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    news: [
        /*{id:0,
            image:'Elon-Musks-Tesla-lost-140m-on-Bitcoin-in-2022-min-370x280.webp',
            title:'the oil land with no electricity',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem'
        },
        {id:1,
            image:'Influencer-appears-in-court-to-appeal-against-detention-370x280.webp',
            title:'the oil land with no electricity',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem'
        },
        {id:2,
            image:'Spending-records-smashed-in-winter-transfer-window-370x280.webp',
            title:'the oil land with no electricity',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem'
        },
        {id:3,
            image:'The-oil-land-with-no-electricity-min-370x280.webp',
            title:'the oil land with no electricity',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem'
        },
        {id:4,
            image:'Influencer-appears-in-court-to-appeal-against-detention-370x280.webp',
            title:'the oil land with no electricity',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem'
        },
        {id:5,
            image:'Elon-Musks-Tesla-lost-140m-on-Bitcoin-in-2022-min-370x280.webp',
            title:'the oil land with no electricity',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem'
        },*/
    ],
    loading: {
        ny: false,
        gd: false,
        na: false,
    },
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addNews(state, action) {
            state.news = [...state.news, ...action.payload];
        },
        restNews(state, action) {
            state.news = [];
        },
        enabledLoading(state, action) {
            state.loading[action.payload] = true;
        },
        disabledLoading(state, action) {
            state.loading[action.payload] = false;
        }
    }
})

export const { addNews, restNews, enabledLoading, disabledLoading } = newsSlice.actions;
export default newsSlice.reducer
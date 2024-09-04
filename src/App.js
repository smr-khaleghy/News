import React, {useEffect} from 'react';
import SearchBar from './Components/SearchBar';
import Content from './Components/Content';
import {useSelector, useDispatch} from "react-redux";
import {enabledLoading, disabledLoading, restNews, addNews} from "./state/news/news.slice";
import {geGDNews} from "./apis/guardian";
import {getNYTimeNewsV2} from "./apis/nytimes";
import {getTopHeadline} from "./apis/newapi";

function App() {
  const filters = useSelector(state => state.filters)
  const news = useSelector(state => state.news.news)
  const loadingNews = useSelector(state => state.news.loading)
  const dispatch = useDispatch()

  const fetchNews = () => {
      dispatch(restNews());
      if(filters.source === '' || filters.source === 'gd')
      {
          dispatch(enabledLoading('gd'));
          geGDNews(filters)
              .then((resp) => {
                  dispatch(addNews(resp))
              })
              .catch((err) => {
                  // show error
              }).finally(()=> dispatch(disabledLoading('gd')));
      }

      if(filters.source === '' || filters.source === 'na')
      {
          dispatch(enabledLoading('na'));
          getTopHeadline(filters)
              .then((resp) => {
                  dispatch(addNews(resp))
              })
              .catch((err) => {
                  // show error
              }).finally(()=> dispatch(disabledLoading('na')));
      }

      if(filters.source === '' || filters.source === 'ny')
      {
          dispatch(enabledLoading('ny'));
          getNYTimeNewsV2(filters)
              .then((resp) => {
                  dispatch(addNews(resp))
              })
              .catch((err) => {
                  // show error
                  console.log(err);
              }).finally(()=> dispatch(disabledLoading('ny')));
      }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    fetchNews();
  }, [filters]);

  return (
    <div className="container mx-auto px-4">
      {!loadingNews.ny && !loadingNews.na && !loadingNews.gd ?
      <div className='w-full'>
        <SearchBar onSearch={fetchNews} />
        <div className='w-full flex flex-col md:flex-row gap-5 mt-10'>
          <Content news={news}/>
        </div>
      </div>
      :
      <div className='w-full'>
        Loading News...
      </div>
      }
    </div>
  );
}

export default App;

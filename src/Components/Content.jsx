import React from 'react'
import ItemNews from './ItemNews';

const Content = ({ news }) => {
    return (
        <div className='w-full flex flex-wrap'>
            {
                news.map((article, index) => (

                    <ItemNews key={`${article.id}-${index}`} article={article} />
                    // <ItemNews key={`${article.source}-${article.id}`} item={article} />
            
                ))
            }

        </div>
    )
}
export default Content;
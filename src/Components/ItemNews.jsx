import React from 'react'

const ItemNews = ({ article }) => {
    return (
        <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
            <div className='bg-gray-50 border border-gray-100  rounded-md w-full flex p-2 gap-3 hover:shadow hover:bg-gray-100 hover:border-gray-200'>

                <div className='w-1/3'>
                    <img src={article.image} alt="" />
                </div>
                <div className='w-2/3'>
                    <div className='text-xl'>
                        {article.title}
                    </div>
                    <div className='text-sm text-gray-500 mt-3'>
                        {article.description}
                    </div>


                </div>
            </div>

        </div>
    )
}
export default ItemNews;
import React from 'react'
import { Link } from 'gatsby'


export default ({ article }) => (

    <article >
        <div className="flex gap-3">
            <Link to={`/blog/${article.slug}`}>
                <div className='w-24 h-full'>
                    <img src={article.featuredImage.file.url} className="w-full h-full"/>
                </div>
            </Link>
            <div className="flex flex-col">
                <Link to={`/blog/${article.slug}`}>
                    <p className="text-accent-blue font-semibold text-sm">{article.category.name}</p>
                </Link>
                <Link to={`/blog/${article.slug}`}>
                    <h5 className="text-blue mt-0.5 mb-1.5 leading-normal font-extrabold">{article.title}</h5>
                </Link>
                <p className="text-blue/[.70] text-sm">{article.postDate}</p>
            </div>
        </div>
    </article>
)

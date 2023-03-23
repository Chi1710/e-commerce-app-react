import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
        },
        {
            id:2,
        },
        {
            id:3,
        },
        {
            id:4,
        },

    

    ];

  return (
    <div className="featuredProducts">

        <div className="top">
            <h1> {type} Products</h1>
            <p>Oh my God, they are so incredibly sexy! Not to mention they flatter your 
                figure by making your waist look smaller and your breasts look bigger. 
                If you find this a little bit too edgy for work or college, you can always 
                opt for the floral ones – there is nothing edgy there at the first site – 
                but you know the whole story. They go great with high waisted jeans and kimono styled cardigans, 
                with pencil skirts and utility jackets etc.</p>
        </div>

        <div className="bottom">
            {data.map(item => (
               <Card item={item} key={item.id}/> 
            ))}
        </div>

    </div>
  )
}

export default FeaturedProducts


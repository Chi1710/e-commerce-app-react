import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/4611700/pexels-photo-4611700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price:100,
            oldPrice:150,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&w=600",
            price:120,
            oldPrice:150,
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/1024036/pexels-photo-1024036.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/1024035/pexels-photo-1024035.jpeg?auto=compress&cs=tinysrgb&w=600",
            price:140,
            oldPrice:150,
        },
        {
            id:4,
            img: "https://images.pexels.com/photos/9770966/pexels-photo-9770966.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/9769871/pexels-photo-9769871.jpeg?auto=compress&cs=tinysrgb&w=600",
            price:150,
            oldPrice:185,
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


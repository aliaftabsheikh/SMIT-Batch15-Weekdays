import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import heroImage from '../src/assets/images/ferrari-1.jpeg'
import heroImage2 from '../src/assets/images/bmw-1.jpg'
import ProductCard from './components/ProductCard/ProductCard'
import './App.css'

const car_data = [
  {
    name: 'Bmw',
    description: 'BMW Description',
    price: '199.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNiqTu3qcQNhnrWbmjTztFE_r0RSwGhXTMQ&s'
  },
  {
    name: 'Ferrari',
    description: 'Ferrari Description',
    price: '299.99',
    image: 'https://m.atcdn.co.uk/ect/media/%7Bresize%7D/e6482e0a13c249088e262e57bdac4c46.jpg'
  },
  {
    name: 'Lamborghini',
    description: 'Lamborghini Description',
    price: '399.99',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/190903111552-01-lamborghini-sian.jpg?q=w_1110,c_fill'
  },
  {
    name: 'Bugatti',
    description: 'Bugatti Description',
    price: '499.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWJWO4eApSldRu1KZw9O4nyhS_CUGAZ8_Aw&s'
  }
]


const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Unleash Your Passion for Luxury Cars"
        description="Discover a world of luxury and performance at our showroom. Explore the latest models from BMW, Audi, Mercedes, and more—each crafted for excellence and style. Whether you’re seeking thrilling speed, advanced technology, or timeless elegance, your dream car awaits. Experience personalized service and exclusive offers today!"
        image={heroImage}
      />

<div className='products_container container'>

{/* {
  car_data.map((item, index)=>(
    <ProductCard key={item.name + index} name={item.name} description={item.description} price={item.price} image={item.image}/>
  ))
} */}

{/* 
{
  car_data.map((item, index)=>{

    

    return(

      <ProductCard key={item.name + index} {...item}/>
    )
})
} */}
{
  car_data.map((item, index)=>(

      <ProductCard key={item.name + index} {...item}/>
    )
  )
}




 {/* <ProductCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNiqTu3qcQNhnrWbmjTztFE_r0RSwGhXTMQ&s' name='Bmw' description='BMW Description' price='199.99'/>
      <ProductCard image='https://m.atcdn.co.uk/ect/media/%7Bresize%7D/e6482e0a13c249088e262e57bdac4c46.jpg' 
      
      name='Ferrari' description='Ferrari Description' price='299.99'
      />
      <ProductCard image='https://media.cnn.com/api/v1/images/stellar/prod/190903111552-01-lamborghini-sian.jpg?q=w_1110,c_fill' name='Lamborghini' description='Lamborghini Description' price='399.99'/>
      <ProductCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWJWO4eApSldRu1KZw9O4nyhS_CUGAZ8_Aw&s'
      name='Bugatti' description='Bugatti Description' price='499.99'
      /> */}
      
</div>
     

      <Hero
        title="Experience the Ultimate BMW Driving Pleasure"
        description="Step into the world of BMW, where innovation meets luxury. From sporty coupes to elegant sedans, each BMW is engineered for dynamic performance and sophisticated comfort. Discover cutting-edge technology, iconic design, and the thrill of driving a true masterpiece. Visit us to explore exclusive BMW offers and make your dream car a reality!"
        image={heroImage2}
        isReversed={true}
      />
    </>
  )
}

export default App
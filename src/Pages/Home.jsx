import React from 'react'
import Hero from './Hero'
import Partnership from './Patnership'
import Whatwedo from './Whatwedo'
import Newsletters from '../Components/Newsletters'
import Product from '../Components/Product'
import WorldCup2026 from '../Components/WorldCup2026'
import Winattitude from '../Components/Winattitude'
import CareerCTA from '../Components/CareerHome'
import Video from '../Components/Video'
import Support from '../Components/Supports'
import NewsHome from '../Components/NewsHome'
import Announcement from '../Components/Announcement;'


const Home = () => {
  return (
    <div>
      <WorldCup2026/>
      <Hero/>
      <Whatwedo/>
      <Product/>
      <Video/>
      <Partnership/>
      <Winattitude/>
      <Announcement/>
      <NewsHome/>
      <CareerCTA/>
      <Support/>
      <Newsletters/>
    </div>
  )
}

export default Home

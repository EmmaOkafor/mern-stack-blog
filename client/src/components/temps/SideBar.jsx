import React from 'react'
import Categories from './Categories'
import Social from './Social'
import Ads from './Ads'

export default function SideBar() {
  return (
    <div className='row side-bar'>
        <div className='col-md-12'>
            <h4>About Me</h4>
                <img src="/images/2.png" className='' alt='profile' />
                <p class="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                    Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
        </div>

        <div className='col-md-12 margin-top-20'>
            <h4>Categories</h4>
            <Categories />
        </div>

        <div className='col-md-12 margin-top-20'>
            <Ads />
        </div>

        <div className='col-md-12 margin-top-20'>
            <h4>Follow Us</h4>
            <Social />
        </div>
            
                
        
    </div>
  )
}


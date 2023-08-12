import React from 'react';
import SideBar from '../temps/SideBar';
import Post from '../temps/Post';

const today = new Date().toLocaleDateString();

export default function Home() {
  
  return (
    <>
      <div className='row margin-top-30'>
        <div className='col-md-9 col-sm-9'>
          <div className='col-md-6 col-sm-6'  >
            <div className='margin-top-30'>
              <Post 
                img="/images/bg.jpg"
                catName="Music"
                title="DEVELOP THE HABIT"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                          Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
                postDate={today}
              />
            </div>
          </div>

          <div className='col-md-6 col-sm-6 ' >
            <div className='margin-top-30'>
              <Post 
                img="/images/bg.jpg"
                catName="Technology"
                title="DEVELOP THE HABIT"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                          Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
                postDate={today}
              />
            </div>
          </div>

          <div className='col-md-6 col-sm-6 ' >
            <div className='margin-top-30'>
              <Post 
                img="/images/bg.jpg"
                catName="E-commerce"
                title="DEVELOP THE HABIT"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                          Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
                postDate={today}
              />
            </div>
          </div>

          <div className='col-md-6 col-sm-6 ' >
            <div className='margin-top-30'>
              <Post 
                img="/images/bg.jpg"
                catName="Programming"
                title="DEVELOP THE HABIT"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                          Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
                postDate={today}
             />
            </div>
          </div>

          <div className='col-md-6 col-sm-6 ' >
            <div className='margin-top-30'>
              <Post 
                img="/images/bg.jpg"
                catName="Learning"
                title="DEVELOP THE HABIT"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                          Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
                postDate={today}
              />
            </div>
          </div>

          <div className='col-md-6 col-sm-6 ' >
            <div className='margin-top-30'>
              <Post 
                img="/images/bg.jpg"
                catName="Music"
                title="SING LIKE A PRO"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                          Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
                postDate={today}
              />
            </div>
          </div>

        </div>
        <div className='col-md-3 col-sm-9' >
          <SideBar />
        </div>

      </div>

    </>
  )
}

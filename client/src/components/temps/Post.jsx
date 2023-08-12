import React from 'react'

export default function Post(props) {
  return (
    <div>
        <div className='home-post '>
            <img src={props.img} className='' alt='profile' /> 
            <p className='padding-top-20'>{props.catName}</p>
            <h4 class="center padding-10">{props.title}</h4>
            <p>{props.postDate}</p>
            <p class="justify">{props.content}</p> 
          </div>
    </div>
  )
}


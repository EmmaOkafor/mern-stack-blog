import React from 'react'
import Navbar from "./Navbar";
import Social from "./Social";
import Profile from "./Profile";
export default function TopBar() {
  return (
    <>
        <div class="row top-bar">
          
          <div class="col-md-4 col-sm-4">
            <Social />
          </div>
          <div class="col-md-6 col-sm-6">
            <Navbar />
          </div>
          <div class="col-md-2 col-sm-2 padding-top-10">
            <Profile />
          </div>

        </div>
    </>
  )
}

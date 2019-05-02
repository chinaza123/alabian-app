import React, {Component} from 'react'

class Profile extends Component{
  render(){
    return(
  <div>
    <div class="bg">
      <img src="images/bg.jpg" alt="nature" />
    </div>
    <div class="container1">
      <img src="images/profile.jpg" alt="John Doe" class="unique1" />
      <h3>JOHN DOE</h3>
      <h4>Project Manager at Alabian Solutions Limited</h4>
      <h5>Email: info@alabiansolutions.com, Phone:08157550744</h5>
      <img src="images/fb.png" alt="facebook logo" class="unique1" />
      <img src="images/tw.png" alt="twitter logo" class="unique1" />
      <img src="images/instagram.jpg" alt="instagram logo" class="unique1" />
    </div>
  </div>
    )
  }
}

export default Profile

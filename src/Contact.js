import React, {Component} from 'react'

class Contact extends Component{
  render(){
    return(
      <div class="contact">
    		<h2>CONTACT</h2>
    		<div class="iframe">
    			<iframe
        		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.341775346873!
        		2d3.3422253148425853!3d6.604381995223933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1
        		3.1!3m3!1m2!1s0x103b8d7c33eb87b3%3A0xfc23c9556f669273!2sAlabian+Solutions+Lim
        		ited!5e0!3m2!1sen!2sng!4v1516009132030" width="600" height="450"
        		frameborder="0" style={{border:0}} allowfullscreen>
    			</iframe>
    		</div>
        <div class="form">
    			<form>
    				<label>Name</label><br/>
    				<input type="text" name="text" value="Full Name" class="form-input"/><br/><br/>
    				<label>Email</label><br/>
    				<input type="email" name="email" value="Email" class="form-input"/><br/><br/>
    				<label>How did you hear about us?</label><br/>
    				<select class="form-select">
    					<option value="facebook" selected="selected">Facebook</option><br/>
    				</select><br/><br/>
    				<label>Would you visit us again?</label><br/>
    				<input type="radio" name="question"/>Yes
    				<input type="radio" name="question"/>male<br/><br/>
    				<label>Comment</label><br/>
    				<textarea name="comment" rows="10" cols="30" class="form-input"></textarea><br/><br/>
    				<input type="checkbox" checked="checked"/>Sign me up for email update<br/><br/>
    					<a href="#submit" id="submit">Submit</a>
    			</form><br/><br/>
    		</div>
    	</div>
    )
  }
}

export default Contact

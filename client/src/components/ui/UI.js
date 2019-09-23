import React, { Fragment } from 'react'
import './css/UI.css'

const UI = () => {
  return (
    <div id="uiBody">
      <div id="top1"></div>
<nav>
    <div id="navWrapper">
    <h1 class="fancy-header"
    >Welcome to Venetian Dynamics</h1>
    <p id="p">At Venetian Dynamics, <b>we</b> solve your problems with
        <b><i>technology.</i></b></p>
    <hr/>
    </div>
</nav>
<div id="top2">
    <div class="wrapUL">
    <h2 className="uiH2">Core Values</h2>
    <ul>
        <li>Competence</li>
        <li>Involvement</li>
        <li>Technology</li>
    </ul>
    </div>
    <div class="wrapUL">
    <h2 className="uiH2">Our Process</h2>
    <ul>
        <li>Plan</li>
        <li>Evaluate</li>
        <li>Implement</li>
    </ul>
    </div>
    <div class="wrapUL">
    <h2 className="uiH2">2020 Vision</h2>
    <ul>
        <li>Become #1 in Technology</li>
        <li>Increase Success by 20%</li>
        <li>Increase Business by 30%</li>
    </ul>
    </div>
{/* <!--    <hr/>--> */}
</div>
<div id="middle">
    <h2 className="uiH2">Company Vision</h2>
    <div id="middleWrapper">
    <section class="img">
        <img class="i"
         src={require('./css/img/beach4.jpeg')} alt="img"/>
    </section>
    <section class="img">
        <img class="i" 
        src={require('./css/img/beach2.jpeg')} alt="img"/>
    </section>
    <section class="img">
        <img class="i"
         src={require('./css/img/beach3.jpeg')} alt="img"/>
    </section>
    <section class="img">
        <img class="i"
         src={require('./css/img/beach1.jpeg')} alt="img"/>
    </section>
    </div>
    <hr/>
</div>
<div id="bottom">
    <div>
        <h2 className="uiH2">Our Product</h2>
        <table>
            <tr>
                <th><b>Plan</b></th>
                <th><b>Price</b></th>
                <th><b>Features</b></th>
            </tr>
            <tr>
                <td>Starter</td>
                <td>$99</td>
                <td>Base Technology</td>
            </tr>
            <tr>
                <td>Advanced</td>
                <td>$199</td>
                <td>Additional Features</td>
            </tr>
            <tr>
                <td>Premium</td>
                <td>$499</td>
                <td>Unlimited Support</td>
            </tr>
        </table>
    </div>
    <div>
        <p><i>All products come with our quality guarantee. &trade;</i></p>
    </div>
</div>
<div id="veryBottom">
    <div id="veryBottomWrapper">
        <h2  className="uiH2" id="formHead">Come Stay With Us!</h2>
    
        <form method="POST" id="form"
              action="http://request-inspector.glitch.me/"
              accept-charset="UTF-8">
            <span class="s">
            <label for="destination" class="label">
                Destination
            </label>
            <input type="text" name="destination" class="t"
            id="destination"/>
                </span>
            <span class="s">
            <label for="date" class="label">
                Date: <input type="date" name="date" id="date" class="t"/>
            </label>
                </span>
            <span class="s">
            <label for="contact" class="label">
                Best way to contact you?
            </label>
            <select name="contactMethod" id="contact" class="t select">
                <option class="option" value="phones">Phone</option>
                <option class="option" value="email">Email</option>
                <option class="option" value="mail">Mail</option>
            </select>
                </span>
            <span class="s">
            <label for="contactInfo" class="label">
                Appropriate Contact Info: 
            </label>
            <input type="text" id="contactInfo" name="contactInfo" class="t"/>
                </span>
            <span class="s">
            <label class="label">
                Sign up for emails <br/>
                <label for="yes" id="emails">
                    <input type="checkbox" name="emails" id="yes" checked/>
                    yes.
                </label>
                <label for="no">
                    <input type="checkbox" name="emails" id="no"/>
                    no
                </label>
            </label>
                </span>
            <span class="sub s">
            <button type="submit" id="s">Submit</button>
            </span>
        </form>
    </div>
</div>
<footer>
    <a href="#top1" id="bottom"><b><i>Go to the top of the page.</i></b></a>
</footer>

      
    </div>
  )
}

export default UI

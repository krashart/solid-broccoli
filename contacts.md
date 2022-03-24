---
layout: layout.html
title: Contacts
eleventyNavigation:
     key: Contacts
     order: 3
---
<div class="heading">

# {{ title }}
</div>
<p>Get a hold of us for more information.</p>

<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" placeholder="First Name"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" placeholder="Last Name"><br><br>
  <label for="phone">Enter a phone number:</label><br><br>
  <input type="tel" id="phone" name="phone" placeholder="123-456-7890"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"><br><br>
  <small>Format: 123-456-7890</small><br><br>
  <input type="submit" value="Submit">
</form> 
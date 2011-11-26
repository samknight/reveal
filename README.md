Reveal - jQuery Plugin
======================

By Sam Knight
---------------------

This plugin will allow you define a set of triggers that will update a target area with data. Both the triggers and data can be any HTML markup for flexibility

### Installation

Add in the following line to the page's head after loading jQuery.

	<script src="../reveal.js" type="text/javascript" charset="utf-8"></script>
	
Then you need to initialise the Reveal plugin, defining where the reveal markup is.

	<script>
		$(document).ready(function(){
			$("#contentSwitcher").reveal();
		});
	</script>
	
Add the markup in the body. Define the triggers with ".trigger" and the target with "#target". ".detail" is used to define what is sent to the target once the trigger has been activated.

	<div id="reveal">
		<ul>
			<li class="trigger">
				<img src="images/sky.jpg"/>
				<div class="detail">
					This is content from the first element
				</div>
			</li>
			<li class="trigger">
				<img src="images/sky.jpg"/>
				<div class="detail">
					We can also include <strong>HTML tags</strong> into our content
				</div>
			</li>
		</ul>
		<div id="target">This is the default text that will be shown and if the user doesn't have javascript. We can choose to have the first element automatically loaded by adding loadFirst: true as an option when loading the plugin.</div>
	</div>
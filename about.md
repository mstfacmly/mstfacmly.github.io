---
layout: default
---
{% capture age %}
{% include age.html %} 
{% endcapture %}

Lebanese-born {{ age | strip }} year-old artist, game designer & programmer.

I enjoy making art, playing the guitar, singing, dancing, and cooking.<br>I speak {{ site.langs }}.

I am an autodidact, teaching myself to play an instrument, as well as how to program in {{ site.proglangs }}, but I don't shy from taking classes when needed.

I also unabashedly love [Superman](/superman).

OS: [{{ site.OS }}]({{ site.OSsite }}) <br>
Browser: [{{ site.browser}}]({{ site.browsersite }})<br>
Phone OS: [{{ site.phoneOS }}]({{ site.phoneOSsite }})

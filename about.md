---
layout: default
title: About
---
{% capture age %}
{% include age.html %} 
{% endcapture %}

Lebanese-born {{ age | strip }} year-old artist, game designer & programmer.

I enjoy making art, playing the guitar, singing, dancing, and cooking.<br>I speak {{ site.langs }}.

I am an autodidact, teaching myself to play an instrument, as well as how to program in {{ site.proglangs }}, but I don't shy from taking classes when needed.

I also unabashedly love [Superman](/superman).

{% comment %}
[Aries Sun](https://www.starslikeyou.com.au/your-astrology-profile/the-sun-in-aries/)
[Leo Moon](https://www.starslikeyou.com.au/your-astrology-profile/moon-in-leo/)
[Aquarius Ascendent](https://www.starslikeyou.com.au/your-astrology-profile/your-ascendant-is-aquarius/)
{% endcomment %}

Laptop: [{{ site.laptop }}]({{ site.laptopsite }})<br>
OS: [{{ site.OS }}]({{ site.OSsite }}) <br>
Console: [{{ site.console }}]({{ site.consolesite }})<br>
Browser: [{{ site.browser}}]({{ site.browsersite }})<br>
Phone OS: [{{ site.phoneOS }}]({{ site.phoneOSsite }})

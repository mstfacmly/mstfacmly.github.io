---
layout: default
---
{% capture age %}
{% include age.html %} 
{% endcapture %}

Age: {{ age | strip }}

Current OS: [{{ site.OS }}]({{ site.OSsite }})

I enjoy making art, playing the guitar, singing, dancing, and cooking.

I am an autodidact, teaching myself to play an instrument, as well as how to program in {{ site.proglangs }}, but I don't shy from taking classes when needed.

I speak {{ site.langs }}.

---
layout: default
title: Résumé
---
### Languages
{% assign langs = site.langs | remove: 'a little bit of' | remove: 'and' | remove: ',' | split: ' ' %}
{%- for lang in langs -%}
{% comment %}
{% if lang == 'Spanish' or lang == 'Italian' %}
* {{ lang | append: ' (Functional)' -}}
{% else %}
* {{ lang | append: ' (Master)' -}}
{% endif %}
{% endcomment %}
* {{ lang -}}
{%- endfor %}

### Programming Languages
{% assign prog = site.proglangs | remove: '& Web languages' | remove: '(' | remove: ')' | split: ',' %}
{% for langs in prog %}
* {{ langs -}}
{% endfor %}

### Games
* [Sig: the City Between](https://genesisoflegend.com/products/sig) - Interior Artwork
* [The Other Room](http://minorityvr.com) - Game and Narrative Consultant
* [الأخرة (in development)](https://studioslune.com/projects/alakhira) - Game, Narrative, and Art Direction, Character Designer, 3D Artist, Animator, Programmer

### Writer
#### In print
* [Fourrer Le Feu](https://leslibraires.ca/livres/fourrer-le-feu-marjolaine-beauchamp-9782924682036.html) - Prologue
* [Grammaire Rebelle](https://www.facebook.com/events/290536951728803/) - Provided with a non-colonialist definition of Falasteen

#### Online
* [Multijoueur](https://multijoueur.ca/author/mchamli/) - Writer
* [Geekbecois](https://geekbecois.com/author/moustafa/) - Collaborator

<!--div id="contributions" class="contributions" markdown="1">
## Coding Contributions:
 <ul>
  {% for contribution in site.data.github-contributions limit:10 %}
   <li><a href="{{ contribution.html_url }}">{{ contribution.title }}</a></li>
  {% endfor %}
 </ul>
</div-->

---
layout: default
title: Résumé
---
<div class="reslinks" markdown="1">

* <a href="https://mstfacmly.github.io"><i class="fab fa-github"></i></a>
* <a href="{{ site.medium }}"><i class="fab fa-medium"></i></a>
* <a href="{{ site.linkedin }}"><i class="fab fa-linkedin-in"></i></a>

</div>

<section id="resume" markdown="1">

### Blurb
Game designer, 2D/3D Artist, Animator, Writer, QA Tester <br>
Currently employed at {% site.employer %}

### Languages
{% assign langs = site.langs | split: ', ' %}
{%- for lang in langs -%}
{% comment %}
{% if lang == langs[3] or lang == langs[4] %}
* {{ lang | append: ' (Functional)' -}}
{% else %}
* {{ lang | append: ' (Master)' -}}
{% endif %}
{% endcomment %}
{% if lang != langs.last %}
{{- lang | append: ', ' -}}
{%- else -%}
{{- lang -}}
{% endif %}
{%- endfor %}

### Programming Languages
{% assign prog = site.proglangs | remove: '& Web languages' | remove: '(' | remove: ')' | split: ',' %}
{%- for langs in prog -%}
{%- if langs != prog.last -%}
{{- langs | append: ', ' -}}
{%- else -%}
{{- langs -}}
{% endif %}
{% endfor %}

{% comment %}
* {{ langs -}}
{% endcomment %}

### Games
* [Sig: the City Between](https://genesisoflegend.com/products/sig) - Interior Artwork
* [The Other Room](http://minorityvr.com) - Game and Narrative Consultant
* [الأخرة (in development)](https://studioslune.com/projects/alakhira) - Game, Narrative, and Art Direction, Character Designer, 3D Artist, Animator, Programmer

### Writing
#### In print
* [Fourrer Le Feu](https://leslibraires.ca/livres/fourrer-le-feu-marjolaine-beauchamp-9782924682036.html) - Prologue
* [Grammaire Rebelle](https://www.facebook.com/events/290536951728803/) - Small snippet regarding the term "filistine"

#### Online
* [Medium]({{ site.medium }}) - General writing
* [Multijoueur](https://multijoueur.ca/author/mchamli/) - Writer (Reviews, Op-Eds)
* [Geekbecois](https://geekbecois.com/author/moustafa/) - Collaborator (Reviews, Op-Eds, journalistic blurbs)

#### Web Design
* [Memphis Feminist Collective](http://memphisfeministcollective.org/) - Completing the site's setup & added extra CSS rules
* [Game Curious Montreal](http://gamecuriousmtl.mrgs.ca/) - Updating the website to use Jekyll and adding reactive rules for mobile use
* [This website](https://github.com/mstfacmly/mstfacmly.github.io/) - This page's GitHub repo

<!--div id="contributions" class="contributions" markdown="1">
## Coding Contributions:
 <ul>
  {% for contribution in site.data.github-contributions limit:10 %}
   <li><a href="{{ contribution.html_url }}">{{ contribution.title }}</a></li>
  {% endfor %}
 </ul>
</div-->

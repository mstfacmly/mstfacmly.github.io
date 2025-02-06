---
layout: default
title: Résumé
---

<div class="reslinks" markdown="1">

* <a href="{{ site.github.repo }}"><i class="fab fa-github"></i></a>
* <a href="{{ site.medium }}"><i class="fab fa-medium"></i></a>
* <a href="{{ site.linkedin }}"><i class="fab fa-linkedin-in"></i></a>

</div>

<section class="resume" markdown="1">
Game designer, 2D/3D Artist, Animator, Writer, QA Tester <br>
Currently employed at {{ site.employer }}

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
#### Analytics QA
* Various Projects
  * Quering SQL tables to validate the data is correct
  * Knowledge transfer sessions
  * Confluence documentation writing and updates
#### Development
* [الأخرة (in development)](https://studioslune.com/projects/alakhira) (Website down) - 
  * Game Design
  * Narrative
  * Art Direction
  * Character Designer
  * 3D Artist
  * Animator
  * Programmer
* [FASCball](https://mstfacmly.itch.io/fascball) 
  * Game design
  * Programming
#### Tech Design
* WB Games Internal Arcades Projects - Tech Designer - Small internal project. 
  * Integrated [Ink](https://www.inklestudios.com/ink/) into Unreal Engine 5, alongside various features to help the team bring their vision to life.
#### Dev QA
* [Gotham Knights](https://www.gothamknightsgame.com/en-us) 
  * Rendering DevQA - Providing first point of contact support to the rendering team
    * Providing with direct support to engine issues for the developers
    * Tasks include daily reports, preflight testing, performance captures
      * Unreal engine tools, Telemetry, XBOX GDK, and PS5 Razor CPU/GPU
  * Promotion team - Assuring Engine stability & functionality
#### FQA
* [LEGO Star Wars: The Skywalker Saga](https://www.starwars.com/games-apps/lego-star-wars-the-skywalker-saga) - Functionality QA tester - Creating and updating productivity aids which helped simplify the workflow for other testers
* WB Games 2019 Internal Game Jam - Game Designer, Narrative Writer - Winning game jam project built in one day with a small team.
* Project Phoenix - Functionality QA tester - 3C Pod lead
  * Creating and assigning test cases
  * Direct communication with the designers to assess their testing needs and provide feedback as needed
#### Miscaleneous
* [Sig: the City Between](https://genesisoflegend.com/products/sig) - Interior Artwork
* [The Other Room](http://minorityvr.com) - Game and Narrative Consultant

### Writing
#### In print
* [Fourrer Le Feu](https://leslibraires.ca/livres/fourrer-le-feu-marjolaine-beauchamp-9782924682036.html) - Prologue
* [Grammaire Rebelle](https://www.facebook.com/events/290536951728803/) - Small snippet 

#### Online
* [Medium]({{ site.medium }}) - General writing
* [Multijoueur](https://multijoueur.ca/author/mchamli/) - Writer (Reviews, Op-Eds)
* [Geekbecois](https://geekbecois.com/author/moustafa/) - Collaborator (Reviews, Op-Eds, journalistic blurbs)

#### Web Design
* [This website](https://github.com/mstfacmly/mstfacmly.github.io/) - This page's GitHub repo
* [Memphis Feminist Collective](http://memphisfeministcollective.org/) - Completing the site's setup & added extra CSS rules
* [Game Curious Montreal](http://gamecuriousmtl.mrgs.ca/) - Updating the website to use Jekyll and adding reactive rules for mobile use

<!--div id="contributions" class="contributions" markdown="1">
## Coding Contributions:
 <ul>
  {% for contribution in site.data.github-contributions limit:10 %}
   <li><a href="{{ contribution.html_url }}">{{ contribution.title }}</a></li>
  {% endfor %}
 </ul>
</div-->

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

## I am a Game designer with a love of the marriage of mechanics and narrative.
### I've honed my skills over the years by developing a diverse range of skills, including 2D/3D Art, Animation, Writing, and QA Testing.

Currently employed at {{ site.employer }}

#### Languages
{% assign langs = site.langs | split: ', ' %}
{%- for lang in langs -%}
    {% if lang != langs.last %}
     {{- lang | append: ', ' -}}
     {%- else -%}
     {{- lang -}}
    {% endif %}
{%- endfor %}

#### Programming Languages
{% assign prog = site.proglangs | remove: '& Web languages' | remove: '(' | remove: ')' | split: ',' %}
{%- for langs in prog -%}
    {%- if langs != prog.last -%}
     {{- langs | append: ', ' -}}
     {%- else -%}
     {{- langs -}}
    {% endif %}
{% endfor %}

### Designer & Narrative

* [الأخرة (development halted)](https://studioslune.com/projects/alakhira) (Website in the process of restoration) - Game, Narrative, and Art Direction, Character Designer, 3D Artist, Animator, Programmer. A 3D action game about the end of the world.
* [The Other Room](http://minorityvr.com) - Game and Narrative Consultant - I was originally brought in as a tester to the VR narrative experience. For the second session, I was brought in as a consultant on the games' level designs, and assisted with minor changes which would provide with a challenge to the player while keeping them invested in the story of the game.
* [FASCball](https://mstfacmly.itch.io/fascball) - Where football meets with fascism! A short arcade-style gamme where two human players play football (soccer) against a (dumb) AI team. The players play by the rules, while the oponents have guns and can change the rules on a whim.
* **WB Games Montreal Internal Arcades Projects** - Tech Designer - Small internal project. Integrated [Ink](https://www.inklestudios.com/ink/) into Unreal Engine 5, alongside various features to help the team bring the vision to life.
* **WB Games 2019 Internal Game Jam** - Game Designer, Narrative Writer - Winning game jam project built in one day with a small team. The project won first place for adhering to the intended ideas, while executing them with simplicity and fun in mind.

### QA

My years of QA have provided me with a better understanding in the value of the various fields of QA. 
These experiences have better shaped my approach to design, as well as ensure that I consider QA as early as possible into a project.

* QA Analytics - Various projects. The experience on the Analytics team shows me how data can be used to better understand how a player experiences a game.
* [Gotham Knights](https://www.gothamknightsgame.com/en-us) - Rendering DevQA - Providing first point of contact support to the rendering team, providing with direct support to engine issues for the developers. Tasks include daily reports, preflight testing, performance captures (via Unreal engine tools, Telemetry, XBOX GDK, and PS5 Razor CPU/GPU; Promotion team - Assuring Engine stability & functionality
* [LEGO Star Wars: The Skywalker Saga](https://www.starwars.com/games-apps/lego-star-wars-the-skywalker-saga) - Functionality QA tester - Creating and updating productivity aids which helped simplify the workflow for other testers
* **Unnamed project** - Functionality QA tester - 3C Pod lead - Creating and assigning test cases, direct communication with the designers to assess their testing needs and provide feedback as needed.

### Art

* [Sig: the City Between](https://genesisoflegend.com/products/sig) - Contributed some interior artwork to this indie TTRPG.

### Writing

#### In print
* [Fourrer Le Feu](https://leslibraires.ca/livres/fourrer-le-feu-marjolaine-beauchamp-9782924682036.html) - A short poem I wrote found itself as the prologue to the collection of poems.
* [Grammaire Rebelle](https://www.facebook.com/events/290536951728803/) - A small snippet 

#### Online
* [Fantasia Film Festival](https://fantasiafestival.com/) - As an assistant programmer to the Fantasia International Film Festival, I have been provided with the oportunity to assist in the selection of the festival's programming, as well as writing descriptive text for certain films selected for the festival.
* [Medium]({{ site.medium }}) - Generalized writing.
* [Multijoueur](https://web.archive.org/web/20200925045229/https://multijoueur.ca/author/mchamli/) - One of the original writers on the site. I started with Reviews before moving more fully into Op-Eds. I eventually left to focus more on game developement instead. I had also pushed hard for us to cover the events of the harrassment movement called "GamerGate" at the time, which made us the first Quebec-based outlet to speak of it.
* [Geekbecois](https://geekbecois.com/author/moustafa/) - I was hired as collaborator, a role which had me write reviews, Op-Eds, as well as the occasional journalistic blurb.

### Web Design
* [This website](https://github.com/mstfacmly/mstfacmly.github.io/) - This page's GitHub repo

<!--div id="contributions" class="contributions" markdown="1">
## Coding Contributions:
 <ul>
  {% for contribution in site.data.github-contributions limit:10 %}
   <li><a href="{{ contribution.html_url }}">{{ contribution.title }}</a></li>
  {% endfor %}
 </ul>
</div-->

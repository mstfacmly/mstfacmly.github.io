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

## I am a Game designer with a love of the marriage of mechanics and narrative. Worked on some of 2023's biggest gams such as LEGO Star Wars: the Skywalker Saga, Gotham Knights, and ...

### Game Design

### I've honed my skills over the years by developing a diverse range of skills, including 2D/3D Art, Animation, Writing, and QA Testing.

* **WB Games 2019 Internal Game Jam** - Game Designer, Narrative Writer - Winning game jam project built in one day with a small team. The project won first place for adhering to the intended ideas, while executing them with simplicity and fun in mind.
* [FASCball](https://mstfacmly.itch.io/fascball) - A short arcade-style game made during a game jam. I created and set up the game's rules, how points are scored, and what gamplay modifiers can occur.
* [The Other Room](http://minorityvr.com) - Game and Narrative Consultant - I was brought in as a consultant on the games' level designs, and assisted with minor changes which would provide with a challenge to the player while keeping them invested in the story of the game.
* [الأخرة](https://studioslune.com/projects/alakhira) (Website in the process of restoration) - Game, Narrative, and Art Direction, Character Designer, 3D Artist, Animator, Programmer. A 3D action game about the end of the world.
* **WB Games Montreal Internal Arcades Projects** - Tech Designer - Internal project. BP optimisation and modulation, and [Ink](https://www.inklestudios.com/ink/) integration into Unreal Engine 5.

#### QA

My years of QA have provided me with a better understanding in the value of the various fields of QA, and ensure that I consider QA as early as possible into a project.

* [Gotham Knights](https://www.gothamknightsgame.com/en-us) - February 2021 - July 2023 - Rendering DevQA - Validating
* QA Analytics - Various projects. The experience on the Analytics team shows me how data can be used to better understand how a player experiences a game.
* [LEGO Star Wars: The Skywalker Saga](https://www.starwars.com/games-apps/lego-star-wars-the-skywalker-saga) - Functionality QA tester - Creating and updating productivity aids which helped simplify the workflow for other testers
* **Unnamed project** - Functionality QA tester - 3C Pod lead - Creating and assigning test cases, direct communication with the designers to assess their testing needs and provide feedback as needed.

### Additional skills

### Programming Languages 
{% assign prog = site.proglangs | remove: '& Web languages' | remove: '(' | remove: ')' | split: ',' %}
{%- for langs in prog -%}
    {%- if langs != prog.last -%}
     {{- langs | append: ', ' -}}
     {%- else -%}
     {{- langs -}}
    {% endif %}
{% endfor %}

### Art

* [Sig: the City Between](https://genesisoflegend.com/products/sig) - Contributed some interior artwork to this indie TTRPG.

### Writing

#### Online
* [Multijoueur](https://web.archive.org/web/20200925045229/https://multijoueur.ca/author/mchamli/) - One of the original writers on the site. I started with Reviews before moving more fully into Op-Eds. I eventually left to focus more on game developement instead. I had also pushed hard for us to cover the events of the harrassment movement called "GamerGate" at the time, which made us the first Quebec-based outlet to speak of it.
* [Geekbecois](https://geekbecois.com/author/moustafa/) - I was hired as collaborator, a role which had me write reviews, Op-Eds, as well as the occasional journalistic blurb.
* [Fantasia Film Festival](https://fantasiafestival.com/) - As an assistant programmer to the Fantasia International Film Festival, I have been provided with the oportunity to assist in the selection of the festival's programming, as well as writing descriptive text for certain films selected for the festival.

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

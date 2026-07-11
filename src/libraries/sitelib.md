---
title: Social Issues, Topics, and Evemts Library
layout: layout.njk
library: socialsitetops
---

# {{ title }}

{% set articles = collections[library] | sortBy("date") %}
{% set collection = articles | groupBy("era") %}

<p>
    <i>From TSIKHI, the Cossackian encyclopedia.</i><br>
    <b>{{ articles | length }}</b> article{% if articles | length != 1 %}s{% endif %}.
</p>

A eto tak ty yest' uchit, takaja Eleventy raboczno.

*If you can read this, Eleventy is working. (But in Cossackian.)*

{% set collection = collections[library]
    | sortBy("date")
    | groupBy("era") %}

{% if collection | length == 0 %}

<p><i>This library currently contains no articles.</i></p>

{% else %}

{% for era, articles in collection %}

<h2>{{ era }}</h2>

{% set dates = articles | groupBy("date") %}

{% for date, entries in dates %}

<h3>{{ date | dateFormat }}</h3>

<ul>

{% for article in entries %}

<li>
    <a href="{{ article.url | url }}">
        {{ article.data.title }}
    </a>
</li>

{% endfor %}

</ul>

{% endfor %}

{% endfor %}

{% endif %}

### (Update: "Social Issues, Topics, and Evemts!" Yeah wight, so so cute, ow my gawd. Pls downt huwt me. :3 Here y'all deserve a coughing baby. Good day. Oh yeah, this is deducted from my pay so yeah. Adios.)
### *(Yours truly: Karlagrad Technologies Team "Knigu")*

<img
    src="{{ '/images/goofyahhshits/damn-laughbaby.gif' | url }}"
    alt="Cute cat"
    style="display:block; width:25%; height:auto; margin:1em auto;">
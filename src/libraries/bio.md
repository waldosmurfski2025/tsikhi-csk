---
title: Biography Library
layout: layout.njk
---

# {{ title }}

*From TSIKHI, the Cossackian encyclopedia.*

{% set collection = collections.biography
    | sortBy("date")
    | groupBy("era") %}

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
---
title: Home
layout: layout.njk
---

<img
    src="{{ '/images/eventsbanners/tsikhi_update-0.1.6_beta-testing-version.png' | url }}"
    alt="Cute cat"
    style="display:block; width:25%; height:auto; margin:1em auto;">

{% set type = "featured" %}
{% set title = "✨⭐️ Bear hugs, from Cossackia! ⭐️✨ 🐻🐻‍❄️" %}
{% set message = "Welcome to TSIKHI—Cossackia's national library of histories, cultures, and knowledges you need to know about Cossackia! This website is still under heavy development, so please BEAR with us. <3" %}
{% set icon = "/images/system/milk-and-mocha-milk-mocha-bear.gif" %}

{% include "components/notice.njk" %}

# Zdrawujce!

*From TSIKHI, the Cossackian encyclopedia.*

{% set image="/images/indexpage/wikipedia-my-beloved.png" %}
{% set alt="wikipedia-my-beloved" %}
{% set caption="Wikipedia—our ultimate inspiration for making this website. If you see this, Wikipedia, we love you so much!" %}
{% set position="tright" %}

{% include "components/thumbnail.njk" %}

If you can read this, Eleventy is working.

The Tsar Karla I History Institute (TSIKHI, pronounced "tsee-khee") is the official digital archive of Cossackian history, created on July 8, 2026. The institute is under the jurisdiction of the follow government ministries and agencies:

- The Ministry of the Interior
- The Ministry of Education
- The Ministry of Foreign Affairs
- The Ministry of Information and Communications Technology
- The Ministry of Science and Technology
- The Ministry of Social Weather
- The Ministry of Social Welfare
- The Ministry of Social Works
- The Ministry of Tourism
- The Education Rights Protection Commission

Through the Cossackian History Directory System (HISDIR-SYS), visitors can browse historical events, biographies, legislation, journalism, maps, and archival records spanning every era of Cossackian history.



{% set totalArticles =
    (collections.mainevents | default([]) | length)
    + (collections.biography | default([]) | length)
    + (collections.cartography | default([]) | length)
    + (collections.journalist | default([]) | length)
    + (collections.legal | default([]) | length)
    + (collections.miscellaneous | default([]) | length)
    + (collections.socialsitetops | default([]) | length)
%}

## We've oficially recorded so far: {{ totalArticles }} articles

({{ collections.mainevents | length }} events |
{{ collections.biography | length }} biographies |
{{ collections.cartography | length }} maps |
{{ collections.journalist | length }} journalist documents |
{{ collections.legal | length }} legal documents |
{{ collections.miscellaneous | length }} miscellanous articles |
{{ collections.socialsitetops | length }} SITE articles)

Read the test <a href="{{ '/libraries/bio/tsar-karla-i/' | url }}">here</a>. (First ever article, 100% not clickbait or Rick Roll.)
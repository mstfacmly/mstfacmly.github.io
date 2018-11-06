{% assign wpm = 256 %}
{% assign w_count = page.content | strip_html | number_of_words %}
{% assign mins_f = w_count | divided_by: wpm + .0 %}
{% assign mins_i = w_count | divided_by: wpm %}

{% assign diff = mins_f | minus: mins_i %}
{% if diff >= 0.5 %}
	{% assign mins = mins_i + 1 %}
{% else %}
	{% assign mins = mins_i %}
{% endif %}

{% if mins <= 1 %}
	{% assign read_time = '1' | append: ' minute' %}
{% else %}
	{% assign read_time = mins | append: ' minutes' %}
{% endif %}

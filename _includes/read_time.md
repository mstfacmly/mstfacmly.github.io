{% assign wpm = 226 %}
{% assign wpm_l = wpm | minus: 30 %}
{% assign wpm_h = wpm | plus: 30 %}

{% assign w_count = page.content | strip_html | number_of_words %}

{% assign mins_l_f = w_count | divided_by: wpm_l + .0 %}
{% assign mins_l_i = w_count | divided_by: wpm_l %}
{% assign mins_h_f = w_count | divided_by: wpm_h + .0 %}
{% assign mins_h_i = w_count | divided_by: wpm_h %}


{% assign diff = mins_l_f | minus: mins_l_i %}
{% if diff >= 0.5 %}
	{% assign mins_l = mins_l_i + 1 %}
{% else %}
	{% assign mins_l = mins_l_i %}
{% endif %}

{% assign diff = mins_h_f | minus: mins_h_i %}
{% if diff >= 0.5 %}
	{% assign mins_h = mins_h_i + 1 %}
{% else %}
	{% assign mins_h = mins_h_i %}
{% endif %}

{% if mins_h <= 1 %}
	{% assign read_time = '1' | prepend: '0 - ' | append: ' minute' %}
{% else %}
	{% assign read_time = mins_h | append: ' - ' | append: mins_l | append: ' minutes' %}
{% endif %}

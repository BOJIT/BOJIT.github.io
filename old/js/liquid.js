---
---
/*-------------- Javascript Variables Generated at Compile-Time --------------*/

const ARTICLES = [{% for post in site.posts %}
	"{{ post.url }}"{% unless forloop.last %},{% endunless %}
	{% endfor %}];
const BASEURL = "{{ site.baseurl }}";

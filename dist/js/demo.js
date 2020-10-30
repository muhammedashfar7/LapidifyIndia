---
layout: null
---
{% for icon in site.icons %}
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput-{{icon-name}}");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

{% endfor %}
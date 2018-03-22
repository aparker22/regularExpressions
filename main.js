
var regex = {
    stocks : /^[a-zA-Z]{1,5}$/,
    credit : /^[0-9]{4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
    links: /^https?:\/\/(www\.)?[a-zA-Z0-9]+\.[A-Za-z]{1,3}\/?/,
    html: /<td class="summary" style="[a-zA-Z0-9: -]+">"<a href="[\/a-zA-Z0-9_() ]+" title="[a-zA-Z0-9 ()]+">([a-zA-Z0-9 ]+)<\/a>"<\/td>/g
};



module.exports = regex;

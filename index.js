// register custom helper named 'comment_body' to use in template as a substitution variable
Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
});

function loadIssues() {

  const template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  
  const result = template(issues);
  
  document.getElementsByTagName("main")[0].innerHTML += result;

}

// the Handlebars template argument object (here, "issues") must have keys that match the names of the variables in the template (unless custom helpers are created...)

// the argument object is called into the Handlebars.compile function to output the HTML of the template with the substituted values

// the iteration through the issues array is handled by the {{#each this}} in the template, rather than iteration in loadIssues which works but is very slow
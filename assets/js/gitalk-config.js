var gitalk = new Gitalk({
  	"clientID": "6e0e1ff937d22f9e0b8a",
  	"clientSecret": "266e600c88b22ad8d5d19f5ea4778abf9341b9b8",
  	"repo": "gw816.github.io",
  	"owner": "gw816",
  	"admin": ["gw816"],
  	"id": window.location.pathname,
  	"distractionFreeMode": false
	});
gitalk.render("gitalk-container");

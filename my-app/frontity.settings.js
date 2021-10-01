const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "api": "https://public-api.wordpress.com/wp/v2/sites/igmoweb.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "example-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          api: "https://public-api.wordpress.com/wp/v2/sites/igmoweb.com",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

module.exports = (server, app) => {
  // fixes error where about page isnt rendered with extra forward slash
  server.get("/about/", (req, res) => {
      app.render(req, res, "/about");
  });

  // renders about page no matter what is after
  server.get("/about/:page", (req, res) => {
      app.render(req, res, "/about");
  });

  // fixes error where about page isnt rendered with extra forward slash
  server.get("/about", (req, res) => {
      app.render(req, res, "/about");
  });

  // fixes error where contact page isnt rendered with extra forward slash
  server.get("/contact/", (req, res) => {
      app.render(req, res, "/contact");
  });

  // renders contact page no matter what is after
  server.get("/contact/:page", (req, res) => {
      app.render(req, res, "/contact");
  });

  // fixes error where contact page isnt rendered with extra forward slash
  server.get("/contact", (req, res) => {
      app.render(req, res, "/contact");
  });
};

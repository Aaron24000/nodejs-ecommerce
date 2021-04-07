// exports.getLogin = (req, res, next) => {
//   const isLoggedIn = req.get("Cookie").split(";")[1].trim().split("=")[1];
//   console.log(isLoggedIn);
//   res.render("auth/login", {
//     path: "/login",
//     pageTitle: "Login",
//     isAuthenticated: isLoggedIn,
//   });
// };

exports.getLogin = (req, res, next) => {
//   const isLoggedIn = req.get("Cookie")
//   //   .split(';')[1]
//   //   .trim()
//     .split('=')[1] === 'true';
//   console.log(isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly");
  res.redirect("/");
};

// exports.getLogin = (req, res, next) => {
//     let isAuthentication = false;
//     let cookieString = req.get('Cookie');
//     if(cookieString){
//      let cookieArray =  cookieString.split(';');
//       cookieArray.forEach( (cookie) => {
//         if(cookie.includes('loggedIn')){
//           isAuthentication = cookie.split('=')[1] == 'true';
//         }
//       })
//     }

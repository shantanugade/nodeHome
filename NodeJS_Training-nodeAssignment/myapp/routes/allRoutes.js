var controllers = require('../controllers/controllers');

module.exports = (app) => {

    app.use('/signup', controllers.signUp );
    app.use('/signin', controllers.signIn );
    app.use('/home', controllers.home );
    app.use('/homeadmin', controllers.homeAdmin );
    //app.use('/', controllers.signUp );



}



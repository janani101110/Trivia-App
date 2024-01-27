const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const User = require('./models/User');

const GOOGLE_CLIENT_ID="467826213880-fna4g7gvrp2e4fsiir10j7jgrcbmkqbi.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        if (err) {
            return cb(err, null);
          }
          return cb(null, user);     
    });
  }
));


passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      if (!user) {
        return done(null, false);
      }
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  });











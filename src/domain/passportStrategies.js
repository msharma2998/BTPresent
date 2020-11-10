import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { searchById } from "../repo/auth";

let options = {};
options.secretOrKey = process.env.JWT_SECRET;
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

export default function (passport) {
  passport.use(
    new JwtStrategy(options, (payload, done) => {
      searchById(payload.id)
        .then((result) => {
          if (result == null) done(null, false);
          else done(null, result);
        })
        .catch((err) => done(err));
    })
  );
}

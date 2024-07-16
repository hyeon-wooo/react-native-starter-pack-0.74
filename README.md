# React Native Start Pack v0.74

This is a starter pack of react native for version 0.74.x.
It has features below.

- Use `fetch API` to call BE api. So don't use Axios.
- Use custom theme, intead of Tailwind, Emotion, etc. So don't use other third-party styling library.
- Use [babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import) plugin.
- Use `Recoil` to manage global states.

## Preparation

1. Enter your api base url on `src/lib/constant.ts -> API_URL` variable.
2. Implement the signin function.

   - Use `src/screen/SignIn.tsx`, `src/api/user.ts -> api_signIn()`
   - When sign in completed, store accessToken in AsyncStorage and set to recoil state(atom\_\_accessToken).

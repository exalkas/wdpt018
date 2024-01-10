### User Profile Form Exercise with `useReducer` and Context API

**Objective** : Create a user profile form where users can input and update their personal information, with state management handled by `useReducer` within the Context API.

#### Setup:

1. Create a new React application using `create-react-app` or `vite`.

#### Task Steps:

1. **Creating the User Profile Context and Reducer** :

- In a folder named `contexts`, create a file `UserProfileContext.js`.
- Define an initial state for the user profile and a `profileReducer` function to handle `UPDATE_FIELD` actions.
- Export the `UserProfileContext` and a `UserProfileProvider` component that uses the `useReducer` hook.

2. **Creating User Profile Form Component** :

- Create a component `UserProfileForm.js`.
- Inside this component, use `useContext` to consume `UserProfileContext`.
- Render input fields for user profile fields (e.g., name, email, etc.) and a submit button.
- Ensure that each input field dispatches `UPDATE_FIELD` actions upon changes.

3. **Integrating Components** :

- In `App.js`, import `UserProfileProvider` and `UserProfileForm`.
- Wrap the `UserProfileForm` component with `UserProfileProvider`.

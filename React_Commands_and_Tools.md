
# React Commands and Tools

## 1. **Install/Create a React App**
- Create a new React app (with `create-react-app`):
  ```bash
  npx create-react-app my-app
  cd my-app
  ```
- Create a React app with Vite (faster alternative):
  ```bash
  npm create vite@latest my-app --template react
  cd my-app
  npm install
  ```

---

## 2. **React Router (for navigation)**
- Install React Router:
  ```bash
  npm install react-router-dom
  ```
- Example usage:
  ```jsx
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  ```

---

## 3. **State Management (Redux, Zustand, etc.)**
### Redux Toolkit (recommended way to use Redux):
- Install Redux Toolkit and React-Redux:
  ```bash
  npm install @reduxjs/toolkit react-redux
  ```

### Zustand (lightweight state management):
- Install Zustand:
  ```bash
  npm install zustand
  ```

---

## 4. **Styling**
### Install Tailwind CSS:
- Install Tailwind CSS in React:
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
  ```

### Install Material-UI:
- Install MUI components and icons:
  ```bash
  npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material
  ```

---

## 5. **Fetching Data**
### Axios:
- Install Axios for API requests:
  ```bash
  npm install axios
  ```

### React Query (state management for server state):
- Install React Query:
  ```bash
  npm install @tanstack/react-query
  ```

---

## 6. **TypeScript (if applicable)**
- Add TypeScript to an existing React project:
  ```bash
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```

---

## 7. **Testing**
### Jest (for testing):
- Install React Testing Library:
  ```bash
  npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
  ```

---

## 8. **Icons**
- Install FontAwesome:
  ```bash
  npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
  ```
- Install HeroIcons:
  ```bash
  npm install @heroicons/react
  ```

---

## 9. **Utilities**
### React Helmet (for managing document head):
- Install React Helmet:
  ```bash
  npm install react-helmet
  ```

### Prop-Types (for type checking props):
- Install Prop-Types:
  ```bash
  npm install prop-types
  ```

### ESLint and Prettier (for code linting and formatting):
- Install ESLint:
  ```bash
  npm install eslint --save-dev
  npx eslint --init
  ```

---

## 10. **Development Tools**
### React DevTools:
- Install React DevTools for debugging React apps:
  ```bash
  npm install --save-dev react-devtools
  ```
  - Alternatively, use the browser extension.

### Hot Module Replacement (if using Vite):
- It comes built-in with Vite. Just start the app, and updates refresh automatically.

---

## Example Workflow Commands
1. **Run the Development Server:**
   ```bash
   npm start
   ```

2. **Build for Production:**
   ```bash
   npm run build
   ```

3. **Run Linter:**
   ```bash
   npx eslint src/
   ```

4. **Test Your App:**
   ```bash
   npm test
   ```

---

This list should give you a solid foundation for building React apps with the necessary tools and libraries!

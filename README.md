# Web Graphic Editor

A minimal web-based image editor that allows users to **upload images**, **select areas of text within images**, and **process images efficiently**. Built with **modern web technologies** to ensure scalability, performance, and ease of use.

## 🚀 Features

- 📂 **Upload Images** (via File Input or Drag & Drop)
- 📝 **Select Text Areas within Images**
- 🎨 **Smart Canvas Resizing** to maintain aspect ratio
- 🔄 **Efficient State Management with Redux Toolkit**
- 📊 **Real-time Monitoring with Datadog**
- 🛠 **Automated CI/CD Pipeline for Continuous Integration & Deployment**
- ☁️ **Deployed on Vercel** for seamless hosting

---

## 🛠 Why These Technologies?

### ⚛️ React 19

React provides a powerful component-based architecture that enables dynamic UI updates and ensures maintainability.

### 🎨 Chakra UI

Chakra UI was chosen for its **flexibility**, **accessibility**, and **design consistency**, allowing us to build a sleek and responsive interface effortlessly.

### 🎭 Konva.js + react-konva

Konva.js is optimized for **2D canvas rendering**, making it the ideal choice for handling **image manipulation** and **text area selection** with smooth performance.

### 🏛 Redux Toolkit

State management is streamlined using Redux Toolkit, which provides **predictable data flow**, **easy debugging**, and **performance optimizations**.

### 📊 Datadog

Datadog enables real-time observability, helping us **track performance**, **detect issues early**, and ensure **optimal user experience**.

### 🚀 Vite

Vite enables **blazing-fast development builds** and **hot module replacement**, significantly improving the developer experience.

### 🔧 CI/CD with GitHub Actions

A **CI/CD pipeline** is integrated via GitHub Actions to automate static code analysis, formatting and testing, ensuring high-quality updates and seamless releases.

### ☁️ Vercel for Deployment

Vercel is used for **serverless deployment**, enabling fast global access and easy scaling.

---

## 📦 Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/image-editor.git
   cd image-editor
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Project Structure

```
📦 graphic-editor
├── 📂 .github/workflows # CI Pipeline Config (GitHub Actions)
├── 📂 tests   # End-To-End test example
├── 📂 src
│   ├── 📂 app           # Redux Store and Hooks
│   ├── 📂 components    # UI Components (Uploader, Canvas, Toolbar, etc.) and Chakra UI Components
│   ├── 📂 features      # Redux slices
│   ├── 📂 assets        # Static Assets (Icons, Logos, etc.)
│   ├── App.tsx          # Main App Component
|   ├── App.test.tsx     # Example unit test
│   ├── main.tsx         # Entry Point
│
├── 📜 .prettierrc      # Opinionated code formatting rules
├── 📜 eslint.config.js #
├── 📜 package.json     # Dependencies and Scripts
├── 📜 README.md        # Documentation
├── 📜 tsconfig.json    # TypeScript Config
├── 📜 vite.config.ts   # Vite Configuration
├── 📜 vitest.config.ts # Vitest testing configuration
└── 📜 vercel.json      # Vercel Deployment Config
└── 📜 datadog.config.js # Datadog Configuration
```

---

## 🚀 Deployment

This project is **automatically deployed on Vercel** whenever changes are pushed to the `main` branch.

---

## 🧪 Running Tests

This project uses **Vitest** and **Playwright** for testing:

```sh
npm run test       # Run unit tests (Vitest)
npm run test:e2e   # Run end-to-end tests (Playwright)
```

---

## 📜 License

MIT License © 2025 Miguel Diaz

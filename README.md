# 🛒 E-Commerce Website

A fully responsive single-page e-commerce application built with React.js, featuring live geolocation, animated banners, and dynamic product pages powered by the Dummy JSON API.


## ✨ Features

- 📍 **Live geolocation** — detects user location on load
- 🎞️ **Animated banners** — smooth hero carousel with CSS transitions
- 🗂️ **10+ category pages** — product data fetched dynamically via Axios from Dummy JSON API
- ⚡ **Shimmer UI skeletons** — sub-2s perceived load time with skeleton loaders
- 🛒 **Cart management** — add, remove, and update cart items across sessions
- 🔍 **Search functionality** — real-time search with Redux-managed state
- 📱 **Fully responsive** — mobile, tablet, and desktop layouts (3 breakpoints)
- 🔄 **Global state** — Redux Toolkit eliminates prop-drilling across 8+ routes

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React.js, HTML5, CSS3 |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Routing | React Router DOM |
| HTTP Client | Axios |
| API | [Dummy JSON API](https://dummyjson.com/) |
| Build Tool | Vite |
| Deployment | Vercel / Netlify |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ecommerce-website.git

# Navigate into the project directory
cd ecommerce-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── Banner/
│   ├── ProductCard/
│   ├── Cart/
│   └── Shimmer/
├── pages/
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── Search.jsx
├── store/
│   ├── store.js
│   ├── cartSlice.js
│   └── searchSlice.js
├── utils/
│   └── api.js
└── App.jsx
```

---

## 🔑 Key Implementation Highlights

- **Redux Toolkit** manages cart, search, and session state — consistent sync across all routes with zero prop-drilling
- **Shimmer UI** renders skeleton placeholders during API fetch for a snappy perceived load time
- **Axios interceptors** handle API errors gracefully with user-friendly fallbacks
- **React Router DOM** enables deep-linking to any category or product page

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
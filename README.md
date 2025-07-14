# My Vue App

## Overview
A modular Vue 3 application built with TypeScript and Vite, featuring photo collection browsing, favorites management, localization, and modern state management using Pinia.

## Features
- **Photo Collection**: Browse photos fetched from an external API.
- **Favorites**: Mark/unmark photos as favorites, view your favorite photos.
- **Routing**: Multi-page navigation with Vue Router.
- **Localization**: English language support via [src/locales/en.json](src/locales/en.json).
- **State Management**: Pinia stores for photos and favorites.
- **Responsive UI**: Custom header, footer, and side menu components.
- **Unit Testing**: Vitest and Vue Test Utils for integrated testing.

## Project Structure
```
my-vue-app
├── src/
│   ├── assets/styles/         # SCSS styles and variables
│   ├── components/            # UI components (header, layout, photos)
│   ├── locales/               # Localization files
│   ├── router/                # Vue Router setup ([src/router/index.ts](src/router/index.ts))
│   ├── services/              # API service ([src/services/api.ts](src/services/api.ts))
│   ├── stores/                # Pinia stores ([src/stores/photos.ts](src/stores/photos.ts), [src/stores/favorites.ts](src/stores/favorites.ts))
│   ├── tests/                 # Unit tests ([src/tests/ListView.spec.ts](src/tests/ListView.spec.ts), etc.)
│   ├── views/                 # App views ([src/views/App1/pages/ListView.vue](src/views/App1/pages/ListView.vue), etc.)
│   ├── App.vue                # Root component
│   ├── main.ts                # App entry point
│   └── i18n.ts                # Localization setup
├── .env.development           # API base URL config
├── .gitignore                 # Git ignore file
├── index.html                 # Main HTML file
├── package.json               # Project metadata and dependencies
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite and Vitest configuration
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
```sh
npm install
```

### Development
```sh
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build
```sh
npm run build
```

### Testing
```sh
npm run test
```

## Usage Notes
- **Photo API**: Configured via `.env.development` (`VITE_API_BASE_URL`).
- **Favorites**: Managed in [`useFavoritesStore`](src/stores/favorites.ts).
- **Localization**: Add more languages in [`src/locales/`](src/locales/).
- **Routing**: Main routes in [`src/router/index.ts`](src/router/index.ts).

## License
Nothing to license here.
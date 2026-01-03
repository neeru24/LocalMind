## Folder Structure

```bash
src/
├─ app/
│  ├─ App.tsx               # Root component
│  ├─ index.tsx             # ReactDOM.render / createRoot
│  ├─ routes/
│  │  ├─ AppRoutes.tsx      # Route definitions
│  │  └─ PrivateRoute.tsx
│  └─ store/
│     ├─ rootReducer.ts
│     ├─ store.ts
│     └─ middlewares/
├─ features/                # Feature-based architecture
│  ├─ auth/
│  │  ├─ components/        # Feature-specific UI
│  │  │  └─ LoginForm.tsx
│  │  ├─ hooks/             # Custom hooks for feature
│  │  │  └─ useAuth.ts
│  │  ├─ services/          # API or business logic
│  │  │  └─ authService.ts
│  │  ├─ slices/            # Redux / Zustand / Recoil slice
│  │  │  └─ authSlice.ts
│  │  └─ types/             # Feature-specific types
│  │     └─ auth.types.ts
│  ├─ dashboard/
│  │  ├─ components/
│  │  ├─ hooks/
│  │  ├─ services/
│  │  └─ slices/
├─ shared/                  # Reusable modules across features
│  ├─ components/           # Buttons, Modals, Cards
│  ├─ hooks/                # useFetch, useDebounce, etc.
│  ├─ utils/                # Helper functions
│  ├─ constants/            # App-wide constants
│  ├─ styles/               # Global SCSS, CSS, Tailwind configs
│  └─ icons/                # SVGs or Icon components
├─ core/                    # Application infrastructure
│  ├─ api/                  # Axios/fetch clients, interceptors
│  ├─ config/               # Environment config
│  └─ logger/               # Custom logging utilities
├─ assets/                  # Images, fonts, videos
├─ types/                   # Global TypeScript types
├─ hooks/                   # Global hooks (if not feature-specific)
├─ constants/               # App-wide constants
├─ tests/                   # Global test setup, mocks, utilities
│  ├─ setupTests.ts
│  └─ mockServer.ts
└─ index.tsx


```

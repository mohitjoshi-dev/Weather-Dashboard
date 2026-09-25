<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0B1120,50:0EA5E9,100:22D3EE&height=200&section=header&text=WEATHER%20DASHBOARD&fontSize=50&fontColor=ffffff&fontAlignY=38&desc=Real-time%20weather.%20Beautifully%20visualized.&descSize=18&descAlignY=60" width="100%" alt="Weather Dashboard header" />

<a href="https://github.com/mohitjoshi-dev/Weather-Dashboard">
  <img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=700&size=22&duration=2800&pause=900&color=0EA5E9&center=true&vCenter=true&width=700&lines=Live+weather%2C+any+city.;7-day+forecasts+at+a+glance.;Air+quality+you+can+actually+read.;Maps%2C+charts%2C+and+clean+data." alt="Typing animation" />
</a>

<br/>

**A modern weather dashboard with live forecasts, air quality and interactive maps.**
Fast. Visual. Built for daily use.

<br/>

<a href="https://astonishing-pithivier-e45bce.netlify.app/"><img src="https://img.shields.io/badge/▶_LIVE_DEMO-0EA5E9?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" /></a>
<a href="https://github.com/mohitjoshi-dev/Weather-Dashboard"><img src="https://img.shields.io/badge/★_STAR_THIS_REPO-111827?style=for-the-badge&logo=github&logoColor=white" alt="Star" /></a>
<a href="./LICENSE"><img src="https://img.shields.io/badge/LICENSE-MIT-22D3EE?style=for-the-badge" alt="MIT License" /></a>

<br/><br/>

<img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS_4-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8" />
<img src="https://img.shields.io/badge/shadcn%2Fui-111827?style=flat-square&logo=shadcnui&logoColor=white" />
<img src="https://img.shields.io/badge/Leaflet-111827?style=flat-square&logo=leaflet&logoColor=199900" />
<img src="https://img.shields.io/badge/Recharts-111827?style=flat-square&logo=chartdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Framer_Motion-111827?style=flat-square&logo=framer&logoColor=0055FF" />
<img src="https://img.shields.io/badge/Netlify-111827?style=flat-square&logo=netlify&logoColor=00C7B7" />

</div>

<br/>

---

## ✦ The idea

> **Weather data is everywhere. Reading it quickly is the hard part.**

Most weather sites bury the useful stuff under ads and clutter. Weather Dashboard strips it down to what you actually check: **current conditions, a 7-day outlook, air quality, and where you are on the map** — searchable by any city, in a clean dark or light interface.

<div align="center">

| 🔍 **SEARCH** | 📊 **UNDERSTAND** | 🗺️ **VISUALIZE** |
|:---:|:---:|:---:|
| Autocomplete city search | 7-day forecast breakdown | Live weather map |
| India-biased or global | Hourly highlights | Satellite view |
| Instant results | Air Quality Index (AQI) | AQI heatmap |

</div>

---

## ✨ What makes it different

<table>
<tr>
<td width="50%" valign="top">

### 🔍 Smart Location Search
Geoapify-powered autocomplete with an India-first bias, switchable to global search.
**→ Find any city in a couple of keystrokes.**

</td>
<td width="50%" valign="top">

### 🌤️ Full Forecast Picture
Current conditions plus a 7-day outlook, rendered with animated weather icons.
**→ Know what's coming, not just what's now.**

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🫁 Air Quality, Simplified
A dedicated AQI gauge and heatmap so air quality isn't an afterthought.
**→ See the number and what it actually means.**

</td>
<td width="50%" valign="top">

### 🗺️ Interactive Maps
Live weather and satellite layers built on Leaflet, right inside the dashboard.
**→ Zoom into conditions, not just read them.**

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🎚️ Your Units, Your Format
Toggle °C/°F and 12h/24h time, saved automatically for next time.
**→ Set it once, forget it.**

</td>
<td width="50%" valign="top">

### 🌗 Light & Dark Themes
A `next-themes`-powered theme switch that respects your system preference.
**→ Comfortable, day or night.**

</td>
</tr>
</table>

---

## 🧩 Core features

<details open>
<summary><b>🌤️ Current Weather & Forecast</b></summary>

<br/>

- Real-time conditions for any searched city
- 7-day forecast with animated weather icons
- Hourly highlights (wind, humidity, pressure, UV, and more)
- Skeleton loading states for a smooth first paint

</details>

<details open>
<summary><b>🔍 Location Search</b></summary>

<br/>

- Autocomplete search powered by Geoapify
- Region bias toggle (India / global)
- Deduplicated, clean result list

</details>

<details open>
<summary><b>🫁 Air Quality</b></summary>

<br/>

- AQI gauge for at-a-glance readability
- AQI heatmap on an interactive map
- Pulled alongside the main forecast call

</details>

<details>
<summary><b>🗺️ Maps</b></summary>

<br/>

- Live weather map layer
- Satellite map view
- Built with Leaflet + React-Leaflet

</details>

<details>
<summary><b>⚙️ Settings & Personalization</b></summary>

<br/>

- Temperature unit: Celsius / Fahrenheit
- Time format: 12-hour / 24-hour
- Search region bias
- Preferences persisted in local storage
- Light / dark theme

</details>

---

## 🖥️ Inside the app

| Module | What it does |
|:--|:--|
| **Dashboard** | Main shell tying search, forecast and maps together |
| **Current Weather** | Live conditions for the selected city |
| **Weekly Forecast** | 7-day outlook with icons |
| **Highlights** | Wind, humidity, pressure and other key stats |
| **Air Quality** | AQI gauge and breakdown |
| **Weather / Satellite Map** | Interactive Leaflet map layers |
| **AQI Map** | Air quality visualized geographically |
| **Settings** | Units, time format, region, theme |

---

## 🏗️ Architecture

```mermaid
flowchart TD
    UI["⚛️ React + Vite UI"]
    UI --> D["🌤️ Dashboard"]
    D --> W["📡 WeatherAPI.com<br/>forecast + AQI"]
    D --> G["📍 Geoapify<br/>location search"]
    D --> M["🗺️ Leaflet Maps<br/>weather · satellite · AQI"]
    UI --> S["⚙️ Settings & Theme<br/>local storage"]

    style UI fill:#0EA5E9,stroke:#7DD3FC,color:#fff
    style W fill:#0F172A,stroke:#22D3EE,color:#fff
    style G fill:#0F172A,stroke:#22D3EE,color:#fff
    style M fill:#0B1120,stroke:#38BDF8,color:#fff
```

---

## 🚀 Run it locally

**1. Clone the repo**

```bash
git clone https://github.com/mohitjoshi-dev/Weather-Dashboard.git
cd Weather-Dashboard
```

**2. Install dependencies**

```bash
npm install
```

**3. Add your environment variables**

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_weatherapi_com_key
VITE_GEOAPIFY_API_KEY=your_geoapify_api_key
```

> Get a free key from [weatherapi.com](https://www.weatherapi.com/) and [geoapify.com](https://www.geoapify.com/).

**4. Start the dev server**

```bash
npm run dev
```

Open the local URL that Vite prints, search a city, and you're in. 🎉

---

## 📁 Project structure

```
Weather-Dashboard/
│
├── public/
│
├── src/
│   ├── api/              # weatherapi.com & geoapify calls
│   ├── assets/           # hero image, icons
│   ├── components/
│   │   ├── layout/       # Dashboard, Sidebar, MainContent
│   │   ├── weather/      # forecast, AQI, maps, gauges
│   │   ├── settings/     # SettingsModal
│   │   ├── skeletons/    # loading states
│   │   └── ui/           # shadcn/ui primitives
│   ├── context/          # Settings & Theme providers
│   ├── hooks/            # useWeather
│   ├── lib/
│   └── main.jsx
│
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> 🔒 `.env` is intentionally excluded from the public repository.

---

## 🔐 Security

- API keys live in environment variables, never in source code
- `.env` is git-ignored (`.env.example` can be committed as a template)
- Client-side keys (WeatherAPI, Geoapify) are exposed to the browser by design — use provider-side domain/referrer restrictions if you deploy this publicly

---

## 🎨 Design direction

<div align="center">

`DARK-FIRST` · `GLASS SURFACES` · `SOFT GLOW` · `CLEAN TYPE` · `DATA OVER DECORATION` · `MICRO-INTERACTIONS`

</div>

Minimal noise, strong hierarchy, responsive layouts, and Framer Motion used for feel, not spectacle.

---

## 🛣️ Roadmap

- ✅ Live search with autocomplete
- ✅ Current weather + 7-day forecast
- ✅ Air Quality Index gauge & map
- ✅ Interactive weather & satellite maps
- ✅ Unit, time format & region settings
- ✅ Light / dark theme
- ✅ Production deployment
- ⬜ Saved / favorite locations
- ⬜ Hourly forecast timeline
- ⬜ Severe weather alerts
- ⬜ PWA / offline support
- ⬜ More granular map layers

---

## 🧪 What I learned building this

React 19 + Vite · Tailwind v4 & shadcn/ui · consuming third-party weather & geocoding APIs · Leaflet map integration · context-based settings & theming · skeleton loading states · Framer Motion micro-interactions · deployment.

The goal: turn raw weather data into something people actually want to check every day.

---

<div align="center">

## 👨‍💻 Built by

**Mohit Joshi**
B.Tech Information Technology · Frontend / Full-Stack Developer

<a href="https://github.com/mohitjoshi-dev"><img src="https://img.shields.io/badge/GitHub-mohitjoshi--dev-111827?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>

<br/>

### If Weather Dashboard was useful

⭐ **Star** the repo · 🍴 **Fork** it · 💬 **Share feedback**

<br/>

<a href="https://astonishing-pithivier-e45bce.netlify.app/"><img src="https://img.shields.io/badge/OPEN_WEATHER_DASHBOARD-0EA5E9?style=for-the-badge&logo=netlify&logoColor=white" alt="Open Weather Dashboard" /></a>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:22D3EE,50:0EA5E9,100:0B1120&height=100&section=footer" width="100%" alt="footer" />

</div>
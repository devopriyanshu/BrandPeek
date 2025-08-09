# BrandPeek 🔍

A modern brand discovery mobile application built with React Native and Expo, featuring a clean UI and smooth user experience for exploring top brands.

## 📱 Live Demo

🚀 **Try it Now – No Installation Required!**  

📲 **Scan QR Code to Test Instantly**  
<div align="center">
  <img src="./assets/qr-code.png" alt="Expo QR Code" width="200" height="200">
  <br>
  <em>Scan with the <strong>Expo Go</strong> app to run BrandPeek instantly on your device.</em>
</div>


## 📱 Overview

**BrandPeek** is a polished React Native application that simulates a brand discovery experience. Users can browse top brands, view detailed brand information, and enjoy a modern, responsive interface with gradient styling inspired by contemporary design trends.

## ✨ Key Features

### 🚀 **React Query Integration**
- **Efficient Data Fetching**: Utilizes TanStack Query (React Query) for optimized API calls
- **Smart Caching**: Automatic background refetching and cache invalidation
- **Error Handling**: Built-in error states and retry mechanisms
- **Background Updates**: Seamless data synchronization

### 🏗️ **Modular Architecture**
- **Component-Based Structure**: Reusable UI components for maintainable code
- **Separation of Concerns**: Clear division between screens, services, and utilities
- **Scalable Folder Organization**: Easy to extend and modify

### 📱 **Responsive UI Design**
- **Cross-Device Compatibility**: Optimized for phones and tablets
- **Adaptive Layouts**: Flexible designs that work on different screen sizes
- **Modern Aesthetics**: Clean, gradient-based styling with smooth animations
- **Intuitive Navigation**: User-friendly interface with React Navigation

### ⏳ **Advanced Loading States**
- **Error States**: Graceful handling of network issues
- **Pull-to-Refresh**: Easy data refreshing functionality

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** | Cross-platform mobile development |
| **Expo** | Development platform and tooling |
| **TanStack Query** | Data fetching and state management |
| **React Navigation** | Screen navigation and routing |
| **Expo Linear Gradient** | Modern gradient styling |
| **MockAPI** | Backend API simulation |

## 📂 Project Structure

```
BrandPeek/
├── 📁 assets/              # Static assets (images, icons, fonts)
├── 📁 components/          # Reusable UI components
│   ├── BrandCard.js        # Brand display component
│   ├── LoadingSpinner.js   # Loading state component
│   └── Button.js 
├── 📁 screens/             # Application screens
│   ├── HomeScreen.js       # Main brand listing screen
│   └── BrandDetailScreen.js # Individual brand details
├── 📁 services/            # API services and configuration
│   ├── api.js              # API endpoint definitions
│   ├── brandService.js          # React Query configurations
│   └── config.js           # App configuration constants
├── 📁 navigation/          # Navigation setup
│   └── AppNavigator.js     # Main navigation configuration
├── 📁 constants/           # App-wide constants
│   ├── Colors.js           # Color palette
│   └── Layouts.js       # Screen dimensions
├── 📁 hooks/               # Hooks
│   └── useBrands.js        
├── App.js                  # Application entry point
└── package.json            # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for device testing)

### Installation

1. **Install Expo CLI globally:**
   ```bash
   npm install -g @expo/cli
   ```

2. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/brandpeek.git
   cd brandpeek
   ```

3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server:**
   ```bash
   npx expo start
   ```

5. **Run on device/simulator:**
   - **Physical Device**: Scan QR code with Expo Go app
   - **iOS Simulator**: Press `i` in terminal
   - **Android Emulator**: Press `a` in terminal

## 📱 App Screens

### 🏠 Home Screen
- **Gradient Background**: Eye-catching linear gradient design
- **Brand Grid**: Clean display of top brands with logos and names
- **Loading States**: Skeleton placeholders during data fetch
- **Pull-to-Refresh**: Easy content refresh functionality
- **Search Capability**: Quick brand filtering (if implemented)

### 📄 Brand Detail Screen
- **Detailed Information**: Comprehensive brand data display
- **Follow Button**: Interactive UI element (ready for backend integration)
- **Responsive Layout**: Adapts to different screen orientations
- **Back Navigation**: Smooth transition to previous screen

## 🌐 API Integration

**Base URL**: `https://yourmockapi.io/api/v1/`

### Endpoints:
- `GET /Brands` - Fetch all brands
- `GET /Brands/{id}` - Get specific brand details

### React Query Implementation:
```javascript
// Example query configuration
const useBrands = () => {
  return useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};
```

## 🔧 Configuration

### Environment Variables:
Create a `config.js` file in the `services` folder:
```javascript
export const API_CONFIG = {
  BASE_URL: 'https://yourmockapi.io/api/v1/',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};
```

## 📱 Testing with Expo Go

1. **Download Expo Go** from App Store or Google Play
2. **Scan QR Code** displayed in terminal after running `expo start`
3. **Instant Preview** - No installation required!


---

**Made with ❤️ using React Native & Expo**

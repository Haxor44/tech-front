# Yacht Landing Page - Vue.js + Vuetify

A sophisticated luxury yacht charter landing page built with Vue.js and Vuetify, featuring elegant design, smooth scroll animations, and an immersive booking experience.

<img width="1518" height="840" alt="Screenshot from 2025-09-17 01-27-38" src="https://github.com/user-attachments/assets/351b342c-e237-4b80-af16-c558f5d3102c" />



<img width="1272" height="6840" alt="localhost_5175_" src="https://github.com/user-attachments/assets/7ad748c2-7948-4147-b8d7-65e94a97f784" />



## ✨ Key Features

### 🎨 Hero Section
- **Stunning Visuals**: Beautiful yacht background with multi-layered gradient overlays
- **Integrated Navigation**: Seamless navbar positioned within hero section (no external borders)
- **Centered Layout**: Clean navigation with transparent background effects
- **Strategic Form Positioning**: Booking form positioned half-in/half-out of hero section

### 📋 Advanced Booking Form
- **Inline Layout**: All form fields arranged horizontally for optimal UX
- **Glass-morphism Design**: Backdrop blur with semi-transparent styling
- **Comprehensive Fields**: Start/End dates, Charter type, Nights, Passengers, Departure
- **Prominent CTA**: Teal "Check Availability" button with search icon

### 🎭 Modern Design Elements
- **Scroll Animations**: Intersection Observer-powered smooth animations
- **Two-tone Typography**: "Modern Luxury Experiences" with accent color
- **Professional Color Scheme**: Dark teal (#135252) with turquoise accents (#31C9CA)
- **Responsive Excellence**: Optimized for all device sizes

## 🛠️ Tech Stack

- **Vue.js 3**: Progressive JavaScript framework
- **Vuetify 3**: Material Design component framework
- **Vite**: Fast build tool and development server
- **Inter Font**: Google Fonts typography
- **Material Design Icons**: Comprehensive icon set

## 📱 Page Sections

1. **Hero Section**: Immersive full-screen section with integrated navigation and overlapping booking form
2. **Our Story**: Brand narrative section with "Modern Luxury Experiences" title
3. **Private Caribbean Sailing**: Yacht showcase with detailed specifications and pricing
4. **World Class Yachts**: Fleet introduction with compelling imagery
5. **Voyage 50 Introduction**: Featured yacht model with discovery CTA
6. **Seasonal Offers**: Dynamic promotional content grid
7. **Fleet Showcase**: Gallery of available yacht options
8. **Activities Section**: Comprehensive water sports and recreational activities
9. **Charter Consultant**: Professional contact form for personalized service
10. **Footer**: Complete company information with social links

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
yacht-landing-page/
├── index.html          # Entry HTML file
├── main.js            # Vue.js application entry point
├── YachtLanding.vue   # Main component with complete landing page
├── package.json       # Dependencies and scripts
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Brand**: #135252 (Dark Teal) - Main titles and branding
- **Accent Color**: #31C9CA (Bright Turquoise) - "Experiences" text and highlights
- **Form Elements**: #00695C (Teal) - Buttons and interactive elements
- **Backgrounds**: #F5F5F5 (Light Gray) - Section backgrounds for contrast
- **Text**: Clean whites on dark backgrounds, dark grays on light

### Typography System
- **Font Family**: Inter (Google Fonts) - Modern, clean, highly legible
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Hierarchy**: Strategic font sizes with consistent line-height and letter-spacing
- **Brand Typography**: "Modern Luxury" + "Experiences" two-tone approach

### Animation & Interactions
- **Scroll Animations**: Intersection Observer with staggered card reveals
- **Easing**: Cubic-bezier(0.25, 0.46, 0.45, 0.94) for natural motion
- **Hover States**: Transform and shadow transitions on interactive elements
- **Glass-morphism**: Backdrop blur effects with semi-transparent overlays

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Customization

### Updating Content
- Modify the `data()` section in `YachtLanding.vue` to update yacht information, pricing, and content
- Replace placeholder images with actual yacht photos
- Update contact information in the footer section

### Styling Changes
- Custom styles are located in the `<style scoped>` section of `YachtLanding.vue`
- Vuetify theme can be customized in `main.js`
- Add custom CSS classes for additional styling needs

### Adding New Sections
1. Add new section markup in the template
2. Include corresponding data in the component's data object
3. Add appropriate CSS styles for the new section

## 🌟 Key Components

### Navigation System
- **Integrated Hero Navbar**: Positioned within hero section, not as external overlay
- **Centered Layout**: All navigation links and login button centered as one unit
- **Transparent Design**: Clean text-only links without background colors
- **Responsive Behavior**: Adapts gracefully across all device sizes

### Form Architecture
- **Advanced Booking Interface**: Comprehensive yacht booking with 7 form fields
- **Inline Layout**: Horizontal arrangement with flex-grow distribution
- **Glass-morphism Styling**: Backdrop blur with elegant transparency
- **Strategic Positioning**: Half-in/half-out hero placement for visual impact

### Content Structure
- **Modular Sections**: Each section designed for independent content management
- **Consistent Spacing**: Systematic padding and margins throughout
- **Image Integration**: Proper asset handling for yacht galleries and activities
- **Typography Hierarchy**: Clear information architecture with scannable content

## 📝 Implementation Notes

### Current Assets
- **Background Image**: `hero-background.jpg` for main hero section
- **Yacht Gallery**: Multiple yacht images with proper naming conventions
- **Activity Images**: Complete set of water sports and activity visuals
- **Fleet Showcase**: Curated yacht collection images

### Ready for Production
- **Responsive Design**: Fully tested across mobile, tablet, and desktop
- **Performance Optimized**: Efficient Vue.js implementation with lazy loading ready
- **Animation System**: Smooth scroll-triggered animations with Intersection Observer
- **Form Validation Ready**: Structure in place for backend integration

## 🤝 Contributing

This project is designed to be easily customizable and extensible. Feel free to:
- Add new sections or components
- Improve responsive design
- Add animations and micro-interactions
- Integrate with a backend API

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues:
1. Check that all dependencies are installed correctly
2. Ensure you're using Node.js v16 or higher
3. Verify that the development server is running on the correct port
4. Check the browser console for any JavaScript errors

---

**Happy coding!** 🛥️⚓

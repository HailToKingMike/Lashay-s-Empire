# 👑 Lashay's Empire Website

A professional, mobile-responsive website for Lashay's Empire Hair Studio in Little Rock, Arkansas.

![Status](https://img.shields.io/badge/status-ready%20to%20customize-brightgreen)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Features

- **Fully Responsive** - Looks great on phones, tablets, and desktops
- **Modern Design** - Warm, elegant aesthetic that reflects the brand
- **5 Complete Pages** - Home, About, Services, Gallery, Contact
- **Mobile Navigation** - Hamburger menu for smaller screens
- **Smooth Animations** - Scroll-triggered animations for visual appeal
- **Contact Form** - Ready to connect to Formspree, Netlify, or custom backend
- **SEO Optimized** - Meta tags and semantic HTML for search engines
- **Fast Loading** - No heavy frameworks, just clean HTML/CSS/JS

## 📁 Project Structure

```
lashays-empire/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services & pricing
├── gallery.html        # Portfolio gallery
├── contact.html        # Contact & booking form
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Navigation, animations, form handling
├── images/             # Add your photos here
└── README.md           # You are here!
```

## 🚀 Quick Start

### Option 1: GitHub Pages (Free Hosting)

1. **Fork or clone this repository**
2. Go to your repo's **Settings** → **Pages**
3. Under "Source", select `main` branch and `/ (root)`
4. Your site will be live at `https://yourusername.github.io/lashays-empire`

### Option 2: Netlify (Free, with Forms)

1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Add `netlify` attribute to the form tag in `contact.html`
3. Deploy automatically on every push

### Option 3: Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/lashays-empire.git

# Navigate to the project
cd lashays-empire

# Open in browser (Mac)
open index.html

# Or use a local server (Python)
python -m http.server 8000
# Then visit http://localhost:8000
```

## ✏️ Customization Guide

### 1. Add Your Phone Number

Search for `XXX-XXXX` and replace with actual phone number in:
- `contact.html` (multiple places)
- All footer sections

### 2. Add Your Photos

1. Save your images to the `images/` folder
2. Recommended formats: `.jpg`, `.webp` for photos
3. Update image references in HTML:

```html
<!-- Replace placeholder -->
<div class="gallery-item">Braids Photo 1</div>

<!-- With actual image -->
<div class="gallery-item">
  <img src="images/braids-1.jpg" alt="Beautiful braided style">
</div>
```

### 3. Add Your Prices

In `services.html`, replace `Starting at $XX` with actual prices:

```html
<span class="service-price">Starting at $45</span>
```

### 4. Update Social Links

Search for `href="#"` and replace with actual URLs:
- Instagram: `https://instagram.com/LashaysEmpire`
- Facebook: `https://facebook.com/LashaysEmpire`

### 5. Connect the Contact Form

**Option A: Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form action in `contact.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms**
1. Add `netlify` attribute to form:
```html
<form name="booking" netlify>
```

### 6. Add Google Business Profile

Once you claim your Google Business Profile:
1. Add the Google Maps embed to contact page
2. Link reviews to the testimonials section

## 🎨 Brand Colors

The website uses these colors (defined in `css/styles.css`):

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#FDF8F3` | Main background |
| Champagne | `#F5E6D3` | Accent backgrounds |
| Gold | `#C9A962` | Accent color, CTAs |
| Espresso | `#3D2B1F` | Text, headers |
| Warm Gray | `#6B5B4F` | Secondary text |

To change colors, edit the CSS variables at the top of `styles.css`.

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints at:
- **992px** - Tablets and smaller desktops
- **768px** - Mobile landscape and tablets
- **480px** - Mobile portrait

## 🔮 Future Enhancements

Ready to add when the business grows:

- [ ] **Online Booking** - Integrate Square Appointments, Booksy, or Calendly
- [ ] **Shop Page** - Add e-commerce for hair growth oil and products
- [ ] **Client Portal** - Before/after gallery submissions
- [ ] **Blog** - Hair care tips and tutorials
- [ ] **Email Newsletter** - Mailchimp or ConvertKit integration

## 🛠️ Built With

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript
- [Google Fonts](https://fonts.google.com) - Cormorant Garamond & Montserrat

## 📄 License

This project is created for Lashay's Empire. Feel free to use as a template for similar businesses.

## 💬 Support

For questions about customizing this template, reach out or open an issue!

---

Made with ❤️ for beautiful hair

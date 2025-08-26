# Trident Shipping Company - Landing Page

A modern, responsive landing page built for Trident Shipping Company using React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Professional maritime-themed design with clean UI
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations and micro-interactions
- **Contact Form**: Integrated with Google Sheets API for form submissions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized images and lazy loading

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography
- **Vite** for development and building

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Google Sheets Integration Setup

### Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with:

```javascript
function doPost(e) {
  try {
    // Open the Google Sheet (replace with your sheet ID)
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    
    // Get form data
    const formData = e.parameter;
    
    // Create row data
    const rowData = [
      new Date(),
      formData.name || '',
      formData.email || '',
      formData.phone || '',
      formData.company || '',
      formData.service || '',
      formData.message || ''
    ];
    
    // Append to sheet
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 2: Set Up Google Sheet

1. Create a new Google Sheet
2. Add headers in the first row:
   - Date | Name | Email | Phone | Company | Service | Message
3. Copy the Sheet ID from the URL

### Step 3: Deploy Apps Script

1. Save your Apps Script project
2. Click "Deploy" > "New deployment"
3. Choose "Web app" as the type
4. Set execute as "Me" and access to "Anyone"
5. Deploy and copy the web app URL

### Step 4: Update Application

1. Replace `YOUR_SCRIPT_ID` in `src/services/googleSheets.ts` with your actual script ID
2. Update the `GOOGLE_SHEETS_URL` constant

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Content
- Update company information in components
- Replace placeholder images with actual photos
- Modify service offerings in `Services.tsx`

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Structured data ready

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Vercel
1. Connect repository to Vercel
2. Framework preset: Vite
3. Deploy automatically

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support or questions, please contact our development team.
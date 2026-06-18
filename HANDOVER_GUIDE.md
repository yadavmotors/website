# Yadav Motors Website — Handover Guide for Rama

Welcome! This guide covers everything you need to manage and run your Yadav Motors website independently on Manus.

---

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Managing Content](#managing-content)
3. [Managing Reviews](#managing-reviews)
4. [Managing Bookings](#managing-bookings)
5. [Updating Services](#updating-services)
6. [Common Tasks](#common-tasks)
7. [Troubleshooting](#troubleshooting)
8. [Support & Help](#support--help)

---

## Getting Started

### Your Website URLs

- **Live Website:** https://www.yadavmotors.com.au
- **Manus Dashboard:** https://manus.im (log in with your account)
- **Management UI:** Click "View" on your project card in Manus

### First Login

1. Go to **manus.im** and log in with your email
2. Find the **"Yadav Motors"** project
3. Click **"View"** to open the Management UI
4. You'll see the live preview on the left and editing tools on the right

### Dashboard Panels

The Management UI has several panels (click icons in the top-right):

| Panel | What It Does |
|-------|-------------|
| **Preview** | Live website preview with visual editor |
| **Code** | View and download all project files |
| **Database** | Manage reviews, bookings, and customer data |
| **Settings** | Update website name, domains, secrets |
| **Integrations** | Connect external services (Stripe, Shopify, etc.) |

---

## Managing Content

### Editing Text & Images (Visual Editor)

**Easiest way — no coding required:**

1. Open the **Preview** panel
2. Click any text or image on the website
3. A sidebar appears with editing options
4. Make your changes (text, colors, fonts)
5. Changes save automatically

**Example: Update your phone number**
- Click the phone number on the page
- Edit the text in the sidebar
- It updates instantly

### Editing Through Code (Advanced)

If you're comfortable with code:

1. Go to **Code** panel
2. Find the file you want to edit (e.g., `client/src/pages/Home.tsx`)
3. Click to edit
4. Save your changes
5. Website updates automatically

**Key files to know:**
- `client/src/pages/Home.tsx` — Main homepage
- `client/src/pages/BookOnline.tsx` — Booking page
- `client/src/components/` — Reusable sections (header, footer, etc.)

---

## Managing Reviews

### View All Reviews

1. Go to **Database** panel
2. Click on the **"reviews"** table
3. You'll see all customer reviews with ratings and dates

### Add a New Review

1. In the **Database** panel, click **"reviews"** table
2. Click **"+ Add Row"** button
3. Fill in:
   - **name** — Customer's name
   - **suburb** — Their suburb/location
   - **rating** — 1-5 stars (use 5 for excellent reviews)
   - **text** — Their review quote
4. Click **Save**
5. New review appears on the website automatically

### Edit a Review

1. Open **Database** panel → **"reviews"** table
2. Click the review you want to edit
3. Update any field
4. Click **Save**

### Delete a Review

1. Open **Database** panel → **"reviews"** table
2. Find the review to delete
3. Click the **trash icon**
4. Confirm deletion

### How Reviews Display

- Reviews rotate automatically every 6 seconds
- Website shows 2 reviews at a time
- All 13 reviews cycle through continuously
- Newest reviews appear first in the database

---

## Managing Bookings

### View Booking Requests

1. Go to **Database** panel
2. Look for the **"bookings"** table (if available)
3. You'll see all online booking requests from customers

### Process a Booking

When a customer books online:
1. You receive their booking request in the database
2. Review their details (date, time, service, vehicle info)
3. Check your workshop availability
4. **Send them a text message** confirming the appointment (this is your official confirmation)
5. Mark the booking as confirmed in the database

### Important: Booking Confirmation Process

- **Online form = Request only** (not confirmed)
- **Your text message = Official confirmation**
- Always send a text to confirm appointments

---

## Updating Services

### View Current Services

Your website lists these services:

1. **Log Book Servicing** — Regular maintenance
2. **Air Conditioning Service** — AC repairs & regas
3. **Auto Electrical** — Electrical system repairs
4. **Engine & Diagnostics** — Engine issues, timing belt replacement
5. **Suspension & Brakes** — Suspension work, brake service
6. **Fleet Services** — Multi-vehicle maintenance

### Add a New Service

1. Go to **Code** panel
2. Open `client/src/pages/Home.tsx`
3. Find the "Services" section
4. Add your new service to the list
5. Save changes

**Example format:**
```
{
  title: "Your New Service",
  description: "What this service includes...",
  icon: "🔧"
}
```

### Edit Service Description

1. Go to **Code** panel → `client/src/pages/Home.tsx`
2. Find the service you want to edit
3. Update the description text
4. Save changes

---

## Common Tasks

### Update Your Phone Number

**Option 1: Visual Editor**
1. Click the phone number on the website
2. Edit in the sidebar

**Option 2: Code**
1. Go to **Code** panel
2. Search for your phone number (0430 869 699)
3. Replace with new number
4. Save

### Update Your Address

1. Go to **Code** panel → `client/src/pages/Home.tsx`
2. Find "11/67-71 Russell St, Werribee VIC 3030"
3. Replace with new address
4. Save

### Update Your Hours

1. Go to **Code** panel → `client/src/pages/Home.tsx`
2. Find the hours section
3. Update times (e.g., "Mon–Fri 8am–5:30pm")
4. Save

### Add a New Photo

1. Click any image on the website
2. The visual editor shows upload options
3. Upload your new photo
4. It replaces the old one automatically

### Update Your About Section

1. Go to **Code** panel → `client/src/pages/Home.tsx`
2. Find the "About" or "Meet the Owner" section
3. Edit the text about you and your business
4. Save

---

## Troubleshooting

### Website Not Updating After Changes

**Solution:**
1. Wait 10-15 seconds for changes to deploy
2. Refresh your browser (Ctrl+R or Cmd+R)
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try a different browser

### Can't Find the Edit Button

**Solution:**
1. Make sure you're in the **Preview** panel
2. Click directly on the text or image you want to edit
3. A sidebar should appear on the right

### Booking Form Not Working

**Solution:**
1. Check internet connection
2. Try a different browser
3. Clear browser cookies
4. Contact support (see below)

### Changes Disappeared

**Solution:**
1. Go to **More** menu (⋯) → **Version History**
2. You can see all previous versions
3. Click **Rollback** to restore an earlier version

### Database Table Missing

**Solution:**
1. Go to **Settings** panel
2. Check if database is connected
3. Contact support if issues persist

---

## Support & Help

### Manus Support

- **Help Center:** https://help.manus.im
- **Email Support:** support@manus.im
- **Response Time:** Usually within 24 hours

### Common Questions

**Q: How do I change my domain?**
A: Go to **Settings** → **Domains** → Update your domain settings

**Q: Can I add more team members?**
A: Yes! Go to **Settings** → **Team** → Invite collaborators

**Q: How do I backup my website?**
A: Go to **More** (⋯) → **Version History** → All versions are automatically saved

**Q: What if I accidentally delete something?**
A: Go to **More** (⋯) → **Version History** → Rollback to a previous version

**Q: Can I use my own domain?**
A: Yes! Go to **Settings** → **Domains** → Connect your domain

---

## Quick Reference: Most Common Tasks

| Task | Steps |
|------|-------|
| **Add a review** | Database → reviews → + Add Row → Fill fields → Save |
| **Update phone number** | Click number on website → Edit in sidebar → Save |
| **Change service description** | Code → Home.tsx → Find service → Edit text → Save |
| **Update hours** | Code → Home.tsx → Find hours → Edit → Save |
| **Add new photo** | Click image → Upload new photo → Save |
| **View bookings** | Database → bookings table → Review requests |
| **Undo changes** | More (⋯) → Version History → Rollback |

---

## Your Website at a Glance

**Website Name:** Yadav Motors — Reliable Mechanic in Werribee

**Key Pages:**
- Home (`/`) — Main landing page with hero, services, reviews, location
- Book Online (`/book`) — Online booking form
- Services (`/#services`) — Detailed service listings
- Reviews (`/#reviews`) — Customer testimonials
- Location (`/#location`) — Map and contact info

**Key Features:**
- 13 rotating customer reviews (5-star Google reviews)
- Online booking system (MechanicDesk integration)
- Service listings with descriptions
- Contact information and hours
- Map with location
- Professional design with your branding

---

## Next Steps

1. ✅ Log in to your Manus account
2. ✅ Explore the Preview panel
3. ✅ Try editing a small piece of text
4. ✅ View your reviews in the Database
5. ✅ Bookmark https://manus.im for easy access

---

## Final Tips

- **Save regularly** — Changes auto-save, but check the preview
- **Test changes** — Always preview changes before publishing
- **Keep backups** — Version history is automatic, but note important dates
- **Update reviews** — Add new reviews monthly to keep content fresh
- **Monitor bookings** — Check booking requests regularly and respond with text confirmations
- **Stay in touch** — If you need help, reach out to Manus support

---

**You're all set! Your website is now yours to manage. Good luck with Yadav Motors! 🚗**

For questions, visit **https://help.manus.im** or contact Manus support.

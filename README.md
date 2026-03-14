# Thomson Broadcast Website Package

This package contains a multi-page Bootstrap website concept for **thomsonbroadcast.tv**.

## Included pages
- `index.html` — home page
- `about.html` — company story, manufacturing and offices
- `products.html` — TV and radio product pages
- `projects.html` — project highlights and references
- `contact.html` — contact page with form
- `contact.php` — PHP mail handler for the contact form

## Assets
All images used in this package were assembled from the Thomson logo and Thomson presentation assets available in the workspace.

## Deployment
1. Upload all files and folders to your web server.
2. Make sure the hosting supports **PHP mail()**.
3. Test the form on `contact.html`.
4. If your hosting blocks `mail()`, replace `contact.php` with SMTP / PHPMailer logic.

## Important edits before production
### Contact email
Open `contact.php` and update:
```php
$recipientEmail = 'sales@thomson-broadcast.tv';
```

### WhatsApp number
Open `assets/js/site-config.js` and update:
```js
whatsappNumber: '33188324970'
```
Use a confirmed WhatsApp-enabled business number.

## Notes
- The site uses Bootstrap 5 via CDN.
- Bootstrap Icons are loaded via CDN.
- The WhatsApp button appears site-wide.
- The contact form includes a simple honeypot anti-spam field.


## Static hosting contact form
The contact form uses FormSubmit instead of PHP, so it can work on static hosting. After the first test submission, confirm the activation email sent to sales@thomson-broadcast.tv. If you test from a local file path, serve the site through a simple web server or update the form with your live page URL.

Preview locally with a simple web server, for example: python -m http.server 8000


## SEO and Google indexing files added
- `sitemap.xml` created for the main public pages.
- `robots.txt` created and linked to the sitemap.
- Page-level SEO tags added: description, keywords, canonical, Open Graph, Twitter card, and robots directives.
- JSON-LD structured data added for `Organization`, plus `WebSite` schema on the home page.

### Important before going live
- The sitemap currently uses `https://thomsonbroadcast.tv` as the public site URL.
- If the final live domain is different, update:
  - `sitemap.xml`
  - `robots.txt`
  - canonical / Open Graph URLs in the HTML files

### Google Search Console
After upload, add the live domain in Google Search Console and submit `/sitemap.xml`.

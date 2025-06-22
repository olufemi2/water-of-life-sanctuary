# Website Architecture Document: Water of Life Sanctuary

## 1. Overview
This document outlines the technical architecture for the Water of Life Sanctuary website. The architecture is designed to be modern, scalable, performant, and maintainable, using a **Jamstack** approach with a decoupled frontend and backend.

## 2. Architectural Diagram

```
+----------------+      +------------------+      +----------------------+
|                |      |                  |      |                      |
|   User Browser |----->|  Next.js Frontend|----->|  Headless CMS (API)  |
|                |      |   (Hosted on     |      |  (e.g., Strapi)      |
|                |      |    Vercel/Netlify)|      |                      |
+----------------+      +------------------+      +----------------------+
                             |
                             | (API Calls)
                             |
                             v
+----------------+      +------------------+
|                |      |                  |
| Donation Service|<-----| Third-Party APIs |
| (e.g., Stripe) |      |                  |
|                |      | Live Stream      |
+----------------+      | (e.g., YouTube)  |
                        +------------------+
```

## 3. Core Components

### 3.1. Frontend: Next.js Application
*   **Framework:** Next.js will be used to build the user interface.
*   **Rendering Strategy:** We will primarily use **Static Site Generation (SSG)** for most pages (About, Ministries, etc.). This pre-builds the pages into static HTML files at build time, providing the fastest possible load times and excellent SEO.
*   **Data Fetching:** For dynamic content like sermons or events, we will use **Incremental Static Regeneration (ISR)**. This allows static pages to be updated automatically in the background as new content is added to the CMS, giving us the benefits of static sites with the flexibility of dynamic data.
*   **Hosting:** The Next.js application will be hosted on a platform optimized for Jamstack applications, such as **Vercel** (created by the makers of Next.js) or **Netlify**. These platforms provide seamless deployment, global CDN, and automatic scaling.

### 3.2. Backend: Headless CMS
*   **Purpose:** The Headless CMS will serve as the content repository and will be managed by church staff. It separates the website's content from its presentation (the Next.js frontend).
*   **Recommendation:** **Strapi** is the recommended Headless CMS.
    *   **Why Strapi?** It is open-source, can be self-hosted for cost control, has a user-friendly interface for non-technical users, and provides a powerful REST or GraphQL API for the Next.js frontend to consume.
*   **Content Models:** We will define content types within the CMS for all dynamic content, such as:
    *   `Sermons` (with fields for title, speaker, date, video link, audio link, notes)
    *   `Events` (with fields for title, date, time, description, registration link)
    *   `Ministries` (with fields for title, description, leader, photo)
    *   `Pages` (for managing content on static pages like "About Us")

### 3.3. Third-Party Services (API Integrations)
To ensure security and reduce development complexity, we will leverage specialized third-party services.
*   **Donation Processing:** Instead of building a payment system, we will integrate with a dedicated service like **Stripe** or **Tithe.ly**. The Next.js app will embed their secure donation forms or link out to their hosted donation pages. This offloads all PCI compliance and security concerns.
*   **Live Streaming:** We will embed the live stream feed directly from a service like **YouTube Live** or **Vimeo**. This is robust and requires no custom video infrastructure.
*   **Forms:** For the contact and prayer request forms, we can use a service like **Netlify Forms** or a dedicated form API to handle submissions without needing a custom backend endpoint.

## 4. Data Flow
1.  **Content Creation:** Church staff logs into the Headless CMS admin panel to add/update sermons, events, or page content.
2.  **Build & Deploy:** When content is published in the CMS, a webhook triggers a new build of the Next.js site on Vercel/Netlify.
3.  **User Request:** A user visits the website URL in their browser.
4.  **Content Delivery:** The pre-built, static HTML is served instantly to the user from the global CDN, ensuring maximum performance. Any dynamic elements (like a "latest sermon" feed) are fetched client-side or via ISR. 
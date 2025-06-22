# Development Plan & Workflow: Water of Life Sanctuary

## 1. Project Overview
This document outlines the development workflow and phased plan to build the Water of Life Sanctuary website using Next.js and a Headless CMS.

## 2. Pre-Development: Key Decisions
Before we begin, we need to confirm the following architectural choices. My recommendations are listed below.

*   **Decision 1: Headless CMS Selection**
    *   **Recommendation:** **Strapi**. It is open-source, can be self-hosted, is highly extensible, and has a great user interface for the church staff.
    *   **Action:** Please confirm if Strapi is the approved choice, or if another option like Sanity or Contentful is preferred.

*   **Decision 2: Donation System Integration**
    *   **Recommendation:** Use a third-party service like **Stripe** or **Tithe.ly** by embedding their secure forms or linking to their hosted pages. This is the most secure and efficient approach.
    *   **Action:** Please confirm this approach and specify the preferred donation provider if one has been chosen.

*   **Decision 3: "Plan Your Visit" Feature**
    *   **Recommendation:** Implement the dedicated "Plan Your Visit" page as outlined in the UX/UI guide to create a welcoming experience for new visitors.
    *   **Action:** Please confirm that this feature should be included in the initial development scope.

## 3. Development Workflow & Phasing

### Phase 0: Project Setup (1-2 Days)
1.  **Initialize Git Repository:** Create a new repository on GitHub/GitLab.
2.  **Set up Next.js Project:** Run `npx create-next-app` to create the frontend application.
3.  **Set up Headless CMS Project:** Install and initialize the chosen CMS (e.g., Strapi).
4.  **Local Environment:** Create a `docker-compose.yml` file to manage the Next.js app and the CMS with its database for a consistent local development environment.
5.  **Install Dependencies:** Add necessary libraries (e.g., Tailwind CSS for styling, an API client like `axios`).

### Phase 1: CMS Configuration & Content Modeling (2-3 Days)
1.  **Define Content Types:** In the CMS, create the data structures (Collections) for `Sermons`, `Events`, `Ministries`, `Leadership`, and `Pages`.
2.  **Set Roles & Permissions:** Configure access levels for church staff (e.g., authors, editors).
3.  **Seed Initial Content:** Add 2-3 sample entries for each content type to facilitate frontend development.

### Phase 2: Frontend Foundation & CMS Integration (3-5 Days)
1.  **Connect to CMS:** Implement the API connection logic in the Next.js app to fetch data from the CMS.
2.  **Create Global Layout:** Build the main site layout, including the header, navigation, and footer.
3.  **Implement Design System:** Set up the color palette, fonts (typography), and basic UI components (buttons, cards) using Tailwind CSS, based on the UX/UI guide.
4.  **Build Core Static Pages:** Create the main static pages (`About`, `Contact`) and populate them with content from the CMS.

### Phase 3: Feature Development (5-7 Days)
1.  **Sermon Archive:** Build the main sermons page (with filtering) and the individual sermon detail page.
2.  **Events Calendar:** Create the events page, displaying upcoming events fetched from the CMS.
3.  **Ministries & Leadership Pages:** Build out the pages to showcase the church's ministries and team.
4.  **"Plan Your Visit" Page:** Develop the dedicated page for new visitors.
5.  **Media Gallery:** Implement the photo and video gallery functionality.

### Phase 4: Integrations & Deployment (2-3 Days)
1.  **Donation Integration:** Add the links or embedded forms for the chosen donation provider.
2.  **Live Stream Integration:** Embed the player for the live stream service.
3.  **Deployment:**
    *   Deploy the Headless CMS to a cloud service (e.g., DigitalOcean, Heroku, or a dedicated Strapi hosting platform).
    *   Deploy the Next.js frontend to **Vercel**.
4.  **Connect Webhooks:** Configure the CMS to trigger a new site build on Vercel whenever content is updated.

### Phase 5: Testing, Launch & Handover (2-3 Days)
1.  **End-to-End Testing:** Thoroughly test all features, forms, and user flows on multiple devices.
2.  **Final Content Entry:** Church staff populates the site with all remaining content.
3.  **Go-Live:** Point the official domain to the Vercel-hosted site.
4.  **Training & Documentation:** Provide a training session and simple documentation for church staff on how to manage website content via the CMS. 
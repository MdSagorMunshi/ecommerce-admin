# Next.js 13 eCommerce Admin Panel

![Next.js Logo](url_to_nextjs_logo.png)

## Overview

Welcome to the Next.js 13 eCommerce Admin Panel – a feature-rich solution for managing your online store. This admin panel is built with the latest Next.js framework, providing a modern and efficient platform for administrators.

## Features

- **Modern Next.js Framework:** Leveraging the power of Next.js 13 for enhanced performance and a seamless user interface.
- **Intuitive Dashboard:** Gain insights into key metrics, sales performance, and customer behavior through a user-friendly dashboard.
- **Order Management:** Effortlessly manage and track orders from payment to fulfillment.
- **Product Management:** Update product information, manage inventory, and seamlessly add new products.
- **Customer Insights:** Understand your customer base and enhance satisfaction with personalized approaches.
- **Performance Analytics:** Utilize built-in analytics tools to monitor website performance and make informed decisions.
- **Responsive Design:** Ensure a consistent user experience across various devices.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/MdSagorMunshi/ecommerce-admin.git
   ```
 2. Install Dependencies:
    ```bash 
    cd ecommerce-admin && npm install
    ```

3. Run the Development Server:
   ```bash 
   npm run dev
   ```
4. Open in Browser
  - Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Before running the application, make sure to set up your environment variables. Create a `.env` file in the root of your project and add the following variables:

```env
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>

# Clerk Authentication URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=<your-sign-in-url>
NEXT_PUBLIC_CLERK_SIGN_UP_URL=<your-sign-up-url>
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=<your-after-sign-in-url>
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=<your-after-sign-up-url>

# MongoDB Database Connection
DATABASE_URL=<your-mongodb-database-url>

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>

# Stripe Integration
STRIPE_API_KEY=<your-stripe-api-key>
STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>

# Frontend Store URL
FRONTEND_STORE_URL=<your-frontend-store-url>
```

## Contributing

Contributions are welcome! Please check out the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [raynshelby@tuta.io](mailto:raynshelby@tuta.io).

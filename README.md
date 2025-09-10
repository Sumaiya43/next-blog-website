📖 Next Blog Website

A full-stack blog platform built with the Next.js App Router, featuring authentication, categories, dynamic posts, and responsive UI.
Deployed on Vercel with Prisma + MongoDB Atlas as the backend.

🌐 Live Demo: next-blog-website-vq6n.vercel.app

✨ Features:

      🔐 Authentication
          Google, GitHub, and Facebook sign-in via NextAuth.js
          Session management with SessionProvider
          
      📝 Blog Posts
          Create, edit, and display posts
          Rich text editor (ReactQuill)
          Pagination support
      
      📂 Categories
          Filter posts by category
          Category list rendered dynamically from DB
      
      💬 Comments
          Add and display comments for posts
          Authenticated users only
      
     📱 Responsive Design
          Mobile-first UI using CSS Modules + custom styles
          Clean layout with Navbar, Footer, and reusable components
      
    ⚡ Server/Client Rendering
          Mix of Server Components for data fetching (Prisma)



🛠️ Tech Stack

Frontend: Next.js 13+ App Router

Backend: Prisma ORM + MongoDB Atlas

Auth: NextAuth.js
  with Google/GitHub/Facebook providers
  Styling: CSS Modules (scoped styling per component)
  Deployment: Vercel

Other Tools:
  ReactQuill for rich text editing
  Suspense for streaming data
  Dynamic routes (/blog?cat=..., /posts/[slug])   


📌 Roadmap / Future Enhancements

  🌟 Add image upload for posts

  🔍 Improve SEO with dynamic metadata

  ❤️ Like/Save posts feature

  👤 User profile page                                                                                                                                                                   


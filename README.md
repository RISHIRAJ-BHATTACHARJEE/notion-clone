
## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Built with the latest Next.js, TypeScript, React, Convex this project replicates Notion, a productivity and note-taking web application. It enables users to securely log in, write, publish, and organize notes.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Clerk
- Convex
- Edgestore
- Tailwind CSS
- Shadcn

## <a name="features">🔋 Features</a>


👉 **Real-time database 🔗**: Implemented with convex it ensures instant updates across all devices.

👉 **Notion-style editor 📝**:  Offers a flexible and intuitive content creation experience

👉 **Light and Dark mode 🌓**: Accommodates user preferences for visual comfort just like the original Notion.

👉 **Infinite children documents 🌲**: This clone also allows users for unlimited hierarchical organization.

👉 **Trash can & soft delete 🗑️**:  Trash can & soft delete provides a safety net for accidental deletions

👉 **Authentication 🔐**: Protects user data and privacy with the help of clerk.

👉 **File Management**:  File upload, deletion, and replacement enables seamless file management

👉 **Responsiveness 📱**: All device responsiveness ensures accessibility on all devices.

👉 **Publish Online 🌐**: Publish your note to the web shares content with a wider audience.

👉 **Recover Deleted Files**: Recover deleted files prevents permanent data loss.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/RISHIRAJ-BHATTACHARJEE/notion-clone.git
cd notion-clone
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# Deployment used by `npx convex dev`

CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

Replace the placeholder values with your actual Convex, Clerk & EdgeStore credentials. You can obtain these credentials by signing up on the [Clerk website](https://clerk.com/) , [Convex website](https://convex.dev/) and  [Edgestore website](https://edgestore.dev/)

**Running the Project**

```bash
npm run dev
```
```bash
npx convex dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
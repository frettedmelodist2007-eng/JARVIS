# JARVIS Deployment Instructions

Since your local environment does not have Node.js installed, you cannot run this application using `npm run dev`. Instead, you must deploy it to the cloud.

## Step 1: Push User Code to GitHub
1. Create a new repository on GitHub (e.g., `jarvis-app`).
2. Open your terminal in the JARVIS folder (`c:\Users\acer\Desktop\JARVIS`).
3. Run the following commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of JARVIS"
   git branch -M main
   # Replace YOUR_USERNAME with your GitHub username
   git remote add origin https://github.com/YOUR_USERNAME/jarvis-app.git
   git push -u origin main
   ```

### Option B: Manual Upload (If Git is not installed)
1.  Go to [GitHub.com](https://github.com) and sign into your account.
2.  Click the **+** icon in the top-right and select **New repository**.
3.  Name it `jarvis-app` and click **Create repository**.
4.  Look for the link that says **"uploading an existing file"** (usually under the Quick setup section).
5.  Open your project folder `c:\Users\acer\Desktop\JARVIS` in File Explorer.
6.  Select all files (including `src`, `public`, `package.json`, etc.) and **drag and drop** them into the GitHub page.
    *   *Note: Ensure you include the hidden files like `.gitignore` if possible, though not strictly required for the demo.*
7.  Commit the changes.

## Step 2: Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign up/login.
2. Click **"Add New..."** -> **"Project"**.
3. Select your `jarvis-app` repository.
4. In the **"Configure Project"** screen:
   - **Framework Preset**: Next.js (should be auto-detected).
   - **Environment Variables**:
     - Key: `GEMINI_API_KEY`
     - Value: `Paste your actual Google Gemini API Key here`
5. Click **"Deploy"**.

## Step 3: Access JARVIS
- Once deployment is complete (approx. 1 minute), Vercel will give you a live URL (e.g., `https://jarvis-app.vercel.app`).
- Open this URL on any device to use the application.

## Troubleshooting
- If you see "Server configuration error", check that you added the `GEMINI_API_KEY` correctly in Vercel settings.
- If the build fails, check the logs on Vercel Dashboard.

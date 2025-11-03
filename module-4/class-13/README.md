# Installing Shadcn in a React Project

## Step 1: Install Vite
Set up your project with Vite as the build tool.

## Step 2: Install Tailwind CSS
Configure Tailwind CSS for styling support.

## Step 3: Create `jsconfig.json`
Create a `jsconfig.json` file in the root directory with the following configuration:

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["./src/*"]
        }
    }
}
```

## Step 4: Configure Path Alias in `vite.config.js`
Update your `vite.config.js` to resolve the path alias:

```javascript
resolve: {
    alias: {
        "@": path.resolve(__dirname, "./src"),
    },
},
```

## Step 5: Initialize Shadcn
Run the initialization command:

```bash
npx shadcn@latest init
```

## Step 6: Add Button Component
Install the button component:

```bash
npx shadcn@latest add button
```

## Step 7: Start Building
You're ready to use Shadcn components in your project.
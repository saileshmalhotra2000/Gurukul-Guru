# Deploying the synchronized Digital Gurukul

Cross-device Magnet synchronization uses a Netlify Function and Netlify Blobs. For
that reason, deploy this version from a Git repository rather than Netlify Drop.

## Recommended deployment

1. Create a new GitHub repository.
2. Add every file and folder in this project, including:
   - `netlify/functions/magnet-sync.mjs`
   - `netlify.toml`
   - `package.json`
   - `pnpm-lock.yaml`
3. In Netlify, choose **Add new project → Import an existing project**.
4. Connect the GitHub repository and select its main branch.
5. Netlify reads the included `netlify.toml`. No custom build command is required.
6. Deploy the project.

Netlify will install `@netlify/blobs`, bundle the synchronization function, and
provision Blob storage automatically.

## How visitors synchronize

1. Open **Find Your Magnet**.
2. Select **Sync**.
3. Enter a private phrase containing at least 12 characters.
4. On another device, open the same deployed site and enter the identical phrase.

Observations are encrypted in the browser with AES-GCM before upload. The phrase
is not transmitted or permanently stored. Losing the phrase means the encrypted
cloud copy cannot be recovered.

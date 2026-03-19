Place your certificate preview images in this folder.

The `Certificates` component now uses `import.meta.globEager` to automatically
load any matching image files from this folder. You no longer need to add or
edit imports manually; simply drop your image files here.

By default the code looks for the following names – feel free to use your own
as long as they stay in this directory and have a `.png`, `.jpg` or `.jpeg`
extension:

```
design_process.png
UserExperience.png
UX_research.png
wireframes.png
iT_Support.png
```

Images should be a reasonable width (around 800px) and may be `.png`, `.jpg`,
etc. If a referenced file is missing or an import is commented out, the card
will fall back to a colored placeholder box.

After adding or renaming files, restart the development server (`npm run dev`)
so Vite can bundle the new assets.

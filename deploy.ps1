
# Execute the infoJson generation scripts.
node ./scripts/makePathInfoJsonForBlogs.js
node ./scripts/makePathInfoJsonForPortfolios.js

# Publish to the GitHub Pages by Pushing it to the Master Branch.
git add .
git commit -m "Updates contents (auto-generated from the deploy script)."
git push

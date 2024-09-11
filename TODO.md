# create a new branch on github: accomodation
  git checkout -b accomodation
  touch TODO.md
  git add .
  git commit -m "implement accommodation page"
  git push -u origin accommodation # push branch to remote (first time)

# pnpm install
# pnpm dev

# warning: Image with src "/ADSN-2024/event_schedule_robertson.webp" has legacy prop "layout". Did you forget to run the codemod?
  layout="responsive"         ->               style={{ width: '100%', height: 'auto' }}

# create a new folder in the app: accommodation and page.tsx
  mkdir app/accommodation
  touch app/accommodation/page.tsx
  update the link to accommodation in the NavigationBar

# design accommodation page

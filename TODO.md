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


# Implement accommodatin page
  1. Page component: 
      This component sets up the basic structure of the page, including the NavigationBar, Accommodation component, and Footer.
  2. Accommodation Component:
      The main content of the accommodation page is handled by the Accommodation component:
        Displaying a header image and title
        Rendering a grid of hotel previews
        Implementing smooth scrolling to hotel details
        Rendering detailed information for each hotel
  3.  AccommodationCard Component:
        The detailed information for each hotel is rendered using the AccommodationCard component:
          Hotel name and description
          Amenities with icons
          Location and contact information
          Directions (walking, driving, public transport)
          Special offers and booking conditions (if applicable)
    4. Data:
          The hotel information is stored in a separate file and imported into the Accommodation component:

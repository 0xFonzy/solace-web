# Alfonso Aranzazu - Solace Engineering Assignment

A live demo hosted on Heroku is available on https://solace.alfonsoaranzazu.com.

## My Approach

I first began this engineering assignment by conducting a code audit of the repository and making notes in NOTES.md.
I looked for security, performance, organization, composability, styling, and accessibility opportunities.
Ranking them in priority order helped me decided on which ones to tackle first. For this application I decided to utilize the Solace stack.

## The Stack

The tech stack I used to build the app includes:

- Next.js
- React
- Typescript
- Nest JS
- Typeorm
- Postgres

## Frontend Features

The application features a large hero section with an emphasis on finding your health advocate followed by a search bar component that powers functionality.
The search bar comes with an expanding filter section where users can select city and specialties for deeper search. 
The search bar input performs a partial match search on health advocate first and last names.

I decided to portray health advocate cards that succinctly display advocate info to users.
Users can quickly identify advocate degree, location, and specialties at a glance.
The advocate card features a book consultation CTA that's prominent and given more time, I would have shown a health advocate side panel.

Search is optimized for performance with search throttling using lodash debounce.
While loading advocates, skeleton cards animate on the page to fill the space and insinuate to the user data is loading.

A hoverable carousel wraps the advocate card specialties and animates when users hover over the edges.

A global error handler for tha application catches all errors and displays a user friendly message.

Overall, the frontend experience is tailored for a smooth optimized user experience.

## Backend Features

I created a restful API using Nest JS, Postgres, and TypeORM on https://github.com/0xFonzy/solace-api.
The backend API is equipped with advocate and filter modules, database configuration, and typeorm migrations to recreate the database schema and seeding.

The filters controller features an API endpoint to retrieve city and specialty filters defined as postgres enums in our schema.
These filters are served to solace-web to populate filter select components. 

The advocates controller features a single search advocates endpoint that is optimized for name, city, and specialty queries.
I created three indexes via migrations that speed up queries on these columns specifically.

Types are used throughout the api to validate type checking and transform input/outputs through DTO models.
Constants are defined at the schema level and serve as the source of truth for the application, making it easy for the frontend to plug and play.

Given more time I would have added search rate limiting, authentication, and authorization to secure our API.

## In Summary

The solace application is properly segmented, delegating separate concerns between the frontend and backend pieces.
Both frontend and backend are optimized for performance and user experience.



# Solace Audit Notes

## Audit Checklist

Check to complete audit items:

[x] Does package.json have outdated/unecessary dependencies?  
[x] Is Tailwind properly setup?  
[x] Is Linter configured?  
[x] Are there erroneous console.log statements?  
[x] Are components too big?  
[x] Are there inline styles instead of Tailwind?  
[x] Is state management clean?  
[x] Are types used properly?  
[x] Are expensive computations happening inside of render methods?  
[x] Are lists rendered without key props?  
[x] Are API routes clean?  
[x] Are API routes fetching all advocates without pagination/limits?  
[x] Are queries using efficient database queries?  
[x] Is advocate data indexed properly for search?  
[x] Is advocate data using good queries?  
[x] Is the advocate experience janky?  
[x] Are loading states missing?  
[x] Is the advocate list accessible?  
[x] Are there large payloads?  
[x] Are there unnecessary re-renders?  
[x] Is there no API pagination, search throttling, debouncing?  
  

## Audit Notes


### Audit 04-28-25

#### Frontend
- styling - add design framework (priority 1)
- type safety - add advocate types (priority 1)
- duplicate state - derive filteredAdvocates from advocates with memo value (priority 1)
- direct dom manipulation - handle search term through react state (priority 1)
- inline css used - convert to tailwind (priority 1)
- search performance - use debounced keystrokes (priority 1)
- search performance - add missing list key props (priority 1)
- search logic - fix specialties search to use some() instead of includes() (priority 2)  
- accessibility - add missing `<tr>` wrapper in table header (priority 2)  
- accessibility - fix `<th>` directly under `<thead>` without a row wrapper (priority 2)  
- accessibility - add `scope` attributes to table headers (priority 2)
- accessibility - add search input label (priority 2)
- accessibility - add `aria` attributes (priority 2)
- user experience - add loading state skeletons (priority 2)
- user experience - make search case-insensitive (priority 2)
- console.logs - remove erroneous logs (priority 3)
- accessibility - add search input focus (priority 3)

#### Backend
- composability - setup nest js framework (priority 1)
- separation of concerns - create data fetching service (priority 1)
- separation of concenrs - create request controller (priority 1)
- separation of concerns - create error handler (priority 1)
- error handling - add try/catch blocks (priority 1)
- error handling - add error response for failures (priority 1)
- validation - validate input data (priority 1)
- validation - use HTTP status codes (priority 1)
- type safety - use types for request/responses (priority 1)
- type safety - add type validators (priority 2)
- type safety - add type checking on db operations (priority 2)
- performance - add advocate request pagination (priority 2)
- performance - add advocate request limits (priority 2)
- performance - index advocate data on db (priority 1)
- performance - search advocate data by name/keywords (priority 2)
- security - add authentication/authorization (priority 2)
- security - add rate limiting (priority 2)
- security - make seed endpoint private (priority 2)
- security - add input sanitization (priority 3)
- code organization - add middleware for common operations (priority 3)
# watchify

Summary Outline"
User Authentication and Initial Setup: 
  Users can create an account and log in. During initial login, they are required to select their favorite genre, favorite movie, and          favorite show.
Home Screen: 
  After login, the home screen directly displays movie and TV show recommendations.
Persistent Recommendations: 
  If the user logs out or closes the browser without rating or showing interest in a recommendation, the same recommendation will appear       again until an action is taken.
Movie List: 
  Users can browse a list of movies fetched from the TMDb API.
Movie Ratings and Interest: 
  For every recommendation, users must select a rating and interest ("watched," "want to watch," or "not interested").
Recommendations: 
  The system will provide movie and TV show recommendations based on user interactions and initial selections. These recommendations are       powered by TensorFlow.js.

MVP Concept:

Shows and movie filter

USERS
- [ ] can create account
- [ ] can log in
- [ ] simple bio and account pref lives here and can be updated
- [ ] can see list of recommended movies
- [ ] can see list of recommended tv shows
- [ ] can filter by streaming service and genre
- [ ] upon register answer questions to filter database and update account preferences??
- [ ] show trailers in questionnaire and user likes or dislikes
- [ ] after register /  login top 3 movies / 3 shows recommended show on screen - open to UI experience, eventually they’ll pick one and we’ll track that experience
- [ ] once narrowed down get their rating or prompt them upon next login
- [ ] lists previously watched movies and user rating


EXTRAS
- [ ] how specific ratings can get
- [ ] friends and sharing or combining lists

Techstack:
- [ ] TMDB API : https://developer.themoviedb.org/docs/search-and-query-for-details
- [ ] Tailwind CSS https://tailwindcss.com/ / material UI
- [ ] Redux toolkit
- [ ] Vite.js over webpack
- [ ] Oauth ? extra
- [ ] check kaggle.com for datasets for the model
- [ ] tensor.js node API for natural language proccesser

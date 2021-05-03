# NYTimes API 

Clone this repository <br>
run  `npm install` to install all dependencies<br>
run `npm run` to run the server<br>
change `.env.example` into `.env` put your NewYourTimes API_KEY on NYT_API_KEY at file .env<br>


### 1. For Article search: <br>

-   use `/article` path for search
-   use `q` on query params for searhing article by characters
-   use `sort` on query params for sortting article by `newest`, `oldest`, or `relevance`
-   use `page` on query params for pagination

example: `localhost:3000/article/?q=obama&sort=oldest&page=1`

### 2. For Article Detail
- Use `/article/detail` path for detail
- define the article ID you want to search with `id` on query params
example: `localhost:3000/article/detail/?id=nyt://article/8e2b2377-10d9-500d-a756-513eb7f8e193`

### 3. For Book search

use `/article` path for search
-   use `list` on query params for searhing by list name
-   by default `list` has value `hardcover-fiction`

example: `localhost:3000/book/?list=e-book-fiction`

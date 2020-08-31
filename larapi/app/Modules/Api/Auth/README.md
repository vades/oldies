Auth module
==========
## Register
- URL: /api/auth/register
- Method: POST
- Fields:
  - email
  - password
  - name
## Register verify
- URL: /api/auth/register/{token}
- Method: GET
## Login
- URL: /api/auth/login
- Method: POST
- Fields:
  - email
  - password
## Password forgot
- URL: /api/auth/password
- Method: POST
- Fields:
  - email
## Password verify
- URL: /api/auth/password/{token}
- Method: GET
## Password update
- URL: /api/auth/password
- Method: PUT
- Fields:
  - password
## Logout
- URL: /api/auth/logout
- Method: GET

## Sources
- https://tutsforweb.com/laravel-passport-create-rest-api-with-authentication/
- https://medium.com/@martin.riedweg/laravel-5-7-api-authentification-with-laravel-passport-92b909e12528
- https://stackoverflow.com/questions/43318310/how-to-logout-a-user-from-api-using-laravel-passport
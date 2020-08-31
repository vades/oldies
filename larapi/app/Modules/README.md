URLs
==========
- Api auth: `api/v1/auth/{auth-feature}`
- Api public: `api/v1/public/{feature-name}`
- Api protected: `api/v1/{feature-name}`
Principles
==========
## Directories
- Requests, Resources, Events etc. create directory by feature - (Requests/Auth, Events/Auth etc)
### Modules/Api
-  Holds shared api module stuff.
### Modules/ProjectName
-  Holds specific module web stuff.
- Directory structure example
   - Home
      - HomeController.php
      - home.blade.php
      - routes-web.php
      - README.md
   - Pages
      - About
         - about.blade.php
         - AboutController.php
      - Contact
         - contact.blade.php
         - ContactController.php
   - Shared
      - Content
         - en
            - text-1.md
            - text-2.md
      - Layouts
         - master.blade.php
         - partials
            - header.blade.php
            - footer.blade.php
            - content.blade.php
   - Feature 1
      - Index
         - index.blade.php
         - IndexController.php
      - Show
         - show.blade.php
         - ShowController.php
   - Feature 2
      - ...
## Naming
- Do not use Web or Api prefix for classes (UserController not UserApiController) - we have NAMESPACES
- Requests, Resources, Events etc. short names without type name (UserUpdate not UserUpdateRequest) 
## API response
- Success - use `message` key: return response()->json(['message' => 'Success message'], 200);
- Error - use `error` key: return response()->json(['error' => 'Error message'], 500);
## Single responsibility
- Class/Method should do one thing, once and only once.
## Comments
- Make comments when class/method finished.
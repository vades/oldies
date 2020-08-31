SASS directory structure
## Core
Contains SASS variables, functions, mixins, config and other stuff.
## Base
Contains the project boilerplate code such as typo, resets, dimensions, media queries, colors and other helpers that are commonly shared among the entire project.
## Layout
Holds all files that handle the layout, such as content, sidebars, header and footer.
## Components
Contains all independent parts (modules) such as inputs, buttons, tables, accordions and many other components. 
## Custom
Holds custom code for specific project needs.
## Vendor
Holds all third party code from external libraries

## sass
- core
   - mixins
      - _common.scss
      - _mixin-1.scss
      - _mixin-2.scss
      - _mixin-3.scss
   - settings
      - _colors.scss
      - _variables.scss
      - _media-queries.scss
- base
   - _base.scss
   - _typo.scss
   - _colors.scss
   - _media-queries.scss
   - _gaps.scss
   - _dimensions.scss
   - _displays.scss
   - _helpers.scss
   - _image.scss
- layout
   - _body.scss
   - _footer.scss
   - _header.scss
   - _layout-c.scss
- components
   - accordion
   - alert
   - autocomplete
   - badge
   - button
   - canvas
   - card
   - confirm
   - dropdown
   - form
   - gallery
   - input
   - item-group
   - list
   - modal
   - nav
   - notify
   - overlay
   - page-header
   - pagination
   - panel
   - panel-card
   - search
   - section
   - tablist
   - tooltip
- vendor
   - normalize
- custom
   - core
      - _skin.scss
      - _variables.scss
   - layout
      - _header.scss
      - _content.scss
      - _footer.scss
   - features
      - _home.scss
   - common
      - _common.scss


## Sources
[Sass Boilerplate](https://github.com/HugoGiraudel/sass-boilerplate)
[Structuring your Sass Projects](https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4)
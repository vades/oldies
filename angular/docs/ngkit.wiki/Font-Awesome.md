The following instructions assume you have already installed Angular with CLI.
## Install via NPM
```
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/angular-fontawesome
```
## Usage
### Import FontAwesomeModule, library and icons
`src/app/app.module.ts`
```
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [...],
  imports: [
    ...,
     FontAwesomeModule,
  ]
})
```
### Add an icon to the library for convenient access in other components
`src/app/app.module.ts`
```
export class AppModule {
  constructor() {
    library.add(faSmile);
  }
 }
```
## View with icon
`src/app/app.component.html`
```
<fa-icon icon="smile"></fa-icon>
```

## Sizing icons
```
<fa-icon icon="smile" size="lg"></fa-icon>
```
Param | Size | Example
--- | --- | ---
xs | .75em | `<fa-icon icon="smile" size="xs"></fa-icon>`
sm | .875em | `<fa-icon icon="smile" size="sm"></fa-icon>`
lg | 1.33em | `<fa-icon icon="smile" size="lg"></fa-icon>`
2x | 2em | `<fa-icon icon="smile" size="2x"></fa-icon>`
3x | 3em | `<fa-icon icon="smile" size="3x"></fa-icon>`
4x | 4em | `<fa-icon icon="smile" size="4x"></fa-icon>`
5x | 5em | `<fa-icon icon="smile" size="5x"></fa-icon>`
6x | 6em | `<fa-icon icon="smile" size="6x"></fa-icon>`
7x | 7em | `<fa-icon icon="smile" size="7x"></fa-icon>`
8x | 8em | `<fa-icon icon="smile" size="8x"></fa-icon>`
9x | 9em | `<fa-icon icon="smile" size="9x"></fa-icon>`
10x | 10em | `<fa-icon icon="smile" size="10x"></fa-icon>`

## Rotate icons
```
<fa-icon icon="smile" rotate="90"></fa-icon>
```
Param | Rotation Amount | Example
--- | --- | ---
90 | 90° | `<fa-icon icon="smile" rotate="90"></fa-icon>`
180 | 180° | `<fa-icon icon="smile" rotate="180"></fa-icon>`
270 | 270° | `<fa-icon icon="smile" rotate="270"></fa-icon>`

## Flip icons
```
<fa-icon icon="smile" flip="horizontal"></fa-icon>
```
Param | Rotation Amount | Example
--- | --- | ---
horizontal | mirrors icon horizontally | `<fa-icon icon="smile" flip="horizontal"></fa-icon>`
vertical | mirrors icon vertically | `<fa-icon icon="smile" flip="vertical"></fa-icon>`
both | mirrors icon vertically and horizontally | `<fa-icon icon="smile" flip="both"></fa-icon>`

## Animate icons
```
<fa-icon icon="smile" [spin]="true"></fa-icon>
```
Param | Description | Example
--- | --- | ---
 spin | get any icon to rotate | `<fa-icon icon="smile" [spin]="true"></fa-icon>`
 pulse | rotate icon with 8 steps | `<fa-icon icon="smile" [pulse]="true"></fa-icon>`

## Docs
- [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome)
- [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/angular)
- [Sizing icons](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons)
- [Rotating ions](https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons)
- [Animating icons](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons)
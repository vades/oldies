Alert component
==========
Displays alert message.

selector: `vds-alert`

## Usage
### Message only
```
<vds-alert 
  [show]="true"
  message="This is alert message"
  type="info"
  classList="custom-class">
</vds-alert>
```
### With additional content
```
<vds-alert 
  [show]="true"
  message="This is alert message with additional content"
  type="info"
  classList="custom-class">
  <p>Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor. Aenean massa.</p>
</vds-alert>
```

Param | Default| Example
--- | --- | --- 
show: boolean | false | `[show]="true"` 
classList: string | empty | `classList="custom-class"` 
type: string | empty | `type="info"`
message: string | empty | `message="This is alert message"`
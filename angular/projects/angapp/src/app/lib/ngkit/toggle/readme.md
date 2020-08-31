Toggle component
==========
Set "opened" status to true or false.

selector: `vds-toggle`

#Usage
```
<vds-toggle 
  [opened]="expandMe" 
  classList="button is-outlined" 
  closeText="Collapse" 
  openText="Expand">
</vds-toggle>
```

Param | Default| Example
--- | --- | --- 
opened | false | `[opened]="openMe"` 
classList | empty | `classList="button is-outlined"` 
openText | empty | `openText="Expand"`
closeText | empty | `closeText="Collapse"`
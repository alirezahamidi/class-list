# class-list
A string joiner that can unlock the ability to use react-like frameworks multiple classes on a single element without extra work

## Installation
```
$npm i class-list-joiner --save
```
## Usage

```
import ClassList from 'class-list-joiner';
import style from './styles.module.css';

return (
    <div className={ClassList(style.componentContainer,isBoldFont?style.bold:null)}>
    </div>
)
```

by this code in react and false parameter for the `isBold` variable you will get this output :

```
<div class="moduleName_componentContainer__RZdcq">
</div>
```

by passing a null or empty string they will filter and the rest will join and create endpoint class string.

It is not a complicated or big package but it is a simple function with the simplest implementation that could but it may be helpful for you.

Thanks and if you liked it please let your friends know about it.
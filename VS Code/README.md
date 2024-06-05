# VS Code H5快捷方式

## $ 自增符号

``` html
div.item$*5
```
``` html
result:
    <div class="item1"></div>
    <div class="item2"></div>
    <div class="item3"></div>
    <div class="item4"></div>
    <div class="item5"></div>
```

## 创建简单模板

``` html
html:5
```
``` html
result:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## 外部css等文件导入

``` html
link:css
```
``` html
result:
    <link rel="stylesheet" href="style.css">
```

## lorem 随机文本

``` html
lorem 
```
``` html
lorem*n 
```
``` html
result:
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus placeat eum, in sed, aliquid laudantium excepturi debitis iste fugiat odit asperiores cum ipsum atque, sequi nam quas rem quo?
```
## 元素id,class
``` html
div#app.app
```
``` html
result:
<div id="app" class="app"></div>
```

## 元素内容

``` html
div{content}
```
``` html
result:
<div>
  content
</div>
```
## 子元素
``` html
div>div 子元素

result: 
<div>
  <div></div>
</div>            
```
## 属性赋值
``` html
img[src=./images/logo.png]
```
``` html
result: <img src="./images/logo.png">
```
## 外部js导入
```html
script:src
```
``` html
result:
    <script src=""></script>
```

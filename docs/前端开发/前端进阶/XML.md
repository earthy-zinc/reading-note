# XML

## XML的作用

1. 把动态的数据从从HTML分离。通过XML，动态的数据存储在独立的XML文件中，那么修改底层数据不再需要对HTML做出任何改变。
2. 简化数据共享。XML数据以文本形式存储，让不同系统不同程序之间数据共享更加容易。
3. 简化数据传输。
4. 简化平台变更。

## XML语法

XML文档的声明：一个xml文档必须有第一行的生命和他文档元素的描述信息。
在XML文档中，所有元素都需要有关闭标签。XML文档标签对大小写敏感。
XML文档必须有一个元素是其他元素的父元素，该元素称为根元素。元素的属性值必须加上引号。

```xml
<?xml version="1.0" encoding="utf-8" ?>
<!DOCTYPE>
<br>空行</br>
```

## XML元素

元素命名必须遵循以下命名规则：

* 名称可以包含字母、数字以及其他字符
* 名称不能以数字和标点符号开始
* 不能以特定的字母如xml开始
* 名称不能包含空格

## XML属性

属性提供元素的额外信息。

* 属性不能包含多个值
* 属性不能包含树结构
* 属性不容易进行扩展

## DTD

文档类型定义(document type definition)的作用时定义XML文档的合法构建模块，定义了某个特定的XML文件，其标签属性只能有哪些值。

### DTD的作用

* 是一种保证XML文档格式正确的有效方法，可以通过比较XML文档和DTD文件来看文档是否符合给定的规范，元素、标签的使用是否正确。
* 一个DTD文档包含：元素的定义规则，元素间关系的定义规则，元素可使用的属性，可使用的实体或者符号规则
* XML文件提供应用程序一个数据交换的格式，DTD是让XML文件能够称为数据交换的标准，因为不同的公司只需要定义好标准的DTD，各个公司都能依照DTD建立XML文件，并且进行验证，如此就可以建立统一的标准。
* DTD是一个ASCII编码格式的文本文件

### DTD的优点

* 通过DTD，XML文件就能够携带有关自身格式的描述
* 在项目中可以使用统一的标准来定义数据传输规范
* 使用DTD验证XML的规范性

### DTD构建模块

XML文档是由元素、属性、实体、被解析的字符数据、字符数据构成。

* 元素：xml标签的第一个字符串就成为xml标签中的元素。如`<body></body>`body为元素
* 属性：属性能够提供元素的额外信息。如`<img src="">`src是属性，他提供了img元素图片的原始位置
* 实体：实体用来定义普通的文本变量
* 被解析的字符数据(parsed character data)会被解析器解析的文本，这些文本被解析器检查实体以及标记
* 字符数据(character data)是不会被解析器解析的文本

## XML命名空间

XML NameSpace (xmlns)是当xml元素名称出现冲突时，为了解决冲突，区分两个重名的元素名称所规定的东西。
当在XML中使用前缀时，一个用于前缀的命名空间必须被定义。命名空间实在元素的开始标签的xmlns属性中定义的

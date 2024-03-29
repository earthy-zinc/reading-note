# PS 练习

## 一、选择区域

### 1、选择常用快捷键

在进入选区工具时，有两种情况

#### 1）当前没有选区的情况下

| 快捷键             | 说明                                                   |
| ------------------ | ------------------------------------------------------ |
| CRTL+拖拽          | 移动当前图层                                           |
| SHIFT+鼠标选择     | （矩形选框工具）创建正方形<br>（椭圆选框工具）圆形选区 |
| ALT+鼠标选择       | 以第一次鼠标点击的点为中心选择选区                     |
| ALT+SHIFT+鼠标选择 | 上述两者选择操作的叠加                                 |

#### 2）当前有选区的情况下：

| 快捷键             | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| CRTL+拖拽          | 移动当前的选框                                               |
| SHIFT+鼠标选择     | 并集，扩大选区，将新选择的区域添加到当前选区                 |
| ALT+鼠标选择       | 差集，减小选区，将新选择的区域从当前选区中减去               |
| ALT+SHIFT+鼠标选择 | 交集，取两者交集，取新选择的区域和当前已选择区域当中共同的部分作为新选区。 |

选择区域时常用的全局快捷键

| 快捷键 | 说明                       |
| ------ | -------------------------- |
| CTRL+D | 清除当前选区（全局快捷键） |



### 2、选框工具

如果我们需要在图像中选择特定的区域，PS提供了一系列选框工具（**M**arquee tool）来让我们选择特定的区域，在进入选框工具后，PS默认为单次选取操作，选区的右上角是鼠标第一次点击时的坐标。下一次选择会清除上一次选取，重新创建新的选区。我们可以通过快捷键或者点击右上角图标来扩大或减小选区。

>快捷键M  按一次进入矩形选框工具，第二次椭圆选框工具

### 3、套索工具

套索工具（**L**asso tool）可以让我们通过鼠标移动自由的选择图像中的任意区域，我们可以通过套索工具选择不规则形状的物体，或者任意选择一片不规则的区域

> 快捷键L 按一次进入套索工具，第二次进入多边形套索，第三次

* 套索工具：像画笔一样在图像中任意绘制一片区域
* 多边形套索：类似于钢笔工具，在图像中选择几个点，PS会根据这几个点绘制出一个多边形选区
* 磁性套索：

#### 4、选择工具

>快捷键W 按一次对象选择工具，第二次快速选择，第三次魔棒工具

* 对象选择工具：PS会自动识别图像中的对象，并选择上
* 快速选择工具：通过查找对象的边缘和其他区域的不同来选择
* 魔棒工具：会根据颜色的不同来选择区域

## 二、图层工具

### 1、图层相关快捷键

| 快捷键                 | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| CTRL+J                 | 根据当前的选区创建一个新图层                                 |
| CTRL+,                 | 在选择对应的图层后，显示/隐藏当前图层                        |
| CTRL+G                 | 在选择对应图层之后，将这些图层编组                           |
| CTRL+/                 | 在选择对应图层之后，锁定当前图层，锁定之后不能对该图层再进行修改 |
| CTRL+E                 | 在选择对应图层之后，合并这些图层                             |
| CTRL+]                 | 选择对应图层之后，将该图层向上移动一层，上层会覆盖掉部分下层的效果 |
| CTRL+[                 | 选择对应图层之后，将该图层向下移动一层                       |
| CTRL+鼠标左键图层      | 选择对应图层（蒙版）之后，显示当前图层（蒙版）选定的选区     |
| ALT+鼠标左键图层       | 选择对应图层（蒙版）之后，聚焦于当前图层（蒙版）             |
| ALT+鼠标左键图层蒙版   | 选择对应图层蒙版之后，进入图层蒙版                           |
| ALT+鼠标拖拽图层蒙版   | 将图层蒙版作用到另一个图层上                                 |
| SHIFT+鼠标左键图层蒙版 | 选择对应图层蒙版之后，关闭当前图层蒙版                       |
| \                      | 选择对应图层蒙版之后，切换图层蒙版的显示和隐藏               |

### 2、图层

图层：图层相当于一层画布，我们可以在图层上绘画，调整效果而不会破坏整体图像。绘画或添加的效果会叠加到下面的图层上。

调整图层：对其底下的图层添加一个图像效果

### 3、图层蒙版

所有的图层都可以添加一个图层蒙版，蒙版用于精细的定义该图层定义的效果显示的区域。图层蒙版与画布大小相同，是一张灰度图，我们可以在图层蒙版上绘画来确定该图层显示效果的区域，白色的蒙版就意味着显示该效果，黑色的蒙版意为者不显示图层定义的效果，中间色调意为这半透明的显示。

注：

1. 调整图层会自带一个图层蒙版，默认作用为整个画布。通过选区建立的调整图层会将蒙版作用于选定的区域。
2. 普通图层不会附带图层蒙版。

### 4、选择技巧

* 在无法通过选区工具快速选择你想要的区域的时候，意味着你想要选择的选区不符合对应的选择标准，那么我们就需要创造条件来让PS识别出对应的选区，我们可以通过增大对比度，黑白，阈值，调整色彩等操作，由这些选项的特性，以及图像自身的特点。就可以强化想选择的部分和背景之间的区别。从而更好的选择该部分。
* 选择半透明的物体：通过快速蒙版选择，首先我们要先选择该物体，复制该物体，然后进入蒙版状态，将该物体粘贴到原来的位置上，实际上刚刚选择的物体在快速蒙版中是一张灰度图，物体本身和物体的背景是有一定的对比关系的。因此灰度图的灰度也不尽相同。蒙版状态中不同程度的灰色，对应着不同程度的选择。在将物体粘贴到快速选区之后，会根据物体的灰度值来对选区做出相应的调整，从而改变选择的强度透明度。经过这样的步骤，我们就成功的选择出半透明的物体



## 三、调整工具

### 1、直方图

直方图从左往右依次是图像中暗和亮部分的整体分布。我们可以清晰的从直方图中看出图像的整体亮暗程度。RGB通道下的直方图也可以称为灰度图，从黑到白依次有0-255来显示。

如果左半部分黑色面积大，那么图像整体偏向暗色调。如果右半部分黑色面积大，图像整体偏向亮色调。如果中间面积大，图像明暗整体分布均衡。调整图像的亮暗要根据图像本身营造的氛围决定。

### 2、色阶

通过调整图像的阴影、中间调和高光的强度级别，从而校正图片的明暗和色彩，输入色阶的

* 输入色阶：我们可以拖动输入色阶的滑块来增加图像中的暗部和亮部，或者是中间的灰度往暗往明处调节。
* 输出色阶：我们可以拖动输出色阶的滑块来限定图像的明度范围，也就是会丢弃图像中的暗部、亮部。
* 设置白场、暗场、中性场：重新定义图像中最亮、最暗和中间亮度的地方。

> 快捷键ALT 在色阶窗口中，按住ALT并拖动滑块，PS会只显示图中最亮或最暗的地方，方便我们查看。

### 3、曲线

色阶是曲线的基础，曲线是二维版本的色阶，横坐标为输入色阶，纵坐标为输出色阶。我们可以通过曲线调整输入对应什么样的输出。

比如说我们定义曲线上的三个点，分别分布在图像的暗部、中部和亮部区域。亮部区域对应的输入输出色阶都是图像中最亮的部分，我们将亮部区域的点向下拖拽，那么在这个过程中，表现在坐标轴上亮部输入不变，但是亮部的输出被压低了，图像的亮部也就变暗了。实际上由于这是一条曲线，对一个点的修改会影响临近色区的变化，因此我们要整体的看待调节曲线对图像明暗程度做出的影响、

## 四、色彩调整

### 1、色相


根据色彩理论，红绿蓝三种颜色是光的三原色，我们可以通过这三种颜色的组合显示出种种不同的颜色，如上图的色环所示，所有的颜色围成了一个圈，形成了色环，这就是色相环。

在PS中的色相是以蓝色为基准，在色相环上顺时针旋转为整，逆时针旋转为负，正负数值一共180，正好对应了色相环圆的度数，我们对色相的调整，实际上就是按照色相环的规律将一种图像中的颜色由一种转换为另一种。

以蓝色为例，我们将色相往右拉，对应色相环中蓝色顺时针移动，假设移动到了紫色的地方，那么图像中原来的蓝色现在就变为紫色，以此类推，其余的所有颜色都沿着色相环顺时针偏移到了新的颜色区域上，整体的色调就发生了变化。

左右微调色相会让图像中所有的颜色转变为其邻近的颜色，大幅度调整色相会让图像中原有的颜色变为它的互补色。会产生强烈的对比效果。

在实际操作中，我们可以针对全图进行色相调整，也可以针对单独的某个颜色范围进行调整，在色相饱和度面板中，选定对应的颜色范围，即可以只对这部分颜色进行调整。

### 2、饱和度

饱和度表现了颜色的鲜艳程度，饱和度高的色彩其纯度也就越高，越能显示出颜色本身的效果。饱和度低的颜色有一定发灰的效果，会显得颜色没有那么纯净，最终会变为黑白色

### 3、明度

### 4、色彩平衡

色彩平衡选项调整颜色的思路为改变图像中红绿蓝三种颜色的分布情况。

可以对严重偏色的图像调整回均匀的色彩。当某张图片整体严重偏黄、偏绿、偏蓝时，这时我们称为图像色彩不平衡。我们可以通过调整来减少这部分的颜色，增加缺少的颜色。从而实现让图片色彩平衡。或者我们想要让图片呈现出某种色调的时候，也可以针对来修改。

在严重偏色或者过暗过亮的图片中，我们也可以通过重新定义图像的最亮处，最暗处、中间色来修正图片的亮度和色彩。

* RGB色彩直方图：通过RGB色彩直方图，我们可以很清楚的看到图片整体色彩的偏向。直方图从左到右就显示了该颜色范围内从暗到亮的分布。整体观看针对红绿蓝三种颜色直方图哪一种多哪一种少，我们可以根据直方图调整对应的颜色，使对应颜色的分布情况大致均匀。
* 颜色调整：色彩平衡中有三个调整的滑块，分别是红绿蓝与其对应的互补色，将滑块往相反的方向调整，就意味着减少对应的颜色，增加其互补色的比重。当我们明确想要减少某种颜色时，我们可以将滑块向其互补色方向移动。同理，当我们想要增加某种颜色时，我们可以将滑块往这个颜色的方向移动。在进行颜色调整时，我们通常需要观察RGB色彩直方图观察画面中红绿蓝三种颜色的分布状况，从而决策调整。

### 5、可选颜色

可选颜色选项对色彩的调节相比色彩平衡更为精细，可以针对红绿蓝三种颜色以及其对应的补色单独的调整其色彩的分布情况，也可以针对照片中黑白情况调整。

### 6、黑白

无论是黑白照片，还是彩色的照片，其黑白属性都是非常重要的，我们可以通过黑白来观察每种颜色的亮度和饱和度。

在黑白调整图层中，我们可以针对红黄蓝及其互补色单独调整其亮度。针对黑白照片时，我们可以通过这种选项来调节图像的对比度，以及我们要突出展现的内容。以及图像中每个色彩部分的明暗程度。

### 7、阈值

阈值选项也是黑白调整的一种，但是阈值相比黑白要更激进一些，阈值是完全的黑与白，而不包括中间的灰度。我们可以通过在直方图中选择某个灰度值来调整阈值，阈值以下的色彩将全部转化为黑色，阈值以上的色彩全部转化为白色。

我们可以通过这个选项将图像按照亮度完全分为两个部分。方便进行下一步操作。

## 五、明暗调整


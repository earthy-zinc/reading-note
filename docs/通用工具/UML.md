# UML

## 1、UML类图

### 1）泛化关系Generalization

用来描述继承关系，用一个三角形和实线构成，三角形的箭头由子类指向父类。

### 2）实现关系Realization

用来实现一个接口，用一个三角形和虚线构成，三角形的箭头由实现类指向接口。

### 3）聚合关系Aggregation

表示整体是由部分构成的，但是整体与部分不是强依赖的，整体不存在了部分还会存在。用一个空心菱形和实线构成，菱形指向整体。

### 4）组合关系Composition

表示整体是由部分组成，而整体和部分是强依赖的，整体和部分缺一不可。用一个实心菱形和实线构成，实心菱形指向整体。

### 5）关联关系Association

表示不同类对象之间是有关联的，这种关联关系是静态的，需要事先定义，在创建时就已完成关联。可以是1对1，一对多，多对多。用一条实线和两数字来表示。数字表示具体的关联关系究竟是1对1还是1对多或者多对多

### 6）依赖关系Dependency

依赖关系是在运行过程中才出现起作用的，在使用到相关资源的时候才会显现出依赖关系。主要有三种形式：

* 被依赖的类A是主类B某个方法的局部变量。
* 被依赖的类A是主类B某个方法的参数。
* 被依赖的类A向主类B发送消息从而影响B类发生变化。

用一条虚线和箭头组成，其中箭头指向被依赖的类。

weight parameter sharing strategy in multi task branches

(6) 提出多任务分支中权重参数共享策略和图像特征融合策略的分割方法，提升细节感知捕获能力和检测精确度；

(6) proposes a segmentation method using weight parameter sharing strategy in multi-task branches and image feature fusion strategies to improve the detail perception capture ability and detection accuracy.

# Java基础

## 1. 类

### 概念

**static** 表示类方法、也称静态方法，可以直接通过类名来调用，不需要创建实例。

**实例方法** 没有static修饰符，必须通过实例对象调用。

**自定义数据类型**主要由四个方面组成：

* 类型本身具有的属性，通过类变量体现（static）
* 类型本身可以进行的操作，通过类方法体现（static）
* 类型实例具有的属性，通过实例变量体现
* 类型实例可以进行的操作，通过实例方法体现

#### 类变量

类型本身具有的属性通过类变量体现，经常用于表示一个类型中的常量。

#### 类方法与实例方法

类方法只能访问类变量，而不能访问实例变量，可以调用其他的类方法，但是不能够调用实例方法

实例方法既能够访问实例变量，也能访问类变量，既可以调用实例方法，也可以调用类方法

#### 构造方法

在创建对象时对实例变量赋初值，这种方法被称为构造方法，构造方法的特点是：

* 名称与类名相同，是固定的
* 没有返回值，也不能由返回值
* 我们可以在构造方法中调用其他的构造方法

私有的构造方法：如果能够创建类的实例，但是只能被类的静态方法调用，单例模式，类的对象只能有一个，对象是通过静态方法获取的，而静态方法调用私有构造方法创建一个对象，如果对象已经被创建过了，就会重用该对象。

### 抽象类

只有子类才知道如何实现的方法。一般定义为抽象方法，抽象方法是相对于具体方法而言的，具体方法有实现代码，而抽象方法只有声明，没有实现。

抽象类和抽象方法都用`abstract` 关键字声明。定义了抽象方法的类必须被声明为抽象类，不过抽象类可以没有抽象方法，抽象类也可以定义具体方法和实例变量等，抽象类和具体类的区别就是，抽象类不能够创建对象，但是具体类可以。

要创建对象，必须使用抽象类的具体子类，一个类在继承抽象类后，必须实现抽象类中定义的所有抽象方法，除非他自己也声明为抽象类。

使用抽象类，类的使用这在创建对象的时候，就知道它必须要使用某个具体的子类，而不能误用不完整的父类。

抽象类和接口时配合而非替代的关系。接口声明能力，抽象类提供默认的实现，实现其全部或者部分方法，一个接口经常有一个对应的抽象类。对于需要实现接口的具体类而言，可以有两种选择，一个是实现接口，自己实现全部的方法，另一个是继承抽象类，然后根据需要重写方法。

继承的好处是可以服用代码，只重写需要的即可，需要写的代码比较少。

### 内部类

内部类与包含它的外部类之间有比较密切的关系，而与其他类关系不大，定义在类内部，可以实现对外部完全隐藏，有更好的封装性，代码实现上也往往更加简洁。

对于Java虚拟机而言，每个内部类最后都会被编译为一个独立的类，生成一个独立的字节码文件。

内部类可以方便的访问外部类的私有变量，可以声明为private私有的从而对外完全隐藏。

内部类主要有四种：

* 静态内部类
* 成员内部类
* 方法内部类
* 匿名内部类

方法内部类在方法内定义和使用，成员内部类和静态内部类可以被外部使用。

#### 静态内部类

静态内部类可以访问外部类的静态变量和方法。

#### 成员内部类

成员内部类除了静态变量和方法，还可以直接访问外部类的实例变量和方法，成员内部类不可以定义静态变量和方法。方法内部类和匿名内部类也不可以。

创建内部类对象的语法是：外部类对象.new 内部类()

如果内部类和外部类关系密切，且操作依赖外部类的实例变量或者方法，则可以考虑定义为成员内部类

外部类的一些方法的返回值可能是某个接口，为了返回这个接口，外部类方法可能使用内部类实现这个接口。

#### 方法内部类

指的是一个类直接定义在了外部类的方法中，方法可以是实例方法和静态方法。如果方法内部类要访问方法的参数和方法中的局部变量，这些变量需要被声明为final。

方法内部类访问方法中的参数和局部变量，这是通过在构造方法中传递参数来实现的。

#### 匿名内部类

匿名内部类没有名字，在创建对象的时候同时定义类。匿名内部类是与new关键字关联的，new后面是父类或者父接口，然后圆括号，里面可以是传递给父类的构造方法参数，最后大括号定义内部类。

匿名内部类只能被使用一次，用来创建一个对象，没有名字，没有构造方法，但是可以根据参数列表调用对应父类的构造方法，它可以定义实例变量和方法、初始代码块。

如果对象只会创建一次，而且不需要自定义构造方法来接受参数，可以使用匿名内部类。在调用方法的时候，很多方法需要一个接口参数，这个接口是需要实现的，因此我们可以调用方法的时候在参数列表中传入一个匿名内部类，实现这个接口的方法。

### 枚举类

Java中枚举是一个特殊的类，用于表示一组常量。使用enum关键字来定义，每个常量之间用逗号分割。基本语法如下

```java
enum Color{
    RED,
    BLUE,
    GREEN;
}
```

* 对于每个枚举类的常量，相当于在一个名叫Color的类中创建了一个Color类型的静态只读常量。
* 我们可以通过for循环遍历枚举元素。因为枚举类默认会继承 java.lang.Enum 类，实现了 java.lang.Serializable 和 java.lang.Comparable 两个接口。因此会继承 java.lang.Enum 类中的name(), values(), ordinal() 和 valueOf() 方法。
  * name() 返回常量名
  * values() 返回枚举类中所有的常量的值，默认是常量名
  * ordinal() 找到每个枚举常量的顺序，是由定义常量时代码的先后顺序决定的
  * valueOf()  返回指定字符串值的枚举常量
* 枚举类的成员：枚举类跟普通类一样可以有自己的变量，方法和构造函数，但是构造函数只能是私有的，外部无法访问。但是我们可以通过构造函数来创建包含更多信息的枚举类常量，这些常量在类初始化时就会在类的内部被创造。

因此我们可以定义包含更多信息的枚举类

```java
enum Weekday {
    MON(1, "星期一"), 
    TUE(2, "星期二"), 
    WED(3, "星期三"), 
    THU(4, "星期四"), 
    FRI(5, "星期五"), 
    SAT(6, "星期六"), 
    SUN(0, "星期日");

    public final int dayValue;
    private final String chinese;

    private Weekday(int dayValue, String chinese) {
        this.dayValue = dayValue;
        this.chinese = chinese;
    }

    @Override
    public String toString() {
        return this.chinese;
    }
}
```

### 包装类

在Java中数据类型有基本类型和它对应的包装类型。之所以要包装基本数据类型，是因为Java中很多代码只能操作对象，而不能操作基本数据类型。而包装类除了实现基本数据类型的功能，还提供了一些静态方法，静态变量和实例方法，以方便对数据的操作。

| 基本类型 | 包装类    |
| -------- | --------- |
| boolean  | Boolean   |
| byte     | Byte      |
| short    | Short     |
| int      | Integer   |
| long     | Long      |
| float    | Float     |
| double   | Double    |
| char     | Character |

#### 基本类型和包装类之间的转换

* 每个包装类都有一个静态方法Type.valueOf()，接收基本类型，返回引用类型。
* 也有一个实例方法typeValue()返回对应的基本类型。

基本类型和包装类之间的转化，称为装箱和拆箱，为了方便我们使用，Java引入了自动装箱和拆箱技术，可以将基本类型赋值给引用类型，也可以将引用类型赋值给基本类型。Java编译器会帮我们转换。

#### 重写Object类的方法

所有的包装类都是继承了Object类，也重写了它的三个方法equals, hashCode, toString

**boolean equals(Object obj)**

equals函数用来判断当前对象和参数传入的对象是否相同。应该反应对象之间逻辑相等的关系

在Object类中，默认的实现是比较地址，对于两个变量，只有这两个变量指向同一个对象是，才会返回true，和比较运算符 == 的结果是一样的。

这种默认实现是不合适的，子类都应该重写该实现，所有包装类都重写了该实现，实际比较的是其包装的基本类型的值。

**int hashCode()**

返回一个对象的哈希值，哈希值是一个int类型的数，由对象中一般不变的属性映射而来，用来快速对对象进行区分和分组。一个对象的哈希值不能边，相同对象的哈希值必须一样。不同对象的哈希值一般不同。子类重写equals方法时，也必须重写hashCode，

**String toString()**

**Comparable接口**

每个包装类也都实现了可比较（Comparable）接口，用当前对象和参数对象进行比较，小于参数对象时返回-1，等于返回0，大于返回1。

#### 字符串和包装类之间的转换

除了Character类以外，每个包装类都有一个静态的valueOf(String)方法，根据字符串返回包装类对象，也有一个静态的parseType方法，根据字符串返回基本类型的值。

#### 不可变性

包装类都是不可变类，实例对象一旦创建就没有办法修改了

## 2. 继承

**super**

super关键字用于指代父类，可以用于调用父类的构造方法，访问父类方法和变量。

* 调用父类构造方法时，super()必须放在第一行
* super.XXX()表示调用父类的XXX()方法，在没有歧义的情况下，可以省略super关键字
* super同样可以引用父类非私有的变量

对于父类型的变量，可以引用任何子类类型的对象，这种情况称为多态，一种类型的变量，可以引用多种实际类型对象。对于父类，我们称为静态类型，对于子类我们称动态类型。如果实际上调用的时子类（也就是对应动态类型的方法）我们称值为方法的动态绑定。

多态和动态绑定使得操作对象的程序不需要关注对象的实际类型，从而可以统一处理不同对象，但又能实现每个对象特有的行为。

在父类构造方法中最好不要调用可以被子类重写的方法。

如果子类和父类拥有重名的属性和方法，在类的外部访问时，会根据指定的静态类型来判断调用的时子类还是父类的方法。如果指定静态类型是子类，则会调用子类的静态方法，反之调用父类的方法。这称为静态绑定，即访问绑定到变量的静态类型，静态绑定在程序编译阶段就可以决定，但是动态绑定需要程序运行时。

### 父子类型的转换

一个父类的变量，能不能转换为一个子类的变量，取决于这个父类变量的动态类型是不是这个子类或者子类的子类。

**模板方法**父类定义了实现的模板，但是具体的实现由子类提供。  

### 类加载

类的加载是指将类的相关信息加载进内存。在Java中，类是动态加载的，当第一次使用这个类的时候才会加载，加载一个类时，会查看其父类是否已经加载，如果没有就会加载他的父类

一个类的信息主要包括：

* 类变量（静态变量）
* 类的初始化代码
* 类方法（静态方法）
* 实例变量
* 实例初始化代码
* 实例方法
* 父类信息引用

类的初始化代码包括定义静态变量时的赋值语句和静态初始化代码块

实例初始化代码包括定义实例变量时的赋值语句，实例初始化代码块和构造方法

类加载过程包括分配内存、保存类的信息，给类变量赋一个默认值，加载父类，设置父子关系，执行类的初始化代码。

对于类的初始化代码，先执行父类、再执行子类。内存分为栈和堆，栈存放函数的局部变量，而堆存放动态分配的对象，还有一个内存区存放类的信息，称为方法区。在类加载之后，对于每一个类，在方法区中就有了一份类的信息。

在寻找要执行的实例方法的时候，是从对象的实际类型信息开始查找的，找不到才会查找父类类型信息。

对于继承层级较深的情况，这种查找调用的效率就会比较第，因此我们可以使用虚方法表来优化。在类加载的时候，为每一个类创建一个表，这个表包括该类的对象所有动态绑定的方法及其地址，包括父类的方法，但一个方法只会有一条记录。

## 3. 接口

Java使用implements这个关键子表示实现接口。接口表示的是对象所具有的某种能力。实现接口就必须要实现接口中声明的方法。

接口本身不能被创建，只能被具体的类实现。我们可以声明接口类型的变量，引用实现了接口的类对象。

使用接口，很多时候反映了对象以及对这个对象操作的本质，我们通过接口可以实现代码复用，这样同一套代码可以处理多种不同类型的对象，只要这些对象都有相同的能力（或者说实现了同样的接口）。而且降低了耦合，提高了灵活性。使用接口的代码依赖的是接口的本身，而不是实现接口的具体类型，程序可以根据情况替换接口的实现，而不影响接口的使用者。

**接口中的变量**

接口也可以定义变量，通过接口名.变量名使用

**接口的继承**

一个接口可以继承别的接口，但是接口可以有多个父接口，也就是实现多个能力。

**instanceof**

instanceof除了可以判断一个对象是否是另一个类的子类，也就是判断继承关系，也可以用来判断一个对象是否实现了某接口


## 4. 包

包是分割类和接口的一个层次结构，包有名称，这个名称用顿号分割，表示层次结构，带有完整包名的类名称为其完全限定名。

### 声明类所在的包

在没有定义类所在的包的默认情况下，类位于默认包中，定义类的时候，我们应该使用关键字package声明其包名，包声明语句应位于源代码最前面，包名和文件目录结构必须完全匹配，。从源文件的根目录算起。

### 通过包使用类

同一个包下面的类之间相互引用是不需要包名的，可以直接使用，如果类不再同一个包内，则必须要知道其所在的包，有两种方法，一种是通过类的完全限定名，另一种是将用到的类引入到当前类。引入到当前类，关键字是import，这个关键字放在package之后，类定义之前。

### 包范围可见性

### Java打包

### 程序的编译和连接

从源代码到运行的程序，有编译和连接两个步骤，编译时将源代码文件变成一种字节码，后缀class文件。连接是在运行时动态执行的，class文件不能直接运行，运行的是Java虚拟机，解析class文件，转换成机器能够识别的二进制代码，然后运行，连接就是根据引用到的类加载相应的字节码并执行。

Java编译和运行是，需要指定一个类路径，对于jar包，类路径是jar包的完整名称，在Java源代码编译时，编译器会确定引用的每个类的完全限定名，根据import和class path确定。在运行时，会根据类的完全限定名寻找并加载类。

因此，import时编译时的概念，用于确定完全限定名，在运行时，只根据完全限定名寻找并加载类，编译和运行都依赖类路径

## 5. 字符串

| 方法                                                   | 说明                                               |
| ------------------------------------------------------ | -------------------------------------------------- |
| boolean isEmpty()                                      | 判断字符串是否为空                                 |
| length()                                               | 获取字符串长度                                     |
| substring(int beginIndex[, int endIndex])              | 取子串                                             |
| indexOf(int ch) / indexOf(String str)                  | 查找字符或者子串，返回第一个找到的索引位置         |
| lastIndexOf                                            | 从后往前查找字符或者子串，返回从后数第一个索引位置 |
| contains(CharSequence s)                               | 判断字符串中是否包含指定的字符序列                 |
| endsWith(String suffix)                                | 判断字符串是否以给定的子字符串开头/结尾            |
| equalsIgnoreCase                                       | 忽略大小写判断内容是否相同                         |
| concat                                                 | 字符串连接                                         |
| replace(char oldChar, char newChar)                    | 字符串替换，替换单个字符，返回新字符串             |
| replace(CharSequence target, CharSequence replacement) | 字符串替换，替换字符序列返回新字符串               |
| trim()                                                 | 删除结尾和开头的空格，返回新字符串                 |
| split()                                                | 字符串分割，返回分割后的子字符串数组               |

### StringBuilder

StringBuilder类内部封装了一个字符数组，与String不同，它不是final的，可以修改，字符数组中不一定所有位置都已经被使用，他有一个实例变量，表示数组中已经使用的字符个数。StringBuilder继承自AbstractStringBuilder，默认情况下构造方法会创建一个长度为16的字符数组，已使用字符的个数默认值为0

而StringBuilder的append方法会拷贝字符到内部的字符数组中，如果字符数组长度不够，就会进行扩展，实际使用的长度用count体现。扩展的逻辑是分配一个足够长度的新数组，然后将原有内容拷贝到这个新数组中，最后让内部的字符数指向这个新数组。拷贝主要是靠数组拷贝方法Arrays.copyOf(value, newCapacity)



## 6. Arrays

Java有一个类Arrays包含一些对数组操作的静态方法。

### toString

输出数组的字符串形式

### 数组排序

Arrays对于每种基本类型的数组，都有一个重载的sort()方法

对象类型也可以使用sort方法，但是对象需要实现Comparabble接口。或者在sort方法中传入一个比较器作为参数。

传递比较器Comparator给sort方法，体现了程序设计中不变和变化相分离，排序的基本步骤和算法是不变的，但是按什么排序是变化的，sort方法将不变的算法设计为主体逻辑，而将变化的排序方式设计为参数，允许调用者动态指定，叫做策略模式。

### 查找

在已排序数组中进行查找，Arrays类已经实现了二分查找binarySearch可以针对基本类型数组，或者对象数组。

### 拷贝copyOf

### 数组比较equals

### 填充值fill

### 哈希值hashCode

### 多维数组



## 7. 异常处理

Java标准库常用的异常

```ascii
Exception							    常用异常汇总
│
├─ RuntimeException					     运行时异常
│  ├─ NullPointerException			      空指针异常
│  ├─ IndexOutOfBoundsException			  数组越界异常
│  ├─ SecurityException					 安全异常
│  └─ IllegalArgumentException			  非法的参数异常
│     └─ NumberFormatException		  	  数字的格式异常
│
├─ IOException							输入输出异常
│  ├─ UnsupportedCharsetException		  不支持的字符集异常
│  ├─ FileNotFoundException				 文件未找到异常
│  └─ SocketException					 网络异常
│
├─ ParseException						解析异常
│
├─ GeneralSecurityException			 	 总体的安全异常
│
├─ SQLException							数据库SQL语句异常
│
└─ TimeoutException						超时异常
```

**日志级别**

日志是程序输出的一些在程序运行时期的情况信息。Java中的日志库有Commons Logging使用方法：第一步，通过`LogFactory`获取`Log`类的实例； 第二步，使用`Log`实例的方法打日志。

Commons Logging定义了6个日志级别，默认级别及以上的日志信息会被打印出来。从严重到普通分别为：

* FATAL 致命错误
* ERROR 错误信息
* WARNING 警告 
* INFO 普通信息（默认级别）
* DEBUG 调试信息
* TRACE 追踪信息

## 8. 日期与时间

* 时刻：所有计算机系统内部都用一个整数表示时刻，这个整数时距离格林尼治时间的毫秒数，与时区无关
* 时区：同一时刻世界各个地区的时间可能是不一样的，具体时间与时区有关，一共有24个时区。

**Java 8 中表示日期和时间的类**

* Instant : 表示时刻，不直接对应年月日
* LocalDateTime：表示与时区无关的日期和时间信息
* LocalDate：只有日期，没有时间
* LocalTime：只有时间，没有日期
* ZonedDateTime：特定时区的日期和时间
* ZoneId / ZoneOffset：表示时区

## 9. 函数式编程

函数式编程是把函数作为基本的运算单元，函数可以做为变量，可以接受函数，还可以返回函数，支持函数式编程的编码风格我们称之为lambda表达式。语法如下：

```java
//通常写法
(参数列表) -> {
    一些处理逻辑
	return 返回值;
}
//简写，适用于函数体内部只有一行return
(参数列表) -> 返回值;
```

### 通过接口传递代码

File类有两个方法list、listFiles它需要传递一个FilenameFilter对象，但实际上需要的并不是这个对象，而是这个对象所包含的方法。这两个对象希望接收一段方法代码作为参数，但是没有办法直接传递这个方法代码本身，只能传递一个接口。通过接口传递行为代码，就需要传递一个实现了该接口的实例对象。我们需要在后续的代码中实现这个接口，并且重写它对应的方法，最简单的方式时使用匿名内部类。

也就是说我们在方法定义时，定义其参数是一个未有实现类的接口，在后续调用中，我们调用该方法就需要传入一个实现该接口的对象，这个对象可能并不存在，我们需要先定义一个实现了该接口的类，然后再创建该对象。而这个方法实际上只使用了该对象的实现了那个接口的方法。之所以这么做是因为某些代码实现逻辑中，一些代码要在调用时才能定义。而这些代码是编写方法的人员不知道的。

Java8就提供了Lambda表达式来传递代码，现在我们可以不用通过接口，直接使用lambda表达式。

### 变量引用

与匿名内部类类似，Lambda表达式也可以访问定义再主题代码外部的变量，但是对于局部变量，它也只能访问final类型的变量。

### 函数式接口

函数式接口也是接口，但是只能有一个抽象方法，之前说的接口都是只有一个抽象方法，都称为函数式接口。之所以强调抽象方法，是因为java8中还允许定义其他方法。Lambda表达式可以赋值给函数式接口。对于函数式接口，都会有一个注解@FunctionInterface，比如

```java
@FunctionInterface
public interface Runnable {
    public abstract void run();
}
// 我们在调用函数式接口时，就可以用Lambda表达式
// 可以发现，函数式接口只有一个抽象方法。我们在使用函数式接口写出Lambda表达式时，Java会自动识别我们所写的实际上就是哪一个抽象方法。抽象方法中的参数就是Lambda表达式的参数。而方法名称则会被省略，Java知道我们调用的究竟是哪一个方法。Lambda表达式之后就开始写函数体。实现抽象方法。传递自身的代码。
Runnable task = () -> System.out.println("hello");
```

这个注解就告诉使用者这是一个函数式接口。不过这个注解并不是必须的，只要一个接口只有一个抽象方法，Java就会认定它可以作为一个函数式接口，将来可以用Lambda表达式来实现。

### 预定义的函数式接口

我们知道，只要一个接口只定义了一个抽象方法。并且加上了@FunctionInterface，那么他就是一个函数式接口，我们在编写某个类的一个方法时，就可以将这个函数式接口作为参数传递。在调用方法时，其中的抽象方法就会以Lambda表达式的形式传递给这个方法进行执行。

Java 8中定义了很多预定义的函数式接口，用于常见类型的代码传递。

| 函数接口              | 方法定义               | 说明                                 |
| --------------------- | ---------------------- | ------------------------------------ |
| `Predicate<T>`        | boolean test(T t)      | 谓词，测试输入是否满足条件           |
| `Function<T, R>`      | R apply(T t)           | 函数转换，输入类型为T，输出类型为R   |
| `Consumer<T>`         | void accept(T t)       | 消费者，输入类型为T                  |
| `Supplier<T>`         | T get()                |                                      |
| `UnaryOperator<T>`    | T apply(T t)           | 函数转换的特例，输入和输出的类型一样 |
| `BiFUnction<T, U, R>` | R apply(T t, U u)      | 函数转换，接受两个参数，输出R        |
| `BinaryOperator<T>`   | T apply(T t, T u)      | 输入和输出都一样                     |
| `BiConsumer<T, U>`    | void accept(T t, U u)  | 消费者，接收两个参数                 |
| `BiPredicate<T, U>`   | boolean test(T t, U u) | 谓词，接受两个参数                   |

上面的函数式接口传递的参数都是对象类型的。对于基本的数据类型，为了避免装箱拆箱，Java 8 提供了一些专门的函数。这些函数式接口被大量使用于Java 8的函数式数据处理Stream类中。

#### Predicate

对于列表，常见的需求是过滤，我们可以借助谓词Predicate写一个通用的过滤方法，对于如何进行过滤，则需要调用者调用filter时使用函数式接口Predicate进行编写（即写Lambda表达式）

```java
public static <E> List<E> filter(List<E> list, Predicate<E> pred){
    List<E> resultList = new ArrayList<>();
    // 这条for语句的作用是，对于传入的列表中的每一个元素，如果在经过pred的测试方法test通过之后，就将这个元素加入到结果列表中。最终筛选出所有的符合test条件的元素。这个test方法具体的逻辑实际上并没有定义，而是要通过调用filter过滤方法时作为参数传入的。
    for(E element:list){
        if(pred.test(e)) resultList.add(e);
    }
    return resultList;
}

// 接下来我们使用这个方法过滤出分数大于90分的同学，那么这个Lambda表达式在判断完当前学生成绩是否大于90分之后，就返回boolean值。这个boolean值就是那个filter方法中if语句执行的结果。然后将所有满足条件的学生塞入到新的列表中返回。
students = filter(students, student -> student.getScore()>90);

```

#### Function

因为Predicate的test方法返回的是布尔值，因此我们可以测试输入是否满足条件，而Function的apply方法会输入一个类型，返回另外一个类型，从而对对象的类型做出转换。

比如我们给定一个学生列表（学生类型），将其转换为姓名列表（字符串类型）

```java
public static <T, R> List<R> map(List<T> list, Function<T, R> mapper){
    // 注意list中元素为T类型，而结果却将其放入了元素类型为R的列表中，说明在mapper的apply方法中发生了类型转换，输入T类型元素把R类型元素返回。至于输入T和输出R之间的关系，则是由调用map这个方法的程序员自己定义。
    List<R> resultList = new ArrayList<>(list.size());
    for(T e:list){
        resultList.add(mapper.apply(e));
    }
}

List<String> names = map(students, student -> student.getName());
```

#### Consumer

之前的例子中我们都新创建了一个列表，把新创建的列表进行返回，而没有直接修改原有对象，如果我们的目的是直接对原有对象进行修改，不返回其他对象。或者对输入的对象进行”消费“，我们就可以使用Consumer函数式接口

```java
public static <E> void forEach(List<E> list, Consumer<E> consumer){		//我们在调用forEach方法时，实现accept的处理逻辑对list进行处理
	for(E e:list){
		consumer.accept(e);
	}
}
```

### 方法引用

方法引用时Lambda表达式的一种简写方法，由::分割两个部分，前面时类名或者变量名，后面时方法名，方法可以是实例方法，也可以是静态方法，但是含义不同。

```java
// 对于静态方法，这两种写法等价，:::分割的前面的参数是类，后面是静态方法名
Supper<String> s = Student::getCollegeName;
Supper<String> s = () -> Student.getCollegeName();

// 对于实例方法，::分割的前面的参数是该类型的实例
Function<Student, String> f = Student::getName;
Function<Student, String> f = (Student t) -> t.getName();
```

对于实例方法。当函数式接口方法中，第一个参数是对应类型的实例对象时，才可以使用简写形式。

如果方法引用的前一部分是变量名（实际的对象，而不是类名）则相当于直接调用那个对象的方法。

对于构造方法，方法引用的语法是<类名>::new

```java
// BiFUnction<T, U, R>R apply(T t, U u)
BiFunction<String, Double, Student> s =(name, score) -> new Student(name, score);
BiFunction<String, Double, Student> s = Student::new;
```

### 函数的复合

在前面，函数式接口都用作方法的参数，其他部分通过lambda表达式传递具体代码给他，函数式接口和Lambda表达式还可以用作方法的返回值，传递代码给调用者，将这两种方法结合起来，可以构造复合的函数。

在Java 8之前接口中的方法都是抽象方法，没有实现体，但是Java 8允许在接口中定义两类新的方法。静态方法static和默认default方法。

在接口不能定义静态方法之前，相关的静态方法往往是定义在单独的类当中。在Java 8中静态方法就可以直接写在接口当中了。Comparator接口就是定义了多个静态方法。默认方法用关键字default标识。默认方法与抽象方法都是接口的方法。而默认方法有默认的实现，实现类可以改变，也可以不改变，引入默认方法主要是函数式数据处理的需求，是为了便于给接口增加功能。

在没有默认方法之前，接口很难增加功能，因为非官方的代码如果实现了该接口，如果给接口增加一个方法。实现类就必须改写这个方法才能够运行。如果有默认方法，接口的实现类就不需要实现它。

```java
// Comparator接口的的静态方法
public static <T, U extends Comparable<? super U>> Comparator<T> comparing(Function<? super T, ? extends U> keyExtractor) {
    Objects.requireNonNull(keyExtractor);
    return (Comparator<T> & Serializable) (c1, c2) -> keyExtractor.apply(c1).compareTo(keyExtractor.apply(c2));
}
```

这个方法用于构建一个比较器，使用comparator的comparing方法，比较逻辑就可以简化。因为它构建并返回了一个符合Comparator接口的Lambda表达式，这个表达式接受的参数类型可以是File，它使用了传递过来的函数代码将File类中的Name字段提取出来，也就是转换成String进行比较。

将学生列表按照分数倒序排列，高分在前，分数一样的，按照名称排序。

```java
students.sort(Comparator.comparing(Student::getScore)
             .reversed()
             .thenComparing(Student::getName))
```

### 函数式数据处理

针对常见的集合数据处理，Java 引入了新的类库，Stream，接口Stream类似于一个迭代器。Collection接口增加了stream()和parallelStream()方法，一个返回顺序流，一个返回并行流。顺序流就是由一个线程执行操作。而并行流可能有多个线程并行执行。

使用Stream流做数据处理，假设要返回学生列表中成绩90分以上的。

```java
// 这里的t实际上就是列表中的单个元素对象
List<Student> s = students.stream()
    .filter(t -> t.getScore() > 90)
    .collect(Collectors.toList());
```

List是实现了Collection接口的类，拥有stream方法。我们先通过stream()得到一个Stream对象，然后调用stream的filter方法过滤得到了90分以上的，他的返回仍然是一个Stream，为了转换成List调用了collect方法，并且传递了Collectors.toList()这个方法作为参数，表示将结果收集到一个List中。

与传统代码相比，函数式数据处理：

* 没有显式的循环迭代，循环过程都被Stream方法隐藏了
* 提供了声明式的处理函数，封装了功能

实际上在stream流中调用map进行类型转换、filter进行过滤。都不会执行任何实际的操作，他们只是在构建操作的流水线，调用collect才会触发实际的遍历执行，在一次遍历中完成过滤、转换以及收集结果的功能。

像这种不触发实际执行、用于构建流水线、返回stream的操作称为中间操作，而collect这种触发实际执行、返回具体结果的操作被称为终端操作。

#### 中间操作

Stream API中的中间操作有filter map distinct sorted skip limit peek mapToLong mapToInt mapToDouble flatMap等

##### distinct

distinct表示去重操作，返回一个新的Stream，过滤重复的元素，只留下唯一的元素，是否重复是根据Equals方法来比较的。

虽然都是中间操作，但是distinct是由状态的，它需要在处理过程中在内部记录之前出现过的元素，如果已经出现过就是重复元素，就会过滤掉不会传递给流水线中的下一个操作。而filter和map是有状态的，对于流中的每一个元素，他的处理都是独立的，处理后就交给流水线中的下一个操作。

##### sorted

表示对流中的元素进行排序，如果元素实现了Comparable接口，可以直接调用，否则需要自定义比较器。sort操作为了排序，它需要现在内部数组中保存遇见的每一个元素，等到流结尾的时候，再对数组进行排序然后将排序后的元素逐一传递给流水线的下一个操作。

##### skip / limit

skip表示跳过流中的n个元素，如果流中的元素不足n个名，就会返回一个空流。limit限制流的长度。这两个也都是有状态的。

##### peek

主要是支持调试，可以使用该方法观察在流水线中流转的元素

##### mapToLong mapToInt mapToDouble

为了避免装箱和拆箱，这些流是返回基本类型的特定的流。

##### flatMap

他接受一个函数mapper，这个mapper中要编写对流中单个元素进行分割的逻辑，分割后的单个元素变成了多个元素，会成为流。然后把新生成的流中的每一个元素传递给下一个操作。我们会发现，经过flatMap处理的元素个数会比之前成倍的增加。

也就是说flatMap对于流中的单个元素完成了1-n的映射

#### 终端操作

终端操作触发执行，返回一个具体的值，除了collect、还有max、min、count、allMatch、noneMatch、findFirst、findAny、forEach、toArray、reduce

##### max min

他们返回流中的最大值或者最小值。返回类型是`Optional<T>`这个类是一个泛型容器类，内部只有一个类型为T的单一变量value，可能为null，也可能不为null，这个类用于准确的传递程序的语义，它清楚地表明。其代表的值可能为空。程序员应该适当的处理

Optional中定义了一些方法

```java
public boolean isPresent();
public T get();
public T orElse(T other);
```

##### count

返回流中元素的个数

##### allMatch anyMatch noneMatch

接受一个谓词Predicate返回boolean值，用于判定流中的元素是否满足一定的条件。

allMatch只有在流中所有的元素都满足条件的情况下才返回true，anyMatch只要有一个元素满足条件就返回true。noneMatch只有流中所有元素都不满足才返回true

##### findFirst findAny

返回Optional，如果流为空就返回Optional.empty()，findFirst返回第一个元素，而findAny返回任意元素

##### foreach

接受一个Consumer对于流中每一个元素，传递元素给Consumer，在并行流中foreach不保证处理顺序，但是forEachOrdered会保证

##### toArray

将流转会为数组，不带参数的返回数组类型是Object[]，如果希望得到正确的数据类型，需要传递一个类型为IntFunction的generator。它接受的参数是流元素的个数。

##### reduce

它是更通用的函数，将流中的元素归约为一个值。

```java
Optional<T> reduce(BinaryOperator<T> accumulator);
// 等同于
boolean foundAny = false;
T result = null;
for (T element : this stream){
    if(!foundAny){
        foundAny = true;
        result = element;
    }else result = accumulator.apply(result, element);
}
return foundAny ? Optional.of(result) : Optional.empty();
```

#### 构建流

可以通过Collection接口的stream方法获取流，也可以通过Arrays的stream方法获取。`public static <T> stream<T> stream(T[] array)`，Stream也有一些静态方法可以构建流。

```java
static<T> Stream<T> of(T t);//只含一个元素的流
static<T> Stream<T> of(T... values);//包含多个元素的流
static<T> Stream<T> generate(Supplier<T> s);
// 比如输出10个随机数，代码可以为
Stream.generate(()->Math.random())
    .limit(10).forEach(System.out::println);
```

#### 函数式数据处理思维

流定义了很多数据处理的基本函数，对于一个具体的数据处理问题，解决思路是组合利用这些基本函数，实现期望的功能。

#### 理解collect

流中有一个collect方法可以将流重新转化成数组元素。

```java
<R, A> R collect(Collector<? super T, A, R> collector)
```

这个方法接受一个collector作为参数

```java
public interface Collector<T, A, R>{
    Supplier<A> supplier();
    ...
}
```

在顺序流中，collect方法首先调用工厂方法创建一个存放处理状态的容器，然后对流中的每一个元素，调用累加器。最后调用finisher对累计状态进行可能的调整。

```java
public static <T> Collector<T, ?, List<T>> toList(){
    return new CollectorImpl<>((Supplier<List<T>>) ArrayList::new, List::add, (left, right) -> { left.addAll(right); return left;}, CH_ID)
} 
```

主要就是定义了两个构造方法，接受函数式参数并赋值给内部变量。与toList类似的容器收集器还有toSet、toCollection、toMap。

除了将元素流收集到容器中，也可以收集字符串。这种操作有joining收集器。

分组操作收集器groupingBy类似于数据库查询语言中的groupBy语句，及那个元素流中的每一个元素分到一个组，可以针对分组在进行收集和处理。

## 10. 反射

在编程的时候，我们清楚我们要操作数据的数据类型，比如我们会根据类型来创建对象，根据类型定义变量，数据类型可能是基本类型、类、接口或数组，将特定类型的对象传递给方法，根据类型访问对象的属性，调用对象的方法。

反射是在运行时动态的获取类型的信息，比如接口、成员、方法、构造方法这些类的信息，根据运行时动态获取到的信息创建对象，访问修改成员，调用方法。

针对反射特性，Java中有一个名字为Class的类，我们可以通过该类获取对象信息。每个已加载的类在内存中都有一份类信息，每个对象都有只想它所属类信息的引用。所有类的根父类Object有一个方法getClass可以获取对象的Class对象。Class是一个泛型类，有一个类型参数，返回的时`Class<?>`。获取Class对象不一定需要实例对象，我们可以使用`<类名>.class`获取Class对象。接口也有Class对象，我们可以通过这种方式获取接口的信息，基本类型、void也都有对应的class信息。对于数组，每种类型都有对应的数组类型的Class对象，每个维度都有一个。枚举类型也有对应的Class。

Class还有一个静态方法forName可以直接根据类名加载Class，有了Class对象之后，我们就可以了解到关于类型的很多信息，并且基于这些信息采取行动。

| Class信息          | 说明           |
| ------------------ | -------------- |
| getName()          | 获取名字       |
| getSimpleName()    | 不带包信息     |
| getCanonicalName() | 获取友好的名字 |
| getPackage()       | 获取包信息     |

类中定义的静态和实例变量被称为字段，我们如果想要获取这些信息可以通过Field类表示，在Java.util.reflect下，我们通过Class的实例变量可以有如下的方式获取字段信息

| 字段                          | 说明                                                     |
| ----------------------------- | -------------------------------------------------------- |
| getFields()                   | 返回所有公共字段，包括父类                               |
| getDeclareFields()            | 返回该类声明的所有字段，包括非公有字段，但不包括父类字段 |
| getField(String name)         | 返回指定名称的公共字段                                   |
| getDeclaredField(String name) |                                                          |

针对Filed字段也有很多信息可以获取

| Field字段                                 | 说明                   |
| ----------------------------------------- | ---------------------- |
| getName()                                 |                        |
| isAccessible()                            |                        |
| setAccessible()                           | 设置访问权限           |
| get(Object obj)                           | 获取指定对象中该字段值 |
| set(Object obj, Object value)             | 设置指定对象中该字段值 |
| getModifiers()                            | 返回字段修饰符         |
| getType()                                 | 返回字段的类型         |
| `getAnnotation(Class<T> annotationClass)` | 获取字段的注解信息     |

Class的实例变量获取方法信息，会返回一个Method类，里面存放了与方法有关的信息。

| 获取方法                                             | 说明                                             |
| ---------------------------------------------------- | ------------------------------------------------ |
| getMethods()                                         | 返回所有公共方法，包括其父类的                   |
| getDeclaredMethods()                                 | 返回本类声明的所有方法，包括非公共的             |
| `getMethod(String name, Class<?> ...parameterTypes)` | 返回本类或者父类中指定名称或者参数类型的公共方法 |
| getDeclaredMethod()                                  | 返回本类中声明的指定名称或类型的方法             |

方法类中可以调用的方法

| 方法                                      | 说明                             |
| ----------------------------------------- | -------------------------------- |
| getName()                                 | 获取方法的名称                   |
| setAccessible(boolean flag)               | 允许调用非公有的方法             |
| Object invoke(Object obj, Object ...args) | 在指定对象上调用对象的相应的方法 |

如果Method是静态方法，那么对象参数可以为null。当然如果没有参数，args也可以为空。

Method类中还有很多的方法，可以获得方法的各种信息

| 方法                                     | 说明                     |
| ---------------------------------------- | ------------------------ |
| int getModifiers()                       | 获取方法的修饰符         |
| `Class<?>[ ] getParameterTypes()`        | 获取方法的参数类型       |
| `Class<?>getReturnTypes()`               | 获取方法的返回值         |
| `Class<?>[] getExceptionTypes()`         | 获取方法声明抛出的异常   |
| getDeclaredAnnotations()                 | 获取注解信息             |
| Annotation [][] getParamterAnnotations() | 获取方法参数上的注解信息 |
|                                          |                          |

创建对象和构造方法

可以通过Class实例对象的newInstance()方法创建对象。他会第哦啊用类的默认构造方法。Class类中获取构造方法的方法有以下几种

| 方法                                         | 说明                       |
| -------------------------------------------- | -------------------------- |
| `Constructor<?>[] getConstructors()`         | 获取所有公有的构造方法     |
| getDeclaredConstructors()                    | 获取所有的构造方法         |
| `getConstructor(Class<?>... parameterTypes)` | 获取指定参数类型的构造方法 |
|                                              |                            |

Class类通过这些方法获取的Constructor类表示构造方法，我们可以通过它创建对象。他有一个newInstance()方法创建对象。除了创建对象，他还有其他的方法，可以获取关于构造方法的很多信息。总体来说，也就是获取参数类型、获取构造方法的修饰符，获取构造方法的注解信息，获取构造方法中参数上的注解信息。

| 方法                | 说明 |
| ------------------- | ---- |
| getParameterTypes() |      |
|                     |      |
|                     |      |
|                     |      |

运行时动态创建的数据类型的检查和转换

Class实例对象有这样一个方法isInstance()，可以判断一个对象是否是否是某一类或者某一类的子类。如果想要动态的转换类型，可以是使用cast(Object obj)转换到

Class类的实例对象获取类的声明信息

比如说获取修饰符、获取父类、实现的接口、注解等。

| 方法 | 说明 |
| ---- | ---- |
|      |      |

关于内部类也有一些专门的方法用于获取内部类的信息，可以获取的信息有：获取所有公共的内部类和接口，包括从父类继承得到的。获取自己声明的所有内部类和接口包括受保护的、私有的。如果当前是内部类，可以获得声明该类的最外部Class对象。获取直接包含该类的类，返回包含它的方法。

类的加载

Class类有两个静态方法，可以在不创建Class类的实例对象的情况下根据类名加载一个类。

```java
public static Class<?> forName(String className. boolean initialize, ClassLoader loader)
```

ClassLoader是类加载器，Initialize表示类加载后，是否执行类的初始化代码

对于数组类型，有一个专门的方法getComponentType()可以获取它的元素类型，在java.lang.reflect包中有一个针对数组的专门的类Array可以通过类名获取

| 方法                                                    | 说明                             |
| ------------------------------------------------------- | -------------------------------- |
| `Array.newInstance(Class<?> componentType, int length)` | 创建指定长度、指定元素类型的数组 |
| Array.get(Object array,int index)                       | 获取数组指定索引位置index处的值  |
| Array.set(Object array, int index, Object value)        | 修改数组指定索引位置处的值       |
| Array.getLength(Object array)                           | 返回数组的长度                   |
|                                                         |                                  |

在Array类中，数组使用Object来表示。

对于枚举类型，也有专门的方法可以获取所有的枚举常量



## 11. 注解

### 1、注解的介绍

注解是放在Java源码的类、方法、字段、参数前的一种特殊的注释。注解是用作标注的元数据，会被编译器直接忽略。如何使用注解则由应用程序本身决定。Java的注解可分为三类。

* 由编译器使用的注解。这类注解不会被编译进class文件，在编译之后就被扔掉了。如：
  * @Override：让编译器检查是否正确实现了覆写
  * @SuppressWarnings：告诉编译器忽略此处产生的代码警告
* 由工具处理class文件使用的注解。如有些工具在加载class时对class做动态的修改实现一些功能。
* 程序运行期能够读取到的注解。加载之后一直存在于JVM中，是最常用的注解。

### 2、元注解

有些注解可以修饰其他注解，这些注解叫做元注解。

#### @Target

是最常用的注解，定义注解能被应用在源码的哪些位置，语法如下：

* 应用于类或者接口：`ElementType.TYPE`
* 应用于字段：`ElementType.FIELD`
* 应用于方法：`ElementType.METHOD`
* 应用于构造方法：`ElementType.CONSTRUCTOR`
* 应用于方法参数：	`ElementType.PARAMETER`

定义注解可以用在方法上，需要添加注解。`@Target(ElementType.METHOD)`

定义注解可以用在方法和字段上，注解的参数需要是一个{}数组。`@Target({ElementType.METHOD, lementType.FIELD})`

#### @Retention

Retention n.：保持、保留的意思。定义了注解的声明周期，如果不存在该注解，则默认生命周期到class。语法如下：

* 仅编译期：`RetentionPolicy.SOURCE`
* 仅在class文件中：`RetentionPolicy.CLASS`
* 运行期：`RetentionPolicy.RUNTIME`

#### @Repeatable

定义注解是否可以重复，加上后注解可以重复添加。

#### @Inherited

定义子类是否可以继承父类定义的注解，仅对能应用于类的注解生效。加上后对于父类使用了注解，子类默认会继承该注解。

### 3、定义注解

定义一个注解，还可以定义配置参数。这些参数在使用注解的时候传入。注解的配置参数可以有默认值，没有传入配置参数的时候使用默认值。大部分注解会有一个名为value的配置参数，对这个参数赋值，可以只写常量。参数必须是常量。可以包括：所有基本类型、字符串、枚举类型。下面是定义一个注解的格式，Java使用@interface 来定义一个注解。

```java
public @interface Report{
	int type() default 0;
    String level() default "info";
    String value() default "";
}
```

### 4、读取注解

能存在于运行期的注解经常用到，是我们需要关注的。因此在定义注解的时候需要加上`@Retention(RetentionPolicy.RUNTIME)`，接下来说明如何读取运行期的注解。

注解也是一种class类，读取注解需要使用反射。

#### 判断注解是否存在
即判断注解是否存在于类、字段、方法、构造器中（CLASS FIELD METHOD CONSTRUCTOR）

* `Class.isAnnotationPresent(ClassName.class)`
* `Field.isAnnotationPresent(ClassName.class)`
* `Method.isAnnotationPresent(ClassName.class)`
* `Constructor.isAnnotationPresent(ClassName.class)`

例如判断注解@Report是否存在与Person类：`Person.class.isAnnotationPresent(Report.class)`

#### 使用反射API读取注解

* `Class.getAnnotation(ClassName.class)`
* `Field.getAnnotation(ClassName.class)`
* `Method.getAnnotation(ClassName.class)`
* `Constructor.getAnnotation(ClassName.class)`

### 5、处理注解

注解如何使用，完全由程序自己决定。例如Junit会自动运行所有标记为@Test的方法

以一个注解@Range定义一个`String`字段的规则：字段长度满足`@Range`的参数。处理方法如下

1. 首先通过反射获取实例对象的所有字段
2. 获取该字段定义的范围，如果范围存在，则获取定义注解的字段的值，判断值是否满足注解的条件
3. 如果不满足条件，抛出异常

那么这样一来，我们就自己定义了一个方法，获取字段的注解，并判断实例对象是否满足该注解的条件。检查逻辑是我们自己编写的，JVM并不会添加任何逻辑，因此检查方法好坏由我们自己决定。

## 12. 泛型

### 1、泛型标记符

实际上Java中的泛型就是把参数的类型也当做是一个特殊的参数，我们叫做**类型参数**，参数的类型可以由不同的标记符标记。

* E element 元素，在集合中使用
* T type Java类
* K key 键
* V value 值
* N number 数值
* ? 不确定

### 2、泛型方法

泛型方法在调用的时候可以接收不同类型的参数，根据传递给泛型方法的参数类型，编译器会处理对方法的调用，定义泛型方法的规则如下：

* 泛型方法在声明的时候，也要声明**类型参数**，在方法的返回类型前，使用尖括号分割。
* 类型参数的声明可以由一个或者多个类型参数，之间用逗号隔开。
* 类型参数不仅可以用在传入的参数上，也可以用作返回的类型上。
* 如果希望限制参数的类型种类，既不是某个特定的类型，也不能传递任意的类型，而是希望参数的类型是在某个特定的区间内，我们可以使用extends关键字，后面跟上类型的范围。

```java
public static <T> void print(T data){}  					//泛型作为方法参数类型
public static T print(String data){}						//泛型作为规定返回值类型
public static <T extends Comparable<T>> void print(T data){}//规定只接受comparable类及其子类作为方法的类型
```

### 3、泛型类

泛型类的声明规则与泛型方法类似，但是类型参数是声明在类名的后面，用于规定类内的属性的类型。



## 13. 网络编程

### 1、socket

socket是在网络层和应用层之间的一个数据结构，负责管理着网络层和应用层中需要关心的数据。一个应用程序通过socket来建立一个远程连接。socket内部通过TCP/IP协议把数据传输到网络。因为仅仅通过IP地址来通信是不够的，同一台不同应用程序进程之间，在只有IP地址的情况下，操作系统不知道究竟应该发给哪一个应用程序。所以在网络层之上添加了socket接口，每个应用程序有对应的socket接口。数据报通过socket接口来正确的发送到对应的应用程序。

socket由IP地址和端口号组成，端口号有操作系统分配，在0~65535之间。使用socket进行网络通信，就是两个进程之间的通信，其中一个进程需要充当服务端，监听指定的端口。另一个充当客户端，主动连接服务器IP地址和指定端口。连接成功后，服务端和客户端就建立了TCP连接。

### 2、TCP编程

首先，上文说到socket是两个进程，服务器端和客户端之间的通信，那么两者的任务是不一样的。

* 对于服务器端，需要实现对指定IP和端口的监听。Java标准库实现了这个功能，我们只需要传入想要它监听的端口，即可开始监听，之后不断的监听，发现有客户端传来的链接，则为其分配一个线程来处理。具体代码实现如下。

```java
ServerSocket ss=new ServerSocket(8080);
while(true){
    Socket newSocket=ss.accept();	//客户端传来的socket连接
    Thread t=new Hander(newSocket); //新开一个线程处理该连接
}
/************Hander的handle方法处理两个进程之间的数据传输**************/
private void handle(InputStream input,OutputStream output) throw IOException{
    
}
```

* 对于客户端，通过socket连接指定的服务器和端口，连接建立后，进行数据传输操作。传输完毕关闭连接

```java
Socket s=new Socket("localhost",8080);
//数据传输操作
s.close();
```

### 3、UDP编程

* 对于UDP服务器和客户端之间的通信，服务器端Java提供了DatagramSocket来实现监听指定端口的信息。我们传入想监听的端口，之后开始监听。通过DatagramPacket类，里面存放了与客户端交互的逻辑，使用它的实例接收UDP数据报，并向客户端回复数据。

```java
DatagramSocket ds=new DatagramSocket(8080);
while(true){
    DatagramPacket packet = new DatagramPacket(参数);
	ds.receive(packet);		//从客户端收取一个UDP数据包，放在packet中
    packet.setData(response);//回复客户端一条数据（response）
    ds.send(packet);
}
```

* 客户端使用UDP时，只需要直接向服务端发送数据包，然后接收返回的数据包。

### 4、HTTP编程

HTTP是基于TCP协议之上的超文本传输协议，是需要进行请求-相应的协议。目的是为了传输数据。

浏览器希望访问某个网站时，浏览器和网站服务器首先要建立TCP连接，然后浏览器向服务器发出**HTTP请求**，服务器收到后返回**HTTP响应**，里面包含了网页内容。

#### 1）HTTP请求

HTTP请求的格式是固定的，由HTTP Header和HTTP Body两部分构成。

HTTP Header：第一行总是 `请求方法 路径 HTTP协议`，后续每一行都是 `Header : Value 格式`。例如：

```
GET / HTTP/1.1
Host : www.sina.com.cn
User-Agent : Mozilla/5 MSIE
Accept : */*
Accept-lauguage : zh-CN,EN
```

**GET POST 请求的区别**

* 如果是GET请求，那么请求只有HTTP Header，没有HTTP Body。如果是POST 请求，带有HTTP Header和HTTP Body，两者之间用一个空行分割。
* `POST`请求通常要设置`Content-Type`表示Body的类型，`Content-Length`表示Body的长度，这样服务器就可以根据请求的Header和Body做出正确的响应。
* `GET`请求的参数必须附加在URL上，并以URLEncode方式编码，因为URL的长度限制，`GET`请求的参数不能太多。而`POST`请求的参数必须放到Body中。参数就没有长度限制，`POST`请求的参数不一定是URL编码，可以按任意格式编码，只需要在`Content-Type`中正确设置。

**HTTP请求头信息**

| 属性        | 描述                         | 举例          |
| ----------- | ---------------------------- | ------------- |
| method      | 请求方法                     | GET POPST     |
| requestURI  | 请求路径                     | /hello /login |
| queryString | 请求参数，通常为GET方法所用  |               |
| parameter   | 请求参数，通常为Post方法所用 |               |
| contentType | 请求Body的类型               |               |
| contentPath |                              |               |
| cookies     |                              |               |
|             |                              |               |
|             |                              |               |



#### 2）HTTP响应

HTTP响应也是由Header和Body两部分组成。

HTTP Header：第一行总是`HTTP版本 响应代码 响应说明`，后续每一行都是 `Header : Value 格式`。HTTP Body通常是一个HTML文档，或者其他信息。

#### 3）HTTP 客户端

HTTP 客户端编程的过程如下，发送一个HTTP请求，接收服务器响应然后获得响应内容。

```java
URL url=new URL(网站名);
HttpURLConnection conn = (HttpURLConnection)url.openConnection();
conn.setXXX();			//设置请求参数
conn.connect();			//连接并发送请求
if(conn.getResponseCode()!=200){
    throw new RuntimeException();
}
Map<String,List<String>> map = conn.getHeaderFields();		//获取响应头
InputStream input = conn.getInputStream();				   //获取响应内容
```

#### 4）HTTP 服务端

HTTP 服务端本质上是一个TCP服务器，由之前所创建的服务器代码，在其处理不同进程数据传输的Hander的handle方法中添加如下逻辑：读取http请求，处理请求，并返回响应结果。需要考虑的事情有：

* 识别正确和错误的HTTP请求；
* 识别正确和错误的HTTP头；
* 复用TCP连接；
* 复用线程；
* IO异常处理；

## 14. Web开发

### 1、Servlet介绍

实际上要编写一个完善的http服务器需要耗费大量的时间，考虑许多东西。所以Java就提供了运行在Web服务器的程序叫做Servlet，一些底层的任务比如说识别错误正确的请求，解析http协议等交给它去做。我们使用Servlet提供的API来处理HTTP请求。

Servlet主要执行以下任务：

* 读取客户端发来的显式数据，主要是网页上的HTML表单产生的数据。
* 读取客户端发来的隐式请求数据，包括Cookies、媒体类型、浏览器能够理解的压缩格式等。
* 处理数据并生成结果。解析客户端发来的数据。
* 发送显式的数据到客户端，这些数据格式可以是多种多样的，包括文本文件，二进制文件等。
* 发送隐式的HTTP响应到客户端。比如说HTTP请求头的内容，设置Cookies、缓存参数、设置返回文档类型。

### 2、Servlet生命周期

Servlet生命周期是Servlet对象从创建到毁灭的整个过程。

* Servlet 初始化后调用init()方法
* Servlet 调用 service()方法来处理客户端请求
* Servlet 销毁前调用 destroy()方法
* Servlet 由JVM的垃圾回收器回收它所占用的内存

#### 1）init()

一个Servlet对象创建于用户第一次调用该Servlet对应的URL时，只调用一次，后续每次用户请求时都不再调用。用户每次调用这个Servlet，都会创建一个实例对象，也就是说每一个用户请求都会产生一个新线程。init()方法会简单的创建或者加载一些数据，这些数据将用于Servlet整个生命周期。

#### 2）service()

service()方法是执行实际任务的主要方法，容纳Servlet对象的那个容器（通产是Web服务器）会调用service()方法处理客户端发来的请求，然后将格式化的响应发给客户端。service()方法会检查HTTP请求类型，判断是GET POST PUT DELETE。然后调用doGet(), doPost() doPut() doDelete() 方法。

我们自己编写的Servlet需要继承`HttpServlet`，用户最常用的请求类型是Get Post，因此我们覆写`doGet() doPost()`方法。这两个方法传入了`HttpServletRequest`和`HttpServletResponse`两个对象，分别代表HTTP请求和响应。这两个对象已经封装好了请求和响应。我们需要简单的获取请求参数，设置正确的响应类型，然后在写入响应即可。

**`HttpServletRequest`**

浏览器发来的HTTP请求都封装到了`HttpServletRequest`这个对象中，我们通过`HttpServletRequest`提供的方法可以拿到所有的HTTP请求信息。`HttpServletRequest`从`ServletRequest`继承而来。通过`getXXX()`方法获取。

**`HttpServletResponse`**

服务器发送的HTTP响应需要封装到`HttpServletResponse`这个对象中，那么就需要设置响应头，通过`setXXX()`方法设置。

#### 3）destroy()

destroy()方法只会调用一次，可以在这里关闭数据库连接、停止后台线程、执行一些清理活动。

####　4）总结

实际上我们在web应用程序中并没有创建Servlet对象，也没有自己确定Servlet对象在何时会调用，没有实现服务器端和客户端之间的通信如TCP连接，解析HTTP协议的具体细节。因此对于web应用程序，我们必须先需要一个服务器来替我们做这些工作，再由服务器加载我们编写的Servlet，这样就可以让Servlet处理浏览器发送的请求。我们就需要找一个支持Servlet API的Web服务器。

Tomcat是一个WEB服务器，也是由Java编写的，启动Tomcat服务器实际上启动了Java虚拟机，执行了Tomcat的main()方法，然后Tomcat负责加载我们自己写的程序，创建一个Servlet实例，以多线程的模式来处理HTTP请求。

那么Tomcat服务器就是一个Servlet的容器。在容器中的Servlet有以下的特点：

* 无法在代码中直接通过new创建Servlet实例，必须由Servlet容器自动创建Servlet实例
* Servlet容器只会给每个Servlet类创建唯一实例
* Servlet会多线程的执行doGet() doPost()方法

### 3、Servlet开发

#### 1）Dispatcher

一个web应用程序由一个或者多个Servlet组成的，每个Servlet通过注解说明自己能处理的URL路径。对于用户不同的请求路径要交给不同的Servlet处理。那么客户端发来的HTTP请求总是由WEB服务器先接收，然后根据Servlet配置的映射路径。不同的路径转发给不同的Servlet处理。那么就需要一个中间商来处理请求交个哪一个Servlet处理。这个中间商所实现的功能称为分发（Dispatch），中间商我们称为分发器（Dispatcher）。

分发器收到请求，判断路径，交给不同的Servlet，代码实现可以如下

```java
//收到一个浏览器发来的路径 String path;
if(path.equals("hello")){
	dispatchTo(helloServlet);
}else if(path.equals("login")){
	dispathTo(loginServlet);
}else{
    dispatchTo(indexServlet);
}
```

####　2）Redirect

重定向指的是当浏览器请求一个URI时，服务器返回一个 重定向指令，告诉浏览器地址已经变了，需要使用新的URI再次重新发送请求。

比如说我们已经编写了一个能处理路径为`/hello`的Servlet，如果收到的路径是`/hi`，我们希望让浏览器看到路径为`/hello`的Servlet，那么再编写一个Servlet命名为`RedirectServlet`，在这个Servlet内部实现重定向到`/hello`。

如果浏览器发送`GET /hi`请求，`RedirectServlet`将处理此请求。由于`RedirectServlet`在内部又发送了重定向响应。浏览器会根据服务器发回的指示发送一个新的`GET /hello`请求。整个过程浏览器发送了两次HTTP请求。

重定向有两种：一种是302响应，称为临时重定向。一种是301响应，称为永久重定向。对于永久重定向，浏览器会缓存`/hi`到`/hello`这个重定向的关联，下次请求`/hi`的时候，浏览器就直接发送`/hello`请求了。

重定向的目的是当WEB应用升级后，如果请求路径发生了变化，可以将原来的路径重定向到新的路径，避免浏览器找不到在原路径上的资源。

#### 3）Forward

Forward是指内部转发。当一个Servlet处理请求的时候，它可以决定自己不继续处理，而是转发给另一个Servlet处理。对于浏览器来说，它只发出了一个HTTP请求。浏览器并不知道服务器在其内部做了一次转发。

#### 4）Session

对于要注册登录的应用，需要跟踪用户身份，服务器可以向浏览器分配一个唯一的ID，并用Cookies的形式发送到浏览器，浏览器在后续访问的时候带上这个Cookies，服务器就可以识别用户身份。基于唯一ID识别用户身份的机制叫做Session (n.意为一段时间)。用户第一次访问服务器会自动获得一个Session ID，如果用户在一段时间内没有访问这个服务器，那么Session就会自动失效。下次访问服务器会分配一个新的Session ID，将该用户看作是一个新用户。识别用户的名为Session机制是通过Cookies来实现的。

以用户登录为例，`HttpServletRequest`这个对象里面封装了用户请求信息，同时也提供了生成session ID的方法。登录时判断用户名和密码，如果正确的话，对这个请求获取一个session，并将用户名称放入这个session中。之后在其他的servlet中，我们可以从`HttpServletRequest`（封装了HTTP请求和Session）对象中获取到session。识别用户身份，进而继续处理用户的请求。用户登出的话，就是从`HttpSession`中移除该用户的信息。

```java
HttpSession session = request.getSession();
session.setAttribute("user",userName);
```

#### 5）Cookies

是服务器识别用户身份，跟踪用会话的一串字符。服务器可以设置一个Cookies，发送给浏览器。浏览器下次就可以带着这个Cookies对服务器请求。服务器就可以识别用户身份。

#### 6）Filter

在一个复杂的应用程序中，有多个Servlet来处理不同的URI。有些功能的请求需要用户通过登录后才给放行，否则我们需要直接跳转到登录页面。那么这个判断登录的逻辑需要在这些Servlet中都写一遍。为了实现代码复用，我们把这些相同的功能从各个Servlet中抽离出来，在HTTP请求到达某些Servlet之前，先被一个中间商处理，然后在交给对应的Servlet。注意到这个分发器是不同的，这个中间商只对某些用户请求起作用，起到了对用户请求的预处理作用。因此我们把它叫做过滤器（Filter）。

对于那些需要用户登录才能操作的功能，我们把它放在更下一级的目录，对于这些URI的请求，都会先经过过滤器，然后才会分发到对应的Servlet。

多个过滤器会组成一个从前往后的链条，对于每个到达的请求会被链条上的过滤器依次处理。如果中间的某个过滤器内部在处理请求的时候，发现这个请求不符合预订的规则，调用了重定向，那么后续的过滤器将没有机会在处理该请求了。

#### 7）Listener

## 15. 动态代理

动态代理在运行时动态的创建一个类，实现一个或者多个接口，可以在不修改原有类的基础上动态的为通过该类的对象添加方法，修改行为。

动态代理也是实现面向切面编程的基础。

### 1、静态代理

代理能够节省成本比较高的实际对象的创建开销，按需延迟加载，创建代理的时候并不真正实际创建对象，只是保存实际对象的地址，在需要的时候在加载或者创建。

代理能执行权限检查，然后再调用实际对象。

屏蔽网络差异和复杂性，代理在本地，但是实际对象在其他服务器上。

代理和实际对象一般有相同的接口，代理对象内部有一个成员变量，指向实际的对象，在构造方法中被初始化，对于实际对象对应方法的调用，他会转发给实际对象，但是在调用这个方法前后会进行一些逻辑判断，输出一些调试信息等。

有两种设计模式，适配器和装饰器，他们与代理模式邮电类似，背后都有一个实际对象，都是通过组合的方式指向了该对象，但是适配器时提供了一个不一样的新接口，装饰器是对原接口起到了装饰的作用，可能是增加了新接口、修改了原有的行为等，但是代理一般不改变接口。

静态代理创建了一个代理类，代理我们对源对象的访问，这个代码在写程序的时候是固定的，因此称为静态代理。

### 2、动态代理

在动态代理中代理类是自动生成的。我们不需要为代理单独编写代码。

在动态代理中，代理对象的创建方式改变了，它使用了java.lang.reflect.Proxy类的静态方法newProxyInstance来创建代理对象，他有三个参数

* ClassLoader：类加载器
* Class<?>[] interfaces：表示代理类要实现的接口列表只能是接口
* InvocationHanddler：定义了方法invoke，对代理接口所有方法的调用会转给该方法。

这个方法的返回值类型为Object，可以强制转换为interfaces数组中的某个接口的类型。而InvocationHanddler有一个实现类，SimpleInvocationHandler他的构造方法接收一个参数表示被代理的对象，invoke方法会处理所有接口的调用。invoke方法有三个参数

* proxy 表示代理对象本身
* method 表示正在被调用的方法
* args 表示方法的参数

在invoke方法中，我们传递了实际对象，达到了调用实际对象对应方法的目的。


### 原理


```java
Class<?> proxyCls = Proxy.getProxyClass(IService.class.getClassLoader(), 
                    new Class<?>[] {IService.class});
Constructor<?> ctor = proxyCls.getConstructor(new Class<?>[] {
    InvocationHandler.class
});
InvocationHandler handler = new SimpleInvocationHandler(realService);
IService proxyService = (IService) ctor.newInstance(handler);
```

1. 我们通过Proxy.getProxyClass创建代理类定义
2. 获取代理类的构造方法，需要一个这种类型的参数
3. 创建该对象，进而创建代理类对象

代理类定义本身与被代理的对象没有关系，与InvocationHandler的具体实现也没有关系，主要与接口数组有关，给定这个接口数组，它动态创建每个接口的实现代码，实现就是转发给InvocationHandler，与被代理对象的关系对他这个类的调用有InvocationHandler的实现管理。

使用动态代理，可以编写通用的代理逻辑，用于各种类型的被代理对象，而不需要为每个被代理类型都创建一个静态代理类。

Java原生的动态代理只能为接口创建，返回的代理对象也只能转换到某个接口类型。而第三方库为我们提供了非接口定义的方法代理的实现。

```java
// 代理类
class SimpleInterceptor implements MethodInterceptor{
    @Override
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throw Throwable{
        Object result = proxy.invokeSuper(object, args);
        return result;
    }
}

//获取代理对象的方法
private static <T> T getProxy(Class<T> cls){
    Enhancer enhancer = new Enhancer();
    enhancer.setSuperclass(cls);
    enhancer.setCallback(new SimpleInterceptor());
    return (T) enhancer.create();
}
```

getProxy方法生成一个代理对象，然后将代理对象转换称被代理的类型，Enhancer类是cglib中的一个类，调用他的setSuperclass设置被代理的类，setCallback方法设置被代理类的公有的非最终方法被调用时处理的类。

Java原生代理的是对象，需要现有一个实际的对象，使用自定义的类引用该对象，然后创建一个代理类和代理对象。

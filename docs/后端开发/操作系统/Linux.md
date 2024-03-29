# Linux

## 一、Linux目录结构

| 目录名称    | 英文释义              | 说明                                                         |
| ----------- | --------------------- | ------------------------------------------------------------ |
| /bin        | binaries              | 二进制文件的缩写，存放这最经常使用的命令                     |
| /boot       | 计算机启动            | 存放启动Linux时使用的一些核心文件，包括一些连接文件和镜像文件 |
| /dev        | device                | 存放的是Linux的外部设备，在Linux中访问设备和访问文件的方式是相同的 |
| /etc        | etcetera              | 这个目录存放所有系统管理需要的配置文件和子目录               |
| /home       |                       | 用户而主目录，每一个人都有一个自己的目录，是由用户名命名的   |
| /lib        | library               | 存放这系统最基本的动态链接共享库                             |
| /lost+found |                       | 系统非法关机时会存放一些文件                                 |
| /media      |                       | 系统会自动识别一些设备，当识别到之后会把识别的设备挂载到此目录下 |
| /mnt        |                       | 为了临时挂载别的文件系统使用的                               |
| /opt        | optional              | 可选的，给主机额外安装软件所放的目录                         |
| /proc       | processes             | 进程的缩写，是一种虚拟的文件系统，存储的是当前内核运行态的一系列特殊文件，这个目录是一个虚拟的目录，是系统内的映射。我们可以通过访问这个目录来获取系统信息。内容实际上是存放在内存里 |
| /root       |                       | 系统管理员的目录                                             |
| /sbin       | superUser Binaries    | 是超级用户二进制文件的缩写，存放系统管理员使用的系统管理程序 |
| /selinux    | security linux        | selinux是一个安全机制，类似于windows的防火墙，这个目录是存放相关文件的 |
| /srv        | serve                 | 存放一些服务启动后需要提取的数据                             |
| /sys        | system                | 安装了新的文件系统sysfs集成了3种文件系统的信息。针对进程信息的、针对设备的、针对伪终端的 |
| /tmp        | temporary             | 是用来存放一些临时文件的                                     |
| /usr        | unix shared resources | unix共享资源的缩写，用户的很多应用程序和文件都放在这个目录下 |
| /usr/bin    | binaries              | 系统用户使用的应用程序                                       |
| /usr/sbin   | superUser binaries    | 超级用户使用的高级管理程序和系统守护程序                     |
| /usr/src    | source code           | 内核源代码存放的目录                                         |
| /var        | variable              | 经常被修改的目录放在这个文件夹下，包括各种日志文件           |
| /run        |                       | 存放系统启动以来的信息                                       |
|             |                       |                                                              |

## 二、文件目录类相关命令

在Linux中，目录结构为树状结构，最顶级的目录为根目录 / 。对于文件目录分为绝对路径和相对路径

* 绝对路径有根目录写起 `/` 。

* 相对目录不是从根目录写起，`./`表示当前目录， `../`表示上一级目录。

文件目录类相关命令我们把他分为四种，分别是：

* 浏览目录命令：ls	pwd
* 操作目录命令：cd   mkdir   rmdir
* 浏览文件命令：cat  more    less    head   tail
* 操作文件命令：cp   rm        mv      find     grep     tar

### 1、浏览目录命令

#### 1）ls

意为list，显示目录文件。

```shell
ls [-ald] [files | directories]
```

* -a 显示所有文件包括隐藏文件
* -l  详细信息展示
* -d 查看目录的属性

#### 2）pwd

which means print working directory，显示当前所在的文件目录。该命令没有附加选项。

### 2、操作目录命令

#### 1）cd

change directory

```shell
cd [directory]
```

#### 2）mkdir

make directory

```shell
mkdir [new_directory]
```

#### 3）rmdir

remove directory

```shell
rmdir [directory]
```

### 3、浏览文件命令 

#### 1）cat

concatenate and display files to standard output device，连接文件并打印到标准的输出设备上

```shell
cat [-En] [file1 | file2 | file3 | etc...]
```

* -E 在每一行末尾显示$
* -n  为显示行添加行号

#### 2）more

用于分页显示文件内容

```shell
more [fileName]
>>space | f    显示下一页
>>enter        显示下一行
>>q | Q        退出
```

#### 3）less

与more命令类似，用来浏览超过一页的文件，该命令可以利用上下键卷动文件

#### 4）head

显示文件前几行的内容

```shell
head [-n] [fileName]
```

* -n 显示前n行，不指定该参数默认显示前10行

#### 5）tail

显示文件后几行的内容。

* -n  显示后n行，不指定默认显示后10行
* +n 从第n行显示到文件尾
* -F  用于跟踪显示不断增长的文件结尾

### 4、操作文件命令

#### 1）cp

copy file from one place to another place

```shell
cp [-piru] [source_file_path] [destination_file_path]
```

* -p  连同文件的属性一起复制，而不是使用默认的方式
* -i   若目标文件已经存在，覆盖之前会先询问
* -r   递归的持续复制，用于目录的复制
* -u  目标文件和源文件有差异时才会复制

#### 2）rm

remove file or directory

```shell
rm [-fir] [file_path]
```

* -f force 忽略不存在的的文件，不会出现警告信息
* -i interactive 交互式的，删除前会询问用户是否操作
* -r recursive 递归的删除，用于目录的删除

#### 3）find

find file or directory

```shell
find [path] [look_down]
```

* -name filename 加上name参数说明要找出文件名为filename的文件
* -size [+-]SIZE 加上size参数说明要找比SIZE还要大或者小的文件
* -type TYPE 加上type参数说明要找指定类型的文件，TYPE的值主要有：一般文件、设备文件、目录、连接文件、socket、管道文件
* -perm number  加上permission参数说明查找文件权限刚好等于某一特定值的文件

#### 4）grep

globally search a regular expression and print it in the file，在文件中搜索指定的正则表达式（匹配的字符）并进行输出

```shell
grep [-aciv] [string want search] [source_file] 
```

* -a 将二进制文件看做文本文件查找数据
* -c 计算找到 指定的字符串 的次数
* -i 忽略大小写
* -v 反向选择

#### 5）tar

used to package some files or directories to a file  打包文件，压缩解压缩文件。

```shell
tar [-ctxjzv] [filename]
```

* -c 新建打包文件
* -t 查看打包文件的内容
* -x 解压缩 c t x 不能同时出现在一条命令中
* -j bzip2  方式压缩和解压
* -z gzip 方式压缩和解压
* -v 显示处理的文件名
* -f filename 要处理的文件
* -C dir 指定压缩、解压缩文件到哪个目录

#### 6）mv

remove file or directory

```shell
mv [-fiu] source destination
mv [-fiu] source1 source2 ... directory
```

* -f 源文件与要覆盖的文件重名，会直接覆盖旧文件而不会询问
* -i 源文件与要覆盖的文件重名，会先询问再覆盖
* -u 当源文件比要覆盖的文件新或者目标文件不存在时，才回执行移动操作

## 三、进程控制类的命令

* 查看系统中的进程的命令：ps top
* 控制系统中的进程的命令：kill killall nice renice

### 1、查看进程命令

#### 1）ps 

显示系统当前的进程信息，可以在后面附带参数。常用参数如下：

* l 长格式输出
* u 按用户名和启动时间顺序显示进程
* j 任务格式显示进程
* f 树形格式显示进程
* a 显示所有用户所有进程
* x 显示无控制终端的进程
* r 显示运行中的进程

#### 2）top

动态监视系统任务，可以在后面附带参数。常用参数略

### 2、控制进程命令

#### 1）kill

向某个进程传递信号，可以用于中断程序的执行。需要进程的PID。signal的意思是信号，常用的信号如下：

* SIGHUB 启动被终止的进程
* SIGINT 中断程序的执行==CTRL+C
* SIGKILL 强制中断程序的执行
* SIGTERM 用正常方式结束进程
* SIGSTOP 暂停进程的运行==CTRL+Z

```shell
kill -(signal) PID
```

#### 2）killall

使用进程名称结束进程，可以结束一组同名的进程

```shell
killall [-eIpilqrsu] <progress_name>
```

* -e
* -I
* -p
* -i
* -l
* -q
* -r
* -s
* -u

#### 3）nice

#### 4）renice

## 四、用户及权限管理类的命令

* 用户管理命令： useradd usermod passwd userdel su id whoami w finger
* 用户组管理命令：groupadd groupmod groupdel
* 文件权限管理命令：chmod chown chgrp

### 1、用户管理命令

#### 1）useradd

```shell
useradd [-degGsu] <username>
```

* -d 指定用户登录时的主目录
* -e 指定账号终止日期
* -g 指定账户所属的用户组
* -G 指定账户所属的附加组
* -s 指定账户登录后使用的shell
* -u 指定用户ID

#### 2）usermod 

修改用户属性

```shell
usermod [-degGsul] <username>
```

* -d 指定用户登录时的主目录
* -e 指定账号终止日期
* -g 指定用户所属用户组
* -G 指定用户所属附加组
* -s 指定账户登录时使用的shell
* -u 指定用户ID
* -l 修改用户名

#### 3）passwd 

设置或修改用户口令

```shell
passwd [-dlus] <username>
```

* -d 删除用户口令
* -l 暂时锁定指定用户账号
* -u 解除指定用户账号锁定
* -s 显示指定用户账号状态

#### 4）userdel 

```shell
userdel [-rf] <username>
```

* -f 删除用户目录和他的目录内的所有文件
* -r 不仅删除用户账号，而且删除用户目录、邮件

#### 5）su 

切换用户身份`su <username>`使用 exit 返回

#### 6）id 

查看某个用户的信息

#### 7）whoami 

查看当前用户名

#### 8）w 

查看当前登录的用户和详细信息

#### 9）finger



### 2、用户组管理命令

#### 1）groupadd 

新建用户组

```shell
groupadd [-go] <userGroupName>
```

#### 2）groupmod 

修改用户组属性

#### 3）groupdel

删除用户组

### 3、文件权限管理命令

文件权限有三种，用户读取权限、用户写入权限、执行权限。使用字母表示法来表示文件或目录的权限。总共为三个单词，从左到右依次是文件所有者的权限，同组用户的访问权限，其他用户的访问权限。每个单词三个字母 rwx 组成，r 代表读取权限，w 代表写入权限，x 代表执行权限。没有的权限以 - 表示。

#### 1）chmod 

修改文件的权限

```shell
chmod <对象操作符权限> <filename>
```

* 对象：u （user）文件所有者 g （group）同组用户 o（others）其他用户
* 操作符：+ 增加 - 删除 = 赋予
* 权限：r 读 w 写 x 执行 s 设置用户ID

#### 2）chown 

将指定文件拥有者改为指定用户或者用户组

```shell
chown [-cfhRv(-deference)] <owner|group> <filename>
```

* -c 显示更改的部分
* -f 忽略错误
* -h 修复符号链接
* -R 处理该目录以及子目录下的所有文件
* -v 显示详细的处理信息
* --deference 作用与符号链接的指向而不是链接本身

#### 3）chgrp

改变文件所属的用户组

```
chgrp [-cfRv]
```

## 五、磁盘管理类命令

不常用，略

## 六、yum命令

### 1、语法

```shell
yum [options] [command] [package]
```

* option：
	* -h：显示帮助 
	* -y：安装过程提示全选yes
	* -q：不显示安装过程

* command：
	* check-update：列出所有可更新的软件
	* update：更新所有软件
	* `install <package_name>`：安装指定的软件包
	* `update <package_name>`：更新指定的软件包
	* list：列出所有可安装的软件
	* `remove <package_name>`：移除软件包
	* `search <keyword>`：按关键字查找软件包
	* clean：清除缓存目录下的软件包


## 七、Vim编辑器

### 1、进入Vim编辑器

```shell
cd the_path_where_your_file_exists
vim fileName
```

### 2、Vim的三种模式

#### 一般指令模式

一般指令模式 Command mode：刚开始进入Vim文本编辑器时，我们会处于Vim的一般模式下。是默认模式，可以用于移动游标查看、剪切、删除、粘贴内容。

| 命令符 | 说明                 |
| ------ | -------------------- |
| i      | 切换到输入模式       |
| x      | 删除光标所在处的字符 |
| :      | 切换到底部指令模式   |

#### 插入模式

插入模式 Insert mode：按下 i 按键进入，可以对文本进行编辑插入。按Escape键返回一般模式

| 命令符 | 说明 |
| ------ | ---- |
|        |      |

#### 底部指令模式

底部指令列模式 Bottom-line mode：按下 : 键进入，用于保存退出等操作。按Escape键返回一般模式

| 命令符 | 说明       |
| ------ | ---------- |
| :q     | 退出程序   |
| :w     | 保存文件   |
| :wq    | 保存并退出 |
|        |            |
|        |            |
|        |            |
|        |            |

## 八、Shell

### 1、运行shell脚本

#### 1）作为可执行程序

切换到脚本文件目录下，然后使用 `./script_name.sh`来执行脚本，在执行之前或许需要改变脚本的执行权限。不能直接写文件名称，需要加上 ./ 来向系统说明文件所在地，否则系统会去PATH寻找程序（系统环境路径下），那么就找不到该命令。

#### 2）作为解释器参数

运行解释器，后面添加参数，参数就是shell脚本的文件名。

### 2、变量

* 定义变量：变量名称和等号之间不能有空格，命名只能使用英文字母、数字下划线，不能以数字开头，不能使用标点符号。如：`my_name="soil"`。
* 使用变量：变量名称前加上 `$` 符号。变量名外面可以加上花括号作为识别变量的边界。如：`$my_name` 或者 `${my_name}`。使用`readonly`命令可以将变量改为只读变量。
* 删除变量：使用 `unset` 命令。
* 变量类型：局部变量、环境变量、shell变量
	* 局部变量：在脚本或命令中定义，仅在当前shell中有效
	* 环境变量：所有程序都能访问环境变量
	* shell变量：由shell程序设置的特殊变量，保证了shell的正常运行
* 数据类型：数字、字符串。字符串可以使用双引号、单引号，也可以不使用引号。
	* 使用单引号：单引号内部任何字符都会原样输出，内部不可出现变量。
	* 使用双引号：内部可以有变量，也可以出现转义字符。

```shell
# 声明变量
_var
var2
VARABLE
VAR_3
# 使用语句从其他文件中读取变量并赋值
for file in `ls /etc` # 将/etc目录的文件名循环遍历出来
# 使用变量
echo ${_var}
echo $_var
# 将变量定义为只读变量
readonly _var # 变量_var目前为只读变量
# 删除变量
unset _var # 变量_var无法再被读取
# 字符串
str='this is a string'
str="this is varable ${_var}!"
# 字符串拼接
str1="this is a String!"
str2="this is a ${str1}"
```

### 3、传递参数

在执行脚本的时候我们可以向脚本传递参数，如`./script_name.sh [arg1] [arg2] ...`脚本内获取参数的形式为：`$n`，n代表的是数字，0为包含文件路径的执行的文件名，1为传入的第一个参数，2为传入的第二个参数，以此类推。另外脚本中还可以通过下列字符获取其他信息：

| 参数 | 说明                                                    |
| ---- | ------------------------------------------------------- |
| $#   | 传递到脚本的参数个数                                    |
| $*   | 以一个单字符串的形式显示向当前shell脚本中传递的所有参数 |
| $$   | 脚本运行当前的进程号                                    |
| $!   | 后台运行的最后一个进程的ID号                            |
| $@   | 与$*相同，使用时加引号，在引号中返回每个参数            |
| $-   | 显示shell使用的当前选项                                 |
| $?   | 显示最后命令的退出状态，0就表示没有任何错误             |

```shell
# 该操作会将传递来的所有参数当成一个参数来在脚本文件中输出
for i in "$*"; do
	echo $i
done
```

```shell
# 该操作会将传递来的所有参数分开输出
for i in "$@"; do
	echo $i
done
```

### 4、数组

* 定义数组：shell只支持一维数组，数组元素下标从0开始。语法格式：`array_name=(value1 value2 ...)`
* 使用数组：`${array_name[index]}`，[index]内使用`@`或者`*` 可以获取数组中所有元素。数组名称前使用`#`可以获取数组的长度

```shell
# 获取字符串长度，字符串在shell中被看作字符数组，因此可以使用数组语法
string="abcd"
echo ${#string[0]}
# 提取子字符串
echo ${string:0:2} # 从第一个字符开始截取两个字符
# 查找子字符串

# 定义数组方式1
array_name=(value0 value1 value2)
# 定义数组方式2
array_name[0]=value0
array_name[1]=value1
array_name[2]=value2
# 读取数组
my_value=${array_name[0]}
# 获取数组中所有元素
echo ${array_name[@]}
# 获取数组元素的个数
length=${#array_name[@]}
length=${#array_name[*]}
# 获取数组单个元素的长度
length0=${#array_name[0]}
```

### 5、运算符

原生bash不支持简单数学运算，需要通过expr来实现。

* 使用算数运算符需要在外层加上反引号 ` 并借助 expr 命令实现。表达式和运算符之间要有空格
* 使用关系运算符需要在外层加上中括号 [ ]

| 运算符                  | 说明                                                         | 举例                                                         |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| + - * / %               | 加减乘除取余运算                                             | ``` `expr $a + $b` ```乘号(*)前边必须加反斜杠(\)才能实现乘法运算 |
| =                       | 赋值运算                                                     | a=$b                                                         |
| == !=                   | 相等和不相等                                                 | `[ $a == $b ]`需要有空格，否则错误                           |
| -eq -ne -gt -lt -ge -le | 只支持数字，相等不等大于小于运算符                           | `[ $a -eq $b ]`                                              |
| ! -o -a                 | 非、或、与布尔运算                                           |                                                              |
| && \|\|                 | 逻辑与逻辑或运算                                             |                                                              |
| = !=                    | 字符串运算符，检测是否相等                                   |                                                              |
| -z -n                   | 检测字符串长度是否是0，是否不为0                             | `[ -z $a]`                                                   |
| $                       | 检测字符串是否不为空                                         | `[ $a ]`                                                     |
| -bcdfgkpurwxseSL file   | 文件测试运算符，分别检测文件是否是块设备文件、字符设备文件、是否是目录、是否是普通文件、是否设置了SGID位、是否设置了粘着位、是否是有名管道、是否设置了SUID位、是否可读、可写、可执行、是否为空、是否存在、是否是socket、是否存在且是一个符号链接 |                                                              |

* test命令，用于检查某个条件是否成立，可以进行数值、字符、文件三个方面的测试

### 6、输入输出

* echo命令用于字符串的输出，默认无转义字符，使用 -e 能开启转义。使用双引号或单引号能显示字符串，而使用反引号显示命令执行的结果。
* printf命令用于格式化输出，语法：`printf format_string [args]`

### 7、流程控制

if else 语法格式

```shell
# 多行形式
if condition
then 
	command
elif condition2
then 
	command2
else
	command3
fi
# 单行形式
if [ $(ps -ef | grep -c "ssh") -gt 1]; then echo "true"; fi # 意思为如果存在ssh进程，且这些进程数大于1，则输出true
```

* 在方括号`[...]`包裹的 if 条件框中，大于需要使用`-gt`，小于需要使用`-lt`
* 在圆括号`((...))`包裹的 if 条件框中，大于和小于可以直接使用符号`> <`

for 循环语法格式

```shell
# 多行形式
for var in item1 item2 ..
do
	command
done
# 单行形式
for var in item1 item2 item3; do command1; command2 ... done;
```

while 语法格式

```shell
while condition
do 
	condition
done
```

until 循环——直到条件为真位置

```shell
until condition
do
	command
done
```

case ... esac ——分支选择语句

* 分支选择执行语句，每一个分支用右圆括号开始，用两个分号表示执行结束，跳出整个分支语句

```shell
case 值 in
模式1)
	command1
	command2
	;;
模式2)
	command1
	command2
	;;
*)
	command1
	command2
	;;	
esac
```

break和continue用于跳出循环

### 8、重定向与管道

* 重定向指的是将输入输出重新定向到另一个地方。Linux进程启动后，会默认三个文件输入输出方向，标准输入stdin，标准输出stdout，标准错误stderr。如果想要使输入输出重新定向到其他地方，如文件中，需要使用重定向符。
	* 标准输入重定向符 `<`  输入重定向 `<< 定界符`输入直到定界符为止
	* 标准输出重定向符 `>` 追加输出重定向符 `>>`
	* 标准错误输出重定向符 `2>` 追加错误输出重定向符 `2>>`
	* 重定向全部内容符 `&>` 追加全部内容重定向符 `&>>`
* 管道指的是左边命令返回的结果交给右边的命令处理，重定向符 `|`。

### 9、包含外部文件

可以在shell脚本中引入外部文件，语法如下

```shell
. filename		 #方法1
source filename   #方法2
```

### 10、函数

函数定义格式：其中方括号为可选语法，执行则直接写函数名称即可

```shell
[ function ] funname [()]
{
	action;
	[return int;]
}
```

```shell
funWithReturn(){
	echo "输入第一个数字"
	read aNum
	echo "输入第二个数字"
	read anotherNum
	return $(($aNum+$anotherNum))
}
funWithReturn
echo "输入的两个数字之和为$?"
```

* 函数返回值在调用该函数后通过`$?`来获得，所有函数在使用前必须先定义。
* 在调用函数时可以向其传递参数，在函数体内部，通过`$n`的形式获取参数的值
* 当参数量大于等于10时，需要使用`${n}`来获取参数

```shell
funWithParam(){
	echo "第一个参数 $1"
	echo "第二个参数 ${2}"
	echo "参数总数有 $# 个"
	echo "作为一个字符串输出所有参数 $*"
}
funWithParam 1 2 3 89 19
```



## 九、vmware中虚拟机扩容磁盘（centos7.9）

1. 关闭虚拟机, 点击扩展磁盘容量，此次容量增加20g（虚拟机原来是20g）

2. 查看扩容前的磁盘容量`df -h`

3. 查看磁盘分区情况`fdisk -l`

4. 对扩容的20g磁盘分区
   1. 磁盘分区命令`fdisk /dev/sda`
   2. 输入n新增分区，直接回车，默认为主分区（primary）；
   3. 接下来，我们需要为分区设置分区格式，在Fdisk命令处输入：`t`分区号用默认 3（或回车），Hex代码输入：`8e `（代表适用Linux LVM分区类型）
   4. 最后写入分区表，在Fdisk命令位置输入：`w`
   5. 可能会有磁盘正在被使用的错误提示，先不理会就好。到此，磁盘分区已完成。
   6. 此时输入`fdisk -l`，就可以看到我们新创建的dev/sda3分区了，分区格式为Linux LVM类型。

5. 格式化新增磁盘并分区

```bash
partprobe
# 格式化分区
mkfs.ext3 /dev/sda3
```

6. 进入lvm中合并磁盘

```bash
#进入lvm
lvm
#初始化/dev/sda3
pvcreate /dev/sda3
#将新分区添加进系统默认的Volume group，centOS的默认Volume group为centos
vgextend centos /dev/sda3
#查看一下当前的Volume卷详情
vgdisplay -v
#将系统盘/dev/mapper/centos-root与sda3的5119空余容量合并，输入如下命令：
lvextend -l +5119 /dev/mapper/centos-root
quit
```

7. 最后查看扩容及磁盘状态

> 文件系统进行扩容，以让系统识别，输入如下命令（只适用于CentOS7）

```bash
xfs_growfs /dev/mapper/centos-root
fdisk -l
# 查看系统容量
df -h
```



## 土味商城流水线指令

```sh
mkdir -p mall-order/target && \
mkdir -p mall-member/target && \
touch mall-order/target/mall-order.jar && \
touch mall-order/Dockerfile && \
touch mall-member/target/mall-member.jar && \
touch mall-member/Dockerfile

#将Dockerfile文件复制到target文件夹
cp -p mall-coupon/Dockerfile mall-coupon/target/
cp -p mall-gateway/Dockerfile mall-gateway/target/
cp -p mall-member/Dockerfile mall-member/target/
cp -p mall-order/Dockerfile mall-order/target/
cp -p mall-product/Dockerfile mall-product/target/
cp -p mall-search/Dockerfile mall-search/target/
cp -p mall-third-party/Dockerfile mall-third-party/target/
cp -p mall-ware/Dockerfile mall-ware/target/
#将jar和Dockerfile文件打包
tar -cvf tuwei-mall.tar **/target/*.jar **/target/Dockerfile
```


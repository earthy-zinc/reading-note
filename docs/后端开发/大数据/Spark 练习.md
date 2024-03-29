# Spark

# 概述

### Spark和Hadoop的区别

**Hadoop**

* Hadoop由Java语言编写，在分布式服务器集群上存储海量数据并且运行分布式分析应用的开源框架
* HDFS作为Hadoop的分布式文件系统，在生态圈的最下层，存储所有的数据并且支持Hadoop的所有服务
* MapReduce是一种分布式计算的编程模型，是Hadoop的核心
* HBase是一个基于HDFS的分布式数据库，擅长实时随机读写超大规模数据集

**Spark**

* 一种由Scala语言开发的快速、通用、可扩展的大数据分析引擎
* Spark Core提供了Spark最基础与最核心的功能
* Spark SQL是用来操作结构化数据的组件，用户可以通过他来使用SQL查询数据
* Spark Streaming是针对实时数据进行流式计算的组件

**总结**

* Hadoop MapReduce设计初衷不是为了满足循环迭代式数据流的处理，因此在多并行运行的数据可复用场景中存在效率问题。而Spark式在传统MapReduce计算框架基础上，对其计算过程优化，从而加快了数据分析、挖掘、读写速度。并且将计算单元缩小到更适合并行计算和重复使用的RDD计算模型
* 机器学习的一些算法，都需要基于数据集进行反复查询和计算，因此MapReduce计算模型不适合多次查询计算
* Spark核心技术式弹性分布式数据集，可以在内存中对数据集进行多次迭代来支持复杂的数据挖掘算法和图形计算算法
* Spark和Hadoop的根本差异是多个作业之间的数据通信问题，Spark基于内存，而Hadoop基于磁盘
* Spark计算任务启动更快，是因为其采用复制fork线程的方式，而Hadoop会创建一个新的线程
* Spark只有在打乱shuffle的时候将数据写入磁盘，而Hadoop中多个MapReduce作业数据交互需要依赖磁盘

Spark更依赖内存，因此内存资源不足时，会导致任务执行失败

## Spark运行架构



Spark框架的核心是一个分布式的计算引擎，采用主从结构。如下图所示。Driver表示主节点，负责管理整个集群中的作业任务调度，Executor则是从节点，负责实际执行任务。

### 核心组件

#### Dirver（驱动器）

执行Spark任务中的main方法

* 将用户程序转化为作业（job）
* 在执行点之间调度任务
* 跟踪执行点的执行状况
* 通过UI展示运行情况

#### Executor（执行点）

是集群中工作节点当中的一个JVM进程，负责作业job中运行的具体任务，任务彼此之间相互独立，Spark在启动时，执行点同时启动伴随Spark应用的整个生命周期存在，如果有执行点发生故障，Spark会将出错的节点的任务调度到其他节点上，整体应用继续执行。Execuor有两个核心功能：

* 负责运行组成Spark应用的任务，并将结果返回给Driver驱动器进程
* 通过自身块管理器为用户程序中要求缓存的RDD提供内存存储，RDD直接缓存在Exector执行点进程内，因此任务可以在运行时充分利用缓存数据

#### 主节点和工作节点

Spark集群的独立部署环境中不需要依赖其他资源调度框架，自身就实现了资源调度。

#### 应用主节点

Hadoop用户向Yarn集群提交应用程序时，提交程序中应该包含应用主节点（application master），用于向资源调度器申请执行任务的资源容器，运行用户自己的程序任务。监控任务的执行，跟踪任务状态，处理异常情况

### 核心概念

#### 执行点和核心

Spark执行点executor时集群中运行在工作节点的一个JVM进程，是整个集群中专门用于计算的节点，在提交应用中，可以提供参数来指定计算节点的个数，以及对应的资源。

#### 并行度（parallelism）

在分布式计算框架中一般都是多个任务同时执行，由于任务分布在不同的计算节点进行计算，所以能够真正地实现多任务并行执行。我们将整个集群并行执行任务的数量称为并行度

#### 有向无环图

大数据计算引擎根据使用方式的不同分为四类，第一类是Hadoop所承载的MapReduce，将计算分为Map和Reduce两个阶段，对于上层应用来说，需要拆分算法，甚至不得不实现多个Job的串联。由于这样的弊端，催生了支持有向无环图框架的产生。

### 提交流程

提交流程就是开发人员根据需求写的应用程序通过spark客户端提交给Spark运行环境执行计算的流程，在不同部署环境中，这个提交过程基本相同。Spark提交到yarn环境中执行，分为客户端模式和集群模式，这两种模式的主要区别在于Driver控制器程序的运行节点位置。

## Spark核心

### RDD

弹性分布式数据集(Resilient Distributed Dataset, RDD)是Spark中最基本的数据处理模型。在代码中他是一个抽象类，代表一个弹性的、不可变的、可分区、里面元素可以并行计算的集合。其中：

* 弹性：
  * 存储的弹性：内存和磁盘能够自动切换
  * 容错的弹性：数据丢失可以自动恢复
  * 计算的弹性：计算出错重试机制
  * 分片的弹性：可以根据需要重新分片
* 分布式：数据存储在大数据集群的不同节点上
* 数据集：RDD封装了计算逻辑，但是不保存数据
* 数据抽象：RDD是抽象类，需要子类实现
* 不可变：RDD封装了计算逻辑，是不可以改变的，想要改变只能产生新的RDD，在新的RDD中封装计算逻辑

#### 核心属性

* 分区列表：用于执行任务时并行计算
* 分区计算函数

#### 执行原理

数据处理过程中需要计算资源和计算模型（逻辑），执行时，需要将计算资源和计算模型进行协调整合

Spark框架在执行时，先申请资源，然后再将应用程序的数据处理逻辑分解为一个个计算任务，然后将任务发到已经分配资源的计算节点上，按照指定的计算模型对数据进行计算，最后得到计算结果。

1. 首先启动yarn集群环境
2. Spark通过申请资源创建调度节点和计算节点
3. 根据需求将计算逻辑划分为不同的任务
4. 调度节点将任务根据节点状态发送到对应的计算节点进行计算

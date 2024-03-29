# Kafka

## 概述

Kafka是一个分布式的基于发布订阅模式的消息队列，主要用于大数据实时处理领域。

发布订阅指的是消息的发布者不会直接将消息发送给特定的订阅者，而是将消息分为不同的类别，订阅者只会接收自己感兴趣的消息。

传统的消息队列应用场景主要有缓存、削峰、解耦、异步通信

消息队列有两种模式，一种是点对点模式，消费者主动拉取数据，消息收到后清除消息。另一种是发布订阅模式，消息队列中可以有多个主题，消费者在消费了数据后，不会删除数据。并且每个消费者相互独立，都可以消费到数据

## 架构

为了方便拓展和提高吞吐量，kafka将一个topic划分为多个分区。为了配合分区的设计，提出了消费者组的概念，组内每一个消费者并行消费。为了提高可用性，为每个分区增加了若干个副本。

* 消费者组（Consumer Group）：指的是消费者组，消费者组内每一个消费者负责消费不同分区的数据
* Broker：一台kafka服务器就是一个broker，一个集群由多个broker组成，一个broker可以容纳多个topic
* topic：可以理解为队列，生产者和消费者面向的都是一个队列
* 副本Replica：一个topic的每个分区都有若干个副本

## 生产者

### 生产者消息发送流程

在消息发送的过程中，涉及到了两个线程，main线程和sender线程。我们在main线程中创建了一个双端队列RecordAccumulator，main线程将消息发送给RecordAccumulator这个双端队列，而发送线程sender不断地从双端队列中拉取消息到kafka的Broker

### 生产者分区

* 便于合理使用存储资源：每个分区在一个节点上存储，可以把海量的数据按照分区切割成一块块的数据存储在多台节点上。合理控制分区的任务，可以实现负载均衡的效果
* 提高并行度，生产者能够以分区为单位发送数据，而消费者能够以分区为单位消费数据

## Broker节点


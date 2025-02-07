# 设计模式 (Design Pattern)



> [!Note]
> 
> Update: 2025.02.07

> [!Warning]
> 
> 笔记内容仍需编辑完善，==Uncompleted==。
> 
> ChatGPT 的回答未进行交叉验证。




## ▲ New Words

- **creational [no pronunciation] --adj.创造型；创建型** 
    + creational patterns 创建型模型
    + Wikipedia provides a good description and background for 
      creational design patterns. 
      Wikipeida 提供了对创建型设计模式的很好的描述和背景知识.
- **structural ['strʌktʃ(ə)r(ə)l] --adj.结构(上)的, 构造的**
    + But I was not talking about structural change. 但是我没有做出建设性地改变. 
- **integrity [ɪn'tegrɪtɪ] --n.正直; 诚实; 完整**
    + He is a man of the highest integrity. 他是个极其正直的人.
    + the structural integrity of the novel. 小说的结构完整. 
- **behavioral [bi'heivjərəl] --adj.行为的, 动作的**
    + --> behavioral model. 行为模式
    + But we can make behavioral changes to avoid that.
      但是我们能改变行为, 以避免这种情况.
- **facade [fə'sɑ:d] --n.(房屋的)正面; 假象; 外观**
    + facade pattern 外观模式.
    + back facade. 背面; 反面.
    + All of the facades are still here. 那些建筑现在仍然伫立在哪里.
- gang









## ▲ 1. 设计模式简介

> [!Note]
>
> *Source: ChatGPT o1*
>
> *辅助编辑: ChatGPT 4o、Kimi K1.5*



**设计模式（Design Patterns）** 是在面向对象软件设计过程中，为特定问题提供的可复用、可扩展、可维护的解决方案。它们总结了在软件开发中反复出现的设计问题和对应的最佳实践。设计模式并非现成的代码片段，而是更高层次的“设计经验抽象”，旨在帮助我们编写具有良好结构和低耦合、高内聚的应用程序。

### 1.1 设计模式的意义

1. **可复用性**：通过遵循已验证的设计思路，可以减少重复劳动，提升开发效率。
2. **可扩展性**：清晰的抽象与分层结构使系统容易扩展；当需求变动时，可在原有设计模式基础上快速适配。
3. **可维护性**：对系统中对象的职责分配明确，逻辑更容易理解，后续维护和调试成本大幅下降。
4. **可读性**：团队成员常常对经典的设计模式有相似的认识；代码采用设计模式后可读性更好，有助于沟通和合作。


## ▲ 2. 设计模式的分类

基于 “Gang of Four (GoF)” 在著作《Design Patterns: Elements of Reusable Object-Oriented Software》中的分类，设计模式通常分为以下三大类共 23 种：

1. **创建型（Creational）**
2. **结构型（Structural）**
3. **行为型（Behavioral）**

下面列出每一类下的常见模式及其要点。

### 2.1 创建型模式 (Creational Patterns)

`Hint：多列大表格来自 ChatGPT o1（注：大表格移到了笔记下部）, 单独的展开表格为 Kimi K1.5 的工作。`


#### 2.1.1 单例模式 (Singleton Pattern)

| 序号         | **1**                                                        |
| ------------ | ------------------------------------------------------------ |
| **模式名称** | **单例模式 (Singleton Pattern)**                             |
| **定义**     | **确保一个类只有一个实例，并提供一个全局访问点**。           |
| **要点**     | - 常通过在类中维持一个**私有静态变量**来保存唯一实例，构造器通常为 `private`。<br />- 考虑 **线程安全**（双重检查锁定、内部静态类等）及 **惰性加载**（或饿汉式）。<br />- 虽然提供了全局可访问性，但也要注意可能带来**过度耦合**及**可测试性**问题。 |
| **适用场景** | - **配置管理**、**日志记录**、**资源访问类**、浏览器/应用程序中的**全局状态管理**等。<br />- 当确实需要在系统中只存在一个对象时（如全局缓存、唯一序列号生成器等）。 |

**序号：2**

| 序号         | **2**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **抽象工厂模式 (Abstract Factory Pattern)**                  |
| **定义**     | **提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们的具体类**。 |
| **要点**     | - 常用于创建属于同一个“**产品族**”的对象，这些对象往往功能或主题相关。<br />- 通过不同具体工厂实现类，可切换不同的产品族（如不同平台 UI、不同主题组件等）。<br />- 与 **工厂方法模式** 相比，能同时处理**多种产品类型**的创建。 |
| **适用场景** | - **跨平台 UI 库**（如不同操作系统下的控件创建）、**不同主题风格组件**。<br />- 当产品之间存在相互依赖关系、且需要由同一工厂确保它们适配或兼容时，使用抽象工厂最为合适。 |

**序号：3**

| 序号         | **3**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **建造者模式 (Builder Pattern)**                             |
| **定义**     | **将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示**。 |
| **要点**     | - 引入一个“**指挥者（Director）**”来按一定顺序组装对象；不同“**建造者（Builder）**”可定制不同部件组合得到不同产品。<br />- 典型适用场景：需要**有序**地创建大型复杂对象，且希望构建过程和部件组装能灵活可定制。<br />- 能减少复杂对象构造时的**重复代码**并**隐藏复杂度**。 |
| **适用场景** | - **复杂文档解析生成**（HTML、PDF 等不同输出格式）、**游戏角色创建**（同一流程但可选不同外观或装备）。<br />- 任何需要根据不同需求组合不同“部件”的复杂对象构建，如“定制电脑配置”、“定制菜单/套餐”等。 |

**序号：4**

| 序号         | **4**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **工厂方法模式 (Factory Method Pattern)**                    |
| **定义**     | **定义一个用于创建对象的接口，让子类决定将哪一个具体类实例化，使对象的实例化延迟到子类**。 |
| **要点**     | - 父类定义一个抽象“工厂方法”用于创建产品对象，子类实现该方法来生成具体产品。<br />- 避免在父类中**硬编码**具体对象类型，符合“开闭原则”。<br />- 常用于框架中，父类提供公共逻辑，子类根据需求生成不同对象，也便于扩展新类型。 |
| **适用场景** | - 当**父类**想要把**对象创建的决定权**交给**子类**，又不想自己依赖具体类型时。<br />- **插件式**开发、**回调**或**钩子**风格的框架场景中，允许用户自定义产品或继承框架来创建合适的对象。 |

**序号：5**

| 序号         | **5**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **原型模式 (Prototype Pattern)**                             |
| **定义**     | **用原型实例指定创建对象的种类，并通过复制（克隆）该原型来创建新的对象**。 |
| **要点**     | - 关键在于实现 `clone()` 方法（可能是浅拷贝或深拷贝）。<br />- 避免反复执行**复杂对象初始化**，提高创建效率。<br />- 注意对引用类型属性是否需要深度克隆，以免共享带来副作用。 |
| **适用场景** | - **需要大量相似对象**（并且初始化成本高）的场景，例如**原型模板**、**大型游戏场景中的元素**。<br />- 无法直接通过 `new` 进行对象复制，或类构造逻辑复杂/受限时，通过原型克隆更为快捷。 |


### 2.2. 结构型模式 (Structural Patterns)


**序号：1**

| 序号         | **1**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **适配器模式 (Adapter Pattern)**                             |
| **定义**     | **将一个类的接口转换为客户期望的另一个接口，使得原本由于接口不兼容而无法协同工作的类可以协同工作**。 |
| **要点**     | - 核心思路是**接口转换**与**封装**。<br />- 可分为**类适配器**（利用多重继承/接口）和**对象适配器**（通过组合被适配对象来实现）。<br />- 适用于**整合第三方库**或将**旧接口**与**新接口**互相兼容。 |
| **适用场景** | - **系统需要整合不兼容的第三方库**或做**老系统**与**新系统**之间的兼容时。<br />- 需要在不修改原有类的前提下“转换”其接口以适配新需求。 |

**序号：2**

| 序号         | **2**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **桥接模式 (Bridge Pattern)**                                |
| **定义**     | **将抽象部分与实现部分分离，使它们可以独立地变化**。         |
| **要点**     | - 通过在**抽象层**和**实现层**分别使用继承体系，并用**聚合**耦合这两层，避免在单一继承体系里膨胀。<br />- 常用于应对“多维度变化”导致类爆炸的情况（如形状与颜色、平台与功能等）。<br />- 典型场景：**跨平台 UI**、**图形渲染**，让“抽象”和“实现”各自独立扩展。 |
| **适用场景** | - **图形渲染**、**跨平台界面开发**等多维度变化场景，尤其需要“抽象”与“实现”分别演化。<br />- 当一个类有多个变化维度且都需要独立扩展时，可通过桥接模式避免类爆炸。 |

**序号：3**

| 序号         | **3**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **装饰者模式 (Decorator Pattern)**                           |
| **定义**     | **动态地给一个对象添加额外的职责（功能），通过组合而非继承来实现功能扩展**。 |
| **要点**     | - 使用“装饰”类对被装饰对象**进行包裹**（组合）。<br />- 可在**运行时**按需添加或移除装饰，避免了继承导致的子类膨胀。<br />- 常用于为**GUI 组件**添加滚动条、边框等功能，或为某核心逻辑添加**日志、监控**等。 |
| **适用场景** | - 在**不影响其他对象**的情况下，**动态地增加功能**或职责，如：GUI 中为基础组件添加滚动条、边框，或者给业务逻辑增强日志、安全校验等。<br />- 当继承层次过深且只需要给对象临时附加一些功能时，装饰者比创建新子类更灵活。 |

**序号：4**

| 序号         | **4**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **组合模式 (Composite Pattern)**                             |
| **定义**     | **将对象组合成树形结构以表示部分-整体层次，使客户端对单个对象与组合对象的使用具有一致性**。 |
| **要点**     | - 对叶子节点和容器节点提供统一接口（透明性），无需在客户端区分是单个对象还是组合。<br />- 常见例子：**文件系统**、**UI 组件树**，文件与文件夹可执行相同操作。<br />- 适合处理**树状或分层结构**并进行递归调用。 |
| **适用场景** | - 当系统存在**层次结构**（如菜单、文件夹等）并且需要**统一处理**叶子节点和组合节点时，组合模式非常适用。<br />- **图形编辑器、UI 组件树**等需要对“部分”和“整体”一样对待的场景。 |

**序号：5**

| 序号         | **5**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **外观模式 (Facade Pattern)**                                |
| **定义**     | **为子系统中的一组接口提供一个一致的对外接口（高层接口），使子系统更易于使用**。 |
| **要点**     | - 在**复杂子系统**基础上，对外提供一个“门面”或“统一入口”，隐藏底层实现细节。<br />- 减少了客户端直接与子系统的交互，从而**降低耦合**。<br />- 常见于大型系统架构中，为其他系统或外部提供一个简洁的接口，也便于后期扩展和维护。 |
| **适用场景** | - **为复杂子系统提供简单接口**，如多模块后台系统对外只暴露一个接口层/网关。<br />- 当需要**精简**子系统的**访问**方式、或**降低**客户端对子系统的**依赖**时。 |

**序号：6**

| 序号         | **6**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **享元模式 (Flyweight Pattern)**                             |
| **定义**     | **运用共享技术来支持大量细粒度对象，减少内存消耗和对象创建开销**。 |
| **要点**     | - 将对象的**可共享部分(内部状态)\**与\**不可共享部分(外部状态)\**分离；可共享的内部状态集中存储和复用。<br />- 在需要\**大量重复对象**时显著降低内存消耗。<br />- 典型实现中会有一个**享元工厂**来管理享元实例的创建和共享。 |
| **适用场景** | - **游戏中大量子弹或粒子对象**、**文字处理软件**中字符的表示等场景，需要重复创建小而多的对象。<br />- 当多个对象的大部分数据是相同的，仅少量数据不同，且对性能/内存有较高要求时。 |

**序号：7**

| 序号         | **7**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **代理模式 (Proxy Pattern)**                                 |
| **定义**     | **为其他对象提供一个代理以控制、增强或隔离客户端对这个对象的访问**。 |
| **要点**     | - 代理对象与被代理对象实现**相同接口**，对外保持一致。<br />- 常见形式：**远程代理**(封装远程调用)、**虚代理**(延迟加载)、**保护代理**(安全访问控制)和**缓存代理**(结果缓存)。<br />- 通过预处理或后处理来做安全控制、日志、缓存等额外功能。 |
| **适用场景** | - **安全控制**、**远程调用**(RMI/分布式)、**缓存代理**(如接口请求结果缓存)、**延迟加载**(ImageProxy 等)。<br />- 当需要对访问的过程做额外处理或限制，而又不想改变目标对象本身时。 |


### 2.3. 行为型模式 (Behavioral Patterns)

**序号：1**

| 序号         | **1**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **模板方法模式 (Template Method Pattern)**                   |
| **定义**     | **定义一个操作(算法)的骨架，而将其中某些步骤的实现延迟到子类，使子类可以不改变算法结构即可重定义这些步骤**。 |
| **要点**     | - 父类中实现**算法主流程**(模板方法)，将可变步骤定义为抽象或钩子方法，由子类实现。<br />- 常见于框架/库中，**框架调用子类**来定制特定逻辑（例如游戏引擎生命周期回调、处理流水线）。<br />- 避免重复编写流程控制逻辑，符合**好莱坞原则**(Don't call us, we'll call you)。 |
| **适用场景** | - **数据处理流程**、**游戏引擎中的生命周期钩子**、**框架回调**等。<br />- 有固定主流程但某些环节需要灵活定制时（如父类中 `run()` 流程，子类只需覆写若干步骤方法）。 |

**序号：2**

| 序号         | **2**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **命令模式 (Command Pattern)**                               |
| **定义**     | **将请求封装为对象，使你可用不同的请求对客户端进行参数化、对请求排队或记录日志，以及支持撤销/恢复等操作**。 |
| **要点**     | - 将**动作或操作**封装到一个独立的命令类中，通常包含 `execute()` 等方法，命令对象内部持有对**接收者(Receiver)\**的引用。<br />- 可方便实现\**撤销/重做**(undo/redo)、操作排队、**宏命令**等。<br />- 使得**请求发起者(Invoker)\**与\**请求接收者**解耦。 |
| **适用场景** | - **编辑器的撤销/恢复**操作、**队列任务处理**、**宏命令**（一次执行多个命令）。<br />- 当需要对请求进行**记录/排队/撤销/重做**等高级处理时，命令模式很适合。 |

**序号：3**

| 序号         | **3**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **迭代器模式 (Iterator Pattern)**                            |
| **定义**     | **提供一种方法顺序访问聚合对象中的各元素，而不暴露其内部表示**。 |
| **要点**     | - 典型接口：`hasNext()`, `next()` 等，封装容器内部结构，让客户端只需关心遍历逻辑。<br />- 集合框架常使用此模式（如 Java 中的 `Iterator`/`Iterable` 接口）。 |
| **适用场景** | - **各种容器**、数据结构需要**统一的遍历方式**。<br />- 例如：Java 集合中的迭代器，用来遍历 `List`、`Set`、`Map` 等不同结构却保持一致使用。 |

**序号：4**

| 序号         | **4**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **观察者模式 (Observer Pattern)**                            |
| **定义**     | **定义对象间的一种一对多依赖关系，当一个对象状态改变时，所有依赖者都会收到通知并自动更新**。 |
| **要点**     | - 又称“**发布-订阅**(Publish-Subscribe)” 模式。<br />- 包括**主题(Subject)\**和\**观察者(Observer)\**两个关键角色。<br />- 通过主题对象\**维护观察者列表**，状态变更时通知所有观察者进行对应更新。 |
| **适用场景** | - **GUI 事件模型**(按钮点击通知监听器)、**消息通知系统**、**数据绑定**、**前端响应式框架**(Vue/React 里的响应式机制)。<br />- 任何需要**事件驱动**或**推送更新**的场合（一个状态改变引发多个联动更新）。 |

**序号：5**

| 序号         | **5**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **中介者模式 (Mediator Pattern)**                            |
| **定义**     | **用一个中介对象来封装一系列对象之间的交互，使各对象不需要显式互相引用，从而降低耦合度**。 |
| **要点**     | - 中介者在多个组件/对象间扮演“**调度员**”角色，各对象只与中介者通信。<br />- 适用于**组件之间相互依赖或交互频繁**的场景，可避免对象间网状引用。<br />- 常见应用：**GUI 界面**中各组件交互、**系统事件总线**等。 |
| **适用场景** | - **MVC/MVP/MVVM** 等架构中，视图层与业务逻辑层之间往往通过某种中介协调。<br />- 当多个组件之间存在**多对多**复杂依赖，需要解耦为**多个组件 -> 统一中介 -> 多个组件**的通信模式。 |

**序号：6**

| 序号         | **6**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **备忘录模式 (Memento Pattern)**                             |
| **定义**     | **在不破坏封装的前提下，捕获对象的内部状态，并在对象之外保存（快照），以便后续可将对象恢复到该状态**。 |
| **要点**     | - 通常由“**发起者(Originator)**”创建备忘录(Memento)来记录内部状态，“**负责人(Caretaker)**”负责保存或管理备忘录。<br />- 发起者可通过已保存的备忘录来**恢复**之前的内部状态，支持**撤销/回滚**功能。<br />- 注意**备忘录**的访问权限，外部不应直接修改其内部数据以保持封装性。 |
| **适用场景** | - **文本编辑器的撤销**功能、**游戏存档**、**事务回滚**(数据库事务、Undo/Redo)。<br />- 任何需要在一段时间后恢复到之前状态的场景。 |

**序号：7**

| 序号         | **7**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **解释器模式 (Interpreter Pattern)**                         |
| **定义**     | **给定一种语言，定义它的文法，并设计一个解释器来使用该文法解释语言中的句子**。 |
| **要点**     | - 通常使用**抽象语法树(AST)\**来表示语言/表达式，然后逐步解释。<br />- 对于复杂语法需求，解释器模式往往\**效率不足**，可被编译器或正则引擎等取代。<br />- 适用场景：**简单脚本语言**、**规则引擎**、**配置文件**解析等。 |
| **适用场景** | - **简单脚本语言**、**规则校验器**、**配置文件解释**。<br />- 当语言或表达式语法较简单且变动不大，且需要频繁扩展或自定义时。 |

**序号：8**

| 序号         | **8**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **状态模式 (State Pattern)**                                 |
| **定义**     | **允许对象在其内部状态改变时改变它的行为，对外看来就像换了一个对象/类一样**。 |
| **要点**     | - 将各种状态对应的行为分别封装到**具体状态类**中，通过**上下文(Context)**来管理和切换状态实例。<br />- 避免在一个类里用大量 `if-else` 或 `switch` 语句判断当前状态并执行不同逻辑。<br />- 常见：**订单状态机**、**游戏角色状态**(奔跑、跳跃、攻击)、**工作流系统**等。 |
| **适用场景** | - **电商订单状态流转**、**工作流系统**、**游戏角色状态**等，当一个对象有**多种状态**并且行为随状态切换而变化时。<br />- 需避免在单个类中管理众多状态分支逻辑，让每个状态自包含行为。 |

**序号：9**

| 序号         | **9**                                                        |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **策略模式 (Strategy Pattern)**                              |
| **定义**     | **定义一系列算法，将它们封装起来并使它们可以相互替换，使客户端可以在不改变客户端代码的情况下切换使用不同算法**。 |
| **要点**     | - 通过抽象策略接口 + 多个策略实现类，客户可灵活选择不同策略。<br />- 常与**工厂模式**结合，根据条件决定使用哪种策略；或在**上下文(Context)**中运行时切换策略。<br />- 适用场景：**支付方式**、**日志输出策略**、**各种排序算法**等。 |
| **适用场景** | - **各种排序算法、日志输出策略、支付方式**等可替换的算法或业务规则。<br />- 当需要**动态切换**、或需根据环境/配置决定不同处理方式时。 |

**序号：10**

| 序号         | **10**                                                       |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **职责链模式 (Chain of Responsibility Pattern)**             |
| **定义**     | **将多个对象连成一条链来处理请求，使得每个对象都有机会处理该请求，直到其中一个对象处理完毕为止，从而让发送者与接收者解耦**。 |
| **要点**     | - 请求会在链上**依次传递**，每个处理器可选择**处理**或**继续传递**。<br />- 使客户端无需指定由谁来处理请求，也无需知道链的结构。<br />- 场景：**审批流**、**日志处理流水线**、**消息过滤/命令解析**等。 |
| **适用场景** | - **审批流**(多级审批)、**日志处理流水线**(多级日志过滤/格式化)、**命令解析**等需经过一系列处理器的场合。<br />- 当想要在系统中“消除”发送者与接收者的强耦合，并且允许灵活重组处理顺序时。 |

**序号：11**

| 序号         | **11**                                                       |
| :----------- | :----------------------------------------------------------- |
| **模式名称** | **访问者模式 (Visitor Pattern)**                             |
| **定义**     | **表示一个作用于某对象结构中各元素的操作，使你可在不改变各元素类的前提下为其添加新功能**。 |
| **要点**     | - 将操作逻辑从元素类中分离到“**访问者(Visitor)**”中；元素类通过 `accept(visitor)` 来让访问者执行相应操作。<br />- 借助**双分派**(Double Dispatch)机制：访问者方法依据实际元素类型触发不同实现。<br />- 场景：**编译器处理 AST**、**复杂对象结构**需要频繁添加新操作或统计分析时。 |
| **适用场景** | - **编译器处理 AST**、对**复杂对象结构**做统计/分析/转换等频繁变动操作。<br />- 当需要在**不修改数据结构类**(元素类)的情况下，添加或改变处理逻辑时，访问者非常有效。 |




## ▲ 3. 学习 JS 设计模式

**JavaScript** 由于采用 **基于原型的对象系统（Prototype-based OOP）**，在实现设计模式时会与传统基于类的语言（如 Java、C++）有些差异，但核心思想相通。学习 JS 设计模式时可关注以下几点：

1. **对象与原型**
    - JS 中没有传统意义的类，而是通过原型链来实现继承。
    - 设计模式在 JS 中常结合 **构造函数** 与 **原型** 来实现。ES6 引入的 `class` 语法糖使其更贴近面向对象语言写法。
2. **闭包与高阶函数**
    - JS 的函数式特性（闭包、高阶函数）往往能简化某些设计模式实现，例如装饰者模式、策略模式等。
3. **模块化**
    - 在 JS 中，常用 **模块模式 (Module Pattern)** 来实现对私有变量的封装，或者使用 ES6 的模块导入导出语句来组织代码。
    - 模块模式算是对 “单例模式” 的一种变形体现。
4. **事件机制**
    - JS 原生就常用 “事件监听”/“事件发布订阅” 机制实现观察者模式，如 DOM 事件或基于 Node.js 的事件模块等。
5. **常见应用实例**
    - **单例模式**：在前端中，用来管理应用级别的 Store 或事件总线。
    - **观察者模式**：在 Vue/React 等前端框架或 Node.js 事件模型里都能见到类似实现。
    - **代理模式**：在前端可通过 ES6 Proxy 对象做数据劫持，也可用于网络代理请求。
    - **工厂模式**：常见于组件的创建、动态渲染 DOM 元素等。

综上，在 JavaScript 中研究设计模式时，要结合其语言特性（如闭包、原型继承、异步事件循环等），理解如何更简洁地实现模式要点。


## ▲ 4. OOA（Object-Oriented Analysis）面向对象分析

**面向对象分析**，关注在软件开发的早期阶段如何对业务需求进行抽象和建模。它主要包含以下流程/方法：

1. **需求收集**：与业务方沟通，明确系统要解决的问题、用户需求和相关约束。
2. **用例分析**：用 **用例图 (Use Case Diagram)** 描述系统功能与角色的交互，从用户视角抽象系统需求。
3. **领域模型**：识别系统涉及的主要领域对象（实体、值对象等），以及它们之间的关系。可通过 **概念模型 (Conceptual Model)** 或 **类图 (Class Diagram)** 大致勾勒对象层次与关联。
4. **责任分配**：在分析阶段结合业务流程，判断每个对象或类应承担哪些职责，以确保高内聚、低耦合。
5. **迭代完善**：在需求及分析不断明晰的过程中，反复修订模型与分析产物（如用例、类图）。

OOA 目的是通过对真实世界（或业务场景）的抽象，得到高层次的对象模型，为后续的系统设计（OOD）及实现（OOP）打下坚实基础。


## ▲ 5. OOP（Object-Oriented Programming）面向对象程序设计

**面向对象程序设计** 是基于 “对象” 概念来组织代码的程序开发范式。主要包含四大特性（或原则）：

1. **封装 (Encapsulation)**
    - 将数据与行为（方法）合并到同一个对象中，并对外部隐藏对象的内部实现细节。
    - 好处：避免外部直接访问或修改内部状态，降低耦合度。
2. **继承 (Inheritance)**
    - 通过继承机制可复用父类的字段和方法，子类可进行扩展或重写。
    - 在 JavaScript 中则是通过 **原型链** 来实现继承。
3. **多态 (Polymorphism)**
    - 不同类的实例可通过同一个接口做出不同的响应行为。
    - 体现了 “对变化的封装”和 “对接口的统一”。
4. **抽象 (Abstraction)**
    - 将一类事物的共有属性与行为抽象成类/接口，从而忽略不必要的实现细节。
    - 帮助我们更专注于核心模型，提高代码可维护性和复用性。

**在面向对象环境中使用设计模式**，是为了更好地体现这些 OOP 特性，实现更优雅的模块化与可扩展性。


## ▲ 额外补充
**UML（Unified Modeling Language）**：在分析、设计中常使用 UML 图（用例图、类图、时序图、状态图等）来可视化系统结构与交互，更直观地表达设计模式和对象间的关系。

SOLID 原则：
- **S**ingle Responsibility Principle（单一职责原则）
- **O**pen/Closed Principle（开闭原则）
- **L**iskov Substitution Principle（里氏替换原则）
- **I**nterface Segregation Principle（接口隔离原则）
- **D**ependency Inversion Principle（依赖倒置原则）

这些原则与设计模式一脉相承，形成更优雅灵活的 OOP 设计。

**敏捷开发与设计模式**：在实际开发中，往往先快速实现功能，然后在重构过程中引入合适的设计模式，以获得更高的可维护性与可扩展性。


## ▲ 总结

通过了解和使用 **创建型**、**结构型**、**行为型** 这三大类共 23 种设计模式，可以帮助我们在 OOP (面向对象编程) 的实践中编写更具可维护性、可扩展性的代码。同时，**OOA** 作为前期分析阶段，为需求和业务问题做抽象与分解，**OOP** 作为实现方式在代码层面落地，二者相辅相成。在 JavaScript 领域，需结合其语言独特的特性（原型、闭包、事件机制等）灵活运用设计模式，不必拘泥于传统语言的实现细节，而更多地关注设计模式的核心思想和原理。

希望以上补充能使您的笔记更加完善、全面且专业。祝学习顺利!





# 设计模式代码示例

==Source: ChatGPT o1==

## 1. 单例模式 (Singleton)

**意图**：保证某个类在应用中只有一个实例，并提供全局访问点。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int data;
} Singleton;

// 提供全局唯一的访问方法
Singleton* getSingletonInstance() {
    // 静态局部变量只初始化一次
    static Singleton* instance = NULL;
    if (instance == NULL) {
        instance = (Singleton*)malloc(sizeof(Singleton));
        instance->data = 42;
    }
    return instance;
}

int main() {
    Singleton* s1 = getSingletonInstance();
    Singleton* s2 = getSingletonInstance();
    printf("s1->data = %d\n", s1->data);
    printf("Are s1 and s2 the same? %s\n", (s1 == s2) ? "Yes" : "No");
    return 0;
}
```

### Java 示例

```java
public class Singleton {
    // 饿汉式单例
    private static final Singleton instance = new Singleton();
    private int data;

    private Singleton() {
        data = 42;
    }

    public static Singleton getInstance() {
        return instance;
    }

    public int getData() {
        return data;
    }

    public void setData(int value) {
        data = value;
    }

    public static void main(String[] args) {
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();
        System.out.println("s1 data: " + s1.getData());
        System.out.println("s1 == s2 ? " + (s1 == s2));
    }
}
```

### JavaScript 示例

```js
const Singleton = (function() {
  let instance;

  function createInstance() {
    return { data: 42 };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// 测试
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1.data);
console.log("s1 === s2 ?", s1 === s2);
```

------

## 2. 抽象工厂模式 (Abstract Factory)

**意图**：提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 产品A：Button
typedef struct {
    void (*paint)(void);
} Button;

// 具体产品A1：Windows按钮
void paintWinButton() { printf("Painting Windows Button.\n"); }
Button* createWinButton() {
    Button* btn = (Button*)malloc(sizeof(Button));
    btn->paint = paintWinButton;
    return btn;
}

// 具体产品A2：Mac按钮
void paintMacButton() { printf("Painting Mac Button.\n"); }
Button* createMacButton() {
    Button* btn = (Button*)malloc(sizeof(Button));
    btn->paint = paintMacButton;
    return btn;
}

// 抽象工厂，简单演示只生产 Button
typedef struct {
    Button* (*createButton)(void);
} GUIFactory;

// 具体工厂1：Windows工厂
GUIFactory* getWinFactory() {
    GUIFactory* factory = (GUIFactory*)malloc(sizeof(GUIFactory));
    factory->createButton = createWinButton;
    return factory;
}

// 具体工厂2：Mac工厂
GUIFactory* getMacFactory() {
    GUIFactory* factory = (GUIFactory*)malloc(sizeof(GUIFactory));
    factory->createButton = createMacButton;
    return factory;
}

int main() {
    // 动态选择工厂
    GUIFactory* factory = getWinFactory();
    Button* btn = factory->createButton();
    btn->paint();

    // 清理
    free(btn);
    free(factory);
    return 0;
}
```

### Java 示例

```java
interface Button {
    void paint();
}

class WinButton implements Button {
    public void paint() {
        System.out.println("Painting Windows Button.");
    }
}

class MacButton implements Button {
    public void paint() {
        System.out.println("Painting Mac Button.");
    }
}

interface GUIFactory {
    Button createButton();
}

class WinFactory implements GUIFactory {
    public Button createButton() {
        return new WinButton();
    }
}

class MacFactory implements GUIFactory {
    public Button createButton() {
        return new MacButton();
    }
}

public class AbstractFactoryDemo {
    public static void main(String[] args) {
        GUIFactory factory = new WinFactory();
        Button button = factory.createButton();
        button.paint();
    }
}
```

### JavaScript 示例

```js
// 抽象产品
class Button {
  paint() {}
}

// 具体产品
class WinButton extends Button {
  paint() {
    console.log("Painting Windows Button.");
  }
}

class MacButton extends Button {
  paint() {
    console.log("Painting Mac Button.");
  }
}

// 抽象工厂
class GUIFactory {
  createButton() {
    throw new Error("Abstract method!");
  }
}

// 具体工厂
class WinFactory extends GUIFactory {
  createButton() {
    return new WinButton();
  }
}

class MacFactory extends GUIFactory {
  createButton() {
    return new MacButton();
  }
}

// 使用
const factory = new WinFactory();
const button = factory.createButton();
button.paint();
```

------

## 3. 建造者模式 (Builder)

**意图**：将一个复杂对象的构建与其表示分离，使得同样的构建过程可创建不同表示。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char burger[20];
    char drink[20];
} Meal;

// Builder接口，定义构建步骤
typedef struct {
    void (*buildBurger)(Meal*);
    void (*buildDrink)(Meal*);
} MealBuilder;

// 具体Builder：蔬菜套餐
void buildVegBurger(Meal* m) { strcpy(m->burger, "Veg Burger"); }
void buildCoke(Meal* m)      { strcpy(m->drink,  "Coke"); }

MealBuilder* createVegMealBuilder() {
    MealBuilder* builder = (MealBuilder*)malloc(sizeof(MealBuilder));
    builder->buildBurger = buildVegBurger;
    builder->buildDrink  = buildCoke;
    return builder;
}

// Director：指导构建流程
void constructMeal(MealBuilder* builder, Meal* meal) {
    builder->buildBurger(meal);
    builder->buildDrink(meal);
}

int main() {
    Meal meal;
    MealBuilder* vegBuilder = createVegMealBuilder();
    constructMeal(vegBuilder, &meal);

    printf("Meal: %s + %s\n", meal.burger, meal.drink);

    free(vegBuilder);
    return 0;
}
```

### Java 示例

```java
class Meal {
    private String burger;
    private String drink;
    public void setBurger(String burger) { this.burger = burger; }
    public void setDrink(String drink)   { this.drink = drink; }

    public String toString() {
        return "Meal [burger=" + burger + ", drink=" + drink + "]";
    }
}

abstract class MealBuilder {
    protected Meal meal = new Meal();
    public abstract void buildBurger();
    public abstract void buildDrink();
    public Meal getMeal() { return meal; }
}

class VegMealBuilder extends MealBuilder {
    public void buildBurger() { meal.setBurger("Veg Burger"); }
    public void buildDrink()  { meal.setDrink("Coke"); }
}

class Director {
    public Meal constructMeal(MealBuilder builder) {
        builder.buildBurger();
        builder.buildDrink();
        return builder.getMeal();
    }
}

public class BuilderDemo {
    public static void main(String[] args) {
        Director director = new Director();
        MealBuilder builder = new VegMealBuilder();
        Meal meal = director.constructMeal(builder);
        System.out.println(meal);
    }
}
```

### JavaScript 示例

```js
class Meal {
  constructor() {
    this.burger = "";
    this.drink = "";
  }
  setBurger(burger) {
    this.burger = burger;
  }
  setDrink(drink) {
    this.drink = drink;
  }
  toString() {
    return `Meal [burger=${this.burger}, drink=${this.drink}]`;
  }
}

class MealBuilder {
  constructor() {
    this.meal = new Meal();
  }
  buildBurger() {}
  buildDrink() {}
  getMeal() {
    return this.meal;
  }
}

// 具体Builder
class VegMealBuilder extends MealBuilder {
  buildBurger() {
    this.meal.setBurger("Veg Burger");
  }
  buildDrink() {
    this.meal.setDrink("Coke");
  }
}

// Director
class Director {
  construct(builder) {
    builder.buildBurger();
    builder.buildDrink();
    return builder.getMeal();
  }
}

// 测试
const director = new Director();
const vegBuilder = new VegMealBuilder();
const meal = director.construct(vegBuilder);
console.log(meal.toString());
```

------

## 4. 工厂方法模式 (Factory Method)

**意图**：定义一个创建对象的接口，让子类决定实例化哪一个类。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    void (*operation)(void);
} Product;

void productAOperation() { printf("ConcreteProductA operation.\n"); }
void productBOperation() { printf("ConcreteProductB operation.\n"); }

Product* createProductA() {
    Product* p = (Product*)malloc(sizeof(Product));
    p->operation = productAOperation;
    return p;
}
Product* createProductB() {
    Product* p = (Product*)malloc(sizeof(Product));
    p->operation = productBOperation;
    return p;
}

// 简单工厂函数，模拟“工厂方法”
Product* factoryMethod(char type) {
    if (type == 'A') return createProductA();
    else if (type == 'B') return createProductB();
    return NULL;
}

int main() {
    Product* p = factoryMethod('A');
    if (p) {
        p->operation();
        free(p);
    }
    return 0;
}
```

### Java 示例

```java
interface Product {
    void operation();
}

class ConcreteProductA implements Product {
    public void operation() {
        System.out.println("ConcreteProductA operation.");
    }
}

class ConcreteProductB implements Product {
    public void operation() {
        System.out.println("ConcreteProductB operation.");
    }
}

// 工厂方法所在的父类
abstract class Creator {
    public abstract Product factoryMethod();
    public void someOperation() {
        Product product = factoryMethod();
        product.operation();
    }
}

class ConcreteCreatorA extends Creator {
    public Product factoryMethod() {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    public Product factoryMethod() {
        return new ConcreteProductB();
    }
}

public class FactoryMethodDemo {
    public static void main(String[] args) {
        Creator creator = new ConcreteCreatorA();
        creator.someOperation();
    }
}
```

### JavaScript 示例

```js
class Product {
  operation() {}
}

class ConcreteProductA extends Product {
  operation() {
    console.log("ConcreteProductA operation.");
  }
}

class ConcreteProductB extends Product {
  operation() {
    console.log("ConcreteProductB operation.");
  }
}

class Creator {
  factoryMethod() {
    // 抽象方法，子类实现
  }
  someOperation() {
    const product = this.factoryMethod();
    product.operation();
  }
}

class ConcreteCreatorA extends Creator {
  factoryMethod() {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  factoryMethod() {
    return new ConcreteProductB();
  }
}

// 测试
const creatorA = new ConcreteCreatorA();
creatorA.someOperation();
```

------

## 5. 原型模式 (Prototype)

**意图**：用原型实例指定要创建对象的种类，通过复制这个原型来创建新对象。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Prototype {
    char name[50];
    struct Prototype* (*clone)(struct Prototype*);
} Prototype;

Prototype* clonePrototype(Prototype* p) {
    Prototype* newP = (Prototype*)malloc(sizeof(Prototype));
    strcpy(newP->name, p->name);
    newP->clone = p->clone;  // 复制函数指针
    return newP;
}

Prototype* createPrototype(const char* name) {
    Prototype* p = (Prototype*)malloc(sizeof(Prototype));
    strcpy(p->name, name);
    p->clone = clonePrototype;
    return p;
}

int main() {
    Prototype* original = createPrototype("Original");
    Prototype* copy = original->clone(original);

    printf("Original: %s\n", original->name);
    printf("Copy: %s\n", copy->name);

    free(original);
    free(copy);
    return 0;
}
```

### Java 示例

```java
class Prototype implements Cloneable {
    private String name;

    public Prototype(String name) {
        this.name = name;
    }

    @Override
    public Prototype clone() {
        try {
            return (Prototype) super.clone();
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }

    public String getName() { return name; }
}

public class PrototypeDemo {
    public static void main(String[] args) {
        Prototype p1 = new Prototype("Original");
        Prototype p2 = p1.clone();

        System.out.println("p1 name: " + p1.getName());
        System.out.println("p2 name: " + p2.getName());
    }
}
```

### JavaScript 示例

```js
function prototypeFactory(obj) {
  // 创建与原对象相同原型的空对象
  let clone = Object.create(Object.getPrototypeOf(obj));
  // 复制属性
  Object.assign(clone, JSON.parse(JSON.stringify(obj)));
  return clone;
}

const original = { name: "Original", nested: { x: 1 } };
const copy = prototypeFactory(original);

console.log("Original:", original);
console.log("Copy:", copy);
console.log("Are they the same object?", original === copy);
```

------

## 6. 适配器模式 (Adapter)

**意图**：将一个类的接口转换成客户端期望的另一种接口，使原本不兼容的类可以一起工作。

### C 示例

```c
#include <stdio.h>

// 已有接口
void existingFunction() {
    printf("Existing function.\n");
}

// 客户端想调用的目标接口
void newRequest() {
    printf("New request.\n");
}

// 简单的适配器，把newRequest翻译成existingFunction
void adapterRequest() {
    printf("Adapter translates newRequest -> existingFunction:\n");
    existingFunction();
}

int main() {
    // 模拟调用新接口，实际转换为旧接口
    adapterRequest();
    return 0;
}
```

### Java 示例

```java
// Adaptee：需要被适配的旧接口
class Adaptee {
    public void specificRequest() {
        System.out.println("Adaptee: specificRequest.");
    }
}

// Target：目标接口
interface Target {
    void request();
}

// Adapter：实现目标接口，并“内置”一个Adaptee来完成实际功能
class Adapter implements Target {
    private Adaptee adaptee;
    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    public void request() {
        System.out.println("Adapter: translating request -> specificRequest()");
        adaptee.specificRequest();
    }
}

public class AdapterDemo {
    public static void main(String[] args) {
        Adaptee old = new Adaptee();
        Target target = new Adapter(old);
        target.request();
    }
}
```

### JavaScript 示例

```js
// 旧接口
class OldAPI {
  oldMethod() {
    console.log("OldAPI: oldMethod()");
  }
}

// 新接口
class NewAPI {
  newMethod() {
    // 抽象方法
  }
}

// 适配器
class Adapter extends NewAPI {
  constructor() {
    super();
    this.oldAPI = new OldAPI();
  }
  newMethod() {
    console.log("Adapter: translate newMethod -> oldMethod");
    this.oldAPI.oldMethod();
  }
}

// 测试
const adapted = new Adapter();
adapted.newMethod();
```

------

## 7. 桥接模式 (Bridge)

**意图**：将抽象部分与它的实现部分分离，使它们可以独立变化。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>

// 实现层接口
typedef struct {
    void (*drawCircle)(double, double, double);
} DrawingAPI;

void drawCircleAPI1(double x, double y, double r) {
    printf("API1.circle at (%.2f, %.2f) radius %.2f\n", x, y, r);
}
void drawCircleAPI2(double x, double y, double r) {
    printf("API2.circle at (%.2f, %.2f) radius %.2f\n", x, y, r);
}

// 抽象层
typedef struct {
    double x, y, radius;
    DrawingAPI* api;
} Shape;

void shape_draw(Shape* s) {
    s->api->drawCircle(s->x, s->y, s->radius);
}

int main() {
    DrawingAPI api1 = { drawCircleAPI1 };
    DrawingAPI api2 = { drawCircleAPI2 };

    Shape circle1 = {1, 2, 3, &api1};
    Shape circle2 = {5, 7, 11, &api2};

    shape_draw(&circle1);
    shape_draw(&circle2);

    return 0;
}
```

### Java 示例

```java
interface DrawingAPI {
    void drawCircle(double x, double y, double radius);
}

class DrawingAPI1 implements DrawingAPI {
    public void drawCircle(double x, double y, double radius) {
        System.out.println("API1.circle at (" + x + "," + y + ") radius " + radius);
    }
}

class DrawingAPI2 implements DrawingAPI {
    public void drawCircle(double x, double y, double radius) {
        System.out.println("API2.circle at (" + x + "," + y + ") radius " + radius);
    }
}

// 抽象层
abstract class Shape {
    protected DrawingAPI drawingAPI;
    protected Shape(DrawingAPI drawingAPI) {
        this.drawingAPI = drawingAPI;
    }
    public abstract void draw();
}

class CircleShape extends Shape {
    private double x, y, radius;
    public CircleShape(double x, double y, double radius, DrawingAPI api) {
        super(api);
        this.x = x; this.y = y; this.radius = radius;
    }
    public void draw() {
        drawingAPI.drawCircle(x, y, radius);
    }
}

public class BridgeDemo {
    public static void main(String[] args) {
        Shape circle1 = new CircleShape(1, 2, 3, new DrawingAPI1());
        Shape circle2 = new CircleShape(5, 7, 11, new DrawingAPI2());

        circle1.draw();
        circle2.draw();
    }
}
```

### JavaScript 示例

```js
class DrawingAPI1 {
  drawCircle(x, y, radius) {
    console.log(`API1.circle at (${x},${y}) radius ${radius}`);
  }
}
class DrawingAPI2 {
  drawCircle(x, y, radius) {
    console.log(`API2.circle at (${x},${y}) radius ${radius}`);
  }
}

class Shape {
  constructor(drawingAPI) {
    this.drawingAPI = drawingAPI;
  }
  draw() {}
}

class CircleShape extends Shape {
  constructor(x, y, radius, drawingAPI) {
    super(drawingAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw() {
    this.drawingAPI.drawCircle(this.x, this.y, this.radius);
  }
}

// 测试
const circle1 = new CircleShape(1, 2, 3, new DrawingAPI1());
const circle2 = new CircleShape(5, 7, 11, new DrawingAPI2());
circle1.draw();
circle2.draw();
```

------

## 8. 装饰者模式 (Decorator)

**意图**：动态地给对象添加一些额外职责，比子类更灵活。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct Component {
    void (*operation)(struct Component*);
} Component;

// 具体组件
void concreteOperation(Component* c) {
    printf("Concrete Component operation.\n");
}

Component* createConcreteComponent() {
    Component* c = (Component*)malloc(sizeof(Component));
    c->operation = concreteOperation;
    return c;
}

// 装饰者结构
typedef struct {
    Component base;
    Component* wrapped;
} Decorator;

void decoratorOperation(Component* c) {
    Decorator* d = (Decorator*)c;
    printf("Decorator before.\n");
    d->wrapped->operation(d->wrapped);
    printf("Decorator after.\n");
}

Component* createDecorator(Component* comp) {
    Decorator* d = (Decorator*)malloc(sizeof(Decorator));
    d->base.operation = decoratorOperation;
    d->wrapped = comp;
    return (Component*)d;
}

int main() {
    Component* comp = createConcreteComponent();
    Component* deco = createDecorator(comp);

    deco->operation(deco);

    free(deco);
    free(comp);
    return 0;
}
```

### Java 示例

```java
interface Component {
    void operation();
}

class ConcreteComponent implements Component {
    public void operation() {
        System.out.println("ConcreteComponent operation.");
    }
}

abstract class Decorator implements Component {
    protected Component wrapped;
    public Decorator(Component c) {
        wrapped = c;
    }
}

class ConcreteDecorator extends Decorator {
    public ConcreteDecorator(Component c) {
        super(c);
    }
    public void operation() {
        System.out.println("Decorator before.");
        wrapped.operation();
        System.out.println("Decorator after.");
    }
}

public class DecoratorDemo {
    public static void main(String[] args) {
        Component c = new ConcreteDecorator(new ConcreteComponent());
        c.operation();
    }
}
```

### JavaScript 示例

```js
class Component {
  operation() {}
}

class ConcreteComponent extends Component {
  operation() {
    console.log("ConcreteComponent operation.");
  }
}

class Decorator extends Component {
  constructor(component) {
    super();
    this.component = component;
  }
  operation() {
    console.log("Decorator before.");
    this.component.operation();
    console.log("Decorator after.");
  }
}

// 测试
const decorated = new Decorator(new ConcreteComponent());
decorated.operation();
```

------

## 9. 组合模式 (Composite)

**意图**：将对象组合成树形结构以表示“部分-整体”的层次结构，让客户端对单个对象和组合对象的使用具有一致性。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct Component {
    void (*operation)(struct Component*);
    struct Component** children;
    int childCount;
} Component;

void leafOperation(Component* c) {
    printf("Leaf operation.\n");
}

Component* createLeaf() {
    Component* c = (Component*)malloc(sizeof(Component));
    c->operation = leafOperation;
    c->children = NULL;
    c->childCount = 0;
    return c;
}

// 组合节点的 operation
void compositeOperation(Component* c) {
    printf("Composite operation start.\n");
    for (int i = 0; i < c->childCount; i++) {
        c->children[i]->operation(c->children[i]);
    }
    printf("Composite operation end.\n");
}

Component* createComposite() {
    Component* c = (Component*)malloc(sizeof(Component));
    c->operation = compositeOperation;
    c->children = (Component**)malloc(sizeof(Component*) * 10);
    c->childCount = 0;
    return c;
}

void addChild(Component* parent, Component* child) {
    parent->children[parent->childCount++] = child;
}

int main() {
    Component* root = createComposite();
    addChild(root, createLeaf());
    addChild(root, createLeaf());

    Component* sub = createComposite();
    addChild(sub, createLeaf());
    addChild(root, sub);

    root->operation(root);

    // (略) 释放内存
    return 0;
}
```

### Java 示例

```java
interface Component {
    void operation();
}

class Leaf implements Component {
    public void operation() {
        System.out.println("Leaf operation.");
    }
}

class Composite implements Component {
    private java.util.List<Component> children = new java.util.ArrayList<>();
    public void operation() {
        System.out.println("Composite operation start.");
        for (Component c : children) {
            c.operation();
        }
        System.out.println("Composite operation end.");
    }
    public void add(Component c) {
        children.add(c);
    }
}

public class CompositeDemo {
    public static void main(String[] args) {
        Composite root = new Composite();
        root.add(new Leaf());
        root.add(new Leaf());

        Composite sub = new Composite();
        sub.add(new Leaf());
        root.add(sub);

        root.operation();
    }
}
```

### JavaScript 示例

```js
class Component {
  operation() {}
}

class Leaf extends Component {
  operation() {
    console.log("Leaf operation.");
  }
}

class Composite extends Component {
  constructor() {
    super();
    this.children = [];
  }
  operation() {
    console.log("Composite operation start.");
    this.children.forEach(child => child.operation());
    console.log("Composite operation end.");
  }
  add(component) {
    this.children.push(component);
  }
}

// 测试
const root = new Composite();
root.add(new Leaf());
root.add(new Leaf());
const sub = new Composite();
sub.add(new Leaf());
root.add(sub);
root.operation();
```

------

## 10. 外观模式 (Facade)

**意图**：为子系统中的一组接口提供一个一致的界面，简化对子系统的访问。

### C 示例

```c
#include <stdio.h>

void subsystemA() { printf("Subsystem A\n"); }
void subsystemB() { printf("Subsystem B\n"); }

// Facade 对外提供简单调用
void facadeOperation() {
    printf("Facade operation:\n");
    subsystemA();
    subsystemB();
}

int main() {
    facadeOperation();
    return 0;
}
```

### Java 示例

```java
class SubsystemA {
    public void doA() { System.out.println("Subsystem A"); }
}

class SubsystemB {
    public void doB() { System.out.println("Subsystem B"); }
}

class Facade {
    private SubsystemA a = new SubsystemA();
    private SubsystemB b = new SubsystemB();

    public void operation() {
        System.out.println("Facade operation:");
        a.doA();
        b.doB();
    }
}

public class FacadeDemo {
    public static void main(String[] args) {
        Facade facade = new Facade();
        facade.operation();
    }
}
```

### JavaScript 示例

```js
class SubsystemA {
  doA() {
    console.log("Subsystem A");
  }
}
class SubsystemB {
  doB() {
    console.log("Subsystem B");
  }
}

class Facade {
  constructor() {
    this.a = new SubsystemA();
    this.b = new SubsystemB();
  }
  operation() {
    console.log("Facade operation:");
    this.a.doA();
    this.b.doB();
  }
}

// 测试
const facade = new Facade();
facade.operation();
```

------

## 11. 享元模式 (Flyweight)

**意图**：运用共享技术来支持大量细粒度对象，减少内存消耗。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char intrinsicState[20];
} Flyweight;

Flyweight* createFlyweight(const char* state) {
    Flyweight* f = (Flyweight*)malloc(sizeof(Flyweight));
    strcpy(f->intrinsicState, state);
    return f;
}

#define MAX_FLYWEIGHTS 10
Flyweight* flyweights[MAX_FLYWEIGHTS];
int count = 0;

Flyweight* getFlyweight(const char* key) {
    for(int i = 0; i < count; i++) {
        if(strcmp(flyweights[i]->intrinsicState, key) == 0) {
            return flyweights[i];
        }
    }
    // 未找到，则创建并加入数组
    flyweights[count] = createFlyweight(key);
    return flyweights[count++];
}

int main() {
    Flyweight* f1 = getFlyweight("StateA");
    Flyweight* f2 = getFlyweight("StateA");
    printf("f1 == f2 ? %s\n", (f1 == f2) ? "Yes" : "No");
    return 0;
}
```

### Java 示例

```java
import java.util.HashMap;
import java.util.Map;

class Flyweight {
    private String intrinsicState;
    public Flyweight(String state) {
        this.intrinsicState = state;
    }
    public String getState() {
        return intrinsicState;
    }
}

class FlyweightFactory {
    private static Map<String, Flyweight> pool = new HashMap<>();
    public static Flyweight getFlyweight(String key) {
        if (!pool.containsKey(key)) {
            pool.put(key, new Flyweight(key));
        }
        return pool.get(key);
    }
}

public class FlyweightDemo {
    public static void main(String[] args) {
        Flyweight f1 = FlyweightFactory.getFlyweight("A");
        Flyweight f2 = FlyweightFactory.getFlyweight("A");
        System.out.println("f1 == f2 ? " + (f1 == f2));
    }
}
```

### JavaScript 示例

```js
class Flyweight {
  constructor(key) {
    this.key = key;
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }
  getFlyweight(key) {
    if (!this.flyweights[key]) {
      this.flyweights[key] = new Flyweight(key);
    }
    return this.flyweights[key];
  }
}

// 测试
const factory = new FlyweightFactory();
const f1 = factory.getFlyweight("X");
const f2 = factory.getFlyweight("X");
console.log("f1 === f2 ?", f1 === f2);
```

------

## 12. 代理模式 (Proxy)

**意图**：为其他对象提供一种代理，以便在访问对象时可加入额外控制或功能。

### C 示例

```c
#include <stdio.h>

// 实际目标
void realSubjectRequest() {
    printf("RealSubject: Handling request.\n");
}

// 代理，根据条件控制对realSubject的访问
void proxyRequest(int auth) {
    if (auth) {
        realSubjectRequest();
    } else {
        printf("Proxy: Access denied.\n");
    }
}

int main() {
    proxyRequest(1); // 有权限
    proxyRequest(0); // 无权限
    return 0;
}
```

### Java 示例

```java
interface Subject {
    void request();
}

class RealSubject implements Subject {
    public void request() {
        System.out.println("RealSubject: Handling request.");
    }
}

class ProxySubject implements Subject {
    private RealSubject realSubject = new RealSubject();
    private boolean authenticated;

    public ProxySubject(boolean auth) {
        this.authenticated = auth;
    }

    public void request() {
        if (authenticated) {
            realSubject.request();
        } else {
            System.out.println("Proxy: Access denied.");
        }
    }
}

public class ProxyDemo {
    public static void main(String[] args) {
        Subject proxy1 = new ProxySubject(true);
        proxy1.request();

        Subject proxy2 = new ProxySubject(false);
        proxy2.request();
    }
}
```

### JavaScript 示例

```js
class RealSubject {
  request() {
    console.log("RealSubject: Handling request.");
  }
}

class ProxySubject {
  constructor(auth) {
    this.auth = auth;
    this.realSubject = new RealSubject();
  }
  request() {
    if (this.auth) {
      this.realSubject.request();
    } else {
      console.log("Proxy: Access denied.");
    }
  }
}

// 测试
const proxy1 = new ProxySubject(true);
proxy1.request();

const proxy2 = new ProxySubject(false);
proxy2.request();
```

------

## 13. 模版方法模式 (Template Method)

**意图**：定义一个操作中的算法骨架，而将一些步骤延迟到子类中去实现。

### C 示例（简单示意）

```c
#include <stdio.h>

void baseAlgorithm() {
    printf("Step1\n");
    printf("Step2\n");
    // 可在此插入钩子函数等
    printf("Step3\n");
}

int main() {
    baseAlgorithm();
    return 0;
}
```

### Java 示例

```java
abstract class AbstractClass {
    // 模板方法
    public final void templateMethod() {
        step1();
        step2();
        hook();
        step3();
    }

    void step1() { System.out.println("Step1"); }
    void step2() { System.out.println("Step2"); }
    void step3() { System.out.println("Step3"); }

    // 可被子类覆盖的“钩子”
    void hook() {}
}

class ConcreteClass extends AbstractClass {
    @Override
    void hook() {
        System.out.println("ConcreteClass hook.");
    }
}

public class TemplateMethodDemo {
    public static void main(String[] args) {
        AbstractClass c = new ConcreteClass();
        c.templateMethod();
    }
}
```

### JavaScript 示例

```js
class AbstractClass {
  templateMethod() {
    this.step1();
    this.step2();
    this.hook();
    this.step3();
  }
  step1() { console.log("Step1"); }
  step2() { console.log("Step2"); }
  step3() { console.log("Step3"); }
  // 可在子类中重写
  hook() {}
}

class ConcreteClass extends AbstractClass {
  hook() {
    console.log("ConcreteClass hook.");
  }
}

// 测试
const c = new ConcreteClass();
c.templateMethod();
```

------

## 14. 命令模式 (Command)

**意图**：将请求封装为对象，使得可以用不同请求参数化客户端，支持撤销、排队等功能。

### C 示例

```c
#include <stdio.h>
#include <stdlib.h>

typedef void (*Command)(void);

void action() {
    printf("Receiver action executed.\n");
}

// 调用者只需要执行Command
void executeCommand(Command cmd) {
    cmd();
}

int main() {
    Command cmd = action;
    executeCommand(cmd);
    return 0;
}
```

### Java 示例

```java
interface Command {
    void execute();
}

class Receiver {
    public void action() {
        System.out.println("Receiver action.");
    }
}

class ConcreteCommand implements Command {
    private Receiver receiver;
    public ConcreteCommand(Receiver r) {
        this.receiver = r;
    }
    public void execute() {
        receiver.action();
    }
}

public class CommandDemo {
    public static void main(String[] args) {
        Receiver receiver = new Receiver();
        Command cmd = new ConcreteCommand(receiver);
        cmd.execute();
    }
}
```

### JavaScript 示例

```js
class Receiver {
  action() {
    console.log("Receiver action.");
  }
}

class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.action();
  }
}

// 测试
const receiver = new Receiver();
const cmd = new Command(receiver);
cmd.execute();
```

------

## 15. 迭代器模式 (Iterator)

**意图**：提供一种方法顺序访问聚合对象，而不暴露其内部结构。

### C 示例

```c
#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr)/sizeof(arr[0]);

    for(int i=0; i < size; i++) {
        printf("%d\n", arr[i]);
    }
    return 0;
}
```

> 在 C 中常用数组、指针完成遍历，本质上也是一种迭代器思想。

### Java 示例

```java
import java.util.*;

public class IteratorDemo {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "C");
        Iterator<String> it = list.iterator();
        while(it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
```

### JavaScript 示例

```js
const array = ["A", "B", "C"];
const iterator = array[Symbol.iterator]();

let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
```

------

## 16. 观察者模式 (Observer)

**意图**：定义对象间的一种一对多依赖，当一个对象状态改变时，所有依赖者自动收到通知并更新。

### C 示例

```c
#include <stdio.h>
#define MAX_OBSERVERS 10

typedef void (*Observer)(int);

Observer observers[MAX_OBSERVERS];
int observerCount = 0;

void addObserver(Observer obs) {
    observers[observerCount++] = obs;
}

void notifyObservers(int data) {
    for(int i = 0; i < observerCount; i++) {
        observers[i](data);
    }
}

// 两个具体观察者
void observerA(int data) {
    printf("ObserverA notified: %d\n", data);
}

void observerB(int data) {
    printf("ObserverB notified: %d\n", data);
}

int main() {
    addObserver(observerA);
    addObserver(observerB);

    notifyObservers(42);

    return 0;
}
```

### Java 示例

```java
import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(int data);
}

class ConcreteObserver implements Observer {
    private String name;
    public ConcreteObserver(String name) {
        this.name = name;
    }
    public void update(int data) {
        System.out.println(name + " notified with data: " + data);
    }
}

class Subject {
    private List<Observer> observers = new ArrayList<>();
    public void addObserver(Observer o) {
        observers.add(o);
    }
    public void notifyAllObservers(int data) {
        for (Observer o : observers) {
            o.update(data);
        }
    }
}

public class ObserverDemo {
    public static void main(String[] args) {
        Subject subject = new Subject();
        subject.addObserver(new ConcreteObserver("Obs1"));
        subject.addObserver(new ConcreteObserver("Obs2"));

        subject.notifyAllObservers(42);
    }
}
```

### JavaScript 示例

```js
class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  notify(data) {
    this.observers.forEach(o => o.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(`${this.name} notified with data: ${data}`);
  }
}

// 测试
const subject = new Subject();
subject.addObserver(new Observer("Obs1"));
subject.addObserver(new Observer("Obs2"));

subject.notify(42);
```

------

## 17. 中介者模式 (Mediator)

**意图**：用一个中介对象来封装对象间的交互，使对象之间不需显式地互相引用。

### C 示例（极简示意）

```c
#include <stdio.h>

// 简单地将发送者与接收者交互放在mediator函数中
void mediator(const char* sender, const char* message) {
    printf("Mediator: %s says '%s'\n", sender, message);
}

int main() {
    mediator("User1", "Hello!");
    mediator("User2", "Hi!");
    return 0;
}
```

### Java 示例

```java
import java.util.ArrayList;
import java.util.List;

class Mediator {
    private List<Colleague> colleagues = new ArrayList<>();
    public void register(Colleague c) {
        colleagues.add(c);
    }
    public void relay(Colleague sender, String message) {
        for (Colleague c : colleagues) {
            if (c != sender) {
                c.receive(message);
            }
        }
    }
}

abstract class Colleague {
    protected Mediator mediator;
    public Colleague(Mediator m) {
        mediator = m;
    }
    public void send(String msg) {
        mediator.relay(this, msg);
    }
    public abstract void receive(String msg);
}

class ConcreteColleague extends Colleague {
    private String name;
    public ConcreteColleague(String name, Mediator m) {
        super(m);
        this.name = name;
    }
    public void receive(String msg) {
        System.out.println(name + " received: " + msg);
    }
}

public class MediatorDemo {
    public static void main(String[] args) {
        Mediator m = new Mediator();
        Colleague c1 = new ConcreteColleague("Colleague1", m);
        Colleague c2 = new ConcreteColleague("Colleague2", m);
        m.register(c1);
        m.register(c2);

        c1.send("Hello from c1");
    }
}
```

### JavaScript 示例

```js
class Mediator {
  constructor() {
    this.colleagues = [];
  }
  register(colleague) {
    this.colleagues.push(colleague);
  }
  relay(sender, message) {
    this.colleagues.forEach(c => {
      if (c !== sender) {
        c.receive(message);
      }
    });
  }
}

class Colleague {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }
  send(message) {
    this.mediator.relay(this, message);
  }
  receive(message) {
    console.log(`${this.name} received: ${message}`);
  }
}

// 测试
const mediator = new Mediator();
const c1 = new Colleague("Colleague1", mediator);
const c2 = new Colleague("Colleague2", mediator);
mediator.register(c1);
mediator.register(c2);

c1.send("Hello from c1");
```

------

## 18. 备忘录模式 (Memento)

**意图**：在不破坏封装性的前提下，捕获对象内部状态，并在外部保存，使以后可恢复到该状态。

### C 示例

```c
#include <stdio.h>

int main() {
    int state = 10;
    // 将当前 state 保存为“备忘录”
    int savedState = state;

    // 状态改变
    state = 20;

    // 恢复状态
    state = savedState;
    printf("Restored state: %d\n", state);

    return 0;
}
```

### Java 示例

```java
class Memento {
    private String state;
    public Memento(String state) {
        this.state = state;
    }
    public String getState() {
        return state;
    }
}

class Originator {
    private String state;
    public void setState(String state) {
        this.state = state;
    }
    public Memento saveToMemento() {
        return new Memento(state);
    }
    public void restoreFromMemento(Memento m) {
        state = m.getState();
    }
    public String getState() {
        return state;
    }
}

public class MementoDemo {
    public static void main(String[] args) {
        Originator origin = new Originator();
        origin.setState("State1");
        Memento m = origin.saveToMemento();

        origin.setState("State2");
        origin.restoreFromMemento(m);

        System.out.println("Restored: " + origin.getState());
    }
}
```

### JavaScript 示例

```js
class Memento {
  constructor(state) {
    this.state = state;
  }
}

class Originator {
  constructor() {
    this.state = "";
  }
  setState(state) {
    this.state = state;
  }
  save() {
    return new Memento(this.state);
  }
  restore(memento) {
    this.state = memento.state;
  }
}

// 测试
const origin = new Originator();
origin.setState("State1");
const saved = origin.save();
origin.setState("State2");

// 恢复
origin.restore(saved);
console.log("Restored state:", origin.state);
```

------

## 19. 解释器模式 (Interpreter)

**意图**：给定一种语言，定义其文法，并建立一个解释器来使用该文法来解释句子。

### C 示例（简化数字解析）

```c
#include <stdio.h>
#include <stdlib.h>

int interpretNumber(const char* expr) {
    return atoi(expr); // 简易示例，把字符串转为整数
}

int main() {
    printf("Interpret '123': %d\n", interpretNumber("123"));
    return 0;
}
```

### Java 示例

```java
interface Expression {
    int interpret();
}

// 数字表达式
class NumberExpression implements Expression {
    private int number;
    public NumberExpression(int number) {
        this.number = number;
    }
    public int interpret() {
        return number;
    }
}

public class InterpreterDemo {
    public static void main(String[] args) {
        Expression expr = new NumberExpression(42);
        System.out.println("Interpret result: " + expr.interpret());
    }
}
```

### JavaScript 示例

```js
class NumberExpression {
  constructor(value) {
    this.value = value;
  }
  interpret() {
    return this.value;
  }
}

const expr = new NumberExpression(42);
console.log("Interpret result:", expr.interpret());
```

------

## 20. 状态模式 (State)

**意图**：允许对象在内部状态改变时改变其行为，看起来好像修改了它的类。

### C 示例

```c
#include <stdio.h>

void stateA() {
    printf("State A.\n");
}
void stateB() {
    printf("State B.\n");
}

int main() {
    // 用函数指针指示当前状态
    void (*currentState)(void) = stateA;
    currentState();

    // 切换状态
    currentState = stateB;
    currentState();

    return 0;
}
```

### Java 示例

```java
interface State {
    void handle();
}

class ConcreteStateA implements State {
    public void handle() {
        System.out.println("State A handle.");
    }
}

class ConcreteStateB implements State {
    public void handle() {
        System.out.println("State B handle.");
    }
}

class Context {
    private State state;
    public Context(State s) {
        state = s;
    }
    public void setState(State s) {
        state = s;
    }
    public void request() {
        state.handle();
    }
}

public class StateDemo {
    public static void main(String[] args) {
        Context ctx = new Context(new ConcreteStateA());
        ctx.request();
        ctx.setState(new ConcreteStateB());
        ctx.request();
    }
}
```

### JavaScript 示例

```js
class State {
  handle() {}
}

class StateA extends State {
  handle() {
    console.log("State A handle.");
  }
}

class StateB extends State {
  handle() {
    console.log("State B handle.");
  }
}

class Context {
  constructor(state) {
    this.state = state;
  }
  setState(state) {
    this.state = state;
  }
  request() {
    this.state.handle();
  }
}

// 测试
const ctx = new Context(new StateA());
ctx.request();
ctx.setState(new StateB());
ctx.request();
```

------

## 21. 策略模式 (Strategy)

**意图**：定义一系列算法，把它们分别封装起来并可相互替换。

### C 示例

```c
#include <stdio.h>

typedef int (*Strategy)(int, int);

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

int main() {
    Strategy strategy = add;
    printf("Add: %d\n", strategy(2,3));

    strategy = multiply;
    printf("Multiply: %d\n", strategy(2,3));
    return 0;
}
```

### Java 示例

```java
interface Strategy {
    int doOperation(int a, int b);
}

class AddStrategy implements Strategy {
    public int doOperation(int a, int b) {
        return a + b;
    }
}

class MultiplyStrategy implements Strategy {
    public int doOperation(int a, int b) {
        return a * b;
    }
}

public class StrategyDemo {
    public static void main(String[] args) {
        Strategy s = new AddStrategy();
        System.out.println("Add: " + s.doOperation(2, 3));

        s = new MultiplyStrategy();
        System.out.println("Multiply: " + s.doOperation(2, 3));
    }
}
```

### JavaScript 示例

```js
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

// 测试
let strategy = add;
console.log("Add:", strategy(2, 3));

strategy = multiply;
console.log("Multiply:", strategy(2, 3));
```

------

## 22. 职责链模式 (Chain of Responsibility)

**意图**：使多个对象都有机会处理请求，从而避免请求的发送者与接收者之间的耦合。

### C 示例

```c
#include <stdio.h>

int handlerA(int request) {
    if (request < 10) {
        printf("HandlerA handles %d\n", request);
        return 1;
    }
    return 0;
}

int handlerB(int request) {
    if (request < 20) {
        printf("HandlerB handles %d\n", request);
        return 1;
    }
    return 0;
}

void processRequest(int request) {
    if (handlerA(request)) return;
    if (handlerB(request)) return;
    printf("No handler for %d\n", request);
}

int main() {
    processRequest(5);
    processRequest(15);
    processRequest(25);
    return 0;
}
```

### Java 示例

```java
abstract class Handler {
    protected Handler next;
    public void setNext(Handler h) {
        next = h;
    }
    public abstract void handleRequest(int request);
}

class ConcreteHandlerA extends Handler {
    public void handleRequest(int request) {
        if (request < 10) {
            System.out.println("HandlerA handles " + request);
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}

class ConcreteHandlerB extends Handler {
    public void handleRequest(int request) {
        if (request < 20) {
            System.out.println("HandlerB handles " + request);
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}

public class ChainDemo {
    public static void main(String[] args) {
        Handler a = new ConcreteHandlerA();
        Handler b = new ConcreteHandlerB();
        a.setNext(b);

        a.handleRequest(5);
        a.handleRequest(15);
        a.handleRequest(25);
    }
}
```

### JavaScript 示例

```js
class Handler {
  setNext(next) {
    this.next = next;
  }
  handleRequest(request) {}
}

class HandlerA extends Handler {
  handleRequest(request) {
    if (request < 10) {
      console.log("HandlerA handles", request);
    } else if (this.next) {
      this.next.handleRequest(request);
    }
  }
}

class HandlerB extends Handler {
  handleRequest(request) {
    if (request < 20) {
      console.log("HandlerB handles", request);
    } else if (this.next) {
      this.next.handleRequest(request);
    }
  }
}

// 测试
const a = new HandlerA();
const b = new HandlerB();
a.setNext(b);

a.handleRequest(5);
a.handleRequest(15);
a.handleRequest(25);
```

------

## 23. 访问者模式 (Visitor)

**意图**：在不改变对象类的前提下，向对象结构中添加新功能。

### C 示例（极简示意）

```c
#include <stdio.h>

// 仅示意用一个函数指针当做“访问者”
typedef struct {
    void (*visit)(int);
} Visitor;

void visitElement(int val) {
    printf("Visiting element with value %d\n", val);
}

int main() {
    Visitor v = { visitElement };
    v.visit(42);
    return 0;
}
```

### Java 示例

```java
interface Visitor {
    void visit(ConcreteElementA a);
    void visit(ConcreteElementB b);
}

interface Element {
    void accept(Visitor v);
}

class ConcreteElementA implements Element {
    public void accept(Visitor v) {
        v.visit(this);
    }
    public void operationA() {
        System.out.println("A");
    }
}

class ConcreteElementB implements Element {
    public void accept(Visitor v) {
        v.visit(this);
    }
    public void operationB() {
        System.out.println("B");
    }
}

class ConcreteVisitor implements Visitor {
    public void visit(ConcreteElementA a) {
        System.out.print("Visitor visits A -> ");
        a.operationA();
    }
    public void visit(ConcreteElementB b) {
        System.out.print("Visitor visits B -> ");
        b.operationB();
    }
}

public class VisitorDemo {
    public static void main(String[] args) {
        Element[] elements = { new ConcreteElementA(), new ConcreteElementB() };
        Visitor visitor = new ConcreteVisitor();
        for (Element e : elements) {
            e.accept(visitor);
        }
    }
}
```

### JavaScript 示例

```js
class ElementA {
  accept(visitor) {
    visitor.visitElementA(this);
  }
  operationA() {
    console.log("A");
  }
}

class ElementB {
  accept(visitor) {
    visitor.visitElementB(this);
  }
  operationB() {
    console.log("B");
  }
}

class Visitor {
  visitElementA(element) {
    console.log("Visiting ElementA:");
    element.operationA();
  }
  visitElementB(element) {
    console.log("Visiting ElementB:");
    element.operationB();
  }
}

// 测试
const elements = [new ElementA(), new ElementB()];
const visitor = new Visitor();
elements.forEach(e => e.accept(visitor));
```

------

## 总结

以上示例展示了 **23 种经典 GoF 设计模式** 的最简化实现，涵盖了 **C、Java、JavaScript** 三种不同语言的风格与实现方式。需要注意：

1. **C 语言** 并没有原生的“类”概念，通常通过结构体 + 函数指针来模拟面向对象；某些模式在 C 中仅能演示核心思想。
2. **Java** 由于是典型的面向对象语言，示例更符合 GoF 书中的经典形式，尤其像 **抽象类、接口、继承、多态** 等机制实现较为直接。
3. **JavaScript** 支持基于原型的 OOP 或者函数式编程。示例中多使用 **ES6 Class** 语法，但在实际中也可利用闭包或原型链特性来实现类似设计思想。

在真实项目中，应根据业务需求和语言特性对模式进行裁剪、优化或组合；不必机械地照搬示例，而是注重理解每个设计模式背后的 **意图** 与 **原则**，再针对性地应用到实际场景中。希望这些代码片段能为你提供一个快速上手或参考的基础。祝学习与开发顺利!











------ ------ ------

------ ------ ------

------ ------ ------


| 序号 | **模式名称**                                | **定义（修订版）**                                           | **要点（补充说明）**                                         | **适用场景**                                                 |
| ---- | ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | **单例模式 (Singleton Pattern)**            | **确保一个类只有一个实例，并提供一个全局访问点**。           | - 常通过在类中维持一个**私有静态变量**来保存唯一实例，构造器通常为 `private`。- 考虑 **线程安全**（双重检查锁定、内部静态类等）及 **惰性加载**（或饿汉式）。- 虽然提供了全局可访问性，但也要注意可能带来**过度耦合**及**可测试性**问题。 | - **配置管理**、**日志记录**、**资源访问类**、浏览器/应用程序中的**全局状态管理**等。- 当确实需要在系统中只存在一个对象时（如全局缓存、唯一序列号生成器等）。 |
| 2    | **抽象工厂模式 (Abstract Factory Pattern)** | **提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们的具体类**。 | - 常用于创建属于同一个“**产品族**”的对象，这些对象往往功能或主题相关。- 通过不同具体工厂实现类，可切换不同的产品族（如不同平台 UI、不同主题组件等）。- 与 **工厂方法模式** 相比，能同时处理**多种产品类型**的创建。 | - **跨平台 UI 库**（如不同操作系统下的控件创建）、**不同主题风格组件**。- 当产品之间存在相互依赖关系、且需要由同一工厂确保它们适配或兼容时，使用抽象工厂最为合适。 |
| 3    | **建造者模式 (Builder Pattern)**            | **将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示**。 | - 引入一个“**指挥者（Director）**”来按一定顺序组装对象；不同“**建造者（Builder）**”可定制不同部件组合得到不同产品。- 典型适用场景：需要**有序**地创建大型复杂对象，且希望构建过程和部件组装能灵活可定制。- 能减少复杂对象构造时的**重复代码**并**隐藏复杂度**。 | - **复杂文档解析生成**（HTML、PDF 等不同输出格式）、**游戏角色创建**（同一流程但可选不同外观或装备）。- 任何需要根据不同需求组合不同“部件”的复杂对象构建，如“定制电脑配置”、“定制菜单/套餐”等。 |
| 4    | **工厂方法模式 (Factory Method Pattern)**   | **定义一个用于创建对象的接口，让子类决定将哪一个具体类实例化，使对象的实例化延迟到子类**。 | - 父类定义一个抽象“工厂方法”用于创建产品对象，子类实现该方法来生成具体产品。- 避免在父类中**硬编码**具体对象类型，符合“开闭原则”。- 常用于框架中，父类提供公共逻辑，子类根据需求生成不同对象，也便于扩展新类型。 | - 当**父类**想要把**对象创建的决定权**交给**子类**，又不想自己依赖具体类型时。- **插件式**开发、**回调**或**钩子**风格的框架场景中，允许用户自定义产品或继承框架来创建合适的对象。 |
| 5    | **原型模式 (Prototype Pattern)**            | **用原型实例指定创建对象的种类，并通过复制（克隆）该原型来创建新的对象**。 | - 关键在于实现 `clone()` 方法（可能是浅拷贝或深拷贝）。- 避免反复执行**复杂对象初始化**，提高创建效率。- 注意对引用类型属性是否需要深度克隆，以免共享带来副作用。 | - **需要大量相似对象**（并且初始化成本高）的场景，例如**原型模板**、**大型游戏场景中的元素**。- 无法直接通过 `new` 进行对象复制，或类构造逻辑复杂/受限时，通过原型克隆更为快捷。 |

| 序号 | **模式名称**                       | **定义（修订版）**                                           | **要点（补充说明）**                                         | **适用场景**                                                 |
| ---- | ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | **适配器模式 (Adapter Pattern)**   | **将一个类的接口转换为客户期望的另一个接口，使得原本由于接口不兼容而无法协同工作的类可以协同工作**。 | - 核心思路是**接口转换**与**封装**。- 可分为**类适配器**（利用多重继承/接口）和**对象适配器**（通过组合被适配对象来实现）。- 适用于**整合第三方库**或将**旧接口**与**新接口**互相兼容。 | - **系统需要整合不兼容的第三方库**或做**老系统**与**新系统**之间的兼容时。- 需要在不修改原有类的前提下“转换”其接口以适配新需求。 |
| 2    | **桥接模式 (Bridge Pattern)**      | **将抽象部分与实现部分分离，使它们可以独立地变化**。         | - 通过在**抽象层**和**实现层**分别使用继承体系，并用**聚合**耦合这两层，避免在单一继承体系里膨胀。- 常用于应对“多维度变化”导致类爆炸的情况（如形状与颜色、平台与功能等）。- 典型场景：**跨平台 UI**、**图形渲染**，让“抽象”和“实现”各自独立扩展。 | - **图形渲染**、**跨平台界面开发**等多维度变化场景，尤其需要“抽象”与“实现”分别演化。- 当一个类有多个变化维度且都需要独立扩展时，可通过桥接模式避免类爆炸。 |
| 3    | **装饰者模式 (Decorator Pattern)** | **动态地给一个对象添加额外的职责（功能），通过组合而非继承来实现功能扩展**。 | - 使用“装饰”类对被装饰对象**进行包裹**（组合）。- 可在**运行时**按需添加或移除装饰，避免了继承导致的子类膨胀。- 常用于为**GUI 组件**添加滚动条、边框等功能，或为某核心逻辑添加**日志、监控**等。 | - 在**不影响其他对象**的情况下，**动态地增加功能**或职责，如：GUI 中为基础组件添加滚动条、边框，或者给业务逻辑增强日志、安全校验等。- 当继承层次过深且只需要给对象临时附加一些功能时，装饰者比创建新子类更灵活。 |
| 4    | **组合模式 (Composite Pattern)**   | **将对象组合成树形结构以表示部分-整体层次，使客户端对单个对象与组合对象的使用具有一致性**。 | - 对叶子节点和容器节点提供统一接口（透明性），无需在客户端区分是单个对象还是组合。- 常见例子：**文件系统**、**UI 组件树**，文件与文件夹可执行相同操作。- 适合处理**树状或分层结构**并进行递归调用。 | - 当系统存在**层次结构**（如菜单、文件夹等）并且需要**统一处理**叶子节点和组合节点时，组合模式非常适用。- **图形编辑器、UI 组件树**等需要对“部分”和“整体”一样对待的场景。 |
| 5    | **外观模式 (Facade Pattern)**      | **为子系统中的一组接口提供一个一致的对外接口（高层接口），使子系统更易于使用**。 | - 在**复杂子系统**基础上，对外提供一个“门面”或“统一入口”，隐藏底层实现细节。- 减少了客户端直接与子系统的交互，从而**降低耦合**。- 常见于大型系统架构中，为其他系统或外部提供一个简洁的接口，也便于后期扩展和维护。 | - **为复杂子系统提供简单接口**，如多模块后台系统对外只暴露一个接口层/网关。- 当需要**精简**子系统的**访问**方式、或**降低**客户端对子系统的**依赖**时。 |
| 6    | **享元模式 (Flyweight Pattern)**   | **运用共享技术来支持大量细粒度对象，减少内存消耗和对象创建开销**。 | - 将对象的**可共享部分(内部状态)\**与\**不可共享部分(外部状态)\**分离；可共享的内部状态集中存储和复用。- 在需要\**大量重复对象**时显著降低内存消耗。- 典型实现中会有一个**享元工厂**来管理享元实例的创建和共享。 | - **游戏中大量子弹或粒子对象**、**文字处理软件**中字符的表示等场景，需要重复创建小而多的对象。- 当多个对象的大部分数据是相同的，仅少量数据不同，且对性能/内存有较高要求时。 |
| 7    | **代理模式 (Proxy Pattern)**       | **为其他对象提供一个代理以控制、增强或隔离客户端对这个对象的访问**。 | - 代理对象与被代理对象实现**相同接口**，对外保持一致。- 常见形式：**远程代理**(封装远程调用)、**虚代理**(延迟加载)、**保护代理**(安全访问控制)和**缓存代理**(结果缓存)。- 通过预处理或后处理来做安全控制、日志、缓存等额外功能。 | - **安全控制**、**远程调用**(RMI/分布式)、**缓存代理**(如接口请求结果缓存)、**延迟加载**(ImageProxy 等)。- 当需要对访问的过程做额外处理或限制，而又不想改变目标对象本身时。 |


| 序号 | **模式名称**                                     | **定义（修订版）**                                           | **要点（补充说明）**                                         | **适用场景**                                                 |
| ---- | ------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | **模板方法模式 (Template Method Pattern)**       | **定义一个操作(算法)的骨架，而将其中某些步骤的实现延迟到子类，使子类可以不改变算法结构即可重定义这些步骤**。 | - 父类中实现**算法主流程**(模板方法)，将可变步骤定义为抽象或钩子方法，由子类实现。- 常见于框架/库中，**框架调用子类**来定制特定逻辑（例如游戏引擎生命周期回调、处理流水线）。- 避免重复编写流程控制逻辑，符合**好莱坞原则**(Don't call us, we'll call you)。 | - **数据处理流程**、**游戏引擎中的生命周期钩子**、**框架回调**等。- 有固定主流程但某些环节需要灵活定制时（如父类中 `run()` 流程，子类只需覆写若干步骤方法）。 |
| 2    | **命令模式 (Command Pattern)**                   | **将请求封装为对象，使你可用不同的请求对客户端进行参数化、对请求排队或记录日志，以及支持撤销/恢复等操作**。 | - 将**动作或操作**封装到一个独立的命令类中，通常包含 `execute()` 等方法，命令对象内部持有对**接收者(Receiver)\**的引用。- 可方便实现\**撤销/重做**(undo/redo)、操作排队、**宏命令**等。- 使得**请求发起者(Invoker)\**与\**请求接收者**解耦。 | - **编辑器的撤销/恢复**操作、**队列任务处理**、**宏命令**（一次执行多个命令）。- 当需要对请求进行**记录/排队/撤销/重做**等高级处理时，命令模式很适合。 |
| 3    | **迭代器模式 (Iterator Pattern)**                | **提供一种方法顺序访问聚合对象中的各元素，而不暴露其内部表示**。 | - 典型接口：`hasNext()`, `next()` 等，封装容器内部结构，让客户端只需关心遍历逻辑。- 集合框架常使用此模式（如 Java 中的 `Iterator`/`Iterable` 接口）。 | - **各种容器**、数据结构需要**统一的遍历方式**。- 例如：Java 集合中的迭代器，用来遍历 `List`、`Set`、`Map` 等不同结构却保持一致使用。 |
| 4    | **观察者模式 (Observer Pattern)**                | **定义对象间的一种一对多依赖关系，当一个对象状态改变时，所有依赖者都会收到通知并自动更新**。 | - 又称“**发布-订阅**(Publish-Subscribe)” 模式。- 包括**主题(Subject)\**和\**观察者(Observer)\**两个关键角色。- 通过主题对象\**维护观察者列表**，状态变更时通知所有观察者进行对应更新。 | - **GUI 事件模型**(按钮点击通知监听器)、**消息通知系统**、**数据绑定**、**前端响应式框架**(Vue/React 里的响应式机制)。- 任何需要**事件驱动**或**推送更新**的场合（一个状态改变引发多个联动更新）。 |
| 5    | **中介者模式 (Mediator Pattern)**                | **用一个中介对象来封装一系列对象之间的交互，使各对象不需要显式互相引用，从而降低耦合度**。 | - 中介者在多个组件/对象间扮演“**调度员**”角色，各对象只与中介者通信。- 适用于**组件之间相互依赖或交互频繁**的场景，可避免对象间网状引用。- 常见应用：**GUI 界面**中各组件交互、**系统事件总线**等。 | - **MVC/MVP/MVVM** 等架构中，视图层与业务逻辑层之间往往通过某种中介协调。- 当多个组件之间存在**多对多**复杂依赖，需要解耦为**多个组件 -> 统一中介 -> 多个组件**的通信模式。 |
| 6    | **备忘录模式 (Memento Pattern)**                 | **在不破坏封装的前提下，捕获对象的内部状态，并在对象之外保存（快照），以便后续可将对象恢复到该状态**。 | - 通常由“**发起者(Originator)**”创建备忘录(Memento)来记录内部状态，“**负责人(Caretaker)**”负责保存或管理备忘录。- 发起者可通过已保存的备忘录来**恢复**之前的内部状态，支持**撤销/回滚**功能。- 注意**备忘录**的访问权限，外部不应直接修改其内部数据以保持封装性。 | - **文本编辑器的撤销**功能、**游戏存档**、**事务回滚**(数据库事务、Undo/Redo)。- 任何需要在一段时间后恢复到之前状态的场景。 |
| 7    | **解释器模式 (Interpreter Pattern)**             | **给定一种语言，定义它的文法，并设计一个解释器来使用该文法解释语言中的句子**。 | - 通常使用**抽象语法树(AST)\**来表示语言/表达式，然后逐步解释。- 对于复杂语法需求，解释器模式往往\**效率不足**，可被编译器或正则引擎等取代。- 适用场景：**简单脚本语言**、**规则引擎**、**配置文件**解析等。 | - **简单脚本语言**、**规则校验器**、**配置文件解释**。- 当语言或表达式语法较简单且变动不大，且需要频繁扩展或自定义时。 |
| 8    | **状态模式 (State Pattern)**                     | **允许对象在其内部状态改变时改变它的行为，对外看来就像换了一个对象/类一样**。 | - 将各种状态对应的行为分别封装到**具体状态类**中，通过**上下文(Context)**来管理和切换状态实例。- 避免在一个类里用大量 `if-else` 或 `switch` 语句判断当前状态并执行不同逻辑。- 常见：**订单状态机**、**游戏角色状态**(奔跑、跳跃、攻击)、**工作流系统**等。 | - **电商订单状态流转**、**工作流系统**、**游戏角色状态**等，当一个对象有**多种状态**并且行为随状态切换而变化时。- 需避免在单个类中管理众多状态分支逻辑，让每个状态自包含行为。 |
| 9    | **策略模式 (Strategy Pattern)**                  | **定义一系列算法，将它们封装起来并使它们可以相互替换，使客户端可以在不改变客户端代码的情况下切换使用不同算法**。 | - 通过抽象策略接口 + 多个策略实现类，客户可灵活选择不同策略。- 常与**工厂模式**结合，根据条件决定使用哪种策略；或在**上下文(Context)**中运行时切换策略。- 适用场景：**支付方式**、**日志输出策略**、**各种排序算法**等。 | - **各种排序算法、日志输出策略、支付方式**等可替换的算法或业务规则。- 当需要**动态切换**、或需根据环境/配置决定不同处理方式时。 |
| 10   | **职责链模式 (Chain of Responsibility Pattern)** | **将多个对象连成一条链来处理请求，使得每个对象都有机会处理该请求，直到其中一个对象处理完毕为止，从而让发送者与接收者解耦**。 | - 请求会在链上**依次传递**，每个处理器可选择**处理**或**继续传递**。- 使客户端无需指定由谁来处理请求，也无需知道链的结构。- 场景：**审批流**、**日志处理流水线**、**消息过滤/命令解析**等。 | - **审批流**(多级审批)、**日志处理流水线**(多级日志过滤/格式化)、**命令解析**等需经过一系列处理器的场合。- 当想要在系统中“消除”发送者与接收者的强耦合，并且允许灵活重组处理顺序时。 |
| 11   | **访问者模式 (Visitor Pattern)**                 | **表示一个作用于某对象结构中各元素的操作，使你可在不改变各元素类的前提下为其添加新功能**。 | - 将操作逻辑从元素类中分离到“**访问者(Visitor)**”中；元素类通过 `accept(visitor)` 来让访问者执行相应操作。- 借助**双分派**(Double Dispatch)机制：访问者方法依据实际元素类型触发不同实现。- 场景：**编译器处理 AST**、**复杂对象结构**需要频繁添加新操作或统计分析时。 | - **编译器处理 AST**、对**复杂对象结构**做统计/分析/转换等频繁变动操作。- 当需要在**不修改数据结构类**(元素类)的情况下，添加或改变处理逻辑时，访问者非常有效。 |

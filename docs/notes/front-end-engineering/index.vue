[待整理面试题](https://sea7izk7rg.feishu.cn/base/appcnqX1gELWjTv55weY3BzeX4c?table=tblxJ9C7w6Mdb7Rb&view=vewJHSwJVd)

<a name="Cduew"></a>
##  缓存策略

> 参考文章：[图解 HTTP 缓存](https://mp.weixin.qq.com/s/aY2JaX9q1VABNMLRdMw3EA)


缓存主要分为两种一种是强缓存，一种是协商缓存。主要作用加快资源获取速度，提升用户体验，减少网络传输，缓解服务器压力。

-  强缓存： 
   - 不需要发送请求到服务端，直接读取本地缓存。
   - 由Expires、Cache-Control、Pragma 3个Header属性共同控制。
   - Expires优先级最低，存的是服务器时间，可能会出现与本地时间不一致问题。
   - Cache-Control是http/1.1新增属性。常用属性有：max-age、no-cache（禁止使用强缓存）、no-store（禁止使用缓存）。
   - Pragma优先级最高，只有一个值：no-cache。与cache-control的no-cache表现一致。
-  协商缓存 
   - 浏览器强缓存失效或禁止强缓存时，并且请求头设置了If-Modified-Since或If-None-Match的时候会把这两个属性发送到服务器去验证是否命中协商缓存。如果命中则返回304，加载缓存，并且响应头中会设置Last-Modified或者Etag属性。
   - 客户端在第一次请求资源时服务端会返回Last-Modified和Etag属性并且保存下来，第二次请求时客户端会把Last-Modified的值给到到If-Modified-Since和Etag给到If-None-Match一起设置到请求头中，到服务器进行验证。

<a name="SvdTp"></a>
##  EventLoop（事件循环）
> 参考文章：[带你彻底弄懂Event Loop](https://segmentfault.com/a/1190000016278115)

能理解透，微任务、宏任务这些东西执行时逻辑。<br />EventLoop即是事件循环，是指浏览器或Node的一种解决Javascript单线程运行时不会阻塞的一种机制。<br />Javascript中任务被分为两种一种是微任务(MicroTask)，一种是宏任务(MacroTask)。

-  宏任务，MacroTask，也叫Tasks：script中的代码、setTimeout/setInterval、requestAnimationFrame ，I/O、UI Rendering。 
-  微任务，MicroTask，也叫Jobs：Process.nextTick（Node独有）、Promise。 
-  浏览器中的EventLoop 
   1. 执行全局Script同步代码代码，执行完毕后调用栈会清空。
   1. 从MicroTask的队首中取出回调任务，放入调用栈中执行。执行完毕后，Micro Task队列长度-1。
   1. 继续取出位于队首的任务，放入调用栈中执行，以此类推，直到MicroTask的所有任务都执完毕。<br />**注意：MicroTask执行过程中如果又产生了新的MicroTask，那么会被加入到队尾，也会在这个周期被执行。**
   1. MicroTask队列中所有任务都执行完毕后，此时MicroTask为空，调用栈也为空。
   1. 取MacroTask队列中队首的任务，放入调用栈中执行。
   1. 执行完毕后调用栈为空，此时又开始进入MicroTask执行周期。
-  Node中的EventLoop 
   1. NodeJS可以理解成有4个宏任务队列和2个微任务队列，但是执行宏任务时有6个阶段。先执行全局Script代码，执行完同步代码调用栈清空后，先从微任务队列Next Tick Queue中依次取出所有的任务放入调用栈中执行，再从微任务队列Other Microtask Queue中依次取出所有的任务放入调用栈中执行。
   1. 然后开始宏任务的6个阶段，每个阶段都将该宏任务队列中的所有任务都取出来执行（注意，这里和浏览器不一样，浏览器只取一个），每个宏任务阶段执行完毕后，开始执行微任务，再开始执行下一阶段宏任务，以此构成事件循环。

<a name="qjOiK"></a>
##  网络协议HTTP/TCP/IP

http全称超文本传输协议，基于TCP/IP，规定了客户端和服务器端之间信息的传递规范。

- http1.x、http2、https各版本不同 
   - http1
   - http2
   - https
   - 版本区别

<a name="c8bfb20e"></a>
#### TCP的三次握手和四次挥手

- 三次握手
- 四次挥手
- 为什么是三次握手和四次挥手

<a name="v4lzV"></a>
## 闭包，作用域链、执行上下文栈

> 参考文章：[JavaScript深入之执行上下文](https://github.com/mqyqingfeng/Blog/issues/8)


-  闭包是指有权访问另一个函数作用域内变量的函数。<br />特点：<br />1.即使创建它的上下文已经销毁，它仍然存在<br />2.代码中引用了其他函数作用域的变量。<br />用途： 
   1. 做命名空间，防止污染全局变量。2. 结果缓存。3.实现类和继承。
-  作用域、作用域链、执行上下文<br />作用域：js作用域分为全局作用域和局部作用域以及ES6引入的块级作用域，js采用的是词法作用域，函数的作用域在函数定义的的时候就决定了。作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。<br />作用域链：作用域链的作用主要用于查找标识符，当作用域需要查询变量的时候会沿着作用域链依次查找，如果找到标识符就会停止搜索，否则将会沿着作用域链依次向后查找，直到作用域链的结尾<br />执行上下文：js在执行一段可执行代码时，会创建对应的执行上下文，会包含三个属性：变量对象、作用域链、this。 
-  作用域和执行上下文之间的区别是：<br />执行上下文在运行时确定，随时可能改变；作用域在定义时就确定，并且不会改变。<br />**解释阶段**：<br />词法分析<br />语法分析<br />作用域规则确定<br />**执行阶段**：<br />创建执行上下文<br />执行函数代码<br />垃圾回收 

<a name="AqSmH"></a>
## 原型、原型链、基本理解instanceof、原理就差不多理解了原型链查找

- 原型：每一个Js对象（null除外）在创建的时候就会关联另一个对象，这个对象就是原型，对象会从原型继承属性。
- 原型链：读取实例属性时，如果在当前实例找不到，就会通过实例**proto**指向的原型去查找，如果原型上没有就去找原型的原型，一直找到顶层的Object.prototype为止，**proto**将对象连接起来组成了原型链。
- instanceOf的内部机制就是通过判断对象的的原型链是不是能找到构造函数的prototype。
<a name="J7zgL"></a>
## Javascript继承
**原型链继承**
```
function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin
```
**借用构造函数(经典继承)**
```
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]
```
**组合继承**

```
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);
    
    this.age = age;

}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```
**寄生组合式继承**
```
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
```

<a name="RB5tp"></a>
## 浏览器渲染页面原理
> 参考文章：[从浏览器地址栏输入url到显示页面的步骤](http://blog.poetries.top/FE-Interview-Questions/base/#_4-%E4%BB%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E5%9C%B0%E5%9D%80%E6%A0%8F%E8%BE%93%E5%85%A5url%E5%88%B0%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%AD%A5%E9%AA%A4)

**输入url之后的发生了什么**

1.  在浏览器中输入url。 
1.  浏览器检查缓存：是否命中强缓存，是否命中协商缓存。 
1.  浏览器解析URL获取协议、主机、端口、Path。 
1.  浏览器获取服务器ip地址：浏览器缓存-》本机缓存-》hosts文件-》路由器缓存-》ISP（网络服务提供商）DNS缓存-》DNS递归查询。 
1.  与目标IP地址建立TCP链接，三次握手： 
   1. 客户端发送一个TCP的SYN=1，Seq=X的包到
   1. 服务器发回SYN=1， ACK=X+1， Seq=Y的响应包
   1. 客户端发送ACK=Y+1， Seq=Z。
6.  建立TCP链接后发送HTTP请求。 
6.  服务器接受请求并作出相应的处理。 
6.  将响应报文通过TCP连接发回浏览器。 
6.  浏览器接受响应，根据情况选择关闭TCP连接或保留重用。关闭TCP连接的四次挥手： 
   1. 浏览器发送Fin=1， Ack=Z， Seq= X报文（我想要关闭连接喽）
   1. 服务器发送ACK=X+1, Seq=Z报文（好的我收到关闭的通知了，我看看还有没有什么要处理）
   1. 服务器发送Fin=1,ACK=X,Seq=Y报文(数据已经全部处理完了，应该可以关闭了)
   1. 浏览器发送=Y，Seq=X报文(好的，那就关闭连接吧)
   1. 服务器收到浏览器最后的确认报文后随即关闭了，浏览器在等待一段时间，如果没有再收到服务器报文就关闭。
10.  浏览器检查资源是否可缓存，对响应进行解码（如gzip）。 
10.  解析HTML，构造DOM树，构造CSSOM树，把CSSOM和DOM树合并成渲染树。 
10.  解析HTML过程中遇到图片、样式表、js文件，启动下载。 
10.  其中CSS和DOM会阻塞渲染，但不会阻塞解析，直到渲染树构建完成。 
10.  遇到JS脚本是会阻塞解析，直到JS脚本执行完毕，才会继续构建DOM。 
10.  渲染树包含了渲染网页所需的接点，构建完毕后，浏览器开始布局（layout）-》绘制（print）。 
10.  显示页面。 

<a name="gF6yH"></a>
## 框架相关

> 参考文章:[Vue最全知识点](https://juejin.im/post/5ec358126fb9a0432a3c49e6#heading-13)


1.  对MVVM的理解：是Model-View-ViewModel的缩写，Model代表数据模型，View代表视图或者UI组件，ViewM     odel把数据和视图关联起来。数据会绑定到ViewModel中并自动渲染到视图上，视图发生改变会通知View      Model层进行更新。 
1.  双向数据绑定： 
   -  采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty() 来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。 
   -  当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty() 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue追踪依赖，在属性被访问和修改时通知变化。 
   -  实现步骤： 
      1.  监听者Oberver来劫持并监听所有的属性，一旦有属性发生变化就通知订阅者 
      1.  订阅者watcher来接受属性变化的通知并执行相应的方法，从而更新视图 
      1.  订阅器Dep,用来收集依赖，每一个监听的数据都有一个Dep实例，每个实例里面包含了多个订阅者。 
      1.  解析器compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相对应的订阅者 
1.  computed和watch的区别 
   - computed：计算属性，会缓存值，依赖的属性没有发生改变时不会再次计算。不支持异步操作。
   - watch:侦听属性，每次都会计算，支持异步操作。
4.  Vuex是专门为Vue设计的状态管理器，使用单一状态树，储存状态是响应式的，改变store的唯一途径就是提交mutilation。（延伸到Action，module，Getter）。 
4.  虚拟DOM<br />虚拟DOM其实就是一棵以 JavaScript 对象（VNode 节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。 某些场景频繁操作DOM会有一定的性能损耗，通过新旧虚拟DOM的比对(Diff)可以更加准确的去更新DOM。 
4.  diff算法<br />同级比较,深度优先的原则 
   - 先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)
   - 比较都有子节点的情况(核心diff)
   - 递归比较子节点
7.  vue2.x中如何监测数组变化？<br />1.使用了函数劫持的方式，重写了数组的方法，Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法，当调用数组api时，可以通知依赖更新。<br />2.如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。 

<a name="BDKNV"></a>
## webpack
<a name="YAqJO"></a>
### 原理

1. 识别入口文件
1. 通过逐层识别模块依赖(Commonjs、amd或者es6的import，webpack都会对其进行分析，来获取代码的依赖)
1. webpack做的就是分析代码，转换代码，编译代码，输出代码
1. 最终形成打包后的代码
<a name="SpSIw"></a>
### Loader
loader是文件加载器，能够加载资源文件并且做出相关处理，最终打包到指定文件中。
<a name="ARNPp"></a>
### Plugin
plugin是一个扩展器，它丰富了webpack本身的功能，在webpack打包的过程中，基于事件机制工作，监听打包过程中的某个节点，执行对应的操作。<br />常用的plugin：mini-css-extract-plugin（提取css到单独文件）、happypack（开启并行打包）、html-webpack-plugin（操作/生产html入口文件，引入打包后的script和link）

<a name="B9c3T"></a>
## this指向问题

this在大部分情况都是谁调用指向谁，指的是直接调用者。特殊情况下如new操作符时指向的是new出来的实例对象.箭头函数没有this,这时候this取决与箭头函数外层不是最近一个不是箭头函数的this。还有就是使用call、apply、bind显示绑定的this。

<a name="u8Fby"></a>
## 手写call、apply、bind、new

new操作符做了什么

1. 生成了一个新对象。
1. 连接到构造函数原型。
1. this变量指向该对象。
1. 返回新对象。

<a name="mjhkc"></a>
## 手写promise、async/await

Promise是一种解决异步编程的方案，比其他传统方案如回调和事件更合理。<br />Promise有三个状态，初始状态（padding）、成功状态（fulfilled）、失败状态（rejected），状态一旦发生改变就不会再更改。Promise新建后会立即执行中途无法取消。用then函数接受成功状态的回调，catch函数接受失败的回调，还有就是Promise报错不会阻塞代码，但是后续操作不会执行，可以使用then参数的第二个回调和catch捕捉错误。

<a name="pCANN"></a>
##  请描述一下你对前端自适应及 Rem 的理解？【常用】
答：前端常用的自适应有flex布局、vm、rem、媒体查询等。在适当场景使用flex+vm或rem自适应布局，跨设备场景时使用媒体查询做响应式布局，跨设备交互差异较大时建议分项目开发。 

1.  使用样式分别如何设置行元素、块元素上下垂值居中，还有没有其它方法？

答：行元素上下垂直居中 
1.  请说一下你对 bootstrap的栅格系统的理解？ 
1.  请分别说一下你对浮动布局、绝对定位布局和弹性布局的理解？ 
1.  Css3 动画中的 transition 与 animation 
1.  有什么区别，有没有用过什么常用的 css3 动画库？ 
1.  **有没有处理过什么兼容性的问题？移动端及 PC 端的，如何解决？【常用】** 
1.  使用过 javascript 数组 Array 的方法有哪些，有使用过哪些高阶函数？ 
1.  谈谈你对 Js 防抖动处理（debounce）或者节流 / 限频处理（throttle）的理解，如 window.onresize、window.onscroll？ 
1.  实现一个简单的 swiper 轮播组件的思想，支持 PC& 移动端的？ 
1.  Dom 的原生事件如 click，移动端与 PC 端有什么区别，有哪些，都说一下，越多越好？ 
1.  Es6类构造函数中调用super()函数的作用是什么？ 
1.  谈谈你对前端输入校验的理解。 
1.  document.createDocumentFragment() 有用过吗？有什么好处？ 
1.  先 display:none，然后操作 Dom 的超级大批量增删改，再 display:block 有什么好处？ 
1.  Object.create(null) 有用过吗？有什么好处？ 
1.  如何实现一个对象的浅克隆与深度遍历？ 
1.  介绍一下经典的发布订阅模式及实现应用有哪些，如 Event Bus 等说说你的理解？ 
1.  说说你对前端路由的理解。 
1.  前端优化的方式有哪些？越多越好 
1.  说一下你接触过的一些经典算法，使用 js 
1.  实现冒泡及数组去重，要注意一些边界条件。 
1.  异步回调地狱及异步流处理，promise.all 的理解。 
1.  谈谈你对 jsonp 的理解。 
1.  谈谈你对前端安全的理解。XSS，CSRF，SQL 注入，接口防刷，常用的加密方式用过哪些？ 
1.  使用过的自动化构建工具有哪些？各有什么优缺点？gulp, gruntjs, webpack 和 rollup？ 
1.  **浏览器打开页面时发生了什么？【常用】** 
1.  有关注或者了解过前端前沿的一些技术吗？ 
1.  有没有使用过 canvas，svg 及 iconfont？谈谈你的理解。 
1.  如何提高 HTML5 canvas 性能？ 
1.  样式重置及 Es6 polyfill 的作用是什么？ 
1.  Vue 自定义指令、自定义过滤器及自定义组件的理解，如何实现方可挂载到全局使用？ 
1.  说说 Vue 的生命周期有哪些？ 
1.  说说 Vue 中插槽（Slot）的使用及作用。 
1.  Vue 深度 Watch 用过吗？为什么要用？ 
1.  Vue 中如何让定义的样式作用到子组件？ 
1.  **Vue 的组件间可以如何进行通讯，如何设计组件？【重要】** 
1.  Vue 中如何做请求拦截？为什么要拦截？ 
1.  Vue 中为什么要做路由拦截？可以实现什么功能？如何做鉴权？ 
1.  Vue 使用中有没有遇到过数组数据更新，视图未更新的情况？如何处理？ 
1.  简单说说 Vue 的实现原理？ 
1.  谈谈你平时在Vue项目有没有做过什么优化处理，如兼容性处理等，gzip，ssr 等？ 
1.  谈谈你对跨域的理解，如何解决？在 Vue 项目中如何设置反向代理进行接口联调，为什么要进行反向代理？ 
1.  Vue 是如何进行模板编译的？Vue 监听状态变化的原理是？ 
1.  移动端中如何调试 Webview中的页面？有没有用过 v-console 或者 fiddler？ 
1.  谈谈你对 react 的生命周期的理解。 
1.  简单谈谈你对 virtual Dom 及 Diff 算法的理解。 
1.  react hooks 有了解过吗？ 
1.  你对 redux 及中间件的理解？ 
1.  谈谈你对 react 无状态组件的理解。 
1.  如何 mock 数据来辅助开发？ 
1.  有没有用过什么开源UI库，elementUI，MintUI，ant-design 等等。用过些什么组件。如何做地址级联？ 
1.  谈谈你对小程序的理解？ 
1.  谈谈你前端实现 native 开发，包括 RN 或者 Weex 的理解。 
1.  有没有接触过 hybrid APP 的开发如 Phonegap / Ionic。 
1.  有没有接触过桌面多终端开发的相关解决方案，如 electron / nw.js。 
1.  数据可视化方面常用的库有哪些？熟悉哪些？ 
1.  **项目中遇到过什么困难？如何解决？【常用】** 
1.  做过什么你认为最复杂最让你自己引以为豪的项目？为什么？ 
1.  对于 http 2.0 或者 3.0 与 http 1.0 有什么区别？ 
1.  有没有了解过 PWA。 
1.  flow 及 typescript 有什么区别？ 
1.  **谈谈你觉得自己做的最引以为豪的一个项目，为什么？【常用】** 
1.  **谈谈你常用到的一些操作数组的方法。【常用】** 
1.  **前后端 SPA页面缓存机制如何设置（特别针对微信）？【重要】** 
1.  **你是如何学习前端知识的？有自已的技术博客吗或 github 上有没有什么开源的项目？【常用】** 

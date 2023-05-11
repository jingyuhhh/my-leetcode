# by-intern
这是学前端两周后复刻leetcode的第一个作品

#### 2022.5：
+ 读完《Javascript高级程序设计》后，优化了一些代码，并加入了一些效果：
  +  点击返回到顶部按钮后可以流畅地滑向顶部
    ```js
    html.scrollIntoView({ behavior: "smooth" });
    ```
  +  鼠标停在轮播图上时不是直接让图片停止，而是把鼠标定位到的图片放在整个轮播框中（更符合用户需求）
  ```js
  imglist.onmouseover = function (event) {
    let imgnow = event.target;
    let index = img.indexOf(imgnow.parentNode);
    if (index === 4) {
        lef = 0;
    }
    lef = index * -1 * 250;
    imglist.style.marginLeft = lef + "px";
    clearTimeout(timer);
    }
    ```

  
  +  登录/注册时填写字段不符合要求时输入框会抖动并变红
    ```html
    <input type="text" name="手机号" id="tel" value placeholder="请输入手机号"  maxlength="11" required pattern="[0-9]{11}">
    <input type="password" value placeholder="密码" id="pwd" required> 
     ```
     ```js
     function Check(tel) {
    if (tel.validity.valueMissing) {
        tel.classList.add("valuemissing");
    } else if (tel.validity.patternMismatch) {
        tel.classList.add("valuemissing");
    } else if (tel.classList.contains("valuemissing")) {
        tel.classList.remove("valuemissing");
    }
    }
    ```
  +  更好地实现夜晚效果(css变量)
+ 用nodejs+mysql实现了登录/注册功能，前端用的是xhr


---

## 遇到的问题

 在写nodejs时，遇到一个神奇的问题，代码都没有问题，但是post请求的网址都被告知405，自己想了很久没有想出来，在网上也没有找到合适的解决方法，于是去问两个大佬，小熊和gcc。

  (一开始gcc不在)

  小熊学长看了一会儿，确认了代码没有问题，确认了get方式是成功的，打开开发者工具发现没有post的请求头，感到很困惑

  （gcc学姐来了）

  小熊给gcc展示get时，却发现刚刚还运行成功的get失效了！出现404

  于是他们尝试用含kill的指令（具体是啥忘记了，也没搜到）杀死这个端口，然后再运行，发现get好了。于是推断出这个端口有脏东西。因此他们把listen的端口改了，就运行成功了。

  此时我很纳闷：“这个端口是可以改的吗？打开这个页面不是会自动给一个端口号吗？”

  然后！这就引发了他们的疑惑——你的前端页面是怎么架起来的呢。

  答案是用live server

  谜底揭晓了！这个脏东西就是live server！

  <u>*原理：使用live server打开页面时，live server其实是创建了服务器，把页面发送到了端口5050上，因此当我写的服务器监听这个端口、向这个端口post东西时，就会发生冲突（大概这也是为什么live server的请求头不允许post）*</u>

 > 如何架起前端页面：
 >   1. 直接点击html文件，此时>的网址就是文件的绝对路径
 > 
 >   2. 在写服务器的文件中写上
      app.use(express.static("."));
 >  创建静态资源服务器，把.目录下的文件对外开放访问
  
  
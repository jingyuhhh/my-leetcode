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
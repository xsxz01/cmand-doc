## 1. 下载CMand
下载CMand的最新版本，你可以从[这里](./appendix.md#下载cmand)下载。

## 2. 安装CMand
首先将下载的文件解压到一个目录，比如`C:\cmand`。

然后是添加到环境变量，有三种方式可以添加到环境变量：

### 1. 手动添加

1. 打开环境变量配置窗口。
2. 在`Path`变量中添加`C:\cmand`。
3. 点击确定保存。
4. 打开命令行窗口，输入`gmc -h`，如果显示cmand的帮助文档，说明安装成功。

### 2. 使用脚本添加

1. 进入`C:\cmand`目录。
2. 双击运行`register.bat`。
3. 打开命令行窗口，输入`gmc -h`，如果显示cmand的帮助文档，说明安装成功。

### 3. 使用注册程序添加（推荐）

1. 进入`C:\cmand`目录，并且打开cmd窗口。
2. 输入`register.exe install`。(卸载时是uninstall)
3. 打开命令行窗口，输入`gmc -h`，如果显示cmand的帮助文档，说明安装成功。



## 3. 选择一个IDE开始编程

CMand是支持文本编程的，从原则上来讲，你可以使用任何文本编辑器编写CMand程序。以下是推荐的编程方式：

### 1. 使用Visual Studio Code

但是为了方便，我们推荐使用Visual Studio Code。

1. 下载Visual Studio Code。
2. 安装Visual Studio Code。
3. 打开Visual Studio Code。
4. 安装CMand插件。
5. 创建一个新的文件，文件后缀为`.cm`。
6. 输入`hello world`的内容[hello world][]。
7. 按下`F5`运行。

### 2. 使用简易IDE

可以从群里下载简易IDE。其中包含大量中文编程例程可以学习，提供编译，调试等功能。

### 3. 手动运行

使用`gmc -h`可以查看帮助文档。基本的编译方式为

```
gmc -e -m64 hello.cm
```


[helloworld]: ./get-started.md

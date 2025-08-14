<template><div><h2 id="_1-下载cmand" tabindex="-1"><a class="header-anchor" href="#_1-下载cmand"><span>1. 下载CMand</span></a></h2>
<p>下载CMand的最新版本，你可以从<RouteLink to="/appendix.html#%E4%B8%8B%E8%BD%BDcmand">这里</RouteLink>下载。</p>
<h2 id="_2-安装cmand" tabindex="-1"><a class="header-anchor" href="#_2-安装cmand"><span>2. 安装CMand</span></a></h2>
<p>首先将下载的文件解压到一个目录，比如<code v-pre>C:\cmand</code>。</p>
<p>然后是添加到环境变量，有三种方式可以添加到环境变量：</p>
<h3 id="_1-手动添加" tabindex="-1"><a class="header-anchor" href="#_1-手动添加"><span>1. 手动添加</span></a></h3>
<ol>
<li>打开环境变量配置窗口。</li>
<li>在<code v-pre>Path</code>变量中添加<code v-pre>C:\cmand</code>。</li>
<li>点击确定保存。</li>
<li>打开命令行窗口，输入<code v-pre>gmc -h</code>，如果显示cmand的帮助文档，说明安装成功。</li>
</ol>
<h3 id="_2-使用脚本添加" tabindex="-1"><a class="header-anchor" href="#_2-使用脚本添加"><span>2. 使用脚本添加</span></a></h3>
<ol>
<li>进入<code v-pre>C:\cmand</code>目录。</li>
<li>双击运行<code v-pre>register.bat</code>。</li>
<li>打开命令行窗口，输入<code v-pre>gmc -h</code>，如果显示cmand的帮助文档，说明安装成功。</li>
</ol>
<h3 id="_3-使用注册程序添加-推荐" tabindex="-1"><a class="header-anchor" href="#_3-使用注册程序添加-推荐"><span>3. 使用注册程序添加（推荐）</span></a></h3>
<ol>
<li>进入<code v-pre>C:\cmand</code>目录，并且打开cmd窗口。</li>
<li>输入<code v-pre>register.exe install</code>。(卸载时是uninstall)</li>
<li>打开命令行窗口，输入<code v-pre>gmc -h</code>，如果显示cmand的帮助文档，说明安装成功。</li>
</ol>
<h2 id="_3-选择一个ide开始编程" tabindex="-1"><a class="header-anchor" href="#_3-选择一个ide开始编程"><span>3. 选择一个IDE开始编程</span></a></h2>
<p>CMand是支持文本编程的，从原则上来讲，你可以使用任何文本编辑器编写CMand程序。以下是推荐的编程方式：</p>
<h3 id="_1-使用visual-studio-code" tabindex="-1"><a class="header-anchor" href="#_1-使用visual-studio-code"><span>1. 使用Visual Studio Code</span></a></h3>
<p>但是为了方便，我们推荐使用Visual Studio Code。</p>
<ol>
<li>下载Visual Studio Code。</li>
<li>安装Visual Studio Code。</li>
<li>打开Visual Studio Code。</li>
<li>安装CMand插件。</li>
<li>创建一个新的文件，文件后缀为<code v-pre>.cm</code>。</li>
<li>输入<code v-pre>hello world</code>的内容[hello world][]。</li>
<li>按下<code v-pre>F5</code>运行。</li>
</ol>
<h3 id="_2-使用简易ide" tabindex="-1"><a class="header-anchor" href="#_2-使用简易ide"><span>2. 使用简易IDE</span></a></h3>
<p>可以从群里下载简易IDE。其中包含大量中文编程例程可以学习，提供编译，调试等功能。</p>
<h3 id="_3-手动运行" tabindex="-1"><a class="header-anchor" href="#_3-手动运行"><span>3. 手动运行</span></a></h3>
<p>使用<code v-pre>gmc -h</code>可以查看帮助文档。基本的编译方式为</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">gmc -e -m64 hello.cm</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>



<template><div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>C Mand 中文编程是脱胎于C++的一种中文的编程语言，<strong>Mandarin</strong> 原意即 <code v-pre>普通话</code>，也表明其想要成为中文编程领域的一种<code v-pre>普通话</code>的编程语言。（在本文档以后称其为<code v-pre>CMand</code>值得默认为该编程语言）</p>
<p>为什么选择CMand？这大概是你看到这篇文章时候首先想到的问题。在中国大陆几十年间，中国人对中文编程是及其狂热的，期间诞生了大量中文编程语言，其中不乏流行化的，首先，最具代表性，也是最为成功的，就是<Badge>易语言</Badge>，其流行程度，生态活跃度，以及用户对其的执着，至今任然是相当火爆的，其拥有极其容易上手IDE且生态极其广泛，基本上想要做什么东西，都有着比较成熟的模块可以使用，到现在也是较为常用的。其次基本上都是次要的，比如<Badge>火山</Badge>，可以说是易语言的更加强大的版本，几乎解决了易语言的痛点，但仍然无法做到易语言这种地步，后续有很多，如炫彩界面库出的<Badge>炫彩IDE</Badge>，几乎将易语言的优势都添加了，使易语言用户可以轻松上手，同时也提供了极大的自由度，但仍然可以说是不温不火。其中还有大量其他的类似中文的编程语言，比如汉化Java的幂语言，不过都是些小玩具罢了，就不再列举了。</p>
<p>经历了这么多，现在有了CMand，你将会解决很多问题，CMand是一个静态有类型的中文编程语言，脱胎于C++, 这意味着其有着极高的执行效率，它不是宏孩儿，是编译型的编程语言，要我看，这其实就是一个翻译器，最终生成的仍然是C++的程序，但是你可以用中文来简化这种开发，从而实现开发的高效率。（你可以认为易语言也是这种方式实现的）</p>
<p>相比于以往的中文编程语言，CMand有着诸多优势，</p>
<ol>
<li>中文编程，语法简单，无需学习复杂的语法，即可上手，大部分语法可参考易语言，并且IDE跟易语言几乎可以平替。</li>
<li>静态有类型，类型丰富，支持各种字符集，完美支持各种原生函数。</li>
<li>高效，最终生成的是C++的程序，执行效率高。</li>
<li>生态丰富，有大量的模块可以使用，如控制台、文件操作、网络等。</li>
<li>模块化，支持将代码拆分成多个模块，方便管理和维护，构建大型应用程序。</li>
<li>支持x64平台，在Windows上有着更多可能性。</li>
<li>开发者活跃，现开发阶段基本上日更，作者联系的上，有问题及时修复。</li>
<li>支持C++混用，这意味着你可以直接使用原生的C++，集成一些库时可以减少很多工作。</li>
</ol>
<blockquote>
<p>以上只是本人对中文编程的简单总结，一些浅显的观点，不可作为参考依据，仅作为个人思考，欢迎交流。</p>
</blockquote>
<h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h2>
<p>以下是使用CMand的简单示例：</p>
<div class="code-block-title">
  <div class="code-block-title-bar">
    <span class="title" data-title="helloword.cm">helloword.cm</span>
  </div>
  <div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code><span class="line">类库 x64\system</span>
<span class="line"></span>
<span class="line">整数 启动<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span></span>
<span class="line">    控制台<span class="token punctuation">.</span>输入文本<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    返回 <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>如何安装运行CMand，请查看<RouteLink to="/install.html">安装CMand</RouteLink>。</p>
</div></template>



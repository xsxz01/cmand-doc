<template><div><h2 id="标准输出" tabindex="-1"><a class="header-anchor" href="#标准输出"><span>标准输出</span></a></h2>
<h3 id="_1-直接输出" tabindex="-1"><a class="header-anchor" href="#_1-直接输出"><span>1. 直接输出</span></a></h3>
<p>直接输出内容到控制台，CMand提供了<code v-pre>控制台</code>对象，可以提供输出功能。例如Hello World。</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出数字</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出逻辑值</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span>真<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-格式化输出" tabindex="-1"><a class="header-anchor" href="#_2-格式化输出"><span>2. 格式化输出</span></a></h3>
<p>格式化输出相当方便，跟易语言几乎是一样的</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">字符串 世界 <span class="token operator">=</span> <span class="token string">"Hello World!"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">控制台<span class="token punctuation">.</span>打印输出格式化<span class="token punctuation">(</span><span class="token string">"你好，"</span> <span class="token operator">+</span> 世界 <span class="token operator">+</span> <span class="token string">"！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如99乘法表</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">类库 x64\system</span>
<span class="line"></span>
<span class="line">类 主程序</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    公有 静态 整数 _启动子程序<span class="token punctuation">(</span>文本数组 命令行<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        整数 I<span class="token punctuation">,</span>K</span>
<span class="line">        计次循环<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> I<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            如果真<span class="token punctuation">(</span>I <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                I<span class="token operator">++</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            计次循环<span class="token punctuation">(</span>I <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> K<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                如果真<span class="token punctuation">(</span>K <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    K<span class="token operator">++</span> </span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                控制台<span class="token punctuation">.</span>打印输出<span class="token punctuation">(</span>到文本<span class="token punctuation">(</span>K<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"*"</span> <span class="token operator">+</span> 到文本<span class="token punctuation">(</span>I<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"="</span> <span class="token operator">+</span> 到文本<span class="token punctuation">(</span>K<span class="token operator">*</span>I<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            控制台<span class="token punctuation">.</span>打印输出<span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        控制台<span class="token punctuation">.</span>输入文本<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        返回 <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



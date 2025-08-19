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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>你也可以不使用控制台输出，CMand内置一个全局的标准输出函数可以直接使用，其函数原型为</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 标准输出<span class="token punctuation">(</span><span class="token keyword">int</span> P<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>string Value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> 标准输出<span class="token punctuation">(</span><span class="token keyword">int</span> P<span class="token punctuation">,</span> <span class="token keyword">int</span> Value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> 标准输出<span class="token punctuation">(</span><span class="token keyword">int</span> P<span class="token punctuation">,</span> <span class="token keyword">long</span> Value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> 标准输出<span class="token punctuation">(</span><span class="token keyword">int</span> P<span class="token punctuation">,</span> <span class="token keyword">long</span> <span class="token keyword">long</span> Value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> 标准输出<span class="token punctuation">(</span><span class="token keyword">int</span> P<span class="token punctuation">,</span> <span class="token keyword">double</span> Value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> 标准输出<span class="token punctuation">(</span><span class="token keyword">int</span> P<span class="token punctuation">,</span> <span class="token keyword">long</span> <span class="token keyword">double</span> Value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> 标准输出<span class="token punctuation">(</span><span class="token keyword">int</span> P<span class="token punctuation">,</span> <span class="token keyword">bool</span> Value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> 标准输出<span class="token punctuation">(</span><span class="token keyword">int</span> P<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">unsigned</span> <span class="token keyword">char</span><span class="token operator">></span> bin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着你可以使用标准输出函数来输出任何类型的内容，而不需要使用控制台对象。</p>
<p>例如</p>
<div class="language-cpp标准输出(1, line-numbers-mode" data-highlighter="prismjs" data-ext="cpp标准输出(1,"><pre v-pre><code><span class="line">标准输出(1, 123);</span>
<span class="line">标准输出(1, 123.456);</span>
<span class="line">标准输出(1, 真);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出二进制数据</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">标准输出<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">0x48</span><span class="token punctuation">,</span> <span class="token number">0x65</span><span class="token punctuation">,</span> <span class="token number">0x6c</span><span class="token punctuation">,</span> <span class="token number">0x6c</span><span class="token punctuation">,</span> <span class="token number">0x6f</span><span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">,</span> <span class="token number">0x57</span><span class="token punctuation">,</span> <span class="token number">0x6f</span><span class="token punctuation">,</span> <span class="token number">0x72</span><span class="token punctuation">,</span> <span class="token number">0x6c</span><span class="token punctuation">,</span> <span class="token number">0x64</span><span class="token punctuation">,</span> <span class="token number">0x21</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>格式化输出</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">标准输出<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"你好，%s！"</span><span class="token punctuation">,</span> <span class="token string">"世界"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-标准输入" tabindex="-1"><a class="header-anchor" href="#_3-标准输入"><span>3. 标准输入</span></a></h3>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">std<span class="token double-colon punctuation">::</span>string 标准输入<span class="token punctuation">(</span><span class="token keyword">bool</span> R <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个布尔值，表示是否显示输入提示符，默认为真。函数返回值为用户输入的文本内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">std<span class="token double-colon punctuation">::</span>string 输入 <span class="token operator">=</span> 标准输入<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="控制台对象" tabindex="-1"><a class="header-anchor" href="#控制台对象"><span>控制台对象</span></a></h2>
<p>控制台对象是CMand内部提供的一个对象，用于与控制台进行交互，其类原型为下</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">class</span> 控制台_SYSTEM_LIBRARY</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">int</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">long</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">double</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">double</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">int</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">long</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">double</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">double</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">void</span> 打印输出格式化<span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> format<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> 打印输出格式化<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string format<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>string 输入文本<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string hint <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">char</span> 输入字符<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string hint <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-打印输出" tabindex="-1"><a class="header-anchor" href="#_1-打印输出"><span>1. 打印输出</span></a></h3>
<p>打印输出函数用于将指定的内容输出到控制台。其拥有多个重载函数，我将一一介绍这几个重载函数。</p>
<h4 id="_1-1-打印输出字符串" tabindex="-1"><a class="header-anchor" href="#_1-1-打印输出字符串"><span>1.1 打印输出字符串</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个字符串，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出<span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_1-2-打印输出整数" tabindex="-1"><a class="header-anchor" href="#_1-2-打印输出整数"><span>1.2 打印输出整数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">int</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个整数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出<span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_1-3-打印输出长整数" tabindex="-1"><a class="header-anchor" href="#_1-3-打印输出长整数"><span>1.3 打印输出长整数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">long</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个长整数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出<span class="token punctuation">(</span><span class="token number">1234567890</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_1-4-打印输出长长整数" tabindex="-1"><a class="header-anchor" href="#_1-4-打印输出长长整数"><span>1.4 打印输出长长整数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个长长整数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出<span class="token punctuation">(</span><span class="token number">12345678901234567890</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_1-5-打印输出浮点数" tabindex="-1"><a class="header-anchor" href="#_1-5-打印输出浮点数"><span>1.5 打印输出浮点数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">double</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个浮点数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出<span class="token punctuation">(</span><span class="token number">123.456</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_1-6-打印输出长浮点数" tabindex="-1"><a class="header-anchor" href="#_1-6-打印输出长浮点数"><span>1.6 打印输出长浮点数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出<span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">double</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个长浮点数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出<span class="token punctuation">(</span><span class="token number">123.45678901234567890</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-打印输出换行" tabindex="-1"><a class="header-anchor" href="#_2-打印输出换行"><span>2. 打印输出换行</span></a></h3>
<p>打印输出换行函数用于将指定的内容输出到控制台<strong>并换行</strong>。其拥有多个重载函数，我将一一介绍这几个重载函数。</p>
<h4 id="_2-1-打印输出换行字符串" tabindex="-1"><a class="header-anchor" href="#_2-1-打印输出换行字符串"><span>2.1 打印输出换行字符串</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个字符串，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2-2-打印输出换行整数" tabindex="-1"><a class="header-anchor" href="#_2-2-打印输出换行整数"><span>2.2 打印输出换行整数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">int</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个整数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2-3-打印输出换行长整数" tabindex="-1"><a class="header-anchor" href="#_2-3-打印输出换行长整数"><span>2.3 打印输出换行长整数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">long</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个长整数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span><span class="token number">1234567890</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2-4-打印输出换行长长整数" tabindex="-1"><a class="header-anchor" href="#_2-4-打印输出换行长长整数"><span>2.4 打印输出换行长长整数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个长长整数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span><span class="token number">12345678901234567890</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2-5-打印输出换行浮点数" tabindex="-1"><a class="header-anchor" href="#_2-5-打印输出换行浮点数"><span>2.5 打印输出换行浮点数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">double</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个浮点数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span><span class="token number">123.456</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2-6-打印输出换行长浮点数" tabindex="-1"><a class="header-anchor" href="#_2-6-打印输出换行长浮点数"><span>2.6 打印输出换行长浮点数</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出换行<span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">double</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个长浮点数，用于指定要输出的内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出换行<span class="token punctuation">(</span><span class="token number">123.45678901234567890</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-打印输出格式化" tabindex="-1"><a class="header-anchor" href="#_3-打印输出格式化"><span>3. 打印输出格式化</span></a></h3>
<p>打印输出格式化函数用于将指定的内容输出到控制台<strong>并换行</strong>，其格式化方式与C语言的printf函数相同。</p>
<h4 id="_3-1-打印输出格式化c字符串" tabindex="-1"><a class="header-anchor" href="#_3-1-打印输出格式化c字符串"><span>3.1 打印输出格式化C字符串</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出格式化<span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> format<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个C字符串，用于指定要输出的内容的格式化方式。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出格式化<span class="token punctuation">(</span><span class="token string">"Hello %s, your age is %d."</span><span class="token punctuation">,</span> <span class="token string">"World"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_3-2-打印输出格式化字符串" tabindex="-1"><a class="header-anchor" href="#_3-2-打印输出格式化字符串"><span>3.2 打印输出格式化字符串</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 打印输出格式化<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string format<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个字符串，用于指定要输出的内容的格式化方式。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>打印输出格式化<span class="token punctuation">(</span><span class="token string">"Hello %s, your age is %d."</span><span class="token punctuation">,</span> <span class="token string">"World"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4-输入文本" tabindex="-1"><a class="header-anchor" href="#_4-输入文本"><span>4. 输入文本</span></a></h3>
<p>输入文本函数用于从控制台获取用户输入的文本内容。</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">std<span class="token double-colon punctuation">::</span>string 输入文本<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string hint <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个字符串，用于指定输入提示信息，默认为空字符串。函数返回值为用户输入的文本内容。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">字符串 name <span class="token operator">=</span> 控制台<span class="token punctuation">.</span>输入文本<span class="token punctuation">(</span><span class="token string">"请输入你的名字："</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">控制台<span class="token punctuation">.</span>打印输出格式化<span class="token punctuation">(</span><span class="token string">"你好，%s！"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-输入字符" tabindex="-1"><a class="header-anchor" href="#_5-输入字符"><span>5. 输入字符</span></a></h3>
<p>输入字符函数用于从控制台获取用户输入的单个字符。</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">char</span> 输入字符<span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>string hint <span class="token operator">=</span> <span class="token string">"请输入一个字符："</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>函数参数为一个字符串，用于指定输入提示信息，默认为&quot;请输入一个字符：&quot;。函数返回值为用户输入的单个字符。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">字符 ch <span class="token operator">=</span> 控制台<span class="token punctuation">.</span>输入字符<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">控制台<span class="token punctuation">.</span>打印输出格式化<span class="token punctuation">(</span><span class="token string">"你输入的字符是：%c"</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制台操作" tabindex="-1"><a class="header-anchor" href="#控制台操作"><span>控制台操作</span></a></h2>
<h3 id="_1-置控制台输出颜色" tabindex="-1"><a class="header-anchor" href="#_1-置控制台输出颜色"><span>1. 置控制台输出颜色</span></a></h3>
<p>置控制台输出颜色函数用于设置控制台输出文本的颜色。</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">void</span> 置控制台输出颜色<span class="token punctuation">(</span><span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token keyword">int</span> g<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为三个整数，分别表示红、绿、蓝三种颜色的值，取值范围为0-255。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">控制台<span class="token punctuation">.</span>置控制台输出颜色<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置为红色</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-读写环境变量" tabindex="-1"><a class="header-anchor" href="#_2-读写环境变量"><span>2. 读写环境变量</span></a></h3>
<p>读写环境变量函数用于读取和设置系统的环境变量。</p>
<h4 id="_2-1-读取环境变量" tabindex="-1"><a class="header-anchor" href="#_2-1-读取环境变量"><span>2.1 读取环境变量</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">std<span class="token double-colon punctuation">::</span>string 取环境变量<span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&amp;</span> envVarName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为一个字符串，用于指定要读取的环境变量的名称。函数返回值为该环境变量的值。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line">字符串 path <span class="token operator">=</span> 控制台<span class="token punctuation">.</span>取环境变量<span class="token punctuation">(</span><span class="token string">"PATH"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">控制台<span class="token punctuation">.</span>打印输出格式化<span class="token punctuation">(</span><span class="token string">"PATH环境变量的值为：%s"</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-写入环境变量" tabindex="-1"><a class="header-anchor" href="#_2-2-写入环境变量"><span>2.2 写入环境变量</span></a></h4>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">bool</span> 写环境变量<span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&amp;</span> varName<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&amp;</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>函数参数为两个字符串，分别表示要设置的环境变量的名称和值。函数返回值为一个布尔值，表示设置是否成功。例如</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code><span class="line"><span class="token keyword">bool</span> success <span class="token operator">=</span> 控制台<span class="token punctuation">.</span>写环境变量<span class="token punctuation">(</span><span class="token string">"MY_VAR"</span><span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：当前写环境变量只在当前环境下生效，不会改变全局的环境变量。</p>
</blockquote>
</div></template>



import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.38c78413.js";const g=JSON.parse('{"title":"Markdown语法","description":"","frontmatter":{"title":"Markdown语法","group":"写作","lang":"zh-CN"},"headers":[],"relativePath":"docs/Markdown语法.md","filePath":"docs/Markdown语法.md"}'),p={name:"docs/Markdown语法.md"},e=l(`<h1 id="markdown语法" tabindex="-1">Markdown语法 <a class="header-anchor" href="#markdown语法" aria-label="Permalink to &quot;Markdown语法&quot;">​</a></h1><p>内置了Markdown扩展功能。</p><h2 id="标题锚点" tabindex="-1">标题锚点 <a class="header-anchor" href="#标题锚点" aria-label="Permalink to &quot;标题锚点&quot;">​</a></h2><p>标题会自动应用锚链接。可以使用 <code>markdown.anchor</code> 选项配置锚点的渲染方式。</p><h3 id="自定义锚点" tabindex="-1">自定义锚点 <a class="header-anchor" href="#自定义锚点" aria-label="Permalink to &quot;自定义锚点&quot;">​</a></h3><p>要为标题指定自定义锚点标签而不是使用自动生成的标签，请在标题末尾添加后缀：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># 使用自定义锚点 {#my-anchor}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># 使用自定义锚点 {#my-anchor}</span></span></code></pre></div><p>这样，您可以链接到标题，例如 <code>#my-anchor</code>，而不是默认的 <code>#using-custom-anchors</code>。</p><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h2><p>内部和外部链接都会受到特殊处理。</p><h3 id="内部链接" tabindex="-1">内部链接 <a class="header-anchor" href="#内部链接" aria-label="Permalink to &quot;内部链接&quot;">​</a></h3><p>内部链接会转换为SPA导航的路由链接。此外，每个子目录中包含的 <code>index.md</code> 将自动转换为 <code>index.html</code>，对应的URL为 <code>/</code>。</p><p>例如，给定以下目录结构：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">├─ index.md</span></span>
<span class="line"><span style="color:#E1E4E8;">├─ foo</span></span>
<span class="line"><span style="color:#E1E4E8;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#E1E4E8;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#E1E4E8;">│  └─ two.md</span></span>
<span class="line"><span style="color:#E1E4E8;">└─ bar</span></span>
<span class="line"><span style="color:#E1E4E8;">   ├─ index.md</span></span>
<span class="line"><span style="color:#E1E4E8;">   ├─ three.md</span></span>
<span class="line"><span style="color:#E1E4E8;">   └─ four.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">├─ index.md</span></span>
<span class="line"><span style="color:#24292E;">├─ foo</span></span>
<span class="line"><span style="color:#24292E;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#24292E;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#24292E;">│  └─ two.md</span></span>
<span class="line"><span style="color:#24292E;">└─ bar</span></span>
<span class="line"><span style="color:#24292E;">   ├─ index.md</span></span>
<span class="line"><span style="color:#24292E;">   ├─ three.md</span></span>
<span class="line"><span style="color:#24292E;">   └─ four.md</span></span></code></pre></div><p>假设您在 <code>foo/one.md</code> 中：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">主页</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">/</span><span style="color:#E1E4E8;">) &lt;!-- 将用户发送到根目录的 index.md --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">foo</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">/foo/</span><span style="color:#E1E4E8;">) &lt;!-- 将用户发送到目录 foo 的 index.html --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">foo heading</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">./#heading</span><span style="color:#E1E4E8;">) &lt;!-- 将用户锚定到 foo 目录的标题 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">bar - three</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">../bar/three</span><span style="color:#E1E4E8;">) &lt;!-- 您可以省略扩展名 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">bar - three</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">../bar/three.md</span><span style="color:#E1E4E8;">) &lt;!-- 您可以附加 .md --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">bar - four</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">../bar/four.html</span><span style="color:#E1E4E8;">) &lt;!-- 或者您可以附加 .html --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">主页</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">/</span><span style="color:#24292E;">) &lt;!-- 将用户发送到根目录的 index.md --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">foo</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">/foo/</span><span style="color:#24292E;">) &lt;!-- 将用户发送到目录 foo 的 index.html --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">foo heading</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">./#heading</span><span style="color:#24292E;">) &lt;!-- 将用户锚定到 foo 目录的标题 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">bar - three</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">../bar/three</span><span style="color:#24292E;">) &lt;!-- 您可以省略扩展名 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">bar - three</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">../bar/three.md</span><span style="color:#24292E;">) &lt;!-- 您可以附加 .md --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">bar - four</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">../bar/four.html</span><span style="color:#24292E;">) &lt;!-- 或者您可以附加 .html --&gt;</span></span></code></pre></div><h3 id="页面后缀" tabindex="-1">页面后缀 <a class="header-anchor" href="#页面后缀" aria-label="Permalink to &quot;页面后缀&quot;">​</a></h3><p>页面和内部链接默认使用 <code>.html</code> 后缀。</p><h3 id="外部链接" tabindex="-1">外部链接 <a class="header-anchor" href="#外部链接" aria-label="Permalink to &quot;外部链接&quot;">​</a></h3><p>外部链接会自动添加 <code>target=&quot;_blank&quot; rel=&quot;noreferrer&quot;</code>：</p><ul><li><a href="https://vuejs.org" target="_blank" rel="noreferrer">vuejs.org</a></li><li><a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">VitePress on GitHub</a></li></ul><h2 id="前置元数据" tabindex="-1">前置元数据 <a class="header-anchor" href="#前置元数据" aria-label="Permalink to &quot;前置元数据&quot;">​</a></h2><p><a href="https://jekyllrb.com/docs/front-matter/" target="_blank" rel="noreferrer">YAML前置元数据</a> 受到原生支持：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">像黑客一样博客</span></span>
<span class="line"><span style="color:#85E89D;">lang</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">en-US</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">像黑客一样博客</span></span>
<span class="line"><span style="color:#22863A;">lang</span><span style="color:#24292E;">: </span><span style="color:#032F62;">en-US</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><p>这些数据将在页面的其余部分中可用，以及所有自定义和主题组件。</p><h2 id="github风格表格" tabindex="-1">GitHub风格表格 <a class="header-anchor" href="#github风格表格" aria-label="Permalink to &quot;GitHub风格表格&quot;">​</a></h2><p><strong>输入</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">| 表格        |      是      |  很酷 |</span></span>
<span class="line"><span style="color:#E1E4E8;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="color:#E1E4E8;">| 列 3 是      | 右对齐 | $1600 |</span></span>
<span class="line"><span style="color:#E1E4E8;">| 列 2 是      | 居中    |   $12 |</span></span>
<span class="line"><span style="color:#E1E4E8;">| 斑马条纹 |   很整齐    |    $1 |</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">| 表格        |      是      |  很酷 |</span></span>
<span class="line"><span style="color:#24292E;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="color:#24292E;">| 列 3 是      | 右对齐 | $1600 |</span></span>
<span class="line"><span style="color:#24292E;">| 列 2 是      | 居中    |   $12 |</span></span>
<span class="line"><span style="color:#24292E;">| 斑马条纹 |   很整齐    |    $1 |</span></span></code></pre></div><p><strong>输出</strong></p><table><thead><tr><th>表格</th><th style="text-align:center;">是</th><th style="text-align:right;">很酷</th></tr></thead><tbody><tr><td>列 3 是</td><td style="text-align:center;">右对齐</td><td style="text-align:right;">$1600</td></tr><tr><td>列 2 是</td><td style="text-align:center;">居中</td><td style="text-align:right;">$12</td></tr><tr><td>斑马条纹</td><td style="text-align:center;">很整齐</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="表情符号" tabindex="-1">表情符号 🎉 <a class="header-anchor" href="#表情符号" aria-label="Permalink to &quot;表情符号 :tada:&quot;">​</a></h2><p><strong>输入</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">:tada: :100:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">:tada: :100:</span></span></code></pre></div><p><strong>输出</strong></p><p>🎉 💯</p><p><a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">所有表情符号的列表</a> 可在这里找到。</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p><strong>输入</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[[</span><span style="color:#DBEDFF;text-decoration:underline;">toc</span><span style="color:#E1E4E8;">]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[[</span><span style="color:#032F62;text-decoration:underline;">toc</span><span style="color:#24292E;">]]</span></span></code></pre></div><p><strong>输出</strong></p><nav class="table-of-contents"><ul><li><a href="#标题锚点">标题锚点</a><ul><li><a href="#自定义锚点">自定义锚点</a></li></ul></li><li><a href="#链接">链接</a><ul><li><a href="#内部链接">内部链接</a></li><li><a href="#页面后缀">页面后缀</a></li><li><a href="#外部链接">外部链接</a></li></ul></li><li><a href="#前置元数据">前置元数据</a></li><li><a href="#github风格表格">GitHub风格表格</a></li><li><a href="#表情符号">表情符号 🎉</a></li><li><a href="#目录">目录</a></li><li><a href="#自定义容器">自定义容器</a><ul><li><a href="#默认标题">默认标题</a></li><li><a href="#自定义标题">自定义标题</a></li><li><a href="#raw">raw</a></li></ul></li><li><a href="#代码块中的语法高亮">代码块中的语法高亮</a></li><li><a href="#代码块中的行高亮">代码块中的行高亮</a></li><li><a href="#代码块中的焦点">代码块中的焦点</a></li><li><a href="#代码块中的彩色差异">代码块中的彩色差异</a></li><li><a href="#代码块中的错误和警告">代码块中的错误和警告</a></li><li><a href="#行号">行号</a></li><li><a href="#导入代码片段">导入代码片段</a></li><li><a href="#代码组">代码组</a></li><li><a href="#markdown-文件包含">Markdown 文件包含</a></li><li><a href="#数学方程式">数学方程式</a></li><li><a href="#高级配置">高级配置</a></li></ul></nav><p>TOC的渲染方式可以使用 <code>markdown.toc</code> 选项配置。</p><h2 id="自定义容器" tabindex="-1">自定义容器 <a class="header-anchor" href="#自定义容器" aria-label="Permalink to &quot;自定义容器&quot;">​</a></h2><p>可以通过其类型、标题和内容定义自定义容器。</p><h3 id="默认标题" tabindex="-1">默认标题 <a class="header-anchor" href="#默认标题" aria-label="Permalink to &quot;默认标题&quot;">​</a></h3><p><strong>输入</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: 信息</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个信息框。</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: 提示</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个提示。</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: 警告</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个警告。</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: 危险</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个危险警告。</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: 详细信息</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个详细信息块。</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: 信息</span></span>
<span class="line"><span style="color:#24292E;">这是一个信息框。</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: 提示</span></span>
<span class="line"><span style="color:#24292E;">这是一个提示。</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: 警告</span></span>
<span class="line"><span style="color:#24292E;">这是一个警告。</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: 危险</span></span>
<span class="line"><span style="color:#24292E;">这是一个危险警告。</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: 详细信息</span></span>
<span class="line"><span style="color:#24292E;">这是一个详细信息块。</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><strong>输出</strong></p><p>::: 信息 这是一个信息框。 :::</p><p>::: 提示 这是一个提示。 :::</p><p>::: 警告 这是一个警告。 :::</p><p>::: 危险 这是一个危险警告。 :::</p><p>::: 详细信息 这是一个详细信息块。 :::</p><h3 id="自定义标题" tabindex="-1">自定义标题 <a class="header-anchor" href="#自定义标题" aria-label="Permalink to &quot;自定义标题&quot;">​</a></h3><p>您可以通过在容器的“类型”后面直接添加文本来设置自定义标题。</p><p><strong>输入</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: 危险 STOP</span></span>
<span class="line"><span style="color:#E1E4E8;">危险区域，请勿继续</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: 详细信息 点击查看代码</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`js</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;你好，VitePress!&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: 危险 STOP</span></span>
<span class="line"><span style="color:#24292E;">危险区域，请勿继续</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: 详细信息 点击查看代码</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;你好，VitePress!&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>:::</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**输出**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">::: 危险 STOP</span></span>
<span class="line"><span style="color:#e1e4e8;">危险区域，请勿继续</span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">::: 详细信息 点击查看代码</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&#39;你好，VitePress!&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**输出**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">::: 危险 STOP</span></span>
<span class="line"><span style="color:#24292e;">危险区域，请勿继续</span></span>
<span class="line"><span style="color:#24292e;">:::</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">::: 详细信息 点击查看代码</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">console.log(&#39;你好，VitePress!&#39;)</span></span></code></pre></div><p>:::</p><p>此外，您还可以通过在站点配置中添加以下内容来全局设置自定义标题，这对于非英语写作非常有用：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// config.ts</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    container: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tipLabel: </span><span style="color:#9ECBFF;">&#39;提示&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      warningLabel: </span><span style="color:#9ECBFF;">&#39;警告&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      dangerLabel: </span><span style="color:#9ECBFF;">&#39;危险&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      infoLabel: </span><span style="color:#9ECBFF;">&#39;信息&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      detailsLabel: </span><span style="color:#9ECBFF;">&#39;详细信息&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// config.ts</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    container: {</span></span>
<span class="line"><span style="color:#24292E;">      tipLabel: </span><span style="color:#032F62;">&#39;提示&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      warningLabel: </span><span style="color:#032F62;">&#39;警告&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      dangerLabel: </span><span style="color:#032F62;">&#39;危险&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      infoLabel: </span><span style="color:#032F62;">&#39;信息&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      detailsLabel: </span><span style="color:#032F62;">&#39;详细信息&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="raw" tabindex="-1"><code>raw</code> <a class="header-anchor" href="#raw" aria-label="Permalink to &quot;\`raw\`&quot;">​</a></h3><p>这是一个特殊的容器，可用于防止与VitePress的样式和路由冲突。这在文档化组件库时特别有用。您可能还想查看 <a href="https://whyframe.dev/docs/integrations/vitepress" target="_blank" rel="noreferrer">whyframe</a> 以获得更好的隔离性。</p><p><strong>语法</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: raw</span></span>
<span class="line"><span style="color:#E1E4E8;">包裹在 &lt;div class=&quot;vp-raw&quot;&gt; 中。</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: raw</span></span>
<span class="line"><span style="color:#24292E;">包裹在 &lt;div class=&quot;vp-raw&quot;&gt; 中。</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><code>vp-raw</code> 类也可以直接用于元素。样式隔离目前是选择性的：</p><ul><li>使用您首选的包管理器</li></ul><p>安装 <code>postcss</code>：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postcss</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postcss</span></span></code></pre></div><ul><li><p>创建一个名为 <code>docs/postcss.config.mjs</code> 的文件，并添加以下内容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { postcssIsolateStyles } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">postcssIsolateStyles</span><span style="color:#E1E4E8;">()]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { postcssIsolateStyles } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#6F42C1;">postcssIsolateStyles</span><span style="color:#24292E;">()]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>它在底层使用 <a href="https://github.com/postcss/postcss-load-config" target="_blank" rel="noreferrer"><code>postcss-prefix-selector</code></a>。您可以像这样传递其选项：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">postcssIsolateStyles</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  includeFiles: [</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">vp-doc</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 默认为 /base\\.css/</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">postcssIsolateStyles</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  includeFiles: [</span><span style="color:#032F62;">/vp-doc</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css/</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// 默认为 /base\\.css/</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></li></ul><h2 id="代码块中的语法高亮" tabindex="-1">代码块中的语法高亮 <a class="header-anchor" href="#代码块中的语法高亮" aria-label="Permalink to &quot;代码块中的语法高亮&quot;">​</a></h2><p>VitePress使用 <a href="https://shiki.matsu.io/" target="_blank" rel="noreferrer">Shiki</a> 在Markdown代码块中突出显示语言语法，使用有色文本。Shiki支持各种编程语言。您只需在代码块的开头附加有效的语言别名即可：</p><p><strong>输入</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\`\`\`js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;MyComponent&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\`\`\`js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;MyComponent&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo in todos&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo.id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo in todos&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo.id&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**输出**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;MyComponent&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**输出**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;MyComponent&#39;</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo in todos&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo.id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo in todos&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo.id&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>有关 Shiki 仓库上的 <a href="https://github.com/shikijs/shiki/blob/main/docs/languages.md" target="_blank" rel="noreferrer">有效语言的列表</a>。</p><h2 id="代码块中的行高亮" tabindex="-1">代码块中的行高亮 <a class="header-anchor" href="#代码块中的行高亮" aria-label="Permalink to &quot;代码块中的行高亮&quot;">​</a></h2><p><strong>输入</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;已突出显示!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;已突出显示!&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**输出**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;已突出显示!&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**输出**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;已突出显示!&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>除了一行外，您还可以指定多个单行、范围或两者兼而有之：</p><ul><li>行范围：例如 <code>{5-8}</code>、<code>{3-10}</code>、<code>{10-17}</code></li><li>多个单行：例如 <code>{4,7,9}</code></li><li>行范围和单行：例如 <code>{4,7-13,16,23-27,40}</code></li></ul><p><strong>输入</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\`\`\`js{1,4,6-8}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 已突出显示</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">\`已突出显示!</span></span>
<span class="line"><span style="color:#9ECBFF;">      此行未突出显示，</span></span>
<span class="line"><span style="color:#9ECBFF;">      但这一行和接下来的2行都是。\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      motd: </span><span style="color:#9ECBFF;">&#39;VitePress很棒&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lorem: </span><span style="color:#9ECBFF;">&#39;ipsum&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\`\`\`js{1,4,6-8}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 已突出显示</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">\`已突出显示!</span></span>
<span class="line"><span style="color:#032F62;">      此行未突出显示，</span></span>
<span class="line"><span style="color:#032F62;">      但这一行和接下来的2行都是。\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      motd: </span><span style="color:#032F62;">&#39;VitePress很棒&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lorem: </span><span style="color:#032F62;">&#39;ipsum&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**输出**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`js{1,4,6-8}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default { // 已突出显示</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: \`已突出显示!</span></span>
<span class="line"><span style="color:#e1e4e8;">      此行未突出显示，</span></span>
<span class="line"><span style="color:#e1e4e8;">      但这一行和接下来的2行都是。\`,</span></span>
<span class="line"><span style="color:#e1e4e8;">      motd: &#39;VitePress很棒&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      lorem: &#39;ipsum&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**输出**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`js{1,4,6-8}</span></span>
<span class="line"><span style="color:#24292e;">export default { // 已突出显示</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: \`已突出显示!</span></span>
<span class="line"><span style="color:#24292e;">      此行未突出显示，</span></span>
<span class="line"><span style="color:#24292e;">      但这一行和接下来的2行都是。\`,</span></span>
<span class="line"><span style="color:#24292e;">      motd: &#39;VitePress很棒&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      lorem: &#39;ipsum&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>或者，您可以使用 <code>// [!code hl]</code> 注释直接在行中进行突出显示。</p><p><strong>输入</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\`\`\`js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;已突出显示!&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// [!code  hl]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\`\`\`js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;已突出显示!&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// [!code  hl]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**输出**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line highlighted"><span style="color:#e1e4e8;">      msg: &#39;已突出显示!&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**输出**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data() {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line highlighted"><span style="color:#24292e;">      msg: &#39;已突出显示!&#39; </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="代码块中的焦点" tabindex="-1">代码块中的焦点 <a class="header-anchor" href="#代码块中的焦点" aria-label="Permalink to &quot;代码块中的焦点&quot;">​</a></h2><p>在一行上添加 <code>// [!code focus]</code> 注释将对其进行焦点处理，并模糊代码块的其他部分。</p><p>此外，您可以使用 <code>// [!code focus:&lt;lines&gt;]</code> 定义要关注的行数。</p><p><strong>输入</strong></p><p>请注意，只需在 <code>!code</code> 后面添加一个空格，这里是两个空格以防止处理。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;已聚焦!&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// [!code  focus]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">\`\`\`js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;已聚焦!&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// [!code  focus]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**输出**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line has-focus"><span style="color:#e1e4e8;">      msg: &#39;已聚焦!&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**输出**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data() {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line has-focus"><span style="color:#24292e;">      msg: &#39;已聚焦!&#39; </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="代码块中的彩色差异" tabindex="-1">代码块中的彩色差异 <a class="header-anchor" href="#代码块中的彩色差异" aria-label="Permalink to &quot;代码块中的彩色差异&quot;">​</a></h2><p>在一行上添加 <code>// [!code --]</code> 或 <code>// [!code ++]</code> 注释将创建该行的差异，同时保留代码块的颜色。</p><p><strong>输入</strong></p><p>请注意，只需在 <code>!code</code> 后面添加一个空格，这里是两个空格以防止处理。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;已删除&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// [!code  --]</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;已添加&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// [!code  ++]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;已删除&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// [!code  --]</span></span>
<span class="line"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;已添加&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// [!code  ++]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**输出**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line diff remove"><span style="color:#e1e4e8;">      msg: &#39;已删除&#39; </span></span>
<span class="line diff add"><span style="color:#e1e4e8;">      msg: &#39;已添加&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**输出**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line diff remove"><span style="color:#24292e;">      msg: &#39;已删除&#39; </span></span>
<span class="line diff add"><span style="color:#24292e;">      msg: &#39;已添加&#39; </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="代码块中的错误和警告" tabindex="-1">代码块中的错误和警告 <a class="header-anchor" href="#代码块中的错误和警告" aria-label="Permalink to &quot;代码块中的错误和警告&quot;">​</a></h2><p>在一行上添加 <code>// [!code warning]</code> 或 <code>// [!code error]</code> 注释将根据需要着色。</p><p><strong>输入</strong></p><p>请注意，只需在 <code>!code</code> 后面添加一个空格，这里是两个空格以防止处理。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\`\`\`js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;错误&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// [!code  error]</span></span>
<span class="line"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;警告&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// [!code  warning]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\`\`\`js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;错误&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// [!code  error]</span></span>
<span class="line"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;警告&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// [!code  warning]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">**输出**</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line highlighted error"><span style="color:#e1e4e8;">      msg: &#39;错误&#39;, </span></span>
<span class="line highlighted warning"><span style="color:#e1e4e8;">      msg: &#39;警告&#39; </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">**输出**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data() {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line highlighted error"><span style="color:#24292e;">      msg: &#39;错误&#39;, </span></span>
<span class="line highlighted warning"><span style="color:#24292e;">      msg: &#39;警告&#39; </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="行号" tabindex="-1">行号 <a class="header-anchor" href="#行号" aria-label="Permalink to &quot;行号&quot;">​</a></h2><p>您可以通过配置启用每个代码块的行号：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    lineNumbers: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    lineNumbers: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>您可以在您的围栏代码块中添加 <code>:line-numbers</code> / <code>:no-line-numbers</code> 标记以覆盖配置中设置的值。</p><p>您还可以通过在 <code>:line-numbers</code> 后添加 <code>=</code> 来自定义起始行号。例如，<code>:line-numbers=2</code> 表示代码块中的行号将从 <code>2</code> 开始。</p><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\`\`\`ts {1}</span></span>
<span class="line"><span style="color:#6A737D;">// 默认情况下禁用行号</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第2行&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第3行&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`ts:line-numbers {1}</span></span>
<span class="line"><span style="color:#6A737D;">// 启用行号</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第2行&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第3行&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`ts:line-numbers=2 {1}</span></span>
<span class="line"><span style="color:#6A737D;">// 启用行号并从第2行开始</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第3行&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line4</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第4行&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\`\`\`ts {1}</span></span>
<span class="line"><span style="color:#6A737D;">// 默认情况下禁用行号</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第2行&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第3行&#39;</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">\`\`\`ts:line-numbers {1}</span></span>
<span class="line"><span style="color:#6A737D;">// 启用行号</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第2行&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第3行&#39;</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">\`\`\`ts:line-numbers=2 {1}</span></span>
<span class="line"><span style="color:#6A737D;">// 启用行号并从第2行开始</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第3行&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line4</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第4行&#39;</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span></code></pre></div><p><strong>输出</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#6A737D;">// 默认情况下禁用行号</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第2行&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第3行&#39;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#6A737D;">// 默认情况下禁用行号</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第2行&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第3行&#39;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#6A737D;">// 启用行号</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第2行&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第3行&#39;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#6A737D;">// 启用行号</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第2行&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第3行&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#6A737D;">// 启用行号并从第2行开始</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第3行&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line4</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;这是第4行&#39;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#6A737D;">// 启用行号并从第2行开始</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第3行&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line4</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;这是第4行&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="导入代码片段" tabindex="-1">导入代码片段 <a class="header-anchor" href="#导入代码片段" aria-label="Permalink to &quot;导入代码片段&quot;">​</a></h2><p>您可以通过以下语法从现有文件中导入代码片段：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/filepath</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/filepath</span></span></code></pre></div><p>它还支持<a href="#行突出显示">行突出显示</a>：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/filepath{highlightLines}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/filepath{highlightLines}</span></span></code></pre></div><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; ./snippets/snippet.js{2}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; ./snippets/snippet.js{2}</span></span></code></pre></div><p><strong>代码文件</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>输出</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>::: 提示 <code>@</code> 的值对应于源根目录。默认情况下，它是 VitePress 项目根目录，除非配置了 <code>srcDir</code>。或者，您还可以从相对路径导入：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; ../snippets/snippet.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; ../snippets/snippet.js</span></span></code></pre></div><p>:::</p><p>您还可以使用<a href="https://code.visualstudio.com/docs/editor/codebasics#_folding" target="_blank" rel="noreferrer">VS Code 区域</a>仅包含代码文件的相应部分。您可以在文件路径后添加 <code>#</code> 后提供自定义区域名称：</p><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; ./snippets/snippet-with-region.js#snippet{1}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; ./snippets/snippet-with-region.js#snippet{1}</span></span></code></pre></div><p><strong>代码文件</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// #region snippet</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// #endregion snippet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> foo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// #region snippet</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// #endregion snippet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> foo</span></span></code></pre></div><p><strong>输出</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>您还可以在大括号 (<code>{}</code>) 内指定语言，如下所示：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; ./snippets/snippet.cs{c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 带有行突出显示： --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; ./snippets/snippet.cs{1,2,4-6 c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 带有行号： --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; ./snippets/snippet.cs{1,2,4-6 c#:line-numbers}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; ./snippets/snippet.cs{c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 带有行突出显示： --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;&lt;&lt; ./snippets/snippet.cs{1,2,4-6 c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 带有行号： --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;&lt;&lt; ./snippets/snippet.cs{1,2,4-6 c#:line-numbers}</span></span></code></pre></div><p>如果源语言无法从文件扩展名中推断出，这将很有帮助。</p><h2 id="代码组" tabindex="-1">代码组 <a class="header-anchor" href="#代码组" aria-label="Permalink to &quot;代码组&quot;">​</a></h2><p>您可以像这样组合多个代码块：</p><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`js [config.js]</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`ts [config.ts]</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { UserConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">\`\`\`js [config.js]</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">\`\`\`ts [config.ts]</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { UserConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><strong>输出</strong></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-dKh_C" id="tab-kgdGeKz" checked="checked"><label for="tab-kgdGeKz">config.js</label><input type="radio" name="group-dKh_C" id="tab-YcHtMSx"><label for="tab-YcHtMSx">config.ts</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { UserConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { UserConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config</span></span></code></pre></div></div></div><p>您还可以在代码组中<a href="#import-code-snippets">导入代码片段</a>：</p><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 默认情况下使用文件名作为标题 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; ./snippets/snippet.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 也可以提供自定义标题 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; ./snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [</span><span style="color:#DBEDFF;text-decoration:underline;">带有区域的片段</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 默认情况下使用文件名作为标题 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;&lt;&lt; ./snippets/snippet.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 也可以提供自定义标题 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;&lt;&lt; ./snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [</span><span style="color:#032F62;text-decoration:underline;">带有区域的片段</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><strong>输出</strong></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-JX5FZ" id="tab-uTY8qOY" checked="checked"><label for="tab-uTY8qOY">snippet.js</label><input type="radio" name="group-JX5FZ" id="tab-d47JxWy"><label for="tab-d47JxWy">带有区域的片段</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><h2 id="markdown-文件包含" tabindex="-1">Markdown 文件包含 <a class="header-anchor" href="#markdown-文件包含" aria-label="Permalink to &quot;Markdown 文件包含&quot;">​</a></h2><p>您可以在另一个 Markdown 文件中包含一个 Markdown 文件，甚至可以嵌套。</p><p>::: 提示 您还可以使用 <code>@</code> 作为前缀，它将充当源根。默认情况下，它是 VitePress 项目根目录，除非配置了 <code>srcDir</code>。 :::</p><p>例如，您可以使用以下方式包含相对 Markdown 文件：</p><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># 文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## 基础</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--@include: ./parts/basics.md--&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># 文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## 基础</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--@include: ./parts/basics.md--&gt;</span></span></code></pre></div><p><strong>部分文件</strong> (<code>parts/basics.md</code>)</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">一些入门内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">可以使用 </span><span style="color:#79B8FF;">\`.foorc.json\`</span><span style="color:#E1E4E8;"> 创建。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">一些入门内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### 配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">可以使用 </span><span style="color:#005CC5;">\`.foorc.json\`</span><span style="color:#24292E;"> 创建。</span></span></code></pre></div><p><strong>等效代码</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># 文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## 基础</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">一些入门内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">可以使用 </span><span style="color:#79B8FF;">\`.foorc.json\`</span><span style="color:#E1E4E8;"> 创建。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># 文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## 基础</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">一些入门内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### 配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">可以使用 </span><span style="color:#005CC5;">\`.foorc.json\`</span><span style="color:#24292E;"> 创建。</span></span></code></pre></div><p>它还支持选择行范围：</p><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># 文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## 基础</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--@include: ./parts/basics.md{3,}--&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># 文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## 基础</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--@include: ./parts/basics.md{3,}--&gt;</span></span></code></pre></div><p><strong>部分文件</strong> (<code>parts/basics.md</code>)</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">一些入门内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">可以使用 </span><span style="color:#79B8FF;">\`.foorc.json\`</span><span style="color:#E1E4E8;"> 创建。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">一些入门内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### 配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">可以使用 </span><span style="color:#005CC5;">\`.foorc.json\`</span><span style="color:#24292E;"> 创建。</span></span></code></pre></div><p><strong>等效代码</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># 文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## 基础</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### 配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">可以使用 </span><span style="color:#79B8FF;">\`.foorc.json\`</span><span style="color:#E1E4E8;"> 创建。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># 文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## 基础</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### 配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">可以使用 </span><span style="color:#005CC5;">\`.foorc.json\`</span><span style="color:#24292E;"> 创建。</span></span></code></pre></div><p>所选行</p><p>范围的格式可以是：<code>{3,}</code>、<code>{,10}</code>、<code>{1,10}</code></p><p>::: 警告 请注意，如果文件不存在，此功能不会引发错误。因此，在使用此功能时，请确保内容按预期呈现。 :::</p><h2 id="数学方程式" tabindex="-1">数学方程式 <a class="header-anchor" href="#数学方程式" aria-label="Permalink to &quot;数学方程式&quot;">​</a></h2><p>目前，这是可选择的。要启用它，您需要安装 <code>markdown-it-mathjax3</code> 并在配置文件中设置 <code>markdown.math</code> 为 <code>true</code>：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">markdown-it-mathjax3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">markdown-it-mathjax3</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vitepress/config.ts</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    math: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vitepress/config.ts</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    math: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">当 $a \\ne 0$ 时，方程 $(ax^2 + bx + c = 0)$ 有两个解，它们是</span></span>
<span class="line"><span style="color:#E1E4E8;">$$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a} $$</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;font-weight:bold;">**麦克斯韦方程式:**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">| 方程式                                                                                                                                                                  | 描述                                                                                    |</span></span>
<span class="line"><span style="color:#E1E4E8;">| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |</span></span>
<span class="line"><span style="color:#E1E4E8;">| $\\nabla \\cdot \\vec{\\mathbf{B}}  = 0$                                                                                                                                      | $\\vec{\\mathbf{B}}$ 的散度为零                                                        |</span></span>
<span class="line"><span style="color:#E1E4E8;">| $\\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t}  = \\vec{\\mathbf{0}}$                                                          | $\\vec{\\mathbf{E}}$ 的旋度与 $\\vec{\\mathbf{B}}$ 的变化率成比例                            |</span></span>
<span class="line"><span style="color:#E1E4E8;">| $\\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} = \\frac{4\\pi}{c}\\vec{\\mathbf{j}}    \\nabla \\cdot \\vec{\\mathbf{E}} = 4 \\pi \\rho$ | </span><span style="color:#E1E4E8;font-style:italic;">_什么？_</span><span style="color:#E1E4E8;">                                                                                 |</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">当 $a \\ne 0$ 时，方程 $(ax^2 + bx + c = 0)$ 有两个解，它们是</span></span>
<span class="line"><span style="color:#24292E;">$$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a} $$</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;font-weight:bold;">**麦克斯韦方程式:**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">| 方程式                                                                                                                                                                  | 描述                                                                                    |</span></span>
<span class="line"><span style="color:#24292E;">| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |</span></span>
<span class="line"><span style="color:#24292E;">| $\\nabla \\cdot \\vec{\\mathbf{B}}  = 0$                                                                                                                                      | $\\vec{\\mathbf{B}}$ 的散度为零                                                        |</span></span>
<span class="line"><span style="color:#24292E;">| $\\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t}  = \\vec{\\mathbf{0}}$                                                          | $\\vec{\\mathbf{E}}$ 的旋度与 $\\vec{\\mathbf{B}}$ 的变化率成比例                            |</span></span>
<span class="line"><span style="color:#24292E;">| $\\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} = \\frac{4\\pi}{c}\\vec{\\mathbf{j}}    \\nabla \\cdot \\vec{\\mathbf{E}} = 4 \\pi \\rho$ | </span><span style="color:#24292E;font-style:italic;">_什么？_</span><span style="color:#24292E;">                                                                                 |</span></span></code></pre></div><p><strong>输出</strong></p><p>当 $a \\ne 0$ 时，方程 $(ax^2 + bx + c = 0)$ 有两个解，它们是 $$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a} $$</p><p><strong>麦克斯韦方程式:</strong></p><table><thead><tr><th>方程式</th><th>描述</th></tr></thead><tbody><tr><td>$\\nabla \\cdot \\vec{\\mathbf{B}} = 0$</td><td>$\\vec{\\mathbf{B}}$ 的散度为零</td></tr><tr><td>$\\nabla \\times \\vec{\\mathbf{E}}, +, \\frac1c, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} = \\vec{\\mathbf{0}}$</td><td>$\\vec{\\mathbf{E}}$ 的旋度与 $\\vec{\\mathbf{B}}$ 的变化率成比例</td></tr><tr><td>$\\nabla \\times \\vec{\\mathbf{B}} -, \\frac1c, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} = \\frac{4\\pi}{c}\\vec{\\mathbf{j}} \\nabla \\cdot \\vec{\\mathbf{E}} = 4 \\pi \\rho$</td><td><em>什么？</em></td></tr></tbody></table><h2 id="高级配置" tabindex="-1">高级配置 <a class="header-anchor" href="#高级配置" aria-label="Permalink to &quot;高级配置&quot;">​</a></h2><p>VitePress 使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noreferrer">markdown-it</a> 作为 Markdown 渲染器。上述许多扩展是通过自定义插件实现的。您可以使用 <code>.vitepress/config.js</code> 中的 <code>markdown</code> 选项进一步定制 <code>markdown-it</code> 实例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> markdownItAnchor </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;markdown-it-anchor&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> markdownItFoo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;markdown-it-foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// markdown-it-anchor 的选项</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// https://github.com/valeriangalliat/markdown-it-anchor#usage</span></span>
<span class="line"><span style="color:#E1E4E8;">    anchor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      permalink: markdownItAnchor.permalink.</span><span style="color:#B392F0;">headerLink</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// @mdit-vue/plugin-toc 的选项</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options</span></span>
<span class="line"><span style="color:#E1E4E8;">    toc: { level: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">config</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">md</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 使用更多 markdown-it 插件！</span></span>
<span class="line"><span style="color:#E1E4E8;">      md.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(markdownItFoo)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> markdownItAnchor </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;markdown-it-anchor&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> markdownItFoo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;markdown-it-foo&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// markdown-it-anchor 的选项</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// https://github.com/valeriangalliat/markdown-it-anchor#usage</span></span>
<span class="line"><span style="color:#24292E;">    anchor: {</span></span>
<span class="line"><span style="color:#24292E;">      permalink: markdownItAnchor.permalink.</span><span style="color:#6F42C1;">headerLink</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// @mdit-vue/plugin-toc 的选项</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options</span></span>
<span class="line"><span style="color:#24292E;">    toc: { level: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">config</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">md</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 使用更多 markdown-it 插件！</span></span>
<span class="line"><span style="color:#24292E;">      md.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(markdownItFoo)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,190),o=[e];function c(t,r,i,y,E,d){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{g as __pageData,u as default};

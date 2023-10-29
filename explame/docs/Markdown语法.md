---
title: Markdown语法
group: 写作 
lang: zh-CN
---
# Markdown语法

内置了Markdown扩展功能。

## 标题锚点

标题会自动应用锚链接。可以使用 `markdown.anchor` 选项配置锚点的渲染方式。

### 自定义锚点

要为标题指定自定义锚点标签而不是使用自动生成的标签，请在标题末尾添加后缀：

```markdown
# 使用自定义锚点 {#my-anchor}
```

这样，您可以链接到标题，例如 `#my-anchor`，而不是默认的 `#using-custom-anchors`。

## 链接

内部和外部链接都会受到特殊处理。

### 内部链接

内部链接会转换为SPA导航的路由链接。此外，每个子目录中包含的 `index.md` 将自动转换为 `index.html`，对应的URL为 `/`。

例如，给定以下目录结构：

```markdown
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

假设您在 `foo/one.md` 中：

```markdown
[主页](/) <!-- 将用户发送到根目录的 index.md -->
[foo](/foo/) <!-- 将用户发送到目录 foo 的 index.html -->
[foo heading](./#heading) <!-- 将用户锚定到 foo 目录的标题 -->
[bar - three](../bar/three) <!-- 您可以省略扩展名 -->
[bar - three](../bar/three.md) <!-- 您可以附加 .md -->
[bar - four](../bar/four.html) <!-- 或者您可以附加 .html -->
```

### 页面后缀

页面和内部链接默认使用 `.html` 后缀。

### 外部链接

外部链接会自动添加 `target="_blank" rel="noreferrer"`：

- [vuejs.org](https://vuejs.org)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)

## 前置元数据

[YAML前置元数据](https://jekyllrb.com/docs/front-matter/) 受到原生支持：

```yaml
---
title: 像黑客一样博客
lang: en-US
---
```

这些数据将在页面的其余部分中可用，以及所有自定义和主题组件。



## GitHub风格表格

**输入**

```markdown
| 表格        |      是      |  很酷 |
| ------------- | :-----------: | ----: |
| 列 3 是      | 右对齐 | $1600 |
| 列 2 是      | 居中    |   $12 |
| 斑马条纹 |   很整齐    |    $1 |
```

**输出**

| 表格        |      是      |   很酷 |
| ------------- | :-----------: | -----: |
| 列 3 是      | 右对齐 | \$1600 |
| 列 2 是      | 居中    |   \$12 |
| 斑马条纹 |   很整齐    |    \$1 |

## 表情符号 :tada:

**输入**

```markdown
:tada: :100:
```

**输出**

:tada: :100:

[所有表情符号的列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) 可在这里找到。

## 目录

**输入**

```markdown
[[toc]]
```

**输出**

[[toc]]

TOC的渲染方式可以使用 `markdown.toc` 选项配置。

## 自定义容器

可以通过其类型、标题和内容定义自定义容器。

### 默认标题

**输入**

```markdown
::: 信息
这是一个信息框。
:::

::: 提示
这是一个提示。
:::

::: 警告
这是一个警告。
:::

::: 危险
这是一个危险警告。
:::

::: 详细信息
这是一个详细信息块。
:::
```

**输出**

::: 信息
这是一个信息框。
:::

::: 提示
这是一个提示。
:::

::: 警告
这是一个警告。
:::

::: 危险
这是一个危险警告。
:::

::: 详细信息
这是一个详细信息块。
:::

### 自定义标题

您可以通过在容器的“类型”后面直接添加文本来设置自定义标题。

**输入**

```markdown
::: 危险 STOP
危险区域，请勿继续
:::

::: 详细信息 点击查看代码
```js
console.log('你好，VitePress!')
```
:::
```

**输出**

::: 危险 STOP
危险区域，请勿继续
:::

::: 详细信息 点击查看代码
```js
console.log('你好，VitePress!')
```
:::

此外，您还可以通过在站点配置中添加以下内容来全局设置自定义标题，这对于非英语写作非常有用：

```typescript
// config.ts
export default defineConfig({
  // ...
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
  // ...
})
```

### `raw`

这是一个特殊的容器，可用于防止与VitePress的样式和路由冲突。这在文档化组件库时特别有用。您可能还想查看 [whyframe](https://whyframe.dev/docs/integrations/vitepress) 以获得更好的隔离性。

**语法**

```markdown
::: raw
包裹在 <div class="vp-raw"> 中。
:::
```

`vp-raw` 类也可以直接用于元素。样式隔离目前是选择性的：

- 使用您首选的包管理器

安装 `postcss`：

  ```sh
  $ npm add -D postcss
  ```

- 创建一个名为 `docs/postcss.config.mjs` 的文件，并添加以下内容：

  ```js
  import { postcssIsolateStyles } from 'vitepress'

  export default {
    plugins: [postcssIsolateStyles()]
  }
  ```

  它在底层使用 [`postcss-prefix-selector`](https://github.com/postcss/postcss-load-config)。您可以像这样传递其选项：

  ```js
  postcssIsolateStyles({
    includeFiles: [/vp-doc\.css/] // 默认为 /base\.css/
  })
  ```

## 代码块中的语法高亮

VitePress使用 [Shiki](https://shiki.matsu.io/) 在Markdown代码块中突出显示语言语法，使用有色文本。Shiki支持各种编程语言。您只需在代码块的开头附加有效的语言别名即可：

**输入**

```markdown
```js
export default {
  name: 'MyComponent',
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
```

**输出**

```js
export default {
  name: 'MyComponent'
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

有关 Shiki 仓库上的 [有效语言的列表](https://github.com/shikijs/shiki/blob/main/docs/languages.md)。



## 代码块中的行高亮

**输入**

```markdown
```js{4}
export default {
  data () {
    return {
      msg: '已突出显示!'
    }
  }
}
```
```

**输出**

```js{4}
export default {
  data () {
    return {
      msg: '已突出显示!'
    }
  }
}
```

除了一行外，您还可以指定多个单行、范围或两者兼而有之：

- 行范围：例如 `{5-8}`、`{3-10}`、`{10-17}`
- 多个单行：例如 `{4,7,9}`
- 行范围和单行：例如 `{4,7-13,16,23-27,40}`

**输入**

```markdown
```js{1,4,6-8}
export default { // 已突出显示
  data () {
    return {
      msg: `已突出显示!
      此行未突出显示，
      但这一行和接下来的2行都是。`,
      motd: 'VitePress很棒',
      lorem: 'ipsum'
    }
  }
}
```
```

**输出**

```js{1,4,6-8}
export default { // 已突出显示
  data () {
    return {
      msg: `已突出显示!
      此行未突出显示，
      但这一行和接下来的2行都是。`,
      motd: 'VitePress很棒',
      lorem: 'ipsum',
    }
  }
}
```

或者，您可以使用 `// [!code hl]` 注释直接在行中进行突出显示。

**输入**

```markdown
```js
export default {
  data () {
    return {
      msg: '已突出显示!' // [!code  hl]
    }
  }
}
```
```

**输出**

```js
export default {
  data() {
    return {
      msg: '已突出显示!' // [!code hl]
    }
  }
}
```

## 代码块中的焦点

在一行上添加 `// [!code focus]` 注释将对其进行焦点处理，并模糊代码块的其他部分。

此外，您可以使用 `// [!code focus:<lines>]` 定义要关注的行数。

**输入**

请注意，只需在 `!code` 后面添加一个空格，这里是两个空格以防止处理。

```markdown

```js
export default {
  data () {
    return {
      msg: '已聚焦!' // [!code  focus]
    }
  }
}
```
```

**输出**

```js
export default {
  data() {
    return {
      msg: '已聚焦!' // [!code focus]
    }
  }
}
```

## 代码块中的彩色差异

在一行上添加 `// [!code --]` 或 `// [!code ++]` 注释将创建该行的差异，同时保留代码块的颜色。

**输入**

请注意，只需在 `!code` 后面添加一个空格，这里是两个空格以防止处理。


```js
export default {
  data () {
    return {
      msg: '已删除' // [!code  --]
      msg: '已添加' // [!code  ++]
    }
  }
}
```
```

**输出**

```js
export default {
  data () {
    return {
      msg: '已删除' // [!code --]
      msg: '已添加' // [!code ++]
    }
  }
}
```

## 代码块中的错误和警告

在一行上添加 `// [!code warning]` 或 `// [!code error]` 注释将根据需要着色。

**输入**

请注意，只需在 `!code` 后面添加一个空格，这里是两个空格以防止处理。

```markdown
```js
export default {
  data () {
    return {
      msg: '错误', // [!code  error]
      msg: '警告' // [!code  warning]
    }
  }
}
```
```

**输出**

```js
export default {
  data() {
    return {
      msg: '错误', // [!code error]
      msg: '警告' // [!code warning]
    }
  }
}
```

## 行号

您可以通过配置启用每个代码块的行号：

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```



您可以在您的围栏代码块中添加 `:line-numbers` / `:no-line-numbers` 标记以覆盖配置中设置的值。

您还可以通过在 `:line-numbers` 后添加 `=` 来自定义起始行号。例如，`:line-numbers=2` 表示代码块中的行号将从 `2` 开始。

**输入**

````md
```ts {1}
// 默认情况下禁用行号
const line2 = '这是第2行'
const line3 = '这是第3行'
```

```ts:line-numbers {1}
// 启用行号
const line2 = '这是第2行'
const line3 = '这是第3行'
```

```ts:line-numbers=2 {1}
// 启用行号并从第2行开始
const line3 = '这是第3行'
const line4 = '这是第4行'
```
````

**输出**

```ts {1}
// 默认情况下禁用行号
const line2 = '这是第2行'
const line3 = '这是第3行'
```

```ts:line-numbers {1}
// 启用行号
const line2 = '这是第2行'
const line3 = '这是第3行'
```

```ts:line-numbers=2 {1}
// 启用行号并从第2行开始
const line3 = '这是第3行'
const line4 = '这是第4行'
```

## 导入代码片段

您可以通过以下语法从现有文件中导入代码片段：

```md
<<< @/filepath
```

它还支持[行突出显示](#行突出显示)：

```md
<<< @/filepath{highlightLines}
```

**输入**

```md
<<< ./snippets/snippet.js{2}
```

**代码文件**

<<< ./snippets/snippet.js

**输出**

<<< ./snippets/snippet.js

::: 提示
`@` 的值对应于源根目录。默认情况下，它是 VitePress 项目根目录，除非配置了 `srcDir`。或者，您还可以从相对路径导入：

```md
<<< ../snippets/snippet.js
```

:::

您还可以使用[VS Code 区域](https://code.visualstudio.com/docs/editor/codebasics#_folding)仅包含代码文件的相应部分。您可以在文件路径后添加 `#` 后提供自定义区域名称：

**输入**

```md
<<< ./snippets/snippet-with-region.js#snippet{1}
```

**代码文件**

<<< ./snippets/snippet-with-region.js

**输出**

<<< ./snippets/snippet-with-region.js#snippet{1}

您还可以在大括号 (`{}`) 内指定语言，如下所示：

```md
<<< ./snippets/snippet.cs{c#}

<!-- 带有行突出显示： -->

<<< ./snippets/snippet.cs{1,2,4-6 c#}

<!-- 带有行号： -->

<<< ./snippets/snippet.cs{1,2,4-6 c#:line-numbers}
```

如果源语言无法从文件扩展名中推断出，这将很有帮助。

## 代码组

您可以像这样组合多个代码块：

**输入**

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

**输出**

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

您还可以在代码组中[导入代码片段](#import-code-snippets)：

**输入**

```md
::: code-group

<!-- 默认情况下使用文件名作为标题 -->

<<< ./snippets/snippet.js

<!-- 也可以提供自定义标题 -->

<<< ./snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [带有区域的片段]

:::
```

**输出**

::: code-group

<<< ./snippets/snippet.js

<<< ./snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [带有区域的片段]

:::

## Markdown 文件包含

您可以在另一个 Markdown 文件中包含一个 Markdown 文件，甚至可以嵌套。

::: 提示
您还可以使用 `@` 作为前缀，它将充当源根。默认情况下，它是 VitePress 项目根目录，除非配置了 `srcDir`。
:::

例如，您可以使用以下方式包含相对 Markdown 文件：

**输入**

```md
# 文档

## 基础

<!--@include: ./parts/basics.md-->
```

**部分文件** (`parts/basics.md`)

```md
一些入门内容。

### 配置

可以使用 `.foorc.json` 创建。
```

**等效代码**

```md
# 文档

## 基础

一些入门内容。

### 配置

可以使用 `.foorc.json` 创建。
```

它还支持选择行范围：

**输入**

```md
# 文档

## 基础

<!--@include: ./parts/basics.md{3,}-->
```

**部分文件** (`parts/basics.md`)

```md
一些入门内容。

### 配置

可以使用 `.foorc.json` 创建。
```

**等效代码**

```md
# 文档

## 基础

### 配置

可以使用 `.foorc.json` 创建。
```

所选行

范围的格式可以是：`{3,}`、`{,10}`、`{1,10}`

::: 警告
请注意，如果文件不存在，此功能不会引发错误。因此，在使用此功能时，请确保内容按预期呈现。
:::

## 数学方程式

目前，这是可选择的。要启用它，您需要安装 `markdown-it-mathjax3` 并在配置文件中设置 `markdown.math` 为 `true`：

```sh
npm add -D markdown-it-mathjax3
```

```ts
// .vitepress/config.ts
export default {
  markdown: {
    math: true
  }
}
```

**输入**

```md
当 $a \ne 0$ 时，方程 $(ax^2 + bx + c = 0)$ 有两个解，它们是
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**麦克斯韦方程式:**

| 方程式                                                                                                                                                                  | 描述                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | $\vec{\mathbf{B}}$ 的散度为零                                                        |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | $\vec{\mathbf{E}}$ 的旋度与 $\vec{\mathbf{B}}$ 的变化率成比例                            |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _什么？_                                                                                 |
```

**输出**

当 $a \ne 0$ 时，方程 $(ax^2 + bx + c = 0)$ 有两个解，它们是
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**麦克斯韦方程式:**

| 方程式                                                                                                                                                                  | 描述                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | $\vec{\mathbf{B}}$ 的散度为零                                                        |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | $\vec{\mathbf{E}}$ 的旋度与 $\vec{\mathbf{B}}$ 的变化率成比例                            |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _什么？_                                                                                 |

## 高级配置

VitePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为 Markdown 渲染器。上述许多扩展是通过自定义插件实现的。您可以使用 `.vitepress/config.js` 中的 `markdown` 选项进一步定制 `markdown-it` 实例：

```js
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: markdownItAnchor.permalink.headerLink()
    },

    // @mdit-vue/plugin-toc 的选项
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },

    config: (md) => {
      // 使用更多 markdown-it 插件！
      md.use(markdownItFoo)
    }
  }
}
```




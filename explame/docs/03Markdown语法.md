---
title: Markdown语法
group: 写作 
lang: zh-CN
---
# Markdown语法

基于vitepress改造，已集成所有功能，你还可以查看 [原文档](https://vitepress.dev/guide/markdown)


### 标题锚点
支持全自动的标题锚点，例如点击右侧小侧边菜单，可以观察到锚点被自动应用到url中，你还可以对自己设置锚点，自定义锚点方法如下

```markdown
# 标题 {#my-anchor}
```


## 链接

内部和外部链接都会受到特殊处理。

### 内部链接


例如，给定以下目录结构：

```markdown
.
├─ index.md
├─ foo
│  ├─ readme.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ readme.md
   ├─ three.md
   └─ four.md
```

假设您在 `foo/one.md` 中：

```markdown
[home](/) =>  /readme.md 
[foo](/foo/) => /foo/readme.md 
[foo heading](./#heading) => 将用户锚定到 foo 目录的heading标题 
[bar-three](../bar/three) => 您可以省略扩展名 
[bar-three](../bar/three.md) => 您可以附加 .md 
[bar-four](../bar/four.html) => 或者您可以附加 .html 
```

### 外部链接

点击外部链接自动添加 `target="_blank" rel="noreferrer"`:

```markdown
- [vuejs.org](https://vuejs.org)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)
```

- [vuejs.org](https://vuejs.org)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)


## 前置元数据

[YAML frontmatter](https://jekyllrb.com/docs/front-matter/) 受到原生支持：

```yaml
---
title: 像黑客一样博客
lang: en-US
---
```

## GitHub风格表格

**输入**

```markdown
| Tables        |       Are     |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**输出**


| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

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

## 自定义容器

可以通过其类型、标题和内容定义自定义容器。

### 默认标题

**输入**

```markdown
::: info
这是一个信息框。
:::

::: tip
This is a tip.
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险。
:::

::: details
这个带折叠
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
This is a tip.
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险。
:::

::: details
这个带折叠
:::

### 自定义标题

您可以通过在容器的类型后面添加文本来设置自定义标题

**Input**

````md
::: danger 危险
危险区域，请勿前进
:::

::: details 请点击我查看代码
```js
console.log('Hello, VitePress!')
```
:::
````

**Output**

::: danger 危险
危险区域，请勿前进
:::

::: details 请点击我查看代码
```js
console.log('Hello, VitePress!')
```
:::

## 语法高亮

VitePress使用 [Shiki](https://shiki.matsu.io/) 在Markdown代码块中突出显示语言语法，使用有色文本。Shiki支持各种编程语言。

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

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了一行外，您还可以指定多个单行、范围或两者一起指定：

- 行范围：例如 `{5-8}`、`{3-10}`、`{10-17}`
- 多个单行：例如 `{4,7,9}`
- 行范围和单行：例如 `{4,7-13,16,23-27,40}`

**输入**

````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

**输出**

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

或者，您可以使用 `// [!code hl]` 注释直接在行中进行突出显示。

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code  hl]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Highlighted!' // [!code hl]
    }
  }
}
```

## 代码块中的焦点

在一行上添加 `// [!code focus]` 注释将对其进行焦点处理，并模糊代码块的其他部分。

此外，您可以使用 `// [!code focus:<lines>]` 定义要关注的行数。

**输入**

请注意，只需在 `!code` 后面添加一个空格，这里是两个空格以防止处理。

````
```js
export default {
  data () {
    return {
      msg: '已聚焦!' // [!code focus]
    }
  }
}
```
````

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

````
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
````

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

**输入**

````
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

它还支持[代码块中的行高亮](#代码块中的行高亮)：

```md
<<< @/filepath{highlightLines}
```

**输入**

```
<<< ./snippets/snippet.js{2}
```

**代码文件**

<<< ./snippets/snippet.js

**输出**

<<< ./snippets/snippet.js

::: tip
`@` 的值对应扫描的根目录。或者，您还可以从相对路径导入：

```md
<<< ../snippets/snippet.js
```

:::

您还可以使用[VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding)仅包含代码文件的相应部分。您可以在文件路径后添加 `#` 添加区域注释名称：

**输入**

```md
<<< @/snippets/snippet-with-region.js#snippet{1}
```

**代码文件**

<<< ./snippets/snippet-with-region.js

**输出**

<<< ./snippets/snippet-with-region.js#snippet{1}


如果源语言无法从文件扩展名中推断出代码语言，您还可以在大括号 (`{}`) 内指定语言，如下所示：

```md
<<< ./snippets/snippet.cs{c#}

<!-- 带有行突出显示： -->

<<< ./snippets/snippet.cs{1,2,4-6 c#}

<!-- 带有行号： -->

<<< ./snippets/snippet.cs{1,2,4-6 c#:line-numbers}
```


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

````
::: code-group

<!-- 默认使用文件名作为标题-->

<<< @/docs/snippets/snippet.js

<!-- 您也可以提供自定义的 -->

<<< @/docs/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::
````

**输出**

::: code-group

<<< @/docs/snippets/snippet.js

<<< @/docs/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::

## Markdown 文件嵌套

您可以将一个markdown文件包含在另一个markdown文件中，甚至可以嵌套。

::: tip
你也可以用`@`作为markdown路径的前缀，它是您扫描的执行目录
:::

例如，你可以这样包含一个markdown文件：

**输入**

```md
# Docs

## Basics

<!--@include: ./parts/basics.md-->
```
**导入的文件如下：** (`parts/basics.md`)
```md

```md
Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

**等效代码**

```md
# Docs

## Basics

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.

```

它还支持选择行范围：

**输入**

```md
# Docs

## Basics

<!--@include: ./parts/basics.md{3,}-->
```

**导入的文件如下：** (`parts/basics.md`)

```md
Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

**等效代码**

```md
# Docs

## Basics

### Configuration

Can be created using `.foorc.json`.
```

所选行范围的格式可以是：`{3,}`、`{,10}`、`{1,10}`

::: warning 警告
请注意，如果文件不存在，此功能不会引发错误。因此，在使用此功能时，请确保导入的内容是有效的。
:::

## 数学方程式


**输入**


```md
When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**麦克斯韦方程:**

| equation                                                                                                                                                                  | description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                 |
```

**输出**

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**麦克斯韦方程式:**

| equation                                                                                                                                                                  | description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                 |


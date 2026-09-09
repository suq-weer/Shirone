---
title: 试了 Tauri 一个月后，我对 Rust 的初步认知
published: 2026-09-09
description: 内存安全的语言？让我一探究竟
category: Rust
tags: [rust, tauri]
---

## 背景

暑假有感而发，想用 Rust 写一个 Minecraft 启动器：

::github{repo="suq-weer/tmml"}

其实之前原本是想用 `Electron` 来作技术栈的，看到了一个老牌启动器 BakaXL 准备使用 `Tauri` 重写 3.0 版本，在那时也有所耳闻，`Tauri` 使用系统 Webview 作前端，用 `Rust` 做背后的逻辑处理，既保证内存安全的同时，也不会过多的占用系统资源。

于是就开始着手准备了，截至目前，启动器基本已经实现了原版的 Minecraft 下载与启动。

## 回顾业务代码

### 错误传递机制

说实话，刚开始写 Rust 的时候，经常跟 Rust 编译器打架，吵的最多的就是类型检查机制：

```rust
// 这么整的话，函数返回类型就要是 Result<>，解包就要做好对应的检查机制
pub async fn fetch_and_parse_json<T: DeserializeOwned + Debug>(url: &str) -> Result<T>
```

很多 Rust 库方法返回的大多也是 `Result<>`，这一点对我来说有点烦，主要还是解包还得处理错误。

不过也有个省心的办法，就是让父函数的返回值也变成 `Result<>`，这样子处理方式就是直接加个 `?`：

```rust
pub async fn fetch_and_parse_json<T: DeserializeOwned + Debug>(url: &str) -> Result<T> {
    // 这里变量类型就不会是 Result<> 了
    let data: reqwest::Response = client.get(url).send().await?;
    // ...
}
```

后面才终于知道，Rust 这个机制的神奇之处在于，越来越多的函数用的都是 `Result<>`，一路传递下来，发现到后面 `Result<>` 的处理都汇集在程序入口函数（或者是堆栈的最底部函数）里面了，相当于**入口函数的错误处理就等于是给整个项目做好了一个全面的错误处理模块**。

### 所有权机制

```rust
let a: u8 = 0;
foo(a);
// 编译器会在这里报错，因为 a 的所有权传递到了 foo()
return a;

// 正确的代码是这样：
let a: u8 = 0;
foo(&a);
return a;
```

起初我还纳闷为什么 Rust 要搞这样一个看上去多此一举的所有权机制，可我翻阅了 Rust 文档才知道，这正是为了防止内存被莫名其妙修改进而导致内存不安全。

我们可以把变量 a 想象成最根本的样子：**一段连续在内存存储的8位二进制无符号数字**

如果我们调用 `foo()` 就相当于把这段内存直接让 `foo()` 作修改，当 `foo()` 的逻辑结束的时候，父函数其实是不知道修改了什么的，后面再来修改，就造就了一段不安全的内存。

而多加一个 `&` 类型，让这个数字有了一个索引，不仅是在阅读代码时知道“原来这个变量被修改过"，还能让编译器限定 `foo()` 所能做的操作不会影响内存安全。

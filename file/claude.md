# Claude Code CLI 使用指南

## 1、基础介绍

Claude Code CLI = 本地终端里的 Claude 编码助手

- 直接读写本地文件
- 直接执行命令、调试、构建
- 支持自动修复、生成、重构
- 内置 MCP（运行环境）+ Skills（技能库）

## 2、快速安装

```bash
# 安装（官方一键脚本）
curl -fsSL https://cli.anthropic.com/install.sh | sh

# 验证安装
claude version

# 登录（必须）
claude login
```

## 3、核心概念（必须懂）

**MCP = Model Control Protocol**

统一的接入规范

**Skills = 技能库**

专业能力包

![alt text](/image.png)

**Sub-agent = 子智能**

子线程

## 4、最常用命令

| 命令 | 说明 |
|------|------|
| `/help` | 查看所有命令 |
| `/exit` | 退出 CLI |
| `/clear` | 清空对话历史 |
| `/compact` | 压缩对话历史 |
| `/cost` | 查看当前对话成本 |
| `/logout` | 退出登录 |
| `/model` | 查看当前模型 |
| `/doctor` | 检测 Claude 状态 |


## 5、Claude.md
1. 核心作用：打破“健忘症”
2. 文件详解

> 目的： 当你开启一个新的对话 Session 时，Agent 会先读这个文件，从而无缝衔接上一次的工作进度。
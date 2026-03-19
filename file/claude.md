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

大白话：Claude 能安全操控你电脑的 "权限通道"

**Skills = 技能库**

大白话：Claude 预先学会的 "专业能力包"

## 4、最常用命令

| 命令 | 说明 |
|------|------|
| `/help` | 查看所有命令 |
| `/exit` | 退出 CLI |
| `/clear` | 清空对话历史 |
| `/files` | 查看当前目录所有文件 |
| `/read 文件名` | 读取文件内容 |
| `/write 文件名` | 写入/创建文件 |
| `/edit 文件名` | 编辑文件 |
| `/delete 文件名` | 删除文件 |
| `/skills list` | 查看所有技能 |
| `/skills enable 技能名` | 开启技能 |
| `/skills disable 技能名` | 关闭技能 |
| `/project init` | 初始化项目 |
| `/project info` | 查看项目信息 |
| `/ignore 文件` | 让 Claude 忽略某个文件 |

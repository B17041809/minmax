# OpenSpec

OpenSpec 是 Fission-AI 推出的轻量级、开源、AI 友好的规范驱动开发（SDD）框架与 CLI 工具，专为 Cursor、Claude、Copilot 等 AI 编程助手设计，核心是先定规范、再写代码，让 AI 严格按规则生成代码，实现需求、设计、实现、归档全链路可追溯、可管控。

**链接**: https://github.com/Fission-AI/OpenSpec

## 一、核心定位与价值

**解决痛点**：AI 编码时需求模糊、反复返工、结果不可控。

**核心理念**：先 Spec，后 Code。

- **Spec（规范）**：明确 "做什么、怎么做、分几步"，是人与 AI 的统一契约。
- **Code（代码）**：AI 严格按规范生成，减少幻觉、避免偏离需求。

**核心价值：**

| 价值 | 说明 |
|------|------|
| AI 编程可控 | AI 不再自由发挥，完全遵循规范 |
| 全链路可追溯 | 从需求提案到功能归档，每一步都有记录 |
| 团队协作高效 | 统一规范消除沟通偏差，新人快速上手 |
| 兼容主流 AI 工具 | 原生支持 Cursor、Claude、Copilot 等 20+ 工具 |
| 零侵入集成 | 不破坏现有项目结构，一键初始化即可使用 |
| 无需 API 密钥 | 完全本地运行 |

## 二、核心工作流（三步法）

OpenSpec 采用 **Proposal → Apply → Archive** 的轻量级流程：

### Proposal（提案）

```bash
openspec create my-feature
```

作用：创建结构化 Markdown 提案文档，描述要实现的变更、需求、验收标准。

### Apply（应用）

```bash
openspec apply my-feature
```

作用：AI 按提案生成代码、执行变更、完成实现。

### Archive（归档）

```bash
openspec archive my-feature
```

作用：将已完成的变更归档，形成可审计的历史记录。

## 三、关键特性

- **Brownfield-first（存量优先）**：特别适合在现有项目上做迭代开发（1→n），轻松处理跨模块修改。

- **双文件夹架构**：
  - `openspec/specs/`：当前项目的规范 "真相源"
  - `openspec/changes/`：待处理的变更提案，隔离变更、便于管理

- **显式变更追踪**：所有变更都有明确的提案、实现、归档轨迹。

- **跨规范化更新**：支持规范的迭代与合并。

- **命令集（/opsx:xxx）**：提供 `/opsx:explore`、`/opsx:new`、`/opsx:apply` 等命令引导协作。

---
to: src/entities/<%=name%>/index.ts
---
export * from './ui'
export * as <%=h.capitalize(name)%>Model from './model'
export * as <%=h.capitalize(name)%>Lib from './lib'

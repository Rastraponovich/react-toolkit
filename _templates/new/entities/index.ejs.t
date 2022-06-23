---
to: src/entities/<%=h.inflection.pluralize(name)%>/index.ts
---
export * from './ui'
export * as <%=h.capitalize(name)%>Model from './model'
export * as <%=h.capitalize(name)%>Lib from './lib'

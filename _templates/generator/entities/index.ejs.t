
---
to: _templates/<%= name %>/<%= action || 'entities' %>/index.ejs.t
---
---
to: src/entities/<%=name%>/index.ts
---
export * from './ui'
export * as <%=name%>Model from './model'
export * as <%=name%>Lib from './lib'




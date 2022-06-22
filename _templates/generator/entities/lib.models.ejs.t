---
to: _templates/<%= name %>/<%= action || 'entities' %>/lib.models.ejs.t
---
---
to: src/entities/<%=name%>/lib/models.ts
---
export type T<%=h.capitalize(name)%> = {}


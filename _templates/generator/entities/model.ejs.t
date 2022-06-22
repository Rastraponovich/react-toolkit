
---
to: _templates/<%= name %>/<%= action || 'entities' %>/model.ejs.t
---
---
to: src/entities/<%=name%>/model/index.ts
---
export * as stores from './stores'
export * as actions from './actions'
export * as selectors from './selectors'






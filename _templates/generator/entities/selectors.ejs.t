---
to: _templates/<%= name %>/<%= action || 'entities' %>/selectors.ejs.t
---
---
to: src/entities/<%=name%>/model/selectors.ts
---


import { RootState } from "app/providers"
export const use<%=h.capitalize(name)%> = (state: RootState) => state.<%=name%>.<%=name%>

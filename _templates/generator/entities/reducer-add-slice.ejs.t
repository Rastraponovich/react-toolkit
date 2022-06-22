---
to: _templates/<%= name %>/<%= action || 'entities' %>/reducer-add-slice.ejs.t
---
---
inject: true
to: src/app/providers/store.ts

after: "reducer: {"
---
[<%=h.capitalize(name)%>Model.stores.<%=h.capitalize(name)%>Slice.name]: <%=h.capitalize(name)%>Model.stores.<%=h.capitalize(name)%>Slice.reducer,

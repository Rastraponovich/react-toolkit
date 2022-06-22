---
inject: true
to: src/app/providers/store.ts
skip_if: <%= name %>
after: "export const store = configureStore({
    reducer: {"
---
[<%=h.capitalize(name)%>Model.stores.<%=h.capitalize(name)%>Slice.name]: <%=h.capitalize(name)%>Model.stores.<%=h.capitalize(name)%>Slice.reducer,

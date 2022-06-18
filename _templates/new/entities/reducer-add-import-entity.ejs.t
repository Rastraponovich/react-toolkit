---
inject: true
to: src/app/providers/store.ts
skip_if: <%= name %>
before: "export const store"
---
import { <%=h.capitalize(name)%>Model  } from "entities/<%=h.inflection.pluralize(name)%>"

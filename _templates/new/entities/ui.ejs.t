---
to: src/entities/<%=name%>/ui/index.tsx
---
import clsx from 'clsx'
import { useAppSelector } from "app/hooks"
import { selectors } from "../model"


export const <%=h.capitalize(name)%> = () => {

    const <%=name%> = useAppSelector(selectors.use<%=h.capitalize(name)%>)
    return
}

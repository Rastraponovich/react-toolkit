---
to: _templates/<%= name %>/<%= action || 'entities' %>/stores.ejs.t
---
---
to: src/entities/<%=name%>/model/store.ts
---
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {T<%=h.capitalize(name)%>} from '../lib'

type TInitialState = {
    <%=name%>:T<%=h.capitalize(name)%>
}

const initialState: TInitialState = {
    <%=name%>:{} as T<%=h.capitalize(name)%>
}

export const <%=h.capitalize(name)%>Slice = createSlice({
    name: "<%=name%>",
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
})
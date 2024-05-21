declare type RootState = ReturnType<typeof import('./store').store.getState>
declare type AppStore = ReturnType<typeof import('./store').store.setupStore>
declare type AppDispatch = AppStore['dispatch']
export type AuthType = {}

const authInitialState: AuthType = {}

export const authReducer = (state: AuthType = authInitialState, action: any): AuthType => {
    switch (action.type) {
        default:
            return state
    }
}
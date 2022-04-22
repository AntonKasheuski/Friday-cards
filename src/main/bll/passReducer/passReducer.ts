export type PassType = {}

const passInitialState: PassType = {}

export const passReducer = (state: PassType = passInitialState, action: any): PassType => {
    switch (action.type) {
        default:
            return state
    }
}
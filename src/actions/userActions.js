import asyncStorage from "@react-native-async-storage/async-storage";
export const loginAction = (username) => {
    return async (dispatch) => {
        try {

            await asyncStorage.setItem('username', username)

            dispatch({
                type: 'LOGIN',
                payload: username
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const logoutAction = () => {
    return async (dispatch) => {
        try {
            await asyncStorage.removeItem('username')
            dispatch({
                type: "LOGOUT"
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const keepLogin = () => {
    return async (dispatch) => {
        try {
            const username = await asyncStorage.getItem('username')

            if (!username) return

            dispatch({
                type: "LOGIN",
                payload: username
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}


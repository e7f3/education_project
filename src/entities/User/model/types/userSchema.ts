export interface User {
  id: string
  username: string
}

export interface UserSchema {
  userAuthData?: User
  _initialized: boolean
}

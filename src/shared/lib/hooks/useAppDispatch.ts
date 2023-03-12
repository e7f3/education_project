import { useDispatch } from 'react-redux'

// from app to shared :(
import { AppDispatch } from 'app/providers/StoreProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()

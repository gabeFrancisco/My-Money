import { createStore, combineReducers} from 'redux'

const reducers = combineReducers({
  dashboard: () => (
    {
      summary: {
        credit: 100,
        debt: 50
      }
    }
  )
})

function storeConfig(){
  return createStore(reducers)
}

export default storeConfig
import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

const operationLogs = ( state = [], action ) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const opreationLog = {
        description: action.description,
        operatedAt: action.operatedAt
      }
      return [opreationLog, ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default operationLogs
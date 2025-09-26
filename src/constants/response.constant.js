const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  MULTI_STATUS: 207,
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401,
  UNAUTHORIZED: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
}

const STATUS_MESSAGES = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  EMPTY_REQUEST: 'Empty Request Received',
  SERVER_ERROR: 'Internal Server Error',
  ERROR: 'ERROR',
  UNAUTHORIZED: 'Access Denied',
  BAD_REQUEST: 'Bad Request',
  NOT_FOUND: 'No Resource Found',
}

const ERROR_MESSAGE = {
  USER_RETRIEVE_ERROR: 'Error while retrieving user',
  USER_ALREADY_EXISTS: 'User already exists',
  INVALID_PATH_PARAM: 'Invalid path parameters',
  INVALID_FILE: 'Invalid file passed',
  INVALID_USER_SCHEMA: 'Invalid user schema',
  GAME_RETRIEVE_ERROR: 'Error while retrieving game data',
  GAME_ALREADY_EXISTS: 'Game already exists',
  RATINGS_NOT_FOUND: 'Rating not found',
  GAME_USER_NOT_FOUND: 'Game or user not found',
}

export { STATUS_CODE, STATUS_MESSAGES, ERROR_MESSAGE }
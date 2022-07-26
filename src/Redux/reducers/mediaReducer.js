import {
  DELETE_MEDIA_FAILURE,
  DELETE_MEDIA_REQUEST,
  DELETE_MEDIA_SUCCESS,
  GET_MEDIA_BY_ID_FAILURE,
  GET_MEDIA_BY_ID_REQUEST,
  GET_MEDIA_BY_ID_SUCCESS,
  GET_MEDIA_FAILURE,
  GET_MEDIA_REQUEST,
  GET_MEDIA_SUCCESS,
  POST_MEDIA_FAILURE,
  POST_MEDIA_REQUEST,
  POST_MEDIA_SUCCESS,
  UPDATE_MEDIA_FAILURE,
  UPDATE_MEDIA_REQUEST,
  UPDATE_MEDIA_SUCCESS,
} from "../Types/MediaTypes";

const initialState = {
  loading: false,
  media: [],
  error: "",
  updateMedia: {},
};

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEDIA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MEDIA_SUCCESS:
      return {
        loading: false,
        media: action.payload,
        error: "",
      };

    case GET_MEDIA_FAILURE:
      return {
        loading: false,
        media: [],
        error: action.payload,
      };

    //post
    case POST_MEDIA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_MEDIA_SUCCESS:
      return {
        ...state,
        loading: false,
        media: [...state.media, action.payload],
      };
    case POST_MEDIA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        media: [],
      };

    //delete
    case DELETE_MEDIA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MEDIA_SUCCESS:
      const filterItems = state.media.filter(
        (items) => items.id !== action.payload
      );

      return {
        ...state,
        loading: false,
        media: filterItems,
      };
    case DELETE_MEDIA_FAILURE:
      return {
        ...state,
        loading: false,
        media: [],
      };

    //get MEDIA by id
    case GET_MEDIA_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MEDIA_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        updateMedia: action.payload,
      };
    case GET_MEDIA_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updateMedia: {},
      };

    //update MEDIA case
    case UPDATE_MEDIA_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case UPDATE_MEDIA_SUCCESS:
      const filteredItemIndex = state.media.findIndex(
        (media) => media.id === action.payload.id
      );
      const newArray = [...state.media];
      newArray[filteredItemIndex] = action.payload;
      return {
        ...state,
        loading: false,
        media: newArray,
      };

    case UPDATE_MEDIA_FAILURE:
      return {
        ...state,
        loading: false,
        media: [],
      };
    default:
      return state;
  }
};

export default mediaReducer;

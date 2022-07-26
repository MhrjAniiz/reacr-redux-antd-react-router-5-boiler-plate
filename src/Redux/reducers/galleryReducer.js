import {
  DELETE_GALLERY_FAILURE,
  DELETE_GALLERY_REQUEST,
  DELETE_GALLERY_SUCCESS,
  GET_GALLERY_BY_ID_FAILURE,
  GET_GALLERY_BY_ID_REQUEST,
  GET_GALLERY_BY_ID_SUCCESS,
  GET_GALLERY_FAILURE,
  GET_GALLERY_REQUEST,
  GET_GALLERY_SUCCESS,
  POST_GALLERY_FAILURE,
  POST_GALLERY_REQUEST,
  POST_GALLERY_SUCCESS,
  UPDATE_GALLERY_FAILURE,
  UPDATE_GALLERY_REQUEST,
  UPDATE_GALLERY_SUCCESS,
} from "../Types/GalleryTypes";

const initialState = {
  loading: false,
  gallery: [],
  error: "",
  updateGallery: {},
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_GALLERY_SUCCESS:
      return {
        loading: false,
        gallery: action.payload,
        error: "",
      };

    case GET_GALLERY_FAILURE:
      return {
        loading: false,
        gallery: [],
        error: action.payload,
      };
    //post
    case POST_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        gallery: [...state.gallery, action.payload],
      };
    case POST_GALLERY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        gallery: [],
      };

    //delete
    case DELETE_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_GALLERY_SUCCESS:
      const filterItems = state.gallery.filter(
        (items) => items.id !== action.payload
      );

      return {
        ...state,
        loading: false,
        gallery: filterItems,
      };
    case DELETE_GALLERY_FAILURE:
      return {
        ...state,
        loading: false,
        gallery: [],
      };

    //get gallery by id
    case GET_GALLERY_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_GALLERY_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        updateGallery: action.payload,
      };
    case GET_GALLERY_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updateGallery: {},
      };

    //update gallery case
    case UPDATE_GALLERY_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case UPDATE_GALLERY_SUCCESS:
      const filteredItemIndex = state.gallery.findIndex(
        (gallery) => gallery.id === action.payload.id
      );
      const newArray = [...state.gallery];
      newArray[filteredItemIndex] = action.payload;
      return {
        ...state,
        loading: false,
        gallery: newArray,
      };

    case UPDATE_GALLERY_FAILURE:
      return {
        ...state,
        loading: false,
        gallery: [],
      };
    default:
      return state;
  }
};

export default galleryReducer;

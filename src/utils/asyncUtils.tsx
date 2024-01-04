/**
 * reducer에서 수행할 action을 정의
 * @param type
 * @returns {{success: string, error: string}}
 */
export const reducerUtils = {
  init: () => ({
    data: null,
    loading: false,
    error: false,
    errorMessage: null,
  }),

  loading: (prevData = null) => ({
    data: prevData,
    loading: true,
    error: false,
    errorMessage: null,
  }),

  success: (data = null) => ({
    data: data,
    loading: false,
    error: false,
    errorMessage: null,
  }),

  error: (error: any) => ({
    data: null,
    loading: false,
    error: true,
    errorMessage: error.msg,
  }),
};

export interface ReducerUtils {
  init: () => {
    data: null;
    loading: false;
    error: false;
    errorMessage: null;
  };

  loading: (prevData?: any) => {
    data: any;
    loading: true;
    error: false;
    errorMessage: null;
  };

  success: (data?: any) => {
    data: any;
    loading: false;
    error: false;
    errorMessage: null;
  };

  error: (error: any) => {
    data: null;
    loading: false;
    error: true;
    errorMessage: string;
  };
}

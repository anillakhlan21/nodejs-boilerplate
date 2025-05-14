export const apiResponse = ({
    success = true,
    message = '',
    data = null,
    status = 200,
  }: {
    success?: boolean;
    message?: string;
    data?: any;
    status?: number;
  }) => {
    return {
      success,
      message,
      data,
      status,
    };
  };
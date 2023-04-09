export const validator = {
  email(value: string) {
      const result = EMAIL_PATTERN.test(value);
      return {
          value: result,
          message: result ? "" : ValidationError.EMAIL_ERROR,
      };
  },
  password(value: string) {
      const result = value.length >= 8;
      return {
          value: result,
          message: result ? "" : ValidationError.PASSWORD_ERROR,
      };
  },
};

const EMAIL_PATTERN = /@/


export const ValidationError = {
  EMAIL_ERROR: "이메일 형식으로 입력해주세요.",
  PASSWORD_ERROR: "8자리 이상 입력해주세요."
};
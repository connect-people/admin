

export const isMatchText = (regex, value) => {
    if (!regex) {
      console.error(`[isMatchText] regex pattern 이 들어오지 않았습니다.`);
      return false;
    }
  
    const regexPattern = new RegExp(regex);
    return regexPattern.test(value);
  };
  
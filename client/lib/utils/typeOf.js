//^ 숫자가 포함된 문자열인지, 그냥 숫자만 포함되어 있는지 선별하는 함수


export function isNumericString(data){
  data = Number(data);
  return !isNaN(data)
}


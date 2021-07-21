export function formatCurrency(number, decPlaces, decSep, thouSep) {
  (decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces),
    (decSep = typeof decSep === 'undefined' ? '.' : decSep);
  thouSep = typeof thouSep === 'undefined' ? ',' : thouSep;
  const decIndex = number.toString().indexOf(decSep);
  const sign = number < 0 ? '-' : '';
  let decValue =
    decIndex > 0
      ? number.toString().substring(1 + decIndex, 1 + decIndex + decPlaces)
      : '';
  if (decValue.length < decPlaces) {
    decValue += '0'.repeat(decPlaces - decValue.length);
  }
  const integerValue =
    decIndex > 0 ? number.toString().substring(0, decIndex) : number.toString();
  return (
    sign +
    integerValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
    decSep +
    decValue
  );
}

export function roundNumber(number, places) {
  return +(Math.round(number + 'e+' + places) + 'e-' + places);
}

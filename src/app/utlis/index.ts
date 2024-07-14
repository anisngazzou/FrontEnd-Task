export function formatArrays(arr1: any[], arr2: any[]) {
  const allNames = new Set([
    ...arr1.map((item) => item.name),
    ...arr2.map((item) => item.name),
  ]);

  const createLookup = (arr: any[]) => {
    return arr.reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});
  };

  const lookup1 = createLookup(arr1);
  const lookup2 = createLookup(arr2);

  const formattedArray1: { name: any; value: any }[] = [];
  const formattedArray2: { name: any; value: any }[] = [];

  allNames.forEach((name) => {
    formattedArray1.push({
      name: name,
      value: lookup1[name] !== undefined ? lookup1[name] : null,
    });
    formattedArray2.push({
      name: name,
      value: lookup2[name] !== undefined ? lookup2[name] : null,
    });
  });

  return [
    formattedArray1.sort((a, b) => parseFloat(a.name) - parseFloat(b.name)),
    formattedArray2.sort((a, b) => parseFloat(a.name) - parseFloat(b.name)),
  ];
}

export function filterCommonNames(arr1: any[], arr2: any[]) {
  const namesSet1 = new Set(arr1.map((item) => item.name));

  const namesSet2 = new Set(arr2.map((item) => item.name));

  const commonNames = [...namesSet1].filter((name) => namesSet2.has(name));

  const filteredArr1 = arr1.filter((item) => commonNames.includes(item.name));
  const filteredArr2 = arr2.filter((item) => commonNames.includes(item.name));

  return [filteredArr1, filteredArr2];
}

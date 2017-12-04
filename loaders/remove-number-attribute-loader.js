export default function (source) {
  const parsedSource = JSON.parse(source);

  const findKeys = (source) => {
    const values = Object.values(source);

    for (let key in source) {
      if (!(isNaN(Number(key))) && typeof Number(key) === 'number') {
        delete source[key];
      }
    }

    for (let i = 0; i <= values.length; i++) {
      if (typeof values[i] === 'object') {
        findKeys(values[i]);
      }
    }
  };

    return `export default ${ JSON.stringify(source) }`;
};
interface QueryParams {
  month?: number;
  year?: number;
}

export default function getQueryParams(): QueryParams {
  const paramsString = window.location.hash.match(/\?.+$/i)?.[0] ?? "";
  const searchParams = new URLSearchParams(paramsString);
  const result: QueryParams = {};

  (["month", "year"] as (keyof QueryParams)[]).forEach((key) => {
    const val = searchParams.get(key);
    if (val) {
      result[key] = +val;
    }
  });

  return result;
}

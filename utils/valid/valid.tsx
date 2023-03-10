const valid = (
  date: string,
  time: string,
  venue: string,
  capacity: number,
  description: string,
  bannerItem: any,
  privacy: string,
  tagItems: any
) => {
  if (!date || !time || !venue || !capacity || !description || !privacy)
    return "Please add all fields.";
  if (!bannerItem) return "Please add a banner fields.";
  if (tagItems?.length === 0) return "Please add bagdes.";
};

export default valid;

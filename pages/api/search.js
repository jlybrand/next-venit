// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const sicCodes = {
  dentists: "802101",
  doctors: "801101",
  opticians: "599504",
  pharmacies: "591205",
};

export default async function handler(req, res) {
  const { streetAddress, zipCode, radius, businessType } = req.body;
  // console.log(streetAddress, zipCode, radius, businessType );
  const origin = `${streetAddress} ${zipCode};`;
  const sicCode = sicCodes[businessType];
  // console.log(sicCode);
  const params = {
    origin: origin,
    hostedDataList: [
      {
        tableName: "mqap.ntpois",
        extraCriteria: "group_sic_code LIKE ?",
        parameters: [`${businessType}`],
        columnNames: [
          "name",
          "address",
          "city",
          "state",
          "postal_code",
          "phone",
          "group_sic_code",
          "lat",
          "lng",
        ],
      },
    ],
    options: {
      radius: radius,
      maxMatches: 4000,
    },
  };
console.log(`${process.env.API_URL}?${process.env.API_KEY_NAME}=${process.env.API_KEY_VALUE}`,)
  try {
    const apiResponse = await axios.post(
      `${process.env.API_URL}?${process.env.API_KEY_NAME}=${process.env.API_KEY_VALUE}`,
      params
    );

    if (apiResponse.data.resultsCount) {
      const searchResults = apiResponse.data.searchResults.map((result) => {
        return result.fields;
      });
      console.log(searchResults);
      return searchResults;
    } else return -1;
  } catch (error) {
    console.log("Error from search.fetchData: ", error);
    throw error;
  }

  // res.status(200).json({ API_URL: process.env.API_URL });
}

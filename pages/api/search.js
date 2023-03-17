import axios from "axios";
const API_URL = process.env.API_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

const sicCodes = {
  dentists: "802101",
  doctors: "801101",
  opticians: "599504",
  pharmacies: "591205",
};

export default async function handler(req, res) {
  const { streetAddress, zipCode, radius, businessType } = req.body;
  const origin = `${streetAddress} ${zipCode}`;
  const sicCode = sicCodes[businessType];

  const params = {
    origin: origin,
    hostedDataList: [
      {
        tableName: "mqap.ntpois",
        extraCriteria: "group_sic_code LIKE ?",
        parameters: [`${sicCode}`],
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

  if (process.env.NODE_ENV !== "production") {
    console.log(`REQUEST: ${API_URL}?origin=${origin}, radius=${radius}`);
  }

  try {
    const apiResponse = await axios.post(
      `${API_URL}?${API_KEY_NAME}=${API_KEY_VALUE}`,
      params
    );

    if (apiResponse.data.resultsCount) {
      const searchResults = apiResponse.data.searchResults.map((result) => {
        return result.fields;
      });

      res.status(200).json(searchResults);
    } else return -1;
  } catch (error) {
    console.log("Error from search handler: ", error);
    throw error;
  }
}
